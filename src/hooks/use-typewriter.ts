import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 50, delay = 0 }: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);

    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;

        if (index >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};