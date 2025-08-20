import React, { useState, useEffect } from 'react';
import FlowingMenu from './FlowingMenu'; // your GSAP menu
import './Skills.css'; // your styles

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const categories = [
    {
      title: "Frontend Development",
      items: [
        { link: "#", text: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { link: "#", text: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { link: "#", text: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { link: "#", text: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { link: "#", text: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      ],
    },
    {
      title: "Backend Development",
      items: [
        { link: "#", text: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { link: "#", text: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { link: "#", text: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { link: "#", text: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { link: "#", text: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      title: "DevOps & Cloud",
      items: [
        { link: "#", text: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { link: "#", text: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { link: "#", text: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { link: "#", text: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { link: "#", text: "Nginx", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      ],
    },
    {
      title: "Tools & Others",
      items: [
        { link: "#", text: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { link: "#", text: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { link: "#", text: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { link: "#", text: "Jest", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { link: "#", text: "Webpack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
      ],
    },
  ];

  // Preload all images on component mount
  useEffect(() => {
    const allImages = [];
    categories.forEach(category => {
      category.items.forEach(item => {
        allImages.push(item.image);
      });
    });

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    };

    Promise.allSettled(allImages.map(loadImage)).then(results => {
      const loaded = new Set();
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          loaded.add(result.value);
        }
      });
      setLoadedImages(loaded);
    });
  }, []);

  const handleMouseEnter = (idx) => {
    setIsTransitioning(true);
    setHoveredIndex(idx);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleMouseLeave = () => {
    setIsTransitioning(true);
    setHoveredIndex(null);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="categories">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`category ${hoveredIndex === idx ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`category-content ${hoveredIndex === idx ? 'content-fade-out' : 'content-fade-in'}`}>
              <h3 className="category-title">{cat.title}</h3>
            </div>
            <div className={`flowing-content ${hoveredIndex === idx ? 'content-fade-in' : 'content-fade-out'}`}>
              <FlowingMenu items={cat.items} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
