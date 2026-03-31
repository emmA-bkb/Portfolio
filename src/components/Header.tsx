'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700/50">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
      `}</style>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center animate-fade-in-down">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition">
          emmA
        </Link>
        <div className="flex gap-8">
          <a href="https://github.com/emmA-bkb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            GitHub
          </a>
          <a href="https://discordapp.com/users/670291485530259479" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            Discord
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
