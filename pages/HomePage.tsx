
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-12rem)] animate-fade-in-up">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Hi, I'am <span className="text-accent">Vishnu</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl mx-auto md:mx-0">
         I design and develop smart, scalable, and user-focused products that blend full stack development with AI innovation. Whether it’s building a dynamic web app or deploying intelligent agents for automation, I aim to create solutions that are efficient, intuitive, and future-ready.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <Link
            to="/projects"
            className="bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="bg-secondary text-text-primary font-semibold py-3 px-6 rounded-lg border border-border hover:border-accent hover:text-white transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent shadow-2xl shadow-accent/20">
          <img
            src="./vishnuv-image.jpg"
            alt="Developer Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
