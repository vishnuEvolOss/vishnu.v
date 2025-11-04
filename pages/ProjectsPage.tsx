
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const ProjectsPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">My Projects</h2>
        <p className="text-lg text-text-secondary mt-2">A selection of my recent work.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={project.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up opacity-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
