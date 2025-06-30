import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Make sure Link is imported
import { detailedServices } from '@/data/servicesData'; // Make sure the data is imported

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">How I Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map through your service data to create cards */}
          {detailedServices.map((service, index) => (
            // The entire card is wrapped in a Link component
            <Link key={index} href={`/services/${service.slug}`} passHref>
              <div className="group bg-gray-50 p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}