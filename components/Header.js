import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="flex flex-row items-center shadow-sm shadow-teal-800 bg-[#0C0C0C] p-2 border-gradient-to-r from-teal-500 to-green-500 overflow-x-auto">
      <div className="flex flex-grow justify-around items-center max-w-screen-xl mx-auto px-4">
        <div className="text-white list-none flex flex-row gap-4">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/pomodoro" className="hover:text-gray-200">Pomodoro</Link>

        </div>
        <img 
          src="/logo.svg" 
          className="w-12" 
          alt="Logo"
        />
        <ul className="text-white list-none flex flex-row gap-4">
          <Link href="/flashcard" className="hover:text-gray-200">FlashCard</Link>
          <Link href="https://github.com/darkdeathoriginal/gfgui" target='_blank' className="hover:text-gray-200">Github</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
