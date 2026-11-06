import { useEffect, useRef, type RefObject } from 'react';
import gsap from 'gsap';

interface MagneticPhysicsOptions {
  /** How strongly the element moves toward cursor (0-1, default 0.35) */
  strength?: number;
  /** Max translation in pixels (default 18) */
  maxPull?: number;
  /** Max 3D tilt angle in degrees (default 12) */
  maxTilt?: number;
  /** Inertia spring duration on leave (seconds, default 0.8) */
  springDuration?: number;
  /** Parallax selector for inner element */
  innerSelector?: string;
}

/**
 * Velocity & Physics-based Magnetic Hover with 3D lean and Inertia Damping
 * Measures cursor delta & velocity to physically tilt and attract elements toward cursor.
 */
export function useMagneticHover<T extends HTMLElement = HTMLDivElement>(
  options: MagneticPhysicsOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);

  const {
    strength = 0.35,
    maxPull = 20,
    maxTilt = 12,
    springDuration = 0.85,
    innerSelector,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();
    let vx = 0;
    let vy = 0;

    const innerEl = innerSelector ? el.querySelector(innerSelector) as HTMLElement : null;

    // Enable 3D perspective on parent
    el.style.transformStyle = 'preserve-3d';
    if (el.parentElement) {
      el.parentElement.style.perspective = '1000px';
    }

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);

      // Measure cursor velocity
      vx = (e.clientX - lastX) / dt;
      vy = (e.clientY - lastY) / dt;
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distFromCenterX = e.clientX - centerX;
      const distFromCenterY = e.clientY - centerY;

      // Base gravitational pull + velocity kick
      let moveX = distFromCenterX * strength + vx * 2.5;
      let moveY = distFromCenterY * strength + vy * 2.5;

      // Clamp translation
      moveX = Math.max(-maxPull, Math.min(maxPull, moveX));
      moveY = Math.max(-maxPull, Math.min(maxPull, moveY));

      // Calculate 3D physical lean (rotateX & rotateY)
      const normX = distFromCenterX / (rect.width / 2);
      const normY = distFromCenterY / (rect.height / 2);
      const tiltY = Math.max(-maxTilt, Math.min(maxTilt, normX * maxTilt));
      const tiltX = Math.max(-maxTilt, Math.min(maxTilt, -normY * maxTilt));

      gsap.to(el, {
        x: moveX,
        y: moveY,
        rotateX: tiltX,
        rotateY: tiltY,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      if (innerEl) {
        gsap.to(innerEl, {
          x: moveX * 0.4,
          y: moveY * 0.4,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      // Smooth inertia damping spring return
      gsap.to(el, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: springDuration,
        ease: 'elastic.out(1, 0.4)',
        overwrite: 'auto',
      });

      if (innerEl) {
        gsap.to(innerEl, {
          x: 0,
          y: 0,
          duration: springDuration,
          ease: 'elastic.out(1, 0.4)',
          overwrite: 'auto',
        });
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, maxPull, maxTilt, springDuration, innerSelector]);

  return ref;
}
