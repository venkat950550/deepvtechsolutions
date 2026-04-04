import auroraLogoSrc from '../../assets/deepvtech-logo.svg';
import prismLogoSrc from '../../assets/deepvtech-logo-prism.svg';
import vertexLogoSrc from '../../assets/deepvtech-logo-vertex.svg';
import neonLogoSrc from '../../assets/deepvtech-logo-neon.svg';
import emberLogoSrc from '../../assets/deepvtech-logo-ember.svg';
import midnightLogoSrc from '../../assets/deepvtech-logo-midnight.svg';
import { useTheme } from '../../context/ThemeContext';

const themeLogoMap = {
  aurora: auroraLogoSrc,
  prism: prismLogoSrc,
  vertex: vertexLogoSrc,
  neon: neonLogoSrc,
  reactor: midnightLogoSrc,
  links: prismLogoSrc,
  ember: emberLogoSrc,
  midnight: midnightLogoSrc,
};

export default function BrandMark() {
  const { theme } = useTheme();
  const logoSrc = themeLogoMap[theme] ?? auroraLogoSrc;
  const sizeClass =
    theme === 'aurora'
      ? 'h-14 w-auto max-w-[220px] object-contain sm:h-16 sm:max-w-[260px] lg:h-[4.5rem] lg:max-w-[320px]'
      : 'theme-brand-mark theme-brand-mark--modern h-14 w-auto max-w-[320px] object-contain sm:h-16 sm:max-w-[380px] lg:h-[4.5rem] lg:max-w-[440px]';

  return (
    <div className="flex items-center">
      <img src={logoSrc} alt="DeepVTech Solutions" className={sizeClass} />
    </div>
  );
}
