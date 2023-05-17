export enum PermissionNamespace {
  auth = 'auth',
  admin = 'admin',
}

export type PermissionConfig = {
  namespace: PermissionNamespace;
  slug: string;
};
