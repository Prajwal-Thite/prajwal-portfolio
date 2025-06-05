import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMouseParallax = (factor: number = 0.1) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const x = (e.clientX - centerX) * factor;
      const y = (e.clientY - centerY) * factor;

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [factor]);

  return mousePosition;
};