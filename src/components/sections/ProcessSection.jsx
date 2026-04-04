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
          <div className="theme-glass-panel relative mx-auto mt-10 max-w-[62rem] rounded-[34px] p-5 sm:p-6 lg:p-8">
            <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-14 md:gap-y-14">
              {processSteps.map((step, index) => (
                <div key={step.title} className={`relative ${workflowPositionClasses[index]}`}>
                  <article className="theme-card theme-card--interactive relative flex h-full min-h-[17.5rem] flex-col rounded-[28px] px-6 py-7 text-left transition duration-300 hover:-translate-y-1 sm:px-7 sm:py-8 md:min-h-[18.5rem]">
                    <div className="flex h-full items-start gap-5">
                      <div className="theme-step-ring relative z-[1] flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
                        <div className="theme-step-badge flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col pt-1">
                        <h3 className="theme-title text-xl font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="theme-copy mt-3 text-sm leading-7">
                          {step.copy}
                        </p>

                        <div className="theme-accent-text mt-auto flex items-center gap-3 pt-6 text-sm font-medium">
                          <span className="theme-inline-accent-line h-px w-8" />
                          {index === processSteps.length - 1 ? 'Ready for rollout and growth' : 'Feeds the next stage'}
                        </div>
                      </div>
                    </div>
                  </article>

                  {index < processSteps.length - 1 ? (
                    <>
                      <div className="absolute left-1/2 top-full z-[2] flex -translate-x-1/2 flex-col items-center md:hidden">
                        <span className="theme-arrow-badge mt-2 flex h-7 w-7 items-center justify-center rounded-full ring-4 ring-white/90">
                          <Icon name="arrow-right" className="h-3.5 w-3.5 rotate-90" />
                        </span>
                      </div>

                      {index === 0 ? (
                        <span className="theme-arrow-badge absolute left-[calc(100%+1.75rem)] top-1/2 z-[3] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ring-4 ring-white/90 md:flex">
                          <Icon name="arrow-right" className="h-3.5 w-3.5" />
                        </span>
                      ) : null}

                      {index === 1 ? (
                        <span className="theme-arrow-badge absolute left-1/2 top-[calc(100%+1.75rem)] z-[3] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ring-4 ring-white/90 md:flex">
                          <Icon name="arrow-right" className="h-3.5 w-3.5 rotate-90" />
                        </span>
                      ) : null}

                      {index === 2 ? (
                        <span className="theme-arrow-badge absolute right-[calc(100%+1.75rem)] top-1/2 z-[3] hidden h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ring-4 ring-white/90 md:flex">
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
