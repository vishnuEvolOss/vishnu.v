
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-text-secondary text-sm mb-4 sm:mb-0">
          &copy; {year} Vishnu V. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a href={CONTACT_INFO.twitter} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <TwitterIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
