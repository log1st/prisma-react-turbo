import { useSelector } from 'react-redux';
import { To, Navigate } from 'react-router-dom';
import { PropsWithChildren, useEffect } from 'react';
import { accessTokenSelector, isAuthorizedSelector } from '@/store/slices';
import { useAuthSignOut } from '@/api';

export type AuthGuardProps = PropsWithChildren<{
  guest?: boolean;
  authorized?: boolean;
  to?: To
}>;

export function AuthGuard({
  guest,
  authorized,
  to,
  children,
}: AuthGuardProps) {
  const isAuthorized = useSelector(isAuthorizedSelector);
  const accessToken = useSelector(accessTokenSelector);
  const { signOut } = useAuthSignOut();

  useEffect(() => {
    if (!accessToken?.expiresAt) {
      return () => {};
    }

    const duration = Math.max(+new Date(accessToken.expiresAt) - Date.now(), 0);
    const timeout = setTimeout(signOut, duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [accessToken?.expiresAt]);

  if (typeof guest === 'boolean') {
    if (guest && isAuthorized) {
      return (
        <Navigate to={to} />
      );
    }
  }

  if (typeof authorized === 'boolean') {
    if (authorized && !isAuthorized) {
      return (
        <Navigate to={to} />
      );
    }
  }

  return (
    <>{children}</>
  );
}
