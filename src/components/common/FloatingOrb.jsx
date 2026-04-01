import { cx } from '../../utils/cx';

export default function FloatingOrb({ className = '', delay = 0 }) {
  return <div className={cx('pointer-events-none absolute hidden rounded-full blur-3xl opacity-55 animate-float-soft lg:block', className)} style={{ animationDelay: `${delay}ms` }} />;
}
