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
              <div className="group relative overflow-hidden rounded-[32px] border border-sky-100 bg-white/92 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-42px_rgba(14,165,233,0.36)] sm:p-8">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-sky-500 via-cyan-500 to-lime-500" />
                <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-cyan-200/25 blur-3xl transition duration-300 group-hover:bg-cyan-200/40" />

                <div className="relative grid gap-6 text-center lg:grid-cols-[220px,1fr] lg:items-center lg:text-left">
                  <div className="flex flex-col items-center gap-4 border-sky-100 lg:items-start lg:border-r lg:pr-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-lime-500 text-white shadow-lg shadow-sky-500/20">
                      <Icon name="sparkles" className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Client Voice</div>
                      <div className="mt-3 text-lg font-semibold text-slate-950">{item.role}</div>
                    </div>
                    <div className="inline-flex w-fit items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-slate-700">
                      Trusted delivery feedback
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-start">
                    <p className="text-lg leading-8 text-slate-700 sm:text-[1.15rem]">
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
