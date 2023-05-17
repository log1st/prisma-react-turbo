import { Inject, Injectable } from '@nestjs/common';
import { graphqlFieldsToPrismaIncludeFields } from '../prisma/utils/graphqlFieldsToPrismaIncludeFields';
import { PrismaModel, PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CrudService {
  @Inject()
  private prisma: PrismaService;

  async paginate(
    entity: PrismaModel,
    {
      where, take = 10, skip = 0, ...query
    }: {
      where?: any,
      take?: number,
      skip?: any,
      [key: string]: any
    } = {},
    fields: string[] = [],
  ) {
    const records = await (this.prisma[entity] as any).findMany({
      ...query,
      where,
      ...(take ? { take, skip } : {}),
      include: graphqlFieldsToPrismaIncludeFields(fields),
    });

    const total = await (this.prisma[entity] as any).count({
      where,
    });

    return {
      records,
      take,
      skip,
      total,
    };
  }
}
