'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      // Customize your animation settings here
      offset: 120, // offset (in px) from the original trigger point
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return null; // This component doesn't render anything, it just initializes AOS
}