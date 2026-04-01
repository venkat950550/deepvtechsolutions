import { processSteps } from '../../data/siteData';
import ThemeSection from '../common/ThemeSection';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

const workflowPositionClasses = [
  'md:col-start-1 md:row-start-1',
  'md:col-start-2 md:row-start-1',
  'md:col-start-2 md:row-start-2',
  'md:col-start-1 md:row-start-2',
];

export default function ProcessSection() {
  return (
    <ThemeSection>
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center">
          <SectionHeading
            eyebrow="Delivery Process"
            title="A clear path from discovery to dependable delivery"
            copy="Our engagement model stays lightweight and collaborative, helping teams move quickly without sacrificing product or architectural rigor."
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto mt-10 max-w-[62rem] rounded-[34px] border border-slate-200/80 bg-white/78 p-5 shadow-[0_24px_72px_-44px_rgba(15,23,42,0.16)] backdrop-blur sm:p-6 lg:p-8">
            <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-14 md:gap-y-14">
              {processSteps.map((step, index) => (
                <div key={step.title} className={`relative ${workflowPositionClasses[index]}`}>
                  <article className="relative flex h-full min-h-[17.5rem] flex-col rounded-[28px] border border-slate-200/80 bg-white px-6 py-7 text-left shadow-[0_18px_54px_-36px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_26px_64px_-38px_rgba(14,165,233,0.18)] sm:px-7 sm:py-8 md:min-h-[18.5rem]">
                    <div className="flex h-full items-start gap-5">
                      <div className="relative z-[1] flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-sky-100 bg-[linear-gradient(135deg,rgba(14,165,233,0.10),rgba(34,211,238,0.09),rgba(132,204,22,0.10))] shadow-sm shadow-sky-500/10">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 text-sm font-semibold text-white shadow-md shadow-sky-500/20">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col pt-1">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {step.copy}
                        </p>

                        <div className="mt-auto flex items-center gap-3 pt-6 text-sm font-medium text-sky-700">
                          <span className="h-px w-8 bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500" />
                          {index === processSteps.length - 1 ? 'Ready for rollout and growth' : 'Feeds the next stage'}
                        </div>
                      </div>
                    </div>
                  </article>

                  {index < processSteps.length - 1 ? (
                    <>
                      <div className="absolute left-1/2 top-full z-[2] flex -translate-x-1/2 flex-col items-center md:hidden">
                        <span className="mt-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 text-white shadow-md shadow-sky-500/20 ring-4 ring-white/90">
                          <Icon name="arrow-right" className="h-3.5 w-3.5 rotate-90" />
                        </span>
                      </div>

                      {index === 0 ? (
                        <span className="absolute left-[calc(100%+1.75rem)] top-1/2 z-[3] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 text-white shadow-md shadow-sky-500/20 ring-4 ring-white/90 md:flex">
                          <Icon name="arrow-right" className="h-3.5 w-3.5" />
                        </span>
                      ) : null}

                      {index === 1 ? (
                        <span className="absolute left-1/2 top-[calc(100%+1.75rem)] z-[3] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 text-white shadow-md shadow-sky-500/20 ring-4 ring-white/90 md:flex">
                          <Icon name="arrow-right" className="h-3.5 w-3.5 rotate-90" />
                        </span>
                      ) : null}

                      {index === 2 ? (
                        <span className="absolute right-[calc(100%+1.75rem)] top-1/2 z-[3] hidden h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 text-white shadow-md shadow-sky-500/20 ring-4 ring-white/90 md:flex">
                          <Icon name="arrow-right" className="h-3.5 w-3.5 rotate-180" />
                        </span>
                      ) : null}
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </ThemeSection>
  );
}
