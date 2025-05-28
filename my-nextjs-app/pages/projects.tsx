import React from 'react';
import Head from 'next/head';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "https://github.com/example/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/example/taskmanager"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasts and location-based updates.",
      technologies: ["Next.js", "Tailwind CSS", "Weather API"],
      link: "https://github.com/example/weather"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Modern blog platform with markdown support and SEO optimization.",
      technologies: ["Next.js", "MDX", "TypeScript", "Vercel"],
    },
  ];

  return (
    <>
      <Head>
        <title>Projects - MyApp</title>
        <meta name="description" content="Explore our featured projects" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600">
            A showcase of applications built with modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see more projects or collaborate with us?
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;