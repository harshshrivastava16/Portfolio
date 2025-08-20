
import { Github, Linkedin, Twitter, Heart,Code, Mail, FileText } from 'lucide-react';
import Dock from './Dock';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const dockItems = [
  { 
    icon: <Github size={24} color="#fff" />, 
    label: 'GitHub', 
    onClick: () => window.open('https://github.com/harshshrivastava16', '_blank') 
  },
  { 
    icon: <Linkedin size={24} color="#0e76a8" />, 
    label: 'LinkedIn', 
    onClick: () => window.open('https://www.linkedin.com/in/harsh-shrivastava-8479b7250', '_blank') 
  },
  { 
    icon: <Code size={24} color="#ffa116" />,  // </> icon for LeetCode
    label: 'LeetCode', 
    onClick: () => window.open('https://leetcode.com/u/harshshrivastava16/', '_blank') 
  },
  { 
    icon: <Mail size={24} color="#ff4d4f" />, 
    label: 'Email', 
    onClick: () => window.open('mailto:your@email.com') 
  },
  { 
    icon: <FileText size={24} color="#fbbf24" />, 
    label: 'Resume', 
    onClick: () => window.open('https://drive.google.com/file/d/1_e-tizYXxLS-9zCdNKzYRWug0B_zjYPS/view', '_blank') 
  },
];
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Dock
          items={dockItems}
          panelHeight={60}
          baseItemSize={48}
          magnification={75}
          className="mb-4"
        />
        
        <div className="border-t border-gray-800 pt-1 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1 text-sm">
            Made with <Heart size={14} className="text-red-500" /> Harsh
          </p>
          <p className="text-gray-500 mt-1 text-xs">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
