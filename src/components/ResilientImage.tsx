import { useState } from 'react';
import { Globe } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel = 'Global Skills Passport',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1F3A] via-[#122D52] to-[#0F766E] text-white p-8 text-center ${className}`}
      >
        <Globe className="w-10 h-10 text-teal-300 mb-3" aria-hidden="true" />
        <p className="font-display text-sm font-semibold tracking-wide text-white/90">
          {fallbackLabel}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
