import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BrandMark from './BrandMark';
import Icon from '../common/Icon';
import { navItems } from '../../data/siteData';
import { cx } from '../../utils/cx';

const activeClass = 'bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 text-white shadow-lg shadow-sky-500/20';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="shrink-0 text-left" onClick={closeMenu}>
          <BrandMark />
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                cx(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  isActive ? activeClass : 'text-slate-600 hover:bg-sky-50 hover:text-slate-900'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
          >
            Let's Talk
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <Icon name="x" className="h-5 w-5" /> : <Icon name="menu" className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  cx(
                    'rounded-2xl px-4 py-3 text-left text-sm font-medium',
                    isActive ? activeClass : 'bg-slate-100 text-slate-700'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20"
            >
              Let's Talk
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
