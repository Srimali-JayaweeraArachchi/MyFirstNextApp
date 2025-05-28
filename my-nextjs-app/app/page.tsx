import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Home - MyApp',
  description: 'Welcome to my Next.js app with TypeScript and Tailwind CSS',
}

export default function Home() {
  return (
    <div className="text-center">
      <section className="py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-primary bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">MyApp</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          A modern web application built with Next.js App Router, TypeScript, and Tailwind CSS.
          Explore the features and see what's possible with cutting-edge web technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/about" className="btn-primary text-center min-w-[140px]">
            Learn More
          </Link>
          <Link href="/projects" className="btn-secondary text-center min-w-[140px]">
            View Projects
          </Link>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              Built with Next.js App Router for optimal performance, SEO, and developer experience
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-3">Type Safe</h3>
            <p className="text-gray-600">
              Full TypeScript integration with enhanced developer experience and runtime safety
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
            <p className="text-gray-600">
              Styled with Tailwind CSS for modern, responsive, and maintainable design systems
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Explore our projects, learn about our approach, or get in touch to discuss your next project.
        </p>
        <Link href="/contact" className="btn-primary">
          Start Your Project
        </Link>
      </section>
    </div>
  );
}