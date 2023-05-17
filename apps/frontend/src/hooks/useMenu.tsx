import { Link, Path, useLocation } from 'react-router-dom';
import { ReactNode, useMemo } from 'react';
import { MenuProps } from 'antd';
import { filteredArray } from '@oapis/common';

type Item = {
  key: string;
  label: string;
  exact?: boolean;
  icon?: ReactNode;
  to?: Partial<Path>;
  danger?: boolean;
  onClick?(...args: any[]): void;
};

export const useMenu = (t, sourceItems: Array<Item | boolean>) => {
  const items = useMemo<MenuProps['items']>(() => (
    filteredArray(sourceItems).map((item) => ({
      key: item.key,
      label: item.to ? (
        <Link to={item.to}>{item.label}</Link>
      ) : (
        item.label
      ),
      icon: item.icon,
      danger: item.danger,
      onClick: item.onClick,
    }))
  ), [t, sourceItems]);

  const location = useLocation();

  const selectedKeys = useMemo(() => (
    filteredArray(sourceItems).filter(
      (item) => item.to && (
        item.exact
          ? location.pathname === item.to.pathname
          : location.pathname.startsWith(item.to.pathname)
      ),
    ).map((item) => item.key)
  ), [sourceItems]);

  return {
    items,
    selectedKeys,
  };
};
