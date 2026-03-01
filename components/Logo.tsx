import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-20" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/logo.png" alt="Arkin Spaces Logo" className="h-[200px] w-auto object-contain" />
    </div>
  );
};