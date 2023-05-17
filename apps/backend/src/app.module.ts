import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  ApolloServerPluginLandingPageLocalDefault,
} from '@apollo/server/plugin/landingPage/default';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ValidationModule } from './validation/validation.module';
import { RoleModule } from './role/role.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './gql/schema.gql'),
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault(),
      ],
    }),
    PrismaModule,
    AuthModule,
    ValidationModule,
    RoleModule,
    ConfigModule,
  ],
  providers: [],
})
export class AppModule {}
