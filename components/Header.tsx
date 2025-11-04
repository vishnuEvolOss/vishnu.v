
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CodeBracketIcon, Bars3Icon, XMarkIcon } from './icons/GenericIcons';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = 'bg-secondary text-accent';
  const inactiveLinkClass = 'text-text-secondary hover:bg-secondary hover:text-white';
  const linkClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';

  return (
    <header className="bg-primary/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 text-white">
              <CodeBracketIcon className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl">Vishnu V</span>
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `${isActive ? activeLinkClass : inactiveLinkClass} ${linkClasses}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : inactiveLinkClass} block px-3 py-2 rounded-md text-base font-medium transition-colors`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
