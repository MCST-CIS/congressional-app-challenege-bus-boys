import { useState, useEffect } from 'react';

export function useTimedClear(initialValue: string, timeout: number = 1000) {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    if (text) {
      const timer = setTimeout(() => {
        setText('');
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [text, timeout]);

  return [text, setText] as const;
}
