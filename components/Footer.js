import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white flex flex-col items-center justify-center gap-4 px-4 py-6">
      <div className="flex flex-row gap-8">
        <a 
          className="hover:text-[#2F8D46] transition-all duration-200 ease-in-out" 
          href="https://github.com/darkdeathoriginal/gfgui" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-github-icon"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.86 8.16 6.84 9.48.5.09.68-.22.68-.49v-1.8c-2.79.61-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1.08.08 1.64 1.11 1.64 1.11.96 1.62 2.52 1.15 3.13.88.1-.69.37-1.15.67-1.41-2.21-.24-4.54-1.1-4.54-4.91 0-1.08.38-1.97 1.01-2.66-.1-.24-.43-1.22.1-2.53 0 0 .83-.26 2.73 1.01.79-.22 1.64-.33 2.48-.33.84 0 1.69.11 2.48.33 1.9-1.27 2.73-1.01 2.73-1.01.53 1.31.2 2.29.1 2.53.63.69 1.01 1.58 1.01 2.66 0 3.81-2.33 4.67-4.54 4.91.39.33.74.98.74 1.97v2.93c0 .27.18.58.69.48A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10z"></path>
          </svg>
        </a>
        <a 
          className="hover:text-[#2F8D46] transition-all duration-200 ease-in-out" 
          href="https://www.linkedin.com/company/your-company" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-linkedin-icon"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
      <p className="text-sm font-montserrat font-light">
        © 2024 Anwin Sharon
      </p>
    </footer>
  );
};

export default Footer;
