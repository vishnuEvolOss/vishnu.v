
import React from 'react';
import SkillBadge from '../components/SkillBadge';
import { SKILLS_DATA } from '../constants';

const SkillsPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
        <p className="text-lg text-text-secondary mt-2">My technical toolbox for building modern web applications.</p>
      </div>
      <div className="space-y-12">
        {SKILLS_DATA.map((category, catIndex) => (
          <div key={category.title} style={{ animationDelay: `${catIndex * 150}ms` }} className="animate-fade-in-up opacity-0">
            <h3 className="text-2xl font-semibold text-accent mb-6 border-b-2 border-border pb-2">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
