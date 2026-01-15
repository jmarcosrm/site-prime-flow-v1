
import React, { useState } from 'react';
import { cn } from '../../lib/cn';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  ...props 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/5", className)}>
      {/* Small placeholder blurry effect while loading - optional implementation detail, 
          using simple opacity transition here for performance */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-in-out will-change-transform",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-lg"
        )}
        {...props}
      />
    </div>
  );
};
