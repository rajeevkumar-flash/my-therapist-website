import Image from 'next/image';
import { drBlakeData } from '@/data/drBlakeData';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-serif text-teal-200 tracking-wide flex justify-center items-center">
            <span className="font-bold mr-2 text-4xl">🍃</span> Central Valley And Wellness Center
          </h1>
        </div>

        <div className="text-sm text-gray-300 mb-4 space-y-1">
          
          <p>Globally Available Online, Based in Visalia, CA</p>
          <p className="flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.954.686l1.258 3.14a1 1 0 00.954.686h3.693a1 1 0 00.954-.686l-1.258-3.14A1 1 0 0118.72 3H22a2 2 0 012 2v14a2 2 0 01-2 2h-1.28a1 1 0 01-.954-.686l-1.258-3.14a1 1 0 00-.954-.686h-3.693a1 1 0 00-.954.686l-1.258 3.14A1 1 0 015.28 21H2a2 2 0 01-2-2V5z" /></svg>
            {drBlakeData.phone}
          </p>
        </div>

        <div className="mt-4">
          <Image
            src="/images/Badge.jpg"
            alt="American Hypnosis Association certified"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        <div className="mt-8 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}