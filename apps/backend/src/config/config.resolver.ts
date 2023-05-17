import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { Config } from '../gql';
import { ConfigService } from './config.service';
import { EnvironmentVariables } from './environment-variables';
import { ConfigUpdateDto } from './dto/config.update.dto';
import { AccessTokenGuard } from '../auth/guard/access-token.guard';
import { UsePermissionGuard } from '../auth/guard/permission.guard';
import { configAdminPermission } from '../role/permissions';

@UsePermissionGuard(configAdminPermission)
@UseGuards(AccessTokenGuard)
@Resolver()
export class ConfigResolver {
  @Inject()
    configService: ConfigService<EnvironmentVariables>;

  @Query(() => Config)
  config() {
    return this.configService.getCurrentConfig();
  }

  @Mutation(() => Config)
  updateConfig(
  @Args('input') data: ConfigUpdateDto,
  ) {
    return this.configService.updateConfig(data);
  }
}
