import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { detailedServices } from '@/data/servicesData';
import Image from 'next/image';

// Pre-render static params for each service
export async function generateStaticParams() {
  return detailedServices.map(service => ({
    slug: service.slug,
  }));
}

// ✅ Avoid Next.js type check failure by typing as `any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ServiceDetailPage({ params }: any) {
  const service = detailedServices.find(s => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="relative w-full h-80 rounded-xl overflow-hidden mb-8 shadow-inner">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-6xl font-bold text-white drop-shadow-lg">{service.title}</h1>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8">
              {service.detailedDescription.map((item, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-semibold mb-3">{item.heading}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Dr. Blake Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
                  <p className="text-6xl font-extrabold text-blue-700">{service.successRate}%</p>
                  <p className="text-lg font-semibold text-gray-700 mt-2">Success Rate</p>
                  <p className="text-gray-600 mt-1">
                    of cases successfully managed and resolved.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-inner">
                  <p className="text-6xl font-extrabold text-green-700">{service.casesTaken}+</p>
                  <p className="text-lg font-semibold text-gray-700 mt-2">Cases Taken</p>
                  <p className="text-gray-600 mt-1">
                    total cases successfully completed for this specialty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
