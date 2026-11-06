import { useEffect, useRef, type RefObject } from 'react';
import gsap from 'gsap';

interface StaggerRevealOptions {
  /** Stagger interval between children (seconds) */
  stagger?: number;
  /** Animation duration per item (seconds) */
  duration?: number;
  /** Vertical offset to animate from (pixels) */
  yOffset?: number;
  /** Scale start value */
  scaleFrom?: number;
  /** Blur amount (pixels) */
  blur?: number;
  /** Viewport threshold to trigger (0-1) */
  threshold?: number;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

/**
 * Staggered pop-in reveal for card grids and lists.
 * Children animate in one by one when the parent enters the viewport.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: StaggerRevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const hasTriggered = useRef(false);

  const {
    stagger = 0.12,
    duration = 0.6,
    yOffset = 25,
    scaleFrom = 0.95,
    blur = 4,
    threshold = 0.1,
    delay = 0,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    // Set initial hidden state
    gsap.set(children, {
      opacity: 0,
      y: yOffset,
      scale: scaleFrom,
      filter: `blur(${blur}px)`,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;

            gsap.to(children, {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration,
              delay,
              stagger,
              ease: 'power2.out',
              clearProps: 'filter,scale',
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [stagger, duration, yOffset, scaleFrom, blur, threshold, delay]);

  return ref;
}
