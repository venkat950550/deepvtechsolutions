import { useEffect, useMemo, useState } from 'react';
import { serviceCards } from '../../data/siteData';
import ThemeSection from '../common/ThemeSection';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

const SERVICE_CARD_WIDTH = '260px';
const SERVICE_CARD_HEIGHT = '400px';
const SERVICE_ITEM_HEIGHT = '400px';

function getCardsPerView() {
  if (typeof window === 'undefined') {
    return 3;
  }

  if (window.innerWidth >= 1024) {
    return 3;
  }

  if (window.innerWidth >= 640) {
    return 2;
  }

  return 1;
}

function chunkItems(items, size) {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function HorizontalCarouselSection({
  eyebrow,
  title,
  copy,
  items,
  renderCard,
  tone = 'light',
  stageClassName = 'h-[400px]',
  cardsPerView = 3,
}) {
  const slides = useMemo(() => chunkItems(items, cardsPerView), [cardsPerView, items]);
  const [activeSlide, setActiveSlide] = useState(0);
  const hasNavigation = slides.length > 1;
  const navigationLabel = (eyebrow || title || 'carousel').toLowerCase();

  useEffect(() => {
    setActiveSlide(0);
  }, [cardsPerView, items]);

  const goToPrevious = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="rounded-[36px] border border-slate-200/80 bg-white shadow-[0_24px_72px_-42px_rgba(15,23,42,0.16)]">
      <div className="border-b border-slate-200/80 px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
        <div className="max-w-3xl text-left">
          {eyebrow ? (
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sky-700">
              {eyebrow}
            </div>
          ) : null}
          {title ? (
            <h3 className={`${eyebrow ? 'mt-4' : ''} text-2xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]`}>
              {title}
            </h3>
          ) : null}
          {copy ? (
            <p className={`${eyebrow || title ? 'mt-4' : ''} text-sm leading-7 text-slate-600 sm:text-base`}>
              {copy}
            </p>
          ) : null}
        </div>
      </div>

      <div className={`${tone === 'tinted' ? 'bg-[linear-gradient(180deg,#f8fbff_0%,#f2fbff_56%,#fbfff5_100%)]' : 'bg-white'} p-6 sm:p-8 lg:p-10`}>
        <div className={`${stageClassName} overflow-hidden`}>
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={`${eyebrow}-slide-${slideIndex}`} className="h-full w-full shrink-0">
                <div className="flex h-full items-center justify-center gap-5">
                  {slide.map((item, itemIndex) => (
                    <div
                      key={`${eyebrow}-${slideIndex}-${itemIndex}`}
                      className="shrink-0"
                      style={{
                        width: SERVICE_CARD_WIDTH,
                        minWidth: SERVICE_CARD_WIDTH,
                        maxWidth: SERVICE_CARD_WIDTH,
                        height: SERVICE_ITEM_HEIGHT,
                        minHeight: SERVICE_ITEM_HEIGHT,
                        maxHeight: SERVICE_ITEM_HEIGHT,
                      }}
                    >
                      {renderCard(item, slideIndex * cardsPerView + itemIndex)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {hasNavigation ? (
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label={`Previous ${navigationLabel} slide`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-sky-200 hover:text-sky-700"
            >
              <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label={`Next ${navigationLabel} slide`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 text-white shadow-md shadow-sky-500/20 transition hover:-translate-y-0.5"
            >
              <Icon name="arrow-right" className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function ServicesSection({ featuredOffers = [] }) {
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const combinedCards = useMemo(
    () => [
      ...featuredOffers.map((offer) => ({
        ...offer,
        cardType: 'Primary Offer',
        iconVariant: 'solid',
      })),
      ...serviceCards.map((card) => ({
        ...card,
        cardType: 'Supporting Capability',
        iconVariant: 'soft',
      })),
    ],
    [featuredOffers]
  );

  const titleClampStyle = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderCompactCard = (item) => {
    const points = (item.points ?? [...(item.details ?? []), ...(item.bullets ?? [])]).slice(0, 4);

    return (
      <article
        key={`${item.cardType}-${item.title}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-5 text-left shadow-[0_20px_60px_-36px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_28px_70px_-38px_rgba(14,165,233,0.18)]"
        style={{
          width: SERVICE_CARD_WIDTH,
          minWidth: SERVICE_CARD_WIDTH,
          maxWidth: SERVICE_CARD_WIDTH,
          height: SERVICE_CARD_HEIGHT,
          minHeight: SERVICE_CARD_HEIGHT,
          maxHeight: SERVICE_CARD_HEIGHT,
        }}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500/90 via-cyan-500/90 to-lime-500/90" />

        <div className="flex flex-col">
          <h3 className="text-center text-lg font-semibold leading-6 tracking-tight text-slate-950" style={titleClampStyle}>
            {item.title}
          </h3>

          <div
            className={`mx-auto mt-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] ${
              item.iconVariant === 'solid'
                ? 'bg-gradient-to-br from-sky-500 via-cyan-500 to-lime-500 text-white shadow-lg shadow-sky-500/20'
                : 'bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(34,211,238,0.10),rgba(132,204,22,0.14))] text-sky-700'
            }`}
          >
            <Icon name={item.icon} className="h-9 w-9" />
          </div>
        </div>

        <div className="mt-6 flex-1 rounded-[22px] border border-slate-100 bg-slate-50/80 p-4">
          <div className="space-y-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3 text-sm leading-5 text-slate-700">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-700">
            {item.cardType}
          </div>
        </div>
      </article>
    );
  };

  return (
    <ThemeSection subtle className="border-y border-slate-200/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center">
          <SectionHeading
            eyebrow="Solutions & Offers"
            title="Service lines and delivery capabilities built as one connected offering"
            copy="DeepVtech supports strategy, product delivery, AI implementation, and engineering execution through a single integrated service model rather than disconnected offerings."
            align="center"
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10">
            <HorizontalCarouselSection
              eyebrow=""
              title=""
              copy="Browse the core services DeepVtech leads with alongside the supporting capabilities that extend delivery, modernization, quality, and advisory support."
              items={combinedCards}
              tone="tinted"
              stageClassName="h-[400px]"
              cardsPerView={cardsPerView}
              renderCard={(card) => renderCompactCard(card)}
            />
          </div>
        </Reveal>
      </div>
    </ThemeSection>
  );
}
