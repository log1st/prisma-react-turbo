import { registerEnumType } from '@nestjs/graphql';

export enum ConfigOrderByRelevanceFieldEnum {
    id = "id",
    initialRoleId = "initialRoleId"
}


registerEnumType(ConfigOrderByRelevanceFieldEnum, { name: 'ConfigOrderByRelevanceFieldEnum', description: undefined })
