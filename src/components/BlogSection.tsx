import React from 'react';

export default function BlogSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Our Blog</h1>
        <p className="text-gray-700 text-lg">
          Welcome to our blog, where we share insights and information to support your well-being.
        </p>
        
        {/* Blog Post List */}
        <div className="mt-12 text-left space-y-12">
          {/* Example Blog Post 1 */}
          <article className="bg-white p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Understanding Mindfulness for Stress Reduction</h2>
            <p className="text-sm text-gray-500 mb-4">Published on June 28, 2025</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mindfulness is a mental state achieved by focusing  awareness on the present moment, while calmly acknowledging and accepting onefeelings, thoughts, and bodily sensations. It a practice that has gained significant traction in recent years for its profound benefits in managing stress and improving overall well-being.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">Read More &rarr;</a>
          </article>

          {/* Example Blog Post 2 */}
          <article className="bg-white p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Building Stronger Relationships Through Communication</h2>
            <p className="text-sm text-gray-500 mb-4">Published on June 20, 2025</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Effective communication is the cornerstone of any healthy relationship. It involves more than just talking; it about truly listening, understanding, and empathizing with your partner or loved one. Misunderstandings often arise from assumptions and unspoken expectations, which can erode trust over time.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">Read More &rarr;</a>
          </article>
          
          {/* You can add more blog post articles here */}
        </div>
      </div>
    </section>
  );
}