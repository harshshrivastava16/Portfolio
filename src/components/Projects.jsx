import { useEffect, useState, useRef } from "react";

import JobPortalImg from '../assets/images/JobPortal.png';
import CodeStreakImg from '../assets/images/CodeStreak.png';
import StockViewImg from '../assets/images/StockView.png';

const projects = [
  {
    id: 1,
    name: "Job Portal",
    type: "frontend",
    image: JobPortalImg,
    demo: "https://job-portal-iota-gilt.vercel.app/",
    github: "https://github.com/harshshrivastava16/JobPortal",
  },
  {
    id: 2,
    name: "CodeStreak",
    type: "backend",
    image: CodeStreakImg,
    demo: "https://code-streak-lemon.vercel.app/",
    github: "https://github.com/harshshrivastava16/CodeStreak",
  },
  {
    id: 3,
    name: "StockView",
    type: "design",
    image: StockViewImg,
    demo: "https://st0ckview.vercel.app/",
    github: "https://github.com/harshshrivastava16/St0ckView",
  },
];

export default function Projects() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let rafId;
    let last = performance.now();

    function step(now) {
      const delta = now - last;
      last = now;
      if (!isPaused) {
        setRotation((r) => r + 0.002 * (delta / 16));
      }
      rafId = requestAnimationFrame(step);
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const centerX = windowSize.width ? windowSize.width / 2 : null;
  const centerY = windowSize.height ? windowSize.height / 2 : null;

  let outerRadius = 0;
  if (windowSize.width && windowSize.height) {
    if (windowSize.width < 768) {
      outerRadius = Math.min(windowSize.width, windowSize.height) * 0.32;
    } else {
      outerRadius = Math.min(windowSize.width, windowSize.height) * 0.38;
    }
  }

  const angleStep = (2 * Math.PI) / projects.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="projects-section relative w-full min-h-100vh bg-black overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 🔥 Inline CSS (merged from Projects.css + animations) */}
      <style>{`
        /* Keyframes */
        @keyframes dashmove {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        .dash-anim {
          animation: dashmove 6s linear infinite;
        }

        /* Projects Section Styles */
        .projects-section {
          padding: 20vh 2rem;
          background: black;
          min-height: 120vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(0, 245, 255, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }
        .content-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
        }
        @media (max-width: 768px) {
          .projects-section {
            padding: 4rem 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .projects-section {
            padding: 3rem 1rem;
          }
        }
      `}</style>

      {/* Background Aura */}
      {centerX && centerY && (
        <div
          className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl animate-pulse"
          style={{
            width: 300,
            height: 300,
            top: centerY - 150,
            left: centerX - 150,
            zIndex: 5,
          }}
        />
      )}

      {/* Title */}
      {centerX && centerY && (
        <h1
          className="absolute text-center z-50 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          style={{
            top: centerY,
            left: centerX,
            transform: "translate(-50%, -50%)",
          }}
        >
          Proof of Work
        </h1>
      )}

      {/* Neon Curves */}
      {centerX && centerY && (
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 2 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ff" />
              <stop offset="100%" stopColor="#f0f" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {projects.map((project, index) => {
            const angle = index * angleStep + rotation;
            const x = centerX + outerRadius * Math.cos(angle);
            const y = centerY + outerRadius * Math.sin(angle);

            const cp1x = centerX + (outerRadius * 0.5) * Math.cos(angle + 0.5);
            const cp1y = centerY + (outerRadius * 0.2) * Math.sin(angle - 0.3);
            const cp2x = x - 40 * Math.cos(angle - 0.2);
            const cp2y = y - 40 * Math.sin(angle + 0.2);

            const d = `M ${centerX} ${centerY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;

            return (
              <path
                key={project.id}
                d={d}
                stroke="url(#lineGradient)"
                strokeWidth={2}
                strokeOpacity={0.75}
                fill="transparent"
                filter="url(#glow)"
                className="dash-anim"
              />
            );
          })}
        </svg>
      )}

      {/* Project Cards */}
      {centerX &&
        centerY &&
        projects.map((project, index) => {
          const angle = index * angleStep + rotation;
          const x = centerX + outerRadius * Math.cos(angle);
          const y = centerY + outerRadius * Math.sin(angle);

          return (
            <div
              key={project.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-56 p-4 rounded-2xl text-white font-semibold bg-white/6 backdrop-blur-lg border border-white/10 shadow-xl hover:scale-110 transition-transform duration-500 cursor-pointer"
              style={{
                top: y,
                left: x,
                zIndex: 20,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-24 object-cover rounded-lg mb-3 border border-white/10"
              />
              <p className="text-lg font-bold mb-2 text-center">{project.name}</p>
              <div className="flex justify-center gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded hover:opacity-80"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 rounded hover:opacity-80"
                >
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
    </section>
  );
}
