import { createBrowserRouter, Outlet } from 'react-router-dom';
import { contracts } from '@oapis/contracts';
import {
  App, AuthLayout, AuthGuard, MainLayout, AdminLayout, PermissionGuard,
} from '@/containers';
import { AuthSignInPage } from '@/pages/auth/sign-in';
import { IndexPage } from '@/pages';
import { AuthSignUpPage } from '@/pages/auth/sign-up';
import { getAdminRoute, getAuthRoute, getIndexRoute } from './getRoute';
import { AdminIndexPage } from '@/pages/admin';
import { AdminRolesPage } from '@/pages/admin/roles';
import { ErrorPage } from '@/pages/error';
import { AdminUsersPage } from '@/pages/admin/users';
import { AdminConfigPage } from '@/pages/admin/config';

export * from './getRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      {
        path: 'auth',
        element: (
          <AuthGuard guest to={getIndexRoute()}>
            <AuthLayout />
          </AuthGuard>
        ),
        children: [
          {
            path: 'sign-in',
            element: <AuthSignInPage />,
          },
          {
            path: 'sign-up',
            element: <AuthSignUpPage />,
          },
        ],
      },
      {
        path: '',
        element: (
          <AuthGuard authorized to={getAuthRoute()}>
            <MainLayout />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <IndexPage />,
          },
          {
            path: 'admin',
            element: (
              <PermissionGuard permission={contracts.adminPermission}>
                <AdminLayout />
              </PermissionGuard>
            ),
            children: [
              {
                path: '',
                element: (
                  <PermissionGuard
                    permission={contracts.dashboardAdminPermission}
                    to={getIndexRoute()}
                  >
                    <AdminIndexPage />
                  </PermissionGuard>
                ),
              },
              {
                path: 'config',
                element: (
                  <PermissionGuard
                    permission={contracts.configAdminPermission}
                    to={getAdminRoute()}
                  >
                    <AdminConfigPage />
                  </PermissionGuard>
                ),
              },
              {
                path: 'roles',
                element: (
                  <PermissionGuard
                    permission={contracts.rolesAdminPermission}
                    to={getAdminRoute()}
                  >
                    <AdminRolesPage />
                  </PermissionGuard>
                ),
              },
              {
                path: 'users',
                element: (
                  <PermissionGuard
                    permission={contracts.usersAdminPermission}
                    to={getAdminRoute()}
                  >
                    <AdminUsersPage />
                  </PermissionGuard>
                ),
              },
              {
                path: 'endpoints',
                element: (
                  <PermissionGuard
                    permission={contracts.endpointsAdminPermission}
                    to={getAdminRoute()}
                  >
                    <div>Endpoints</div>
                  </PermissionGuard>
                ),
              },
              {
                path: 'transactions',
                element: (
                  <PermissionGuard
                    permission={contracts.transactionsAdminPermission}
                    to={getAdminRoute()}
                  >
                    <div>Transactions</div>
                  </PermissionGuard>
                ),
              },
              {
                path: 'wallets',
                element: (
                  <PermissionGuard
                    permission={contracts.walletsAdminPermission}
                    to={getAdminRoute()}
                  >
                    <div>Wallets</div>
                  </PermissionGuard>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);
