import { contracts } from '@oapis/contracts';
import { Path } from 'react-router-dom';

type Route = Partial<Path>;

export const getIndexRoute = (): Route => ({
  pathname: '/',
});

export const getAuthRoute = (): Route => ({
  pathname: '/auth',
});

export const getAuthSignInRoute = (): Route => ({
  pathname: '/auth/sign-in',
});

export const getAuthSignUpRoute = (): Route => ({
  pathname: '/auth/sign-up',
});

export const getAdminRoute = (): Route => ({
  pathname: '/admin',
});

export const getAdminConfigRoute = (): Route => ({
  pathname: '/admin/config',
});

export const getAdminRolesRoute = (): Route => ({
  pathname: '/admin/roles',
});

export const getAdminRoleRoute = (role: contracts.Role): Route => ({
  pathname: '/admin/roles',
  hash: role.id,
});

export const getAdminUsersRoute = (): Route => ({
  pathname: '/admin/users',
});

export const getAdminEndpointsRoute = (): Route => ({
  pathname: '/admin/endpoints',
});

export const getAdminTransactionsRoute = (): Route => ({
  pathname: '/admin/transactions',
});

export const getAdminWalletsRoute = (): Route => ({
  pathname: '/admin/wallets',
});

export const getProfileRoute = (): Route => ({
  pathname: '/profile',
});
