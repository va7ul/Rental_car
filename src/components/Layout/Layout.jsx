import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuAppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <MenuAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
