import { registerEnumType } from '@nestjs/graphql';

export enum PermissionsOnRolesOrderByRelevanceFieldEnum {
    permissionId = "permissionId",
    roleId = "roleId"
}


registerEnumType(PermissionsOnRolesOrderByRelevanceFieldEnum, { name: 'PermissionsOnRolesOrderByRelevanceFieldEnum', description: undefined })
