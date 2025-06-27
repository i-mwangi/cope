import React from 'react';

interface NeuralAdvisorLogoProps {
  size?: number;
  className?: string;
}

/**
 * A dynamic and intelligent logo for C.O.P.E., an AI-powered DeFi app.
 * It represents a neural circuit or data node, signifying intelligence and information flow.
 */
export const NeuralAdvisorLogo = ({ size = 48, className }: NeuralAdvisorLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cope-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M 50 10 A 40 40 0 1 1 50 90"
          stroke="url(#cope-gradient)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <line
          x1="13" y1="50"
          x2="-5" y2="35"
          stroke="url(#cope-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="-5" cy="35" r="5" fill="url(#cope-gradient)" />
        <line
          x1="50" y1="90"
          x2="75" y2="105"
          stroke="url(#cope-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="75" cy="105" r="5" fill="url(#cope-gradient)" />
        <circle cx="95" cy="20" r="6" fill="url(#cope-gradient)" />
      </g>
    </svg>
  );
};
