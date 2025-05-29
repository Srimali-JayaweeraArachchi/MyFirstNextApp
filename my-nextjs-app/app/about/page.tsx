export const metadata = {
  title: 'About - MyApp',
  description: 'Learn more about our Next.js application and the technologies we use',
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6">
            About MyApp
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Mission & Technologies */}
          <div className="space-y-12">
            {/* Mission Section */}
            <div className="group">
              <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're dedicated to creating exceptional web experiences using modern
                technologies. This application demonstrates the power of Next.js App Router,
                TypeScript, and Tailwind CSS working together seamlessly.
              </p>
            </div>
            
            {/* Technologies Section */}
            <div className="group">
              <h2 className="text-3xl font-bold text-white mb-8 group-hover:text-purple-300 transition-colors duration-300">
                Technologies Used
              </h2>
              <div className="space-y-6">
                <div className="group/item flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                  <div>
                    <span className="text-white font-semibold">Next.js App Router:</span>
                    <span className="text-gray-300 ml-2">Latest React framework for production</span>
                  </div>
                </div>
                
                <div className="group/item flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                  <div>
                    <span className="text-white font-semibold">TypeScript:</span>
                    <span className="text-gray-300 ml-2">Type-safe JavaScript with better DX</span>
                  </div>
                </div>
                
                <div className="group/item flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                  <div>
                    <span className="text-white font-semibold">Tailwind CSS:</span>
                    <span className="text-gray-300 ml-2">Utility-first CSS framework</span>
                  </div>
                </div>
                
                <div className="group/item flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                  <div>
                    <span className="text-white font-semibold">React 18:</span>
                    <span className="text-gray-300 ml-2">Latest React with concurrent features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Statistics Card */}
          <div className="lg:sticky lg:top-8">
            <div className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  Project Statistics
                </h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                    <span className="text-gray-300">Pages</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">4</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                    <span className="text-gray-300">Components</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">4</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                    <span className="text-gray-300">Build Time</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">~2 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                    <span className="text-gray-300">Lines of Code</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">~400</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                    <span className="text-gray-300">Performance Score</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-2xl text-green-400">100/100</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next.js App Router Section */}
        <div className="group relative p-12 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                Why Next.js App Router?
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              The App Router is the newest addition to Next.js, built on React Server Components. 
              It provides better performance, improved developer experience, and more intuitive 
              file-based routing. This application showcases modern web development practices 
              with server-side rendering, static site generation, and optimal bundle splitting.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  );
}