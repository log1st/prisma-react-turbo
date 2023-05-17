import { PrismaClient } from '@prisma/client';
import * as permissionsConfigs from '../src/role/permissions';
import { authSignInPermission, PermissionConfig } from '../src/role/permissions';

const prisma = new PrismaClient();

const run = async () => {
  await prisma.permission.deleteMany();

  await prisma.permission.createMany({
    data: Object.values(permissionsConfigs).filter((e) => (
      'namespace' in e
    )) as Array<PermissionConfig>,
  });

  const permissions = await prisma.permission.findMany({
    select: {
      id: true,
    },
  });

  await prisma.role.deleteMany();

  const rootRole = await prisma.role.create({
    data: {
      slug: 'root',
      permissionsOnRoles: {
        create: permissions.map(({ id }) => ({ permissionId: id })),
      },
    },
  });

  const userRole = await prisma.role.create({
    data: {
      slug: 'user',
      permissionsOnRoles: {
        create: [{
          permission: {
            connect: {
              namespace_slug: {
                namespace: authSignInPermission.namespace,
                slug: authSignInPermission.slug,
              },
            },
          },
        }],
      },
    },
  });

  await prisma.role.create({
    data: {
      slug: 'banned',
    },
  });

  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      login: 'admin',
      password: 'password',
      role: {
        connect: {
          id: rootRole.id,
        },
      },
    },
  });

  await prisma.config.create({
    data: {
      initialRoleId: userRole.id,
      active: true,
    },
  });
};

run()
  .then(() => {
    console.log('Seeded');
  })
  .catch((e) => {
    console.error('Error', e);
  })
  .finally(() => {
    prisma.$disconnect();
    process.exit(1);
  });
