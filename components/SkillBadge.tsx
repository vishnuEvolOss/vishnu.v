
import React from 'react';
import { Skill } from '../types';

const SkillBadge: React.FC<Skill> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-3 bg-secondary p-3 rounded-lg border border-border transition-all duration-300 hover:border-accent hover:bg-secondary/80">
      <div className="text-accent">{icon}</div>
      <span className="font-medium text-text-primary">{name}</span>
    </div>
  );
};

export default SkillBadge;
