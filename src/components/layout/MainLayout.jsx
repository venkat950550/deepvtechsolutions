import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function MainLayout() {
  return (
    <div className="theme-shell">
      <SiteHeader />
      <main className="pt-24 sm:pt-28">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
