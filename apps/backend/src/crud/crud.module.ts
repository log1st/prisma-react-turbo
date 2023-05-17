import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CrudService],
  exports: [CrudService],
})
export class CrudModule {}
