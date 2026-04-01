import ThemeSection from '../components/common/ThemeSection';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import ProcessSection from '../components/sections/ProcessSection';
import CTASection from '../components/sections/CTASection';

export default function AboutPage() {
  return (
    <div className="pb-20">
      <ThemeSection className="pt-2">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="About DeepVtech"
              title="A modern consulting and engineering partner focused on useful outcomes"
              copy="DeepVtech combines strategic consulting, engineering discipline, and modern product thinking to help businesses solve meaningful operational and digital challenges."
              align="center"
            />
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
            <Reveal delay={40}>
              <div className="h-full rounded-[32px] border border-sky-100 bg-white/90 p-8 text-center shadow-[0_24px_70px_-42px_rgba(14,165,233,0.28)] backdrop-blur">
                <h3 className="text-lg font-semibold text-slate-950">Mission</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600">
                  Help organizations build software and AI solutions that simplify work, improve decision-making, and create better digital experiences.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-[32px] border border-sky-100 bg-white/90 p-8 text-center shadow-[0_24px_70px_-42px_rgba(14,165,233,0.28)] backdrop-blur">
                <h3 className="text-lg font-semibold text-slate-950">Vision</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600">
                  Become a trusted technology partner for businesses that want practical innovation with strong design, engineering, and consulting discipline.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-[32px] border border-sky-100 bg-white/90 p-8 text-center shadow-[0_24px_70px_-42px_rgba(14,165,233,0.28)] backdrop-blur">
                <h3 className="text-lg font-semibold text-slate-950">Approach</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600">
                  Keep things sharp, useful, and scalable. No transformation theater, just thoughtful solutions with measurable impact.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </ThemeSection>
      <ProcessSection />
      <CTASection />
    </div>
  );
}
