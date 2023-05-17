import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  @Inject()
  private prisma: PrismaService;

  getBuilder() {
    return this.prisma.user;
  }

  findById(id: User['id']) {
    return this.prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    });
  }

  findByIdWithRoles(id: User['id']) {
    return this.prisma.user.findFirstOrThrow({
      where: {
        id,
      },
      include: {
        role: {
          include: {
            permissionsOnRoles: {
              include: {
                permission: {
                  select: {
                    slug: true,
                    namespace: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  create(data: Pick<User, 'login' | 'password' | 'roleId'>) {
    return this.prisma.user.create({
      data,
    });
  }
}
