'use client';

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Tanggal target yang sudah ditentukan
  const targetDate = '2024-12-31T23:59:59';

  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          hours: String(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
          ).padStart(2, '0'),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
            2,
            '0'
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            '0'
          ),
        });
      } else {
        setTimeLeft({
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-1 items-center">
      <div className="w-8 h-9 rounded-md bg-red-400 flex justify-center items-center font-bold text-white">
        {timeLeft.hours}
      </div>
      <span>:</span>
      <div className="w-8 h-9 rounded-md bg-red-400 flex justify-center items-center font-bold text-white">
        {timeLeft.minutes}
      </div>
      <span>:</span>
      <div className="w-8 h-9 rounded-md bg-red-400 flex justify-center items-center font-bold text-white">
        {timeLeft.seconds}
      </div>
    </div>
  );
};

export default CountdownTimer;
