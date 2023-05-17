import { registerEnumType } from '@nestjs/graphql';

export enum ConfigScalarFieldEnum {
    id = "id",
    initialRoleId = "initialRoleId",
    createdAt = "createdAt",
    active = "active"
}


registerEnumType(ConfigScalarFieldEnum, { name: 'ConfigScalarFieldEnum', description: undefined })
