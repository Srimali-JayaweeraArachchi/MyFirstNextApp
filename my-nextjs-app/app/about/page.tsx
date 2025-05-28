export const metadata = {
  title: 'About - MyApp',
  description: 'Learn more about our Next.js application and the technologies we use',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About MyApp</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We're dedicated to creating exceptional web experiences using modern
            technologies. This application demonstrates the power of Next.js App Router,
            TypeScript, and Tailwind CSS working together seamlessly.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Technologies Used
          </h2>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span><strong>Next.js App Router:</strong> Latest React framework for production</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span><strong>TypeScript:</strong> Type-safe JavaScript with better DX</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span><strong>Tailwind CSS:</strong> Utility-first CSS framework</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span><strong>React 18:</strong> Latest React with concurrent features</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Project Statistics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pages</span>
              <span className="font-semibold text-primary">4</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Components</span>
              <span className="font-semibold text-primary">4</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Build Time</span>
              <span className="font-semibold text-primary">~2 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Lines of Code</span>
              <span className="font-semibold text-primary">~400</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Performance Score</span>
              <span className="font-semibold text-green-600">100/100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Next.js App Router?</h2>
        <p className="text-gray-600 leading-relaxed">
          The App Router is the newest addition to Next.js, built on React Server Components. 
          It provides better performance, improved developer experience, and more intuitive 
          file-based routing. This application showcases modern web development practices 
          with server-side rendering, static site generation, and optimal bundle splitting.
        </p>
      </div>
    </div>
  );
}