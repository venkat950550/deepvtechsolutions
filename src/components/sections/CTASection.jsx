import { Link } from 'react-router-dom';
import ThemeSection from '../common/ThemeSection';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';
import { cx } from '../../utils/cx';

export default function CTASection({ alignLeft = false }) {
  return (
    <ThemeSection>
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className={cx(
              'relative max-w-4xl overflow-hidden rounded-[32px] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_22px_70px_-38px_rgba(15,23,42,0.16)] sm:px-10 sm:py-12',
              alignLeft ? '' : 'mx-auto'
            )}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.09),transparent_60%)]" />
            <div className={cx('relative flex flex-col gap-6', alignLeft ? 'items-start text-left' : 'items-center text-center')}>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                <Icon name="sparkles" className="h-3.5 w-3.5" />
                Ready to build?
              </div>
              <h3 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 lg:text-[2.25rem]">
                Turn strategy, product direction, and engineering work into something teams can actually ship.
              </h3>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                Bring DeepVtech in when you need sharper decisions, stronger execution, and a partner that can move from roadmap conversations into real delivery.
              </p>
              <div className={cx('flex flex-col gap-4', alignLeft ? 'items-start' : 'items-center')}>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5">
                  Contact DeepVtech
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </ThemeSection>
  );
}
