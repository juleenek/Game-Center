import React, { useEffect, useState } from 'react';

export const useTimer = (delay: number) => {
  const [state, setState] = useState(0);
  const [stop, isSetStop] = useState(false);

  useEffect(() => {
    if (stop) return;

    const timer = setTimeout(() => {
      setState((prev) => prev + 1);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const formattedTime = formatTime(state);

  return [formattedTime, () => isSetStop(true)];
};