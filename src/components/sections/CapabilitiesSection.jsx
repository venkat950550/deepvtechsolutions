import { capabilityTracks, engagementTags } from '../../data/siteData';
import ThemeSection from '../common/ThemeSection';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

export default function CapabilitiesSection() {
  return (
    <ThemeSection subtle className="border-y border-sky-100">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How We Help"
            title="A practical partner for strategy, product, and delivery"
            copy="DeepVtech helps organizations move from early direction to reliable execution with a blend of consulting, product thinking, and hands-on engineering."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
          {capabilityTracks.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="h-full rounded-[32px] border border-sky-100 bg-white/92 p-7 text-center shadow-[0_24px_70px_-42px_rgba(14,165,233,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_85px_-42px_rgba(14,165,233,0.34)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-lime-500 text-white shadow-lg shadow-sky-500/20">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600">{item.copy}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {item.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-sky-100 bg-sky-50/75 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mx-auto mt-8 max-w-5xl rounded-[32px] border border-sky-100 bg-white/88 px-6 py-8 text-center shadow-[0_24px_70px_-46px_rgba(14,165,233,0.3)] backdrop-blur sm:px-8">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Common Engagements</div>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {engagementTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-100 bg-gradient-to-r from-white to-sky-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </ThemeSection>
  );
}
