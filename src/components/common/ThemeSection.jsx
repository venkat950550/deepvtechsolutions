import { cx } from '../../utils/cx';

export default function ThemeSection({ children, className = '', subtle = false }) {
  return (
    <section
      className={cx(
        'relative overflow-hidden',
        subtle
          ? 'bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_58%,#f9fdf3_100%)]'
          : 'bg-[linear-gradient(180deg,#f8fbff_0%,#f4fbff_54%,#fbfff5_100%)]',
        className
      )}
    >
      <div
        className={cx(
          'pointer-events-none absolute inset-0',
          subtle
            ? 'bg-[radial-gradient(circle_at_18%_16%,rgba(14,165,233,0.05),transparent_26%),radial-gradient(circle_at_82%_84%,rgba(132,204,22,0.05),transparent_22%)]'
            : 'bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.08),transparent_24%),radial-gradient(circle_at_84%_20%,rgba(34,211,238,0.07),transparent_22%),radial-gradient(circle_at_76%_84%,rgba(132,204,22,0.06),transparent_24%)]'
        )}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />
      <div className="relative">{children}</div>
    </section>
  );
}
