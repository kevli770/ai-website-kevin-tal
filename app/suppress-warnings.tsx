'use client';

import { useEffect } from 'react';

export function SuppressHydrationWarnings() {
  useEffect(() => {
    // Suppress hydration warnings in development
    if (process.env.NODE_ENV === 'development') {
      const originalError = console.error;
      console.error = (...args) => {
        if (
          typeof args[0] === 'string' &&
          (args[0].includes('Hydration') ||
            args[0].includes('hydrated') ||
            args[0].includes('did not match'))
        ) {
          return;
        }
        originalError.call(console, ...args);
      };
    }
  }, []);

  return null;
}
