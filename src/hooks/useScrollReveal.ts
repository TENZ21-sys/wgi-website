import { useEffect, useRef, type RefObject } from 'react';
import gsap from 'gsap';

interface ScrollRevealOptions {
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Stagger between child elements (seconds) */
  stagger?: number;
  /** Vertical offset to animate from (pixels) */
  yOffset?: number;
  /** Initial blur amount (pixels) */
  blur?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** Animate children individually instead of the container */
  children?: boolean;
  /** Viewport threshold (0-1) to trigger */
  threshold?: number;
  /** Only trigger once */
  once?: boolean;
}

/**
 * Blur-to-sharp scroll-triggered reveal animation.
 * Inspired by Superconscious/GSAP SplitText style reveals.
 * Uses IntersectionObserver + GSAP for smooth, performant animations.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const hasTriggered = useRef(false);

  const {
    delay = 0,
    stagger = 0.12,
    yOffset = 30,
    blur = 6,
    duration = 0.8,
    children = false,
    threshold = 0.15,
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    const targets = children
      ? Array.from(el.children) as HTMLElement[]
      : [el];

    gsap.set(targets, {
      opacity: 0,
      y: yOffset,
      filter: `blur(${blur}px)`,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasTriggered.current)) {
            hasTriggered.current = true;

            gsap.to(targets, {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration,
              delay,
              stagger: children ? stagger : 0,
              ease: 'power2.out',
              clearProps: 'filter',
            });

            if (once) {
              observer.unobserve(el);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delay, stagger, yOffset, blur, duration, children, threshold, once]);

  return ref;
}
