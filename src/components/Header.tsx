'use client';

import Link from 'next/link';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between animate-fade-in-down">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          emmA
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 sm:border-l sm:border-white/10 sm:pl-6">
            <a
              href="https://github.com/emmA-bkb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <img src={`${BASE_PATH}/github-icon.png`} alt="" className="w-5 h-5" />
            </a>
            <a
              href="https://discordapp.com/users/670291485530259479"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-neutral-400 hover:text-red-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.009-.119c.125-.093.25-.19.371-.287a.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.195.371.288a.072.072 0 0 1-.01.119c-.598.349-1.222.648-1.871.892a.07.07 0 0 0-.038.099c.36.687.772 1.341 1.225 1.937a.076.076 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.556-4.751-.94-8.968-3.968-12.68a.06.06 0 0 0-.031-.03zM8.02 15.278c-1.122 0-2.05-1.027-2.05-2.285c0-1.258.904-2.286 2.05-2.286c1.159 0 2.067 1.027 2.05 2.286c0 1.258-.904 2.285-2.05 2.285zm7.975 0c-1.122 0-2.05-1.027-2.05-2.285c0-1.258.904-2.286 2.05-2.286c1.159 0 2.067 1.027 2.05 2.286c0 1.258-.891 2.285-2.05 2.285z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
