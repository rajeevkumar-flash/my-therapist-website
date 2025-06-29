import Image from 'next/image';
import { drBlakeData } from '@/data/drBlakeData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Placeholder for Dr. Serena Blake */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/dr-blake.jpg"
              alt="Dr. Serena Blake's headshot"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Bio Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About {drBlakeData.name}</h2>
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>{drBlakeData.bio}</p>
          </div>
          <div className="mt-8 text-gray-600 text-base space-y-2">
            <p>
              **Name & Title:** {drBlakeData.name}, {drBlakeData.title}
            </p>
            <p>
              **Location:** {drBlakeData.location}
            </p>
            <p>
              **Experience:** {drBlakeData.experience}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}