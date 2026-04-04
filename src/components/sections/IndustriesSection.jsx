import { industries } from '../../data/siteData';
import ThemeSection from '../common/ThemeSection';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

export default function IndustriesSection() {
  return (
    <ThemeSection subtle className="theme-section-frame">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Tailored solutions for business-critical environments"
            copy="Our work adapts to regulated, operationally complex, and fast-moving industries where reliability and speed both matter."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 70} className="h-full">
              <article className="theme-card theme-card--interactive group relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 transition duration-300 hover:-translate-y-1">
                <div className="theme-gradient-bar absolute inset-x-0 top-0 h-1" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <div className="theme-icon-badge flex h-14 w-14 items-center justify-center rounded-2xl">
                      <Icon name={industry.icon} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="theme-title text-xl font-semibold tracking-tight">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col text-left">
                    <p className="theme-copy mt-4 text-sm leading-7">
                      {industry.copy}
                    </p>
                    <div className="mt-auto flex justify-end pt-6">
                      <div className="theme-chip inline-flex rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
                        {industry.label}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </ThemeSection>
  );
}
