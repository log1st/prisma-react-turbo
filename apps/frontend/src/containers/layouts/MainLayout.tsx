import { Outlet } from 'react-router-dom';
import { UiMainLayout } from '@/ui';
import { MainHeader, MainUserHeader, Logo } from '@/containers';

export function MainLayout() {
  return (
    <UiMainLayout
      logo={<Logo />}
      menu={<MainHeader />}
      side={<MainUserHeader />}
    >
      <Outlet />
    </UiMainLayout>
  );
}
