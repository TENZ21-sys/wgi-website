import React from 'react';

interface RollingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  /** Icon element to render before text */
  icon?: React.ReactNode;
  /** Icon element to render after text */
  iconAfter?: React.ReactNode;
}

/**
 * Clean Single-Layer Kinetic Button with shimmer and micro-elevation.
 * Completely eliminates any duplicate or overlapping ghost text on hover.
 */
export const RollingButton: React.FC<RollingButtonProps> = ({
  children,
  onClick,
  className = '',
  icon,
  iconAfter,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden cursor-pointer transition-all duration-300 transform active:scale-95 ${className}`}
    >
      {/* Specular ambient light sheen on hover */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        aria-hidden="true"
      />

      {/* Leading icon with subtle micro-kinetic nudge */}
      {icon && (
        <span className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-110">
          {icon}
        </span>
      )}

      {/* Main Single Text Label - absolutely no clones or ghost text */}
      <span className="relative z-10 font-bold transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
        {children}
      </span>

      {/* Trailing icon with forward directional glide */}
      {iconAfter && (
        <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1">
          {iconAfter}
        </span>
      )}
    </button>
  );
};
