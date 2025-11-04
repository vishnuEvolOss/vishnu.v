
import React from 'react';
import { Project, SkillCategory } from './types';
// FIX: Removed CloudIcon and DeviceMobileIcon as they are not exported from TechIcons.
import { CodeIcon, DatabaseIcon, ServerIcon, CogIcon, ReactIcon, NodeIcon, PythonIcon, TypescriptIcon, DockerIcon, AWSIcon, GitIcon, MongoIcon, PostgresIcon,AngularIcon, TailwindIcon } from './components/icons/TechIcons';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Realtime Crypto Dashboard',
    description: 'A responsive web app that provides real-time cryptocurrency updates using React, Redux, and RapidAPI. The platform displays live price trends, market stats, and coin details in a clean, intuitive dashboard built for speed and accuracy.',
    imageUrl: 'https://private-user-images.githubusercontent.com/157546631/508924807-b3f6db06-eeec-4576-bac4-1d16c0eedcd0.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjIxODAzNzcsIm5iZiI6MTc2MjE4MDA3NywicGF0aCI6Ii8xNTc1NDY2MzEvNTA4OTI0ODA3LWIzZjZkYjA2LWVlZWMtNDU3Ni1iYWM0LTFkMTZjMGVlZGNkMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEwM1QxNDI3NTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NGQ2NWVmN2U3ODJmNWU5YjE0NDJlOTE3MTkxZDVmNDIzYzc4M2M4ZTY0MGU4MDMzMzA5MDgyNTBiZGJjNGJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.MYHtLSeSyId8olrj0sCTn0c1bk9wkoJNDBet60yhiac',
    tags: ['React','Redux', 'Javascript', 'API', 'RapidAPI', 'TailwindCSS', 'Netlify'],
    liveUrl: 'https://cryptostatuscheck.netlify.app/',
    githubUrl: 'https://github.com/vishnuEvolOss/CryptoCoin-Status',
  },
  {
    id: 2,
    title: 'Nexus Chat Application',
    description: 'A full-stack real-time chat application with custom JWT authentication, instant messaging, online status tracking, notifications, and media uploads. Built with a modern MERN stack and designed for performance, scalability, and smooth user experience.',
    imageUrl: 'https://private-user-images.githubusercontent.com/157546631/509436781-3025ae8d-9cfb-4e5b-9252-1d5dcb47d227.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjIyNTAxNzIsIm5iZiI6MTc2MjI0OTg3MiwicGF0aCI6Ii8xNTc1NDY2MzEvNTA5NDM2NzgxLTMwMjVhZThkLTljZmItNGU1Yi05MjUyLTFkNWRjYjQ3ZDIyNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEwNFQwOTUxMTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYmM0YWJlMjBiNmQ2M2EzZGM3ZjE5NTdhYjZkMGY4NzgzZDFhZjg0MGJlOTBjMTliNmI1NGM4Y2E2NDRiZGQ1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.qzoqz1xWRjQ4znqSN0z7UKHLUzeunG1ja7SsP5IvSBI',
    tags: ['React','Zustand', 'Socket.io', 'Node.js', 'Tailwind CSS','MongoDB','Express.js','JWT','Cloudinary'],
    liveUrl: 'https://nexus-chat-dq8l.onrender.com/',
    githubUrl: 'https://github.com/vishnuEvolOss/Nexus-Chat',
  },
  {
    id: 3,
    title: 'CodePrep Interview Coder',
    description: 'An interactive coding interview platform that enables real-time 1-on-1 video interviews with live code execution, instant feedback, and integrated chat. Features include secure authentication, screen sharing, dashboard analytics, and solo practice mode — designed for smooth, collaborative technical interviews.',
    imageUrl: 'https://private-user-images.githubusercontent.com/157546631/509419238-aa22602b-c872-4c72-8a54-54533d828cb4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjIyNTAzOTgsIm5iZiI6MTc2MjI1MDA5OCwicGF0aCI6Ii8xNTc1NDY2MzEvNTA5NDE5MjM4LWFhMjI2MDJiLWM4NzItNGM3Mi04YTU0LTU0NTMzZDgyOGNiNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEwNFQwOTU0NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZjIxYzRiYWY2OWFlNGZhOGIyODNmNDgxZDg0M2MyODFmNjJjMTc0MDhjMDNkYjE0OWFlYmJhMjk2YzYyMjkzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XZvdJlk-sHxLrEi8ymkNl6UDq5ICbuJ9GHHnPWL3xl0',
    tags: ['React', 'TanStack Query','TailwindCSS', 'Node.js', 'Render', 'Clerk','MongoDB' ],
    liveUrl: 'https://interviewapp-frontend.onrender.com/',
    githubUrl: 'https://github.com/vishnuEvolOss/CodePrep',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This very portfolio website, built from scratch using React, TypeScript to showcase my skills and projects in a clean, responsive design.',
    imageUrl: 'https://private-user-images.githubusercontent.com/157546631/509444267-e8b065e8-0f51-4c0c-ac7d-2b7a6868910f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjIyNTE0MjgsIm5iZiI6MTc2MjI1MTEyOCwicGF0aCI6Ii8xNTc1NDY2MzEvNTA5NDQ0MjY3LWU4YjA2NWU4LTBmNTEtNGMwYy1hYzdkLTJiN2E2ODY4OTEwZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEwNFQxMDEyMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NjUxOTYwZjg3MzM0OTEwNzAzMzhlYTBkNmY4YTA1NTQ4NGE3NTk4NjBmYzA4NjU0ZjMxMWQyNGI1NWNiMzQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8ThLj6EEAbPINt-dGMo8OQtA6Y8kRqEVz7ENMd4WJkM',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    liveUrl: 'https://vishnuvettiyil.netlify.app/',
    githubUrl: 'https://github.com/vishnuEvolOss/vishnu.v',
  },
  {
    id: 5,
    title: 'AI Expense Tracker',
    description: 'A modern AI-powered expense tracking web application built with Next.js 15, offering smart expense categorization, personalized insights, and real-time financial analytics. Designed for seamless user experience with elegant UI, dark mode, and secure authentication.',
    imageUrl: 'https://private-user-images.githubusercontent.com/157546631/509336716-2c8b85c6-35e9-4e28-ad23-6151f37a887c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjIyNTE1MjgsIm5iZiI6MTc2MjI1MTIyOCwicGF0aCI6Ii8xNTc1NDY2MzEvNTA5MzM2NzE2LTJjOGI4NWM2LTM1ZTktNGUyOC1hZDIzLTYxNTFmMzdhODg3Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEwNFQxMDEzNDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMDYwNDI0NGM1ZmU0NjYwNTJlODZiMGNkNzZlZDhkZTNhMzBjZTc1NTNiMDYzMjI1MGZiM2YyNjBkMzljZWI0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.O4T9xeP826tIZ_0cFMhMEGlsmBjyXma3Q8KE2FkAf44',
    tags: ['Next.js', 'React','TailwindCSS', 'Node.js','Typescript', 'Vercel', 'Clerk','NeonDB','Chart.js' ],
    liveUrl: 'https://nextjs-ai-expense-tracker-zeta.vercel.app/',
    githubUrl: 'https://github.com/vishnuEvolOss/nextjs-ai-expense-tracker',
  },
    {
    id: 6,
    title: 'Weather App',
    description: 'A responsive Angular Weather App that fetches real-time weather data for any city using the OpenWeather API. It displays key weather conditions such as temperature, humidity, wind speed, and forecasts with an intuitive and modern UI.',
    imageUrl: 'https://private-user-images.githubusercontent.com/157546631/509294079-dc995b4d-6c1c-48b2-86e9-68d195ff68e2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjIyNTE3MTIsIm5iZiI6MTc2MjI1MTQxMiwicGF0aCI6Ii8xNTc1NDY2MzEvNTA5Mjk0MDc5LWRjOTk1YjRkLTZjMWMtNDhiMi04NmU5LTY4ZDE5NWZmNjhlMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEwNFQxMDE2NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZGE4NjU3OTlkNThiY2ZhYjMwMDYzMzQ3YmY5NWM1NDAxNDBmZTNiMGM5NGIyMzkwNjk4YzNlNmNkNjYwYzZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Dho0q8y927duS4GfXGk-ul-54X24aKWEnFrGu1dBwr4',
    tags: ['Angular', 'Typescript','RapidApi', 'API','Jasmine', 'Netlify' ],
    liveUrl: 'https://angularweathersite.netlify.app/',
    githubUrl: 'https://github.com/vishnuEvolOss/WeatherApp',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Angular', icon: <AngularIcon /> },
      { name: 'TypeScript', icon: <TypescriptIcon /> },
      { name: 'JavaScript (ES6+)', icon: <CodeIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
      { name: 'HTML5 & CSS3', icon: <CodeIcon /> },
      { name: 'Next.js', icon: <ReactIcon /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <NodeIcon /> },
      { name: 'Express.js', icon: <ServerIcon /> },
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'REST APIs', icon: <CodeIcon /> },
      { name: 'GraphQL', icon: <CodeIcon /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <MongoIcon /> },
      { name: 'PostgreSQL', icon: <PostgresIcon /> },
      { name: 'MySQL', icon: <DatabaseIcon /> },
      { name: 'Redis', icon: <DatabaseIcon /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'AWS', icon: <AWSIcon /> },
      { name: 'Git & GitHub', icon: <GitIcon /> },
      { name: 'CI/CD', icon: <CogIcon /> },
      { name: 'Webpack', icon: <CogIcon /> },
      { name: 'Vite', icon: <CogIcon /> },
    ],
  },
];

export const CONTACT_INFO = {
  email: "vishnuvettiyil11@gmail.com",
  github: "https://github.com/vishnuEvolOss",
  linkedin: "https://www.linkedin.com/in/vishnu-v-5b192a20a/",
  twitter: "https://twitter.com/braintomakeapps",
};