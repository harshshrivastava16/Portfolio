import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
  <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md shadow-lg z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold tracking-widest px-3 py-1 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 shadow-lg animate-pulse">HC</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Only View Resume button remains */}
              <a
                href="https://drive.google.com/file/d/1_e-tizYXxLS-9zCdNKzYRWug0B_zjYPS/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_12px_2px_rgba(0,255,255,0.4)] focus:outline-none ml-2"
              >
                View Resume
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-400 bg-black/80 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 rounded-xl shadow-xl">
              {/* Only View Resume button remains */}
              <a
                href="https://drive.google.com/file/d/1_e-tizYXxLS-9zCdNKzYRWug0B_zjYPS/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 border border-cyan-400 block px-4 py-2 rounded-md text-lg font-medium transition-all duration-200 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_12px_2px_rgba(0,255,255,0.4)] focus:outline-none mt-2"
              >
                View Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
