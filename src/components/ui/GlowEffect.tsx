import React from 'react';

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: 'blue' | 'purple' | 'green' | 'yellow';
}

export function GlowEffect({ children, className = '', color = 'blue' }: GlowEffectProps) {
  const colorClasses = {
    blue: 'shadow-blue-500/50 hover:shadow-blue-500/70',
    purple: 'shadow-purple-500/50 hover:shadow-purple-500/70',
    green: 'shadow-green-500/50 hover:shadow-green-500/70',
    yellow: 'shadow-yellow-500/50 hover:shadow-yellow-500/70'
  };

  return (
    <div className={`relative group transition-all duration-300 ${className}`}>
      <div className={`
        absolute inset-0 rounded-lg blur-md transition-all duration-300
        ${colorClasses[color]}
        group-hover:scale-110
      `} />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
