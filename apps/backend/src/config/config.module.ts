import { ConfigModule as BaseModule } from '@nestjs/config';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigResolver } from './config.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  providers: [ConfigService, ConfigResolver],
  exports: [ConfigService],
})
export class ConfigModule extends BaseModule {}
