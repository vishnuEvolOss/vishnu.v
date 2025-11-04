
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
