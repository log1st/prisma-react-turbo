import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './user.resolver';
import { CrudModule } from '../crud/crud.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, CrudModule, forwardRef(() => AuthModule)],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
