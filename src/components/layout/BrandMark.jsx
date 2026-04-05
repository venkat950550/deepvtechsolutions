import auroraLogoSrc from '../../assets/deepvtech-logo.svg';
import { useTheme } from '../../context/ThemeContext';
import ThemeBrandMark from './ThemeBrandMark';

export default function BrandMark() {
  const { theme, colorMode } = useTheme();

  if (theme !== 'aurora') {
    return <ThemeBrandMark theme={theme} colorMode={colorMode} />;
  }

  return (
    <div className="flex items-center">
      <img
        src={auroraLogoSrc}
        alt="DeepVTech Solutions"
        className="h-14 w-auto max-w-[220px] object-contain sm:h-16 sm:max-w-[260px] lg:h-[4.5rem] lg:max-w-[320px]"
      />
    </div>
  );
}
