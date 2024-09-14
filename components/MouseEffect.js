"use client"
import React, { useState, useEffect } from 'react';

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setPosition({ x, y });

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distanceX = Math.abs(x - centerX);
      const distanceY = Math.abs(y - centerY);
      const distance = Math.sqrt(distanceX ** 2 + (distanceY*(window.innerWidth/window.innerHeight)) ** 2);

      const newCircleSize = Math.max(300 - distance / 3, 10);
      setCircleSize(newCircleSize);

      const newOpacity = Math.min(Math.max(newCircleSize / 300, 0.7), 1);
      setOpacity(newOpacity);
      
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: 'fixed',
    zIndex: 0,
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    borderRadius: '50%',
    pointerEvents: 'none',
    filter: 'blur(50px)',
    transform: 'translate(-50%, -50%)',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    opacity: opacity,
  };

  return <div style={circleStyle} />;
};

export default MouseEffect;