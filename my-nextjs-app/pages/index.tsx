import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home - MyApp</title>
        <meta name="description" content="Welcome to my Next.js app" />
      </Head>

      <div className="text-center">
        <section className="py-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-primary">MyApp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern web application built with Next.js, TypeScript, and Tailwind CSS.
            Explore the features and see what's possible.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-gray-600">
                Built with Next.js for optimal performance and SEO
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">TypeScript</h3>
              <p className="text-gray-600">
                Type-safe development with enhanced developer experience
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
              <p className="text-gray-600">
                Styled with Tailwind CSS for modern, responsive design
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;