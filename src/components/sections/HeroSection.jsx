import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroHighlights, trustSignals } from '../../data/siteData';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

const heroBackgroundNodes = [
  {
    x: '14%',
    y: '18%',
    tone: 'sky',
    delay: '0s',
    size: '6.8rem',
  },
  {
    x: '47%',
    y: '14%',
    tone: 'sky',
    delay: '1s',
    size: '4rem',
  },
  {
    x: '80%',
    y: '18%',
    tone: 'cyan',
    delay: '0.9s',
    size: '6.5rem',
  },
  {
    x: '10%',
    y: '49%',
    tone: 'sky',
    delay: '1.6s',
    size: '5.8rem',
  },
  {
    x: '84%',
    y: '49%',
    tone: 'lime',
    delay: '0.8s',
    size: '5.9rem',
  },
  {
    x: '22%',
    y: '77%',
    tone: 'cyan',
    delay: '1.2s',
    size: '6.2rem',
  },
  {
    x: '71%',
    y: '77%',
    tone: 'lime',
    delay: '0.4s',
    size: '5.9rem',
  },
];

const heroRoboPhrases = [
  'AI automation',
  'web platforms',
  'mobile experiences',
  'consulting expertise',
];

export default function HeroSection() {
  const [typedPhrase, setTypedPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activePhrase = heroRoboPhrases[phraseIndex];

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && typedPhrase === activePhrase) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedPhrase === '') {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % heroRoboPhrases.length);
        return;
      }

      const nextLength = typedPhrase.length + (isDeleting ? -1 : 1);
      setTypedPhrase(activePhrase.slice(0, nextLength));
    }, !typedPhrase && !isDeleting ? 380 : !isDeleting && typedPhrase === activePhrase ? 1500 : isDeleting && typedPhrase === '' ? 220 : isDeleting ? 34 : 72);

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, phraseIndex, typedPhrase]);

  return (
    <section className="theme-hero relative isolate overflow-hidden">
      <div className="theme-hero__overlay absolute inset-0" />
      <div className="theme-hero__grid absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="14" y1="18" x2="47" y2="14" stroke="var(--hero-line-1)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="47" y1="14" x2="80" y2="18" stroke="var(--hero-line-2)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="14" y1="18" x2="10" y2="49" stroke="var(--hero-line-1)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="80" y1="18" x2="84" y2="49" stroke="var(--hero-line-3)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="10" y1="49" x2="22" y2="77" stroke="var(--hero-line-2)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="84" y1="49" x2="71" y2="77" stroke="var(--hero-line-3)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="22" y1="77" x2="71" y2="77" stroke="var(--hero-line-2)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="47" y1="14" x2="22" y2="77" stroke="var(--hero-line-4)" strokeWidth="0.16" strokeDasharray="1.2 1.8" />
          <line x1="47" y1="14" x2="71" y2="77" stroke="var(--hero-line-4)" strokeWidth="0.16" strokeDasharray="1.2 1.8" />
        </svg>
        {heroBackgroundNodes.map((item, index) => (
          <div
            key={`bubble-${index}`}
            className={`hero-network-orb hero-network-orb--${item.tone} animate-float-soft`}
            style={{
              left: item.x,
              top: item.y,
              width: item.size,
              height: item.size,
              animationDelay: item.delay,
            }}
          >
            <span className="hero-network-orb__ring animate-node-ring" />
            <span className="hero-network-orb__core animate-node-core" />
            <span className="hero-network-orb__dot animate-pulse-node" />
          </div>
        ))}
      </div>
      <div className="theme-hero__spot theme-hero__spot--one absolute -left-10 top-24 h-32 w-32" />
      <div className="theme-hero__spot theme-hero__spot--two absolute right-0 top-32 h-32 w-32" />
      <div className="theme-hero__spot theme-hero__spot--three absolute bottom-[-2rem] left-[48%] h-36 w-36" />
      <div className="theme-top-line absolute inset-x-0 top-0 h-px" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
        <div className="flex min-h-[44rem] flex-col items-center justify-start gap-10 pt-10 lg:min-h-[46rem] lg:gap-12 lg:pt-14">
          <Reveal className="flex w-full justify-center">
            <div className="max-w-4xl text-center">
              <div className="theme-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                <Icon name="sparkles" className="theme-accent-text h-4 w-4" />
                AI-powered solutions and consulting services
              </div>

              <h1 className="theme-display mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
                From AI strategy to launch-ready digital products.
              </h1>

              <p className="theme-copy mx-auto mt-6 max-w-3xl text-lg leading-8">
                DeepVTech helps businesses turn AI ideas, product goals, and delivery challenges into practical solutions across consulting, web and mobile engineering, and operational automation.
              </p>

              <div className="mt-7 flex justify-center">
                <div className="hero-robo-shell" aria-hidden="true">
                  <span className="hero-robo-text">
                    {typedPhrase}
                    <span className="hero-robo-caret" />
                  </span>
                </div>
                <span className="sr-only">
                  AI automation, web platforms, mobile experiences, and consulting expertise.
                </span>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="theme-primary-button rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/services"
                  className="theme-secondary-button rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="w-full">
            <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="theme-card theme-card--interactive rounded-[28px] px-6 py-7 text-center"
                >
                  <div className="theme-icon-badge mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="theme-title mt-5 text-xl font-semibold">{item.title}</h2>
                  <p className="theme-copy mx-auto mt-3 max-w-sm text-sm leading-7">{item.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180} className="w-full">
            <div className="theme-glass-panel mx-auto max-w-6xl rounded-[30px] px-6 py-8 text-center">
              <div className="theme-accent-text text-xs font-semibold uppercase tracking-[0.26em]">
                Why teams bring in DeepVTech
              </div>
              <div className="mt-7 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {trustSignals.map((item, index) => (
                  <div
                    key={item.label}
                    className="relative px-4 text-center xl:px-6"
                  >
                    {index > 0 ? (
                      <div className="theme-divider-vertical absolute left-0 top-1 hidden h-16 w-px xl:block" />
                    ) : null}
                    <div className="theme-title text-sm font-semibold">{item.label}</div>
                    <p className="theme-copy mx-auto mt-3 max-w-xs text-sm leading-7">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
