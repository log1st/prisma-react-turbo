import { registerEnumType } from '@nestjs/graphql';

export enum RoleOrderByRelevanceFieldEnum {
    id = "id",
    slug = "slug"
}


registerEnumType(RoleOrderByRelevanceFieldEnum, { name: 'RoleOrderByRelevanceFieldEnum', description: undefined })
