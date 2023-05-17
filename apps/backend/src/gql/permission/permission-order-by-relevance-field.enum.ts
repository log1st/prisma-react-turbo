import { registerEnumType } from '@nestjs/graphql';

export enum PermissionOrderByRelevanceFieldEnum {
    id = "id",
    namespace = "namespace",
    slug = "slug"
}


registerEnumType(PermissionOrderByRelevanceFieldEnum, { name: 'PermissionOrderByRelevanceFieldEnum', description: undefined })
