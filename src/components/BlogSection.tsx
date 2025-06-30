'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BlogSection() {
  return (
    <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-900 tracking-tight">📝 Our Blog</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Insights and guidance to support your mental well-being and personal growth.
        </p>
      </motion.div>

      {/* Blog Posts */}
      <div className="mt-16 grid gap-12">
        {[{
          title: "Understanding Mindfulness for Stress Reduction",
          date: "June 28, 2025",
          description: "Mindfulness is a mental state achieved by focusing awareness on the present moment, while calmly acknowledging and accepting onefeelings,  thoughts, and bodily sensations. It a practice that has gained significant traction in recent years for its profound benefits in managing stress and improving overall well-being.",
        }, {
          title: "Building Stronger Relationships Through Communication",
          date: "June 20, 2025",
          description: "Effective communication is the cornerstone of any healthy relationship. It involves more than just talking; it about truly listening, understanding, and empathizing with your partner or loved one. Misunderstandings often arise from assumptions and unspoken expectations, which can erode trust over time.",
        }].map((post, index) => (
          <motion.article
            key={index}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">📅 Published on {post.date}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{post.description}</p>
            <a href="#" className="text-blue-600 hover:underline font-medium transition-colors">Read More &rarr;</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
