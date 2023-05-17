import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { fieldEncryptionMiddleware } from 'prisma-field-encryption';
import { Prisma, PrismaClient } from '@prisma/client';

export type PrismaModel = Prisma.TypeMap['meta']['modelProps'];

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$use(fieldEncryptionMiddleware());

    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
