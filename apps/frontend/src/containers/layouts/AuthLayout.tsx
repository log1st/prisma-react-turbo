import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UiCenterLayout } from '@/ui';
import { getAuthSignInRoute } from '@/router';

export function AuthLayout() {
  const location = useLocation();

  if (location.pathname === '/auth') {
    return (
      <Navigate to={getAuthSignInRoute()} />
    );
  }

  return (
    <UiCenterLayout>
      <Outlet />
    </UiCenterLayout>
  );
}
