import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/game.png',
      title: 'Sokoban Game',
      tags: ['Sokoban', 'C#', 'Game-Design','Algorithms','Math','Physics'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Sokoban-Game'
    },
    {
      imgSrc: '/disease.png',
      title: 'Diseases Prediction System',
      tags: ['Python', 'Cython', 'JavaScript', 'API', 'Native Bayes Algorithm'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Diseases-Prediction-System'
    },
    {
      imgSrc: '/threeb.png',
      title: 'Car Booking App',
      tags: ['PHP', 'CSS', 'SCSS', 'JavaScript', 'PHPMailer','Session'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Car-Booking-System'
    },
    {
      imgSrc: '/job-portal.png',
      title: 'Job Portal App',
      tags: ['PHP', 'CSS', 'JavaScript','SCSS','API','SEO'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Job-Portal.git'
    },
    {
      imgSrc: '/foodorder.png',
      title: 'Food Order Website',
      tags: ['JavaScript','PHP','Web-design', 'CSS', 'Cookies'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Food-Order'
    },
    {
      imgSrc: '/interior.png',
      title: 'Interior Design Studio',
      tags: ['PHP', 'CSS', 'JavaScript','SCSS','Web-design','API'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Interior-Design-Studio'
    },
    {
      imgSrc: '/travel.png',
      title: 'Travel Website',
      tags: ['PHP', 'JavaScript', 'CSS', 'SCSS', 'Development'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/travel-project'
    },
    {
      imgSrc: '/admin1.png',
      title: 'Admin Dashboard',
      tags: ['PHP', 'CSS', 'SCSS', 'JavaScript', 'CRUD', 'Reports'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/travel-project'
    },
    {
      imgSrc: '/portfolio.png',
      title: 'Developer Portfolio Site',
      tags: ['TypeScript', 'Next.js', 'JavaScript', 'Tailwind CSS', 'React'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Portfolio'
    },
    {
      imgSrc: '/admin2.png',
      title: 'Admin Control Panel',
      tags: ['PHP', 'CSS', 'SCSS', 'JavaScript', 'CRUD', 'Reports'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Car-Booking-System'
    },
    {
      imgSrc: '/nodepj.png',
      title: 'RESTful Api Project',
      tags: ['Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'SQLite', 'Docker'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/NodeJS-Project.git'
    },
  ];

const Project = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Client render:', works);
  }
  return (
    <section id="project" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {works.map(({imgSrc, title, tags, projectLink}) => (
                    <ProjectCard 
                        key={title}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes='reveal-up'
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Project