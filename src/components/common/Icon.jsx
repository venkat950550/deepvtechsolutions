export default function Icon({ name, className = 'h-5 w-5' }) {
  const common = {
    viewBox: '0 0 24 24',
    className,
    'aria-hidden': true,
    style: {
      display: 'block',
      overflow: 'visible',
    },
  };
  const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  const tone = { fill: 'currentColor', fillOpacity: '0.16' };
  const toneStrong = { fill: 'currentColor', fillOpacity: '0.24' };
  const toneSoft = { fill: 'currentColor', fillOpacity: '0.1' };
  const frameAdjustments = {
    sparkles: { scale: 0.94, dy: 0.1 },
    brain: { scale: 0.95, dy: 0.2 },
    layers: { scale: 0.96, dy: 0.12 },
    cloud: { scale: 0.95, dy: -0.18 },
    chart: { scale: 0.94, dy: -0.08 },
    gauge: { scale: 0.94, dy: -0.1 },
    shield: { scale: 0.95, dy: 0.08 },
    cpu: { scale: 0.94, dy: 0.08 },
    mail: { scale: 0.95, dy: 0.04 },
    'map-pin': { scale: 0.93, dy: -0.04 },
    phone: { scale: 0.95, dy: 0.02 },
    'arrow-right': { scale: 0.94, dx: -0.2 },
    sun: { scale: 0.94 },
    moon: { scale: 0.95, dx: -0.06 },
  };
  const renderIcon = (iconName, children) => {
    const { dx = 0, dy = 0, scale = 1 } = frameAdjustments[iconName] ?? {};
    const transform =
      dx || dy || scale !== 1
        ? `translate(${dx} ${dy}) translate(12 12) scale(${scale}) translate(-12 -12)`
        : undefined;

    return (
      <svg {...common}>
        {transform ? <g transform={transform}>{children}</g> : children}
      </svg>
    );
  };

  switch (name) {
    case 'sparkles':
      return renderIcon(
        'sparkles',
        <>
          <path {...toneStrong} d="M12 3.5 13.9 8.1 18.5 10 13.9 11.9 12 16.5 10.1 11.9 5.5 10 10.1 8.1 12 3.5Z" />
          <path {...stroke} d="M12 4.5 13.6 8.4 17.5 10 13.6 11.6 12 15.5 10.4 11.6 6.5 10 10.4 8.4 12 4.5Z" />
          <path {...tone} d="M5 13.6 5.9 16 8.3 17 5.9 18 5 20.4 4.1 18 1.7 17 4.1 16 5 13.6Z" />
          <path {...tone} d="M19 13.6 19.9 16 22.3 17 19.9 18 19 20.4 18.1 18 15.7 17 18.1 16 19 13.6Z" />
        </>
      );
    case 'brain':
      return renderIcon(
        'brain',
        <>
          <path {...tone} d="M9.2 4.2c-2 0-3.7 1.6-3.7 3.7v.6A3.2 3.2 0 0 0 5 14.7a3.9 3.9 0 0 0 6.1 3 4.4 4.4 0 0 0 7-3.6 3.3 3.3 0 0 0-.2-6.1V8A3.8 3.8 0 0 0 12 4.7a3.8 3.8 0 0 0-2.8-.5Z" />
          <path {...stroke} d="M9.2 4.3A3.7 3.7 0 0 0 5.5 8v.6A3.2 3.2 0 0 0 5 14.7a3.9 3.9 0 0 0 6.1 3 4.4 4.4 0 0 0 7-3.6 3.3 3.3 0 0 0-.2-6.1V8A3.8 3.8 0 0 0 12 4.7" />
          <path {...stroke} d="M12 6.8v10.4M9.1 8.5v6.8M14.9 8.6v5.8M6.8 11.2h2.3M14.9 11.8h2.2" />
          <circle {...toneStrong} cx="12" cy="12" r="1.15" />
        </>
      );
    case 'layers':
      return renderIcon(
        'layers',
        <>
          <path {...toneSoft} d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
          <path {...stroke} d="m12 4 7 3.9L12 11.8 5 7.9 12 4Z" />
          <path {...tone} d="m5.5 11.8 6.5 3.6 6.5-3.6" />
          <path {...stroke} d="m5 12.3 7 3.9 7-3.9M5 16.2l7 3.8 7-3.8" />
        </>
      );
    case 'cloud':
      return renderIcon(
        'cloud',
        <>
          <path {...tone} d="M8 18.5A4.4 4.4 0 0 1 8.8 10a5.4 5.4 0 0 1 10.5 1.1 3.7 3.7 0 0 1-.5 7.4H8Z" />
          <path {...stroke} d="M8 18.3A4.3 4.3 0 1 1 8.8 10a5.4 5.4 0 0 1 10.5 1.1 3.7 3.7 0 0 1-.5 7.4H8Z" />
        </>
      );
    case 'chart':
      return renderIcon(
        'chart',
        <>
          <path {...stroke} d="M4 19.25h16" />
          <rect {...tone} x="5.5" y="11" width="3" height="6.5" rx="1.2" />
          <rect {...tone} x="10.5" y="7.5" width="3" height="10" rx="1.2" />
          <rect {...tone} x="15.5" y="9.5" width="3" height="8" rx="1.2" />
          <path {...stroke} d="M7 16.9v-5.4M12 16.9V8M17 16.9V10" />
          <path {...stroke} d="m6 9.2 3.1-2.1 3 1.4 4.9-3.5" />
        </>
      );
    case 'gauge':
      return renderIcon(
        'gauge',
        <>
          <path {...tone} d="M5.2 16a6.8 6.8 0 0 1 13.6 0H5.2Z" />
          <path {...stroke} d="M4.8 16a7.2 7.2 0 1 1 14.4 0" />
          <circle {...toneStrong} cx="12" cy="12" r="1.5" />
          <path {...stroke} d="m12 12 4.2-2.5M12 12l-1.4 3.6" />
        </>
      );
    case 'shield':
      return renderIcon(
        'shield',
        <>
          <path {...tone} d="M12 3.2 18.9 6v5.1c0 4.2-2.5 7.5-6.9 9.9C7.6 18.6 5.1 15.3 5.1 11.1V6l6.9-2.8Z" />
          <path {...stroke} d="M12 3.3 18.8 6v5.1c0 4.2-2.5 7.5-6.8 9.8-4.3-2.3-6.8-5.6-6.8-9.8V6L12 3.3Z" />
          <path {...stroke} d="m9.2 12.2 1.9 1.9 4-4.6" />
        </>
      );
    case 'cpu':
      return renderIcon(
        'cpu',
        <>
          <rect {...tone} x="5.6" y="5.6" width="12.8" height="12.8" rx="3.2" />
          <rect {...stroke} x="6.5" y="6.5" width="11" height="11" rx="2.5" />
          <rect {...toneStrong} x="9.6" y="9.6" width="4.8" height="4.8" rx="1.2" />
          <rect {...stroke} x="9.8" y="9.8" width="4.4" height="4.4" rx="1" />
          <path {...stroke} d="M9 3v2.2M15 3v2.2M9 18.8V21M15 18.8V21M3 9h2.2M3 15h2.2M18.8 9H21M18.8 15H21" />
        </>
      );
    case 'mail':
      return renderIcon(
        'mail',
        <>
          <rect {...tone} x="4.5" y="6" width="15" height="12" rx="2.4" />
          <rect {...stroke} x="4.8" y="6.5" width="14.4" height="11" rx="2.1" />
          <path {...stroke} d="m5.5 8 6.5 5 6.5-5" />
          <path {...stroke} d="m5.6 17 4.8-4M18.4 17l-4.8-4" />
        </>
      );
    case 'map-pin':
      return renderIcon(
        'map-pin',
        <>
          <path {...tone} d="M12 20.8s5.6-5.1 5.6-10.6a5.6 5.6 0 1 0-11.2 0c0 5.5 5.6 10.6 5.6 10.6Z" />
          <path {...stroke} d="M12 20.5s5.4-4.9 5.4-10.3a5.4 5.4 0 1 0-10.8 0C6.6 15.6 12 20.5 12 20.5Z" />
          <circle {...toneStrong} cx="12" cy="10.1" r="2.2" />
          <circle {...stroke} cx="12" cy="10.1" r="1.9" />
        </>
      );
    case 'phone':
      return renderIcon(
        'phone',
        <>
          <path {...tone} d="m8 4.7 2.2 1.1c.7.3 1 1.1.8 1.8l-.7 2.1c-.1.4 0 .8.3 1.1l2.8 2.8c.3.3.7.4 1.1.3l2.1-.7c.7-.2 1.5.1 1.8.8l1.1 2.2c.3.7.2 1.5-.4 2l-1 1c-.8.8-2 1.2-3.2 1A17.4 17.4 0 0 1 4.8 8.9c-.2-1.2.2-2.4 1-3.2l1-1c.5-.6 1.3-.7 2-.4Z" />
          <path {...stroke} d="m8 4.7 2.2 1.1c.7.3 1 1.1.8 1.8l-.7 2.1c-.1.4 0 .8.3 1.1l2.8 2.8c.3.3.7.4 1.1.3l2.1-.7c.7-.2 1.5.1 1.8.8l1.1 2.2c.3.7.2 1.5-.4 2l-1 1c-.8.8-2 1.2-3.2 1A17.4 17.4 0 0 1 4.8 8.9c-.2-1.2.2-2.4 1-3.2l1-1c.5-.6 1.3-.7 2-.4Z" />
        </>
      );
    case 'menu':
      return renderIcon(
        'menu',
        <>
          <path {...stroke} d="M5 7.5h14M7.5 12h11.5M5 16.5h14" />
        </>
      );
    case 'x':
      return renderIcon(
        'x',
        <>
          <path {...stroke} d="m7 7 10 10M17 7 7 17" />
        </>
      );
    case 'arrow-right':
      return renderIcon(
        'arrow-right',
        <>
          <path {...stroke} d="M5 12h12.5" />
          <path {...toneStrong} d="m13.8 6.7 5.2 5.3-5.2 5.3z" />
          <path {...stroke} d="m13.5 6.8 5 5.2-5 5.2" />
        </>
      );
    case 'sun':
      return renderIcon(
        'sun',
        <>
          <circle {...toneStrong} cx="12" cy="12" r="4.2" />
          <circle {...stroke} cx="12" cy="12" r="3.8" />
          <path {...stroke} d="M12 2.8v2.4M12 18.8v2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M2.8 12h2.4M18.8 12h2.4M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7" />
        </>
      );
    case 'moon':
      return renderIcon(
        'moon',
        <>
          <path {...tone} d="M18.8 14.1A7 7 0 1 1 10 5.2a6 6 0 1 0 8.8 8.9Z" />
          <path {...stroke} d="M19 14.2A7.8 7.8 0 1 1 9.8 4 6.4 6.4 0 0 0 19 14.2Z" />
        </>
      );
    default:
      return null;
  }
}
