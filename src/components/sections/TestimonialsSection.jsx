import { testimonials } from '../../data/siteData';
import ThemeSection from '../common/ThemeSection';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

export default function TestimonialsSection() {
  return (
    <ThemeSection className="min-h-[42rem] flex items-center">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Client confidence built through modern delivery and practical AI execution"
            copy="Teams value the blend of business awareness, engineering quality, and steady execution that keeps important initiatives moving."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.quote} delay={index * 80} className="w-full">
              <div className="theme-card theme-card--interactive group relative overflow-hidden rounded-[32px] p-6 transition duration-300 hover:-translate-y-1 sm:p-8">
                <div className="theme-gradient-bar--vertical absolute inset-y-0 left-0 w-1.5" />
                <div className="theme-hero__spot theme-hero__spot--two absolute -right-10 top-0 h-28 w-28 transition duration-300" />

                <div className="relative grid gap-6 text-center lg:grid-cols-[220px,1fr] lg:items-center lg:text-left">
                  <div className="flex flex-col items-center gap-4 lg:items-start lg:border-r lg:pr-6" style={{ borderColor: 'rgb(var(--border-accent-rgb) / 0.16)' }}>
                    <div className="theme-icon-badge flex h-14 w-14 items-center justify-center rounded-2xl">
                      <Icon name="sparkles" className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="theme-accent-text text-sm font-semibold uppercase tracking-[0.2em]">Client Voice</div>
                      <div className="theme-title mt-3 text-lg font-semibold">{item.role}</div>
                    </div>
                    <div className="theme-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium">
                      Trusted delivery feedback
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-start">
                    <p className="theme-copy text-lg leading-8 sm:text-[1.15rem]">
                      {`"${item.quote}"`}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </ThemeSection>
  );
}
