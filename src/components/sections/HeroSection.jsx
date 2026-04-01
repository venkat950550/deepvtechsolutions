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
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#f2fbff_55%,#fbfff5_100%)] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.05),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(6,182,212,0.05),transparent_16%),radial-gradient(circle_at_76%_82%,rgba(132,204,22,0.04),transparent_16%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(14,165,233,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] [background-size:76px_76px]" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="14" y1="18" x2="47" y2="14" stroke="rgba(14,165,233,0.18)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="47" y1="14" x2="80" y2="18" stroke="rgba(6,182,212,0.18)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="14" y1="18" x2="10" y2="49" stroke="rgba(14,165,233,0.16)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="80" y1="18" x2="84" y2="49" stroke="rgba(132,204,22,0.16)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="10" y1="49" x2="22" y2="77" stroke="rgba(6,182,212,0.16)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="84" y1="49" x2="71" y2="77" stroke="rgba(132,204,22,0.16)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="22" y1="77" x2="71" y2="77" stroke="rgba(34,211,238,0.14)" strokeWidth="0.18" strokeDasharray="1.4 1.6" />
          <line x1="47" y1="14" x2="22" y2="77" stroke="rgba(14,165,233,0.12)" strokeWidth="0.16" strokeDasharray="1.2 1.8" />
          <line x1="47" y1="14" x2="71" y2="77" stroke="rgba(132,204,22,0.12)" strokeWidth="0.16" strokeDasharray="1.2 1.8" />
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
      <div className="absolute -left-10 top-24 h-32 w-32 rounded-full bg-sky-300/7 blur-3xl" />
      <div className="absolute right-0 top-32 h-32 w-32 rounded-full bg-cyan-300/6 blur-3xl" />
      <div className="absolute bottom-[-2rem] left-[48%] h-36 w-36 rounded-full bg-lime-300/6 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
        <div className="flex min-h-[44rem] flex-col items-center justify-start gap-10 pt-10 lg:min-h-[46rem] lg:gap-12 lg:pt-14">
          <Reveal className="flex w-full justify-center">
            <div className="max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/85 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur">
                <Icon name="sparkles" className="h-4 w-4 text-cyan-500" />
                AI-powered solutions and consulting services
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
                From AI strategy to launch-ready digital products.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                DeepVtech helps businesses turn AI ideas, product goals, and delivery challenges into practical solutions across consulting, web and mobile engineering, and operational automation.
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
                  className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/services"
                  className="rounded-full border border-sky-200 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:bg-white"
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
                  className="rounded-[28px] border border-slate-200/80 bg-white px-6 py-7 text-center shadow-[0_20px_60px_-40px_rgba(15,23,42,0.16)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-lime-500 text-white shadow-lg shadow-sky-500/20">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600">{item.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180} className="w-full">
            <div className="mx-auto max-w-6xl rounded-[30px] border border-white/70 bg-white/70 px-6 py-8 text-center shadow-[0_18px_55px_-38px_rgba(15,23,42,0.14)] backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-700">
                Why teams bring in DeepVtech
              </div>
              <div className="mt-7 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {trustSignals.map((item, index) => (
                  <div
                    key={item.label}
                    className="relative px-4 text-center xl:px-6"
                  >
                    {index > 0 ? (
                      <div className="absolute left-0 top-1 hidden h-16 w-px bg-gradient-to-b from-transparent via-sky-200 to-transparent xl:block" />
                    ) : null}
                    <div className="text-sm font-semibold text-slate-950">{item.label}</div>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-600">
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
