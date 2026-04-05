import Icon from './Icon';
import { useTheme } from '../../context/ThemeContext';
import { cx } from '../../utils/cx';

const modes = [
  { id: 'light', label: 'Light', icon: 'sun' },
  { id: 'dark', label: 'Dark', icon: 'moon' },
];

export default function ColorModeToggle({ className = '' }) {
  const { colorMode, setColorMode } = useTheme();

  return (
    <div className={cx('theme-mode-toggle', className)} aria-label="Color mode" role="group">
      {modes.map((mode) => {
        const active = mode.id === colorMode;

        return (
          <button
            key={mode.id}
            type="button"
            onClick={() => setColorMode(mode.id)}
            className={cx('theme-mode-toggle__button', active && 'theme-mode-toggle__button--active')}
            aria-pressed={active}
            title={`Switch to ${mode.label.toLowerCase()} mode`}
          >
            <Icon name={mode.icon} className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
