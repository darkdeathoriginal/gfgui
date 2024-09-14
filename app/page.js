"use client";

import MouseEffect from "@/components/MouseEffect";
import Link from "next/link";

const Home = () => {
  const buttonStyle = `
    w-full md:w-64 p-4 bg-gradient-to-r from-green-400 to-green-600 
    text-white text-xl font-semibold rounded-full shadow-lg 
    cursor-pointer transition-all duration-300 ease-in-out 
    relative overflow-hidden hover:shadow-green-500/50 
    hover:scale-105 focus:outline-none focus:ring-2 
    focus:ring-green-400 focus:ring-opacity-50
  `;

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-t from-[#131417] to-green-500/30 from-90%">
      <MouseEffect />
      <header className="w-full p-4">
        <h1 className="font-reddit text-4xl md:text-6xl text-white font-semibold text-center">
          <span className="text-[#278E46]">G</span>eeks
          <span className="text-[#278E46]">f</span>or
          <span className="text-[#278E46]">G</span>eeks
        </h1>
        <h3 className="font-reddit text-white text-xl md:text-2xl text-center mt-2">
          Recruitment Task
        </h3>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center gap-8 p-4">
        <Link href={"/pomodoro"}>
          <button className={buttonStyle}>Pomodoro Timer</button>
        </Link>
        <Link href={"/flashcard"}>
          <button className={buttonStyle}>Flashcard App</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
