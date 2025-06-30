

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection'; // Import the new component

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Render the BlogSection component here */}
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}