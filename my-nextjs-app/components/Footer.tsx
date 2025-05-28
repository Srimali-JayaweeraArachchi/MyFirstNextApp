import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2024 MyApp. Built with Next.js App Router, TypeScript, and Tailwind CSS.</p>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;