import { useTheme } from '../../context/ThemeContext';
import { cx } from '../../utils/cx';

export default function ThemeToggle({ className = '', variant = 'default' }) {
  const { theme, setTheme, themeOptions } = useTheme();

  return (
    <div className={cx('theme-switcher', variant === 'footer' && 'theme-switcher--footer', className)} aria-label="Color themes" role="group">
      {themeOptions.map((option) => {
        const active = option.id === theme;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setTheme(option.id)}
            className={cx('theme-switcher__option', active && 'theme-switcher__option--active')}
            aria-pressed={active}
            title={`Switch to ${option.label} theme`}
          >
            <span className={cx('theme-switcher__swatch', `theme-switcher__swatch--${option.swatch}`)} aria-hidden="true" />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
