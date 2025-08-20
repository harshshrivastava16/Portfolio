import { User, Award, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express',
    'MongoDB', 'MySql', 'Tailwind CSS', 'Git', 'AWS',
    'Docker', 'Python', 'Gsap', 'REST APIs','VsCode','C++','PostMan'
  ];

  const titles = [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Cloud Solutions Architect",
    "Problem Solver",
    "React & Node.js Specialist"
  ];

  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(titles[titleIdx].slice(0, i));
      i++;
      if (i > titles[titleIdx].length) {
        clearInterval(interval);
        setTimeout(() => {
          setTitleIdx((titleIdx + 1) % titles.length);
        }, 1200);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [titleIdx]);

  return (
  <section id="about" className="py-20 bg-gradient-to-b from-black via-[#1a0826] to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 animate-pulse pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
          <path fill="#a855f7" fillOpacity="0.2" d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,117.3C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mb-4 drop-shadow-lg animate-pulse">About Me</h2>
          <div className="flex justify-center items-center gap-4">
            <svg width="80" height="80" viewBox="0 0 80 80" className="animate-spin-slow">
              <circle cx="40" cy="40" r="36" stroke="#a855f7" strokeWidth="4" fill="#18181b" />
              <circle cx="40" cy="40" r="20" stroke="#38bdf8" strokeWidth="4" fill="#18181b" />
              <circle cx="40" cy="40" r="8" fill="#f472b6" />
            </svg>
            <span className="text-xl text-cyan-300 font-mono bg-black/60 px-4 py-2 rounded-xl border border-purple-700 shadow-lg animate-fade-in">{displayed}</span>
          </div>
        </div>
        
  <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src="src\assets\hi.png"
                alt="Profile"
                className="rounded-full shadow-2xl border-4 border-cyan-400 group-hover:border-pink-400 transition-all duration-500 w-64 h-64 object-cover mx-auto animate-bounce"
              />
              <div className="absolute inset-0 rounded-full border-4 border-purple-700 animate-pulse pointer-events-none"></div>
              
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border-2 border-cyan-400 animate-glow">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">Who I Am</h3>
              <p className="text-cyan-200 leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience creating 
                digital solutions that make a difference. I love turning complex problems 
                into simple, beautiful designs and always strive to write clean, efficient code.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-black/80 border-2 border-purple-500 rounded-xl shadow-xl animate-glow">
                <Award className="w-10 h-10 text-purple-400 mx-auto mb-2 animate-spin-slow" />
                <p className="text-base font-bold text-purple-200">7+ Projects</p>
              </div>
              <div className="bg-black/80 border-2 border-blue-500 rounded-xl shadow-xl animate-glow">
                <Target className="w-10 h-10 text-blue-400 mx-auto mb-2 animate-spin-slow" />
                <p className="text-base font-bold text-blue-200">100% Satisfaction</p>
              </div>
              <div className="bg-black/80 border-2 border-green-500 rounded-xl shadow-xl animate-glow">
                <User className="w-10 h-10 text-green-400 mx-auto mb-2 animate-spin-slow" />
                <p className="text-base font-bold text-green-200">Happy Clients</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-900 border border-cyan-400 text-cyan-300 px-4 py-1 rounded-lg text-sm font-semibold shadow-md hover:bg-cyan-900 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
