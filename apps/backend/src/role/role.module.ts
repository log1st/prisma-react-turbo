import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RoleResolver } from './role.resolver';
import { CrudModule } from '../crud/crud.module';
import { RoleService } from './role.service';
import { PermissionService } from './permission.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, CrudModule, AuthModule],
  providers: [RoleResolver, RoleService, PermissionService],
  exports: [RoleService, PermissionService],
})
export class RoleModule {}
