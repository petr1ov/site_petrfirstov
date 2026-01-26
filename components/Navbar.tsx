
import React from 'react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] glass-morphism border-b border-white/5 h-14 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex justify-between items-center">
        <button 
          onClick={() => onPageChange('home')}
          className="text-white font-bold tracking-tighter text-xl hover:opacity-80 transition-opacity flex items-center gap-1"
        >
          FIRSTOV<span className="text-zinc-500">.AI</span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1 hidden sm:block">Ecosystem</span>
        </button>
        <div className="flex gap-4 md:gap-8 text-[12px] md:text-[13px] font-medium text-zinc-400">
          <button 
            onClick={() => onPageChange('home')}
            className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-white' : ''}`}
          >
            AI
          </button>
          <button 
            onClick={() => onPageChange('yoga')}
            className={`hover:text-white transition-colors ${currentPage === 'yoga' ? 'text-white' : ''}`}
          >
            Yoga
          </button>
          <button 
            onClick={() => onPageChange('dashboard')}
            className={`hover:text-white transition-colors ${currentPage === 'dashboard' ? 'text-white' : ''}`}
          >
            Game
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
