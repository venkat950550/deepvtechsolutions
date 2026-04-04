import { Link } from 'react-router-dom';
import ThemeSection from '../components/common/ThemeSection';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import ServicesSection from '../components/sections/ServicesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import CTASection from '../components/sections/CTASection';
import Icon from '../components/common/Icon';

const serviceHighlights = [
  {
    icon: 'brain',
    label: 'AI delivery',
    title: 'AI Services',
    points: [
      'Workflow automation',
      'Internal copilots',
      'LLM app delivery',
      'Business AI use cases',
    ],
    details: [
      'Automate repetitive business workflows',
      'Deploy copilots and internal assistants',
    ],
    copy:
      'Practical AI solutions for automation, copilots, internal assistants, document intelligence, and workflow modernization.',
    bullets: ['LLM app development', 'AI workflow automation', 'Custom business AI use cases'],
  },
  {
    icon: 'layers',
    label: 'Product delivery',
    title: 'Web & Mobile Apps',
    points: [
      'Responsive web apps',
      'Mobile-first products',
      'Frontend and API delivery',
      'Internal and customer platforms',
    ],
    details: [
      'Build modern web and mobile products',
      'Support customer and internal experiences',
    ],
    copy:
      'Modern applications built for customer experiences, internal operations, and scalable product growth across web and mobile.',
    bullets: ['Responsive web apps', 'Mobile-first product experiences', 'Frontend and API delivery'],
  },
  {
    icon: 'shield',
    label: 'Strategic advisory',
    title: 'Consulting Services',
    points: [
      'Architecture consulting',
      'Product planning',
      'Modernization roadmaps',
      'Delivery advisory',
    ],
    details: [
      'Shape architecture and modernization roadmaps',
      'Guide delivery decisions with less risk',
    ],
    copy:
      'Technology strategy, solution architecture, modernization planning, and hands-on guidance to help teams move faster with less risk.',
    bullets: ['Architecture consulting', 'Product planning', 'Delivery advisory'],
  },
];

const deliveryPoints = [
  'Business-first discovery before implementation starts',
  'Clear solution architecture with practical execution plans',
  'Fast iteration cycles for MVPs, internal tools, and enterprise platforms',
  'Support from strategy through rollout and optimization',
];

export default function ServicesPage() {
  return (
    <div className="pb-20">
      <ThemeSection className="pt-2">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="DeepVTech delivers AI services, web and mobile apps, and consulting built around real business needs"
              copy="We help organizations design, build, and scale software solutions that improve operations, modernize customer experiences, and create practical value from AI."
              align="center"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="theme-primary-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Discuss Your Project
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="theme-secondary-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Learn About DeepVTech
              </Link>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            {deliveryPoints.map((point, index) => (
              <Reveal key={point} delay={index * 70}>
                <div className="theme-card h-full rounded-[30px] px-6 py-7 text-center">
                  <div className="theme-icon-badge mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="theme-copy mx-auto mt-4 max-w-xs text-sm leading-7">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </ThemeSection>

      <ServicesSection featuredOffers={serviceHighlights} />
      <IndustriesSection />
      <CTASection />
    </div>
  );
}
