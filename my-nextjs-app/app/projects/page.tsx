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
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A showcase of applications built with modern web technologies, 
          demonstrating best practices and innovative solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>

      <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Have a Project in Mind?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Want to see more projects, collaborate with us, or discuss your next big idea? 
          We'd love to hear from you and explore how we can help bring your vision to life.
        </p>
        <a
          href="/contact"
          className="btn-primary inline-block"
        >
          Start a Conversation
        </a>
      </div>
    </div>
  );
}