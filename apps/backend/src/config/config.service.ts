import { ConfigService as BaseService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { Config, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigUpdateDto } from './dto/config.update.dto';

@Injectable()
export class ConfigService<Type> extends BaseService<Type> {
  @Inject()
  private prisma: PrismaService;

  getBuilder() {
    return this.prisma.config;
  }

  getCurrentConfig() {
    return this.prisma.config.findFirstOrThrow({
      where: {
        active: true,
      },
    });
  }

  async updateConfig(data: ConfigUpdateDto) {
    const { id } = await this.getCurrentConfig();
    return this.prisma.config.update({
      where: {
        id,
      },
      data: {
        initialRoleId: data.initialRoleId ?? null,
      },
    });
  }

  async getField<Field extends keyof Config>(
    field: Field,
  ): Promise<Config[Field]> {
    const config = await this.getCurrentConfig();

    return config[field];
  }
}
