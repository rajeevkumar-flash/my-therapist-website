'use client';

import Image from 'next/image';
import Link  from 'next/link';
import { useState } from 'react';
import { drBlakeData } from '@/data/drBlakeData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import drBlakeImage from '@/../public/images/dr-blake.jpg';




export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      message: '',
      preferredTime: '',
      agreeToContact: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required.';
      isValid = false;
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred time to reach is required.';
      isValid = false;
    }
    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted.';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      alert('Thank you for your message! We will get back to you shortly.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agreeToContact: false,
      });
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };


  return (
    <>
      <Header />
      <main className="min-h-screen antialiased">
        {/* Hero Section */}
        <section
  className="relative flex h-screen items-center justify-center bg-cover bg-center text-white p-4"
  style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
      Compassionate Care for a Healthier You
    </h1>
    <h2 className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
      Overcome anxiety, strengthen relationships, and heal from trauma with personalized support.
    </h2>
    {/* Updated button with Next.js Link */}
    <Link
      href="/#contact"
      className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      Book a Free Consult
    </Link>
  </div>
</section>


        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Image Placeholder for Dr. Serena Blake */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={drBlakeImage}
                  alt="Dr. Serena Blake's headshot"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  placeholder='blur'
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About {drBlakeData.name}</h2>
              <p className="text-lg text-gray-700 space-y-4 leading-relaxed">
                {drBlakeData.bio}
              </p>
               <div className="mt-8 text-gray-600 text-base space-y-2">
                <p>
                  <span className="font-bold text-black">Name & Title:</span> {drBlakeData.name}, {drBlakeData.title}
                </p>
                <p>
                  <span className="font-bold text-black">Location:</span> {drBlakeData.location}
                </p>
                <p>
                  <span className="font-bold text-black">Experience:</span> {drBlakeData.experience}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
       <ServicesSection/>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-teal-50 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {drBlakeData.faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800">{item.question}</h3>
                    <span className="text-2xl text-blue-600 transition-transform duration-300 transform" style={{ transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </div>
                  {/* The answer content with transition */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
            </p>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your Name"
                />
                {formErrors.name && <p className="text-red-500 text-xs italic mt-2">{formErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(123) 456-7890"
                />
                {formErrors.phone && <p className="text-red-500 text-xs italic mt-2">{formErrors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="you@example.com"
                />
                {formErrors.email && <p className="text-red-500 text-xs italic mt-2">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  What brings you here?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="How can I help you?"
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-xs italic mt-2">{formErrors.message}</p>}
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-gray-700 text-sm font-bold mb-2">
                  Preferred time to reach you
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.preferredTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                />
                {formErrors.preferredTime && <p className="text-red-500 text-xs italic mt-2">{formErrors.preferredTime}</p>}
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="agreeToContact"
                  name="agreeToContact"
                  checked={formData.agreeToContact}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreeToContact" className="text-gray-700 text-sm">
                  I agree to be contacted
                </label>
              </div>
              {formErrors.agreeToContact && <p className="text-red-500 text-xs italic mt-2">{formErrors.agreeToContact}</p>}


              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 w-full mt-6"
              >
                Submit
              </button>
            </form>

            <div className="mt-8 text-center text-gray-700">
              <p>
                **Phone:** <a href={`tel:${drBlakeData.phone}`} className="text-blue-600 hover:underline">{drBlakeData.phone}</a>
              </p>
              <p>
                **Email:** <a href={`mailto:${drBlakeData.email}`} className="text-blue-600 hover:underline">{drBlakeData.email}</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}