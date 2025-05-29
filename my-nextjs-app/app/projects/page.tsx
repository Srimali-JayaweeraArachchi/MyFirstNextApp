import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects - MyApp',
  description: 'Explore our featured projects built with modern web technologies',
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
      link: "https://github.com/example/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team features, and advanced project tracking.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      link: "https://github.com/example/taskmanager"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasts, location-based updates, and interactive maps.",
      technologies: ["Next.js", "Tailwind CSS", "Weather API", "Mapbox"],
      link: "https://github.com/example/weather"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Modern blog platform with markdown support, SEO optimization, and content management system.",
      technologies: ["Next.js", "MDX", "TypeScript", "Vercel", "Sanity"],
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting.",
      technologies: ["React", "D3.js", "Chart.js", "Node.js", "InfluxDB"],
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Full-featured social media platform with real-time messaging, media sharing, and user interactions.",
      technologies: ["Next.js", "Firebase", "WebRTC", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Our Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              A showcase of applications built with modern web technologies,
              demonstrating best practices and innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Want to see more projects, collaborate with us, or discuss your next big idea?
            We'd love to hear from you and explore how we can help bring your vision to life.
          </p>
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start a Conversation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}