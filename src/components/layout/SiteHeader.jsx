import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BrandMark from './BrandMark';
import Icon from '../common/Icon';
import { navItems } from '../../data/siteData';
import { cx } from '../../utils/cx';

const activeClass = 'theme-nav-active';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="theme-glass-header fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="shrink-0 text-left" onClick={closeMenu}>
          <BrandMark />
        </NavLink>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                cx(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  isActive ? activeClass : 'theme-nav-idle'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="theme-primary-button ml-2 rounded-full px-5 py-2.5 text-sm font-semibold hover:scale-[1.02]"
          >
            Let's Talk
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="theme-ghost-button rounded-full p-2 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <Icon name="x" className="h-5 w-5" /> : <Icon name="menu" className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="theme-mobile-panel px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  cx(
                    'rounded-2xl px-4 py-3 text-left text-sm font-medium',
                    isActive ? activeClass : 'theme-nav-idle'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="theme-primary-button mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold"
            >
              Let's Talk
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
