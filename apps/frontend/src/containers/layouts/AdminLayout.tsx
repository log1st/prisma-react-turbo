import { Outlet } from 'react-router-dom';
import { useToggle } from 'usehooks-ts';
import { storage } from '@oapis/common';
import { useEffect } from 'react';
import { AdminSidebar } from '@/containers';
import { UiAdminLayout } from '@/ui';

export function AdminLayout() {
  const [collapsed,, onCollapse] = useToggle(storage.getItem('admin-collapsed', false));
  useEffect(() => {
    storage.setItem('admin-collapsed', collapsed);
  }, [collapsed]);

  return (
    <UiAdminLayout
      onCollapse={onCollapse}
      collapsed={collapsed}
      sider={<AdminSidebar />}
    >
      <Outlet />
    </UiAdminLayout>
  );
}
