'use client';


import { drBlakeData } from '@/data/drBlakeData';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or near top
      if (currentScrollY < 50 || currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `
    fixed top-0 left-0 right-0 z-50 transition-transform duration-300 
    ${showHeader ? 'translate-y-0' : '-translate-y-full'} 
    shadow-lg bg-teal-50
  `;

  return (
    <header className={`w-full ${headerClass}`}>
      {/* Top Bar: Phone and Location */}
      <div className="bg-pink-100 text-gray-700 py-2 px-4 text-sm flex justify-between items-center max-w-7xl mx-auto">
        <span className="flex items-center space-x-1">
          📞 <a href={`tel:${drBlakeData.phone}`} className="hover:underline">{drBlakeData.phone}</a>
        </span>
        <span className="flex items-center space-x-1">
          📍 <span>{drBlakeData.location}</span>
        </span>
      </div>

      {/* Logo and Navigation */}
      <div className="bg-teal-50 text-gray-800 py-6 px-4 border-y border-gray-200">
        <div className="text-center mb-4 md:mb-0">
          <Link href="/" className="text-3xl font-serif text-teal-900 tracking-wide flex justify-center items-center cursor-pointer">
            <span className="font-bold mr-2 text-4xl">🍃</span> Central Valley And Wellness Center
          </Link>
        </div>

        <nav className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-lg font-semibold text-teal-800 mt-4">
          {['services', 'about', 'blog'].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className={`hover:text-blue-600 transition-transform transform hover:scale-105 cursor-pointer ${
                pathname === `/${page}` ? 'font-bold' : ''
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
          <Link href="/#contact" className="hover:text-blue-600 transition-transform transform hover:scale-105 cursor-pointer">
            Contact
          </Link>
          <Link href="/#faq" className="hover:text-blue-600 transition-transform transform hover:scale-105 cursor-pointer">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
