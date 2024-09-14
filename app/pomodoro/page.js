"use client"
import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const buttonStyle = `
    w-full md:w-64 p-4 bg-gradient-to-r from-green-400 to-green-600 
    text-white text-xl font-semibold rounded-full shadow-lg 
    cursor-pointer transition-all duration-300 ease-in-out 
    relative overflow-hidden hover:shadow-green-500/50 
    hover:scale-105 focus:outline-none focus:ring-2 
    focus:ring-green-400 focus:ring-opacity-50
  `;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-t from-[#131417] to-green-500/30 from-90%">
      <header className="w-full p-4">
        <h1 className="font-reddit text-4xl md:text-6xl text-white font-semibold text-center">
          <span className="text-[#278E46]">P</span>omodoro <span className="text-[#278E46]">T</span>imer
        </h1>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center gap-8 p-4">
        <div className="text-white text-6xl md:text-8xl font-bold z-10">
          {formatTime(time)}
        </div>
        <div className="flex gap-4 z-10">
          <button className={buttonStyle} onClick={toggleTimer}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button className={buttonStyle} onClick={resetTimer}>
            Reset
          </button>
        </div>
      </main>
    </div>
  );
};

export default PomodoroTimer;