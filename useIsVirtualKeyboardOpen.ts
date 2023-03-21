import { useEffect, useRef, useState } from 'react';

export const useIsVirtualKeyboardOpen = () => {
  const [isVirtualKeyboardOpen, setIsVirtualKeyboardOpen] =
    useState<boolean>(false);

  const prevHeight = useRef<number>();

  const listener = () => {
    // The visual viewport is the visual portion of a screen excluding on-screen keyboards,
    // areas outside of a pinch-zoom area, or any other on-screen artifact that doesn't scale with the dimensions of a page.
    const visualViewportHeight = window.visualViewport.height;
    setIsVirtualKeyboardOpen(visualViewportHeight === prevHeight.current);
  };

  useEffect(() => {
    prevHeight.current = window.innerHeight;

    window.visualViewport.addEventListener('resize', listener);
    return () => {
      window.visualViewport.removeEventListener('resize', listener);
    };
  }, []);

  return { isVirtualKeyboardOpen };
};
