import Icon from './Icon';
import { cx } from '../../utils/cx';

export default function SectionHeading({ eyebrow, title, copy, tone = 'light', align = 'center' }) {
  const dark = tone === 'dark';
  const centered = align === 'center';

  return (
    <div className={cx('max-w-3xl', centered && 'mx-auto text-center')}>
      <div
        className={cx(
          'mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] shadow-sm',
          centered && 'mx-auto',
          dark ? 'theme-eyebrow theme-eyebrow--dark' : 'theme-eyebrow'
        )}
      >
        <Icon name="sparkles" className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className={cx('text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]', dark ? 'text-white' : 'theme-title')}>
        {title}
      </h2>
      <p className={cx('mt-4 text-base leading-7 sm:text-lg', dark ? 'text-white/75' : 'theme-copy')}>{copy}</p>
    </div>
  );
}
