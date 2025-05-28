import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-blue-600 font-medium transition-colors group"
        >
          View Project 
          <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;