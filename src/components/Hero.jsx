import { ChevronDown } from 'lucide-react';
import Particles from './Particles';

const Hero = () => {
  const handleScroll = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff", "#e0e7ff", "#b3cfff", "#aeefff"]}
          particleCount={220}
          particleSpread={12}
          speed={0.13}
          particleBaseSize={160}
          sizeRandomness={2}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          <span className="block">Hello, I'm</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            Harsh kumar
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Full-Stack Developer passionate about creating beautiful and functional web experiences
        </p>
        
       
      </div>
      
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
