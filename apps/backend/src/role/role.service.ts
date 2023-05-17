import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoleService {
  @Inject()
  private prisma: PrismaService;

  getBuilder() {
    return this.prisma.role;
  }
}
