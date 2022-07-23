import { useEffect, useRef } from 'react';
import sr from '../../../_assets/js/scrollReveal';

export function RevealScroll({ children, className, config }) {
  const punch = useRef(null);

  useEffect(() => {
    if (punch.current) {
      sr.reveal(punch.current, config);
    }
  }, []);

  return (
    <div ref={punch} className={className}>
      {children}
    </div>
  );
}
