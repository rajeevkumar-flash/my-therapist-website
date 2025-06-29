'use client';

import { drBlakeData } from '@/data/drBlakeData';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled
    ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg bg-teal-50'
    : 'relative transition-all duration-300';

  return (
    <header className={`w-full ${headerClass}`}>
      {/* Top Bar: Phone and Location */}
      <div className="bg-pink-100 text-gray-700 py-2 px-4 text-sm flex justify-between items-center max-w-7xl mx-auto">
        <span className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.954.686l1.258 3.14a1 1 0 00.954.686h3.693a1 1 0 00.954-.686l1.258-3.14A1 1 0 0118.72 3H22a2 2 0 012 2v14a2 2 0 01-2 2h-1.28a1 1 0 01-.954-.686l-1.258-3.14a1 1 0 00-.954-.686h-3.693a1 1 0 00-.954.686l-1.258 3.14A1 1 0 015.28 21H2a2 2 0 01-2-2V5z"
            />
          </svg>
          <a href={`tel:${drBlakeData.phone}`} className="hover:underline">
            {drBlakeData.phone}
          </a>
        </span>
        <span className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1 1 0 01-1.414 0l-4.243-4.243a1 1 0 010-1.414l4.243-4.243a1 1 0 011.414 0l4.243 4.243a1 1 0 010 1.414z"
            />
          </svg>
          <span>{drBlakeData.location}</span>
        </span>
      </div>

      {/* Logo and Navigation */}
      <div className="bg-teal-50 text-gray-800 py-6 px-4 border-y border-gray-200">
        <div className="text-center mb-4 md:mb-0">
          <Link
            href="/"
            className="text-3xl font-serif text-teal-900 tracking-wide flex justify-center items-center cursor-pointer"
          >
            <span className="font-bold mr-2 text-4xl">🍃</span> Central Valley And Wellness Center
          </Link>
        </div>

        <nav className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-lg font-semibold text-teal-800 mt-4">
          <Link
            href="/services"passHref
            className={`hover:text-blue-600 transition-transform transform hover:scale-105 cursor-pointer ${
              pathname === '/services' ? 'font-bold' : ''
            }`}
          >
            Services
          </Link>

          <Link
            href="/about"passHref
            className={`hover:text-blue-600 transition-transform transform hover:scale-105 cursor-pointer ${
              pathname === '/about' ? 'font-bold' : ''
            }`}
          >
            About
          </Link>

          <Link
            href="/blog"passHref
            className={`hover:text-blue-600 transition-transform transform hover:scale-105 cursor-pointer ${
              pathname === '/blog' ? 'font-bold' : ''
            }`}
          >
            Blog
          </Link>

          <Link
            href="/#contact"
            className="hover:text-blue-600 transition-transform transform hover:scale-105 cursor-pointer"
          >
            Contact
          </Link>

          <Link
            href="/#faq"
            className="hover:text-blue-600 transition-transform transform hover:scale-105 cursor-pointer"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
