import React from 'react';
import './PleasingNeuralLogo.css'; // We'll create this file for the animation

// Define the properties the component will accept
interface PleasingNeuralLogoProps {
  /** The size of the logo in pixels. Defaults to 80. */
  size?: number;
  /** Optional CSS class for additional styling. */
  className?: string;
}

/**
 * An aesthetically pleasing and dynamic logo for C.O.P.E.
 * It uses curved paths, variable stroke widths, and subtle animation to feel more organic and intelligent.
 */
export const PleasingNeuralLogo = ({ size = 80, className }: PleasingNeuralLogoProps) => {
  const uniqueId = React.useId(); // Generate unique IDs for SVG filters/gradients
  const gradientId = `pleasing-gradient-${uniqueId}`;
  const filterId = `pleasing-glow-${uniqueId}`;
  const shadowId = `pleasing-shadow-${uniqueId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="-15 -15 130 130" // Expanded viewBox to make room for the glow
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-labelledby={`logoTitle-${uniqueId}`}
      role="img"
    >
      <title id={`logoTitle-${uniqueId}`}>C.O.P.E. Neural Advisor Logo</title>
      <defs>
        {/* The same vibrant gradient */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        {/* --- The Glow Filter --- */}
        {/* This filter creates a soft blur behind the shapes to add depth */}
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
        </filter>

        {/* --- The Shadow Filter --- */}
        {/* This filter adds a drop shadow to the logo for depth */}
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#A855F7" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* 
        Group for all elements. We apply the glow filter to the whole group.
        A second group is used for the logo itself so the glow doesn't get clipped.
      */}
      <g filter={`url(#${filterId})`}>
        <g>
          {/* 
            --- The Refined Core 'C' Shape ---
            This is now a path with varying thickness, which looks more elegant.
            It's composed of two overlapping paths to create a tapering effect.
          */}
          <path
            d="M 95,50 A 45,45 0 1 1 20,15"
            stroke={`url(#${gradientId})`}
            strokeWidth="12"
            strokeLinecap="round"
            filter={`url(#${shadowId})`}
          />
          <path
            d="M 93,55 A 40,40 0 1 1 25,20"
            stroke="#110E19" // Use the background color to "erase" part of the thicker line
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />

          {/* 
            --- The Integrated "Neural" Path ---
            This curved path flows organically from the main 'C'.
            'd' attribute: M=Move, Q=Quadratic Bezier Curve
          */}
          <path
            d="M 20,15 Q -10,30 5,50"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            className="neural-path draw-in" // Class for animation
            fill="none"
          />

          {/* --- Data Nodes --- */}
          {/* Main node at the end of the new path */}
          <circle cx="5" cy="50" r="7" fill={`url(#${gradientId})`} className="node-main" />

          {/* A smaller, orbiting satellite node */}
          <circle cx="25" cy="85" r="5" fill={`url(#${gradientId})`} className="node-satellite rotate-orbit" />
        </g>
      </g>
    </svg>
  );
};
