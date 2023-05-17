import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UniqueRule } from './contstraints/unique.rule';
import { ExistsRule } from './contstraints/exists.rule';

@Module({
  providers: [
    PrismaService,
    UniqueRule,
    ExistsRule,
  ],
  exports: [
    PrismaService,
    UniqueRule,
    ExistsRule,
  ],
})
export class PrismaModule {}
