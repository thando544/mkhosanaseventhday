import React, { useState, useEffect } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

const ComingSoon = () => {
  const targetDate = new Date("2025-12-01T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    return { months, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ label, value }) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-20 sm:w-24">
      <span className="text-2xl font-bold text-blue-800">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm text-gray-500 uppercase">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white px-4">
      <ClockIcon className="w-16 h-16 text-blue-700 mb-4" />

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
        Coming Soon
      </h1>

      <p className="text-gray-600 text-lg mb-6 max-w-md text-center">
        We’re launching something exciting. Stay tuned!
      </p>

      <div className="flex gap-4 flex-wrap justify-center mb-6">
        <TimeBox label="Months" value={timeLeft.months} />
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>

      <button className="bg-blue-700 hover:bg-blue-400 text-white px-6 py-2 rounded-full shadow-md transition duration-200">
        Notify Me
      </button>
    </div>
  );
};

export default ComingSoon;
