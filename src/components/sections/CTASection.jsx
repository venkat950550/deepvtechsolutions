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
              'theme-card relative max-w-4xl overflow-hidden rounded-[32px] px-8 py-10 sm:px-10 sm:py-12',
              alignLeft ? '' : 'mx-auto'
            )}
          >
            <div className="theme-gradient-bar absolute inset-x-0 top-0 h-1" />
            <div className="theme-card-glow pointer-events-none absolute inset-x-0 top-0 h-36" />
            <div className={cx('relative flex flex-col gap-6', alignLeft ? 'items-start text-left' : 'items-center text-center')}>
              <div className="theme-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
                <Icon name="sparkles" className="h-3.5 w-3.5" />
                Ready to build?
              </div>
              <h3 className="theme-title max-w-3xl text-3xl font-semibold tracking-tight lg:text-[2.25rem]">
                Turn strategy, product direction, and engineering work into something teams can actually ship.
              </h3>
              <p className="theme-copy max-w-2xl text-base leading-7">
                Bring DeepVTech in when you need sharper decisions, stronger execution, and a partner that can move from roadmap conversations into real delivery.
              </p>
              <div className={cx('flex flex-col gap-4', alignLeft ? 'items-start' : 'items-center')}>
                <Link to="/contact" className="theme-primary-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                  Contact DeepVTech
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
