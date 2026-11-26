import { useEffect, useState, type ReactNode } from 'react';
import { Microscope } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  fallbackNode?: ReactNode;
  loading?: 'lazy' | 'eager';
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackLabel = '(주)메디핏 연구 이미지',
  fallbackNode,
  loading,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError) {
    if (fallbackNode) {
      return (
        <div
          role="img"
          aria-label={alt}
          className={`flex flex-col items-center justify-center gap-2 bg-slate-100 text-slate-500 p-4 ${className}`}
        >
          {fallbackNode}
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-slate-100 text-slate-500 p-6 ${className}`}
      >
        <Microscope className="w-7 h-7 text-slate-400" aria-hidden="true" />
        <span className="text-xs font-medium text-center">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
