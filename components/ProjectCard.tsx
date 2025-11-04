
import React from 'react';
import { Project } from '../types';
import { ArrowTopRightOnSquareIcon, GitHubIcon } from './icons/GenericIcons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden border border-border group transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
      <div className="relative overflow-hidden h-48">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-text-secondary text-sm flex-grow mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-900/50 text-accent text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4 pt-4 border-t border-border/50">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent font-medium text-sm transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent font-medium text-sm transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
