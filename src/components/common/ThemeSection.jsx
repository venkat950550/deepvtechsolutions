import { cx } from '../../utils/cx';

export default function ThemeSection({ children, className = '', subtle = false }) {
  return (
    <section
      className={cx(
        'relative overflow-hidden',
        subtle ? 'theme-section theme-section--subtle' : 'theme-section',
        className
      )}
    >
      <div
        className={cx(
          'pointer-events-none absolute inset-0',
          subtle ? 'theme-section__overlay theme-section__overlay--subtle' : 'theme-section__overlay'
        )}
      />
      <div className="theme-divider-top pointer-events-none absolute inset-x-0 top-0 h-px" />
      <div className="theme-divider-bottom pointer-events-none absolute inset-x-0 bottom-0 h-px" />
      <div className="relative">{children}</div>
    </section>
  );
}
