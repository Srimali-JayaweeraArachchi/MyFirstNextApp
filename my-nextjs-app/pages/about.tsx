import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About - MyApp</title>
        <meta name="description" content="Learn more about our application" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About MyApp</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              We're dedicated to creating exceptional web experiences using modern
              technologies. This application demonstrates the power of Next.js,
              TypeScript, and Tailwind CSS working together.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Technologies Used
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Next.js:</strong> React framework for production</li>
              <li>• <strong>TypeScript:</strong> Type-safe JavaScript</li>
              <li>• <strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
              <li>• <strong>React:</strong> User interface library</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Project Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Pages</span>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Components</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Build Time</span>
                <span className="font-semibold">~2 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lines of Code</span>
                <span className="font-semibold">~300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;