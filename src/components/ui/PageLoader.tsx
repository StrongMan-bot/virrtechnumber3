"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageLoaderProps {
  children: React.ReactNode;
  minDurationMs?: number;
}

const PageLoader: React.FC<PageLoaderProps> = ({ children, minDurationMs = 350 }) => {
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (previousPathRef.current === null) {
      previousPathRef.current = pathname;
      return;
    }

    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname;
      setIsLoading(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setIsLoading(false);
      }, minDurationMs);
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [pathname, minDurationMs]);

  const overlay = useMemo(() => (
    isLoading ? (
      <div className="fixed inset-0 z-[1000] pointer-events-none">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 animate-[loadingbar_1.2s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-primary-500/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
          </div>
        </div>
      </div>
    ) : null
  ), [isLoading]);

  return (
    <>
      {overlay}
      {children}
    </>
  );
};

export default PageLoader;
