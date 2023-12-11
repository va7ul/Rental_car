import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuAppBar } from '../AppBar/AppBar';
import { Footer } from '../../Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <MenuAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
