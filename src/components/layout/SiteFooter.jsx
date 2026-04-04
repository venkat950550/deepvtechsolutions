import Icon from '../common/Icon';
import { useLocation } from 'react-router-dom';
import { contactCards } from '../../data/siteData';
import ThemeToggle from '../common/ThemeToggle';

export default function SiteFooter() {
  const { pathname } = useLocation();
  const showContactBlock = pathname !== '/contact';

  return (
    <footer className="theme-footer-shell">
      {showContactBlock ? (
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h3 className="theme-muted-text text-sm font-semibold uppercase tracking-[0.2em]">Contact</h3>
            <div className="theme-copy mt-4 space-y-3 text-sm">
              {contactCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="theme-footer-link flex items-center justify-center gap-3 transition"
                >
                  <Icon name={item.icon} className="theme-footer-icon h-4 w-4 shrink-0" />
                  <span>{item.lines.join(', ')}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div
        className="border-t px-4 py-5"
        style={{ borderColor: 'rgb(var(--border-rgb) / 0.16)' }}
      >
        <div className="flex w-full flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="theme-muted-text text-sm">
            Copyright {new Date().getFullYear()} DeepVTech Solutions LLC. All rights reserved.
          </div>
          <ThemeToggle variant="footer" />
        </div>
      </div>
    </footer>
  );
}
