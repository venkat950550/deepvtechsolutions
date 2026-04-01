import { industries } from '../../data/siteData';
import ThemeSection from '../common/ThemeSection';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

export default function IndustriesSection() {
  return (
    <ThemeSection subtle className="border-y border-slate-200/70">
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
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_20px_60px_-36px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_28px_70px_-38px_rgba(14,165,233,0.18)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500/85 via-cyan-500/85 to-lime-500/85" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0ea5e9,#22d3ee,#84cc16)] text-white shadow-lg shadow-sky-500/15">
                      <Icon name={industry.icon} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col text-left">
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {industry.copy}
                    </p>
                    <div className="mt-auto flex justify-end pt-6">
                      <div className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-700">
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
