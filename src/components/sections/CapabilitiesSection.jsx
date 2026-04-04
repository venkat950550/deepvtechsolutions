import { capabilityTracks, engagementTags } from '../../data/siteData';
import ThemeSection from '../common/ThemeSection';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

export default function CapabilitiesSection() {
  return (
    <ThemeSection subtle className="theme-section-frame">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How We Help"
            title="A practical partner for strategy, product, and delivery"
            copy="DeepVTech helps organizations move from early direction to reliable execution with a blend of consulting, product thinking, and hands-on engineering."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
          {capabilityTracks.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="theme-card theme-card--interactive h-full rounded-[32px] p-7 text-center transition duration-300 hover:-translate-y-1">
                <div className="theme-icon-badge mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="theme-title mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="theme-copy mx-auto mt-3 max-w-sm text-sm leading-7">{item.copy}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {item.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="theme-chip rounded-full px-3 py-1.5 text-xs font-medium"
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
          <div className="theme-glass-panel mx-auto mt-8 max-w-5xl rounded-[32px] px-6 py-8 text-center sm:px-8">
            <div className="theme-accent-text text-xs font-semibold uppercase tracking-[0.24em]">Common Engagements</div>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {engagementTags.map((tag) => (
                <span
                  key={tag}
                  className="theme-chip theme-chip--gradient rounded-full px-4 py-2 text-sm font-medium"
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
