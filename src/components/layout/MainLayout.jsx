import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_45%,#f7fee7_100%)] text-slate-900">
      <SiteHeader />
      <main className="pt-24 sm:pt-28">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
