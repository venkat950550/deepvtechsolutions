import Icon from '../common/Icon';
import { useLocation } from 'react-router-dom';
import { contactCards } from '../../data/siteData';

export default function SiteFooter() {
  const { pathname } = useLocation();
  const showContactBlock = pathname !== '/contact';

  return (
    <footer className="border-t border-sky-100 bg-[linear-gradient(135deg,#ffffff_0%,#f0f9ff_58%,#f7fee7_100%)]">
      {showContactBlock ? (
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {contactCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="flex items-center justify-center gap-3 transition hover:text-sky-700"
                >
                  <Icon name={item.icon} className="h-4 w-4 shrink-0 text-sky-600" />
                  <span>{item.lines.join(', ')}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="border-t border-slate-200 px-4 py-5 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} DeepVtech Solutions LLC. All rights reserved.
      </div>
    </footer>
  );
}
