import { useReveal } from '../../hooks/useReveal';
import { cx } from '../../utils/cx';

export default function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={cx(
        'transition-all duration-700 ease-out will-change-transform',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
