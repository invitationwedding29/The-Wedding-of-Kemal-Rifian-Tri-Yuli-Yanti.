import { useState, useEffect } from 'react';

/**
 * Hook untuk menghitung mundur menuju tanggal acara pernikahan secara real-time
 * @param {string} targetIsoString Format ISO 8601 (contoh: '2026-12-12T08:00:00')
 */
export function useCountdown(targetIsoString) {
  const calculateTimeLeft = () => {
    const targetTime = new Date(targetIsoString).getTime();
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPassed: true
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPassed: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIsoString]);

  return timeLeft;
}
