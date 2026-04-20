import defaultLogoSrc from '../../assets/deepvtech-logo.svg';
import { useTheme } from '../../context/ThemeContext';

export default function BrandMark() {
  useTheme();

  return (
    <div className="flex items-center">
      <img
        src={defaultLogoSrc}
        alt="DeepVTech Solutions"
        className="h-14 w-auto max-w-[220px] object-contain sm:h-16 sm:max-w-[260px] lg:h-[4.5rem] lg:max-w-[320px]"
      />
    </div>
  );
}
