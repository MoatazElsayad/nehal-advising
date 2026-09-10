import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedRef.current = mq.matches;
    if (mq.matches) {
      setIsVisible(true);
      return;
    }
    const onChange = (e) => {
      reducedRef.current = e.matches;
      if (e.matches) setIsVisible(true);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedRef.current) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}