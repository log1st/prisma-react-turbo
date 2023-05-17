import { registerEnumType } from '@nestjs/graphql';

export enum PermissionsOnRolesScalarFieldEnum {
    permissionId = "permissionId",
    roleId = "roleId"
}


registerEnumType(PermissionsOnRolesScalarFieldEnum, { name: 'PermissionsOnRolesScalarFieldEnum', description: undefined })
