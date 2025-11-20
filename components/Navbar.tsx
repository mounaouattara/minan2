import React, { useState } from 'react';
import { Menu, ChevronDown, Phone, Shield } from 'lucide-react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onContactClick }) => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const navLinks = [
    { label: 'ACCUEIL', value: 'home' },
    { label: 'SOCIÉTÉ', value: 'about', dropdown: [
        { label: 'Qui sommes-nous', value: 'about' },
        { label: 'Notre Équipe', value: 'team' },
        { label: 'Nos Certifications', value: 'about' }, 
      ] 
    },
    { label: 'SERVICES', value: 'services' },
    { label: 'RÉALISATIONS', value: 'operations' },
    { label: 'CONTACT', value: 'contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-6 md:px-12 py-4 flex items-center justify-between max-w-[1800px] mx-auto w-full z-50 fixed top-8 left-0 right-0 bg-burgundy/95 backdrop-blur-md border-b border-white/5 shadow-xl"
    >
      {/* LEFT: LOGO */}
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => onNavigate('home')}
      >
        <Shield className="w-8 h-8 text-spymac-red fill-current group-hover:scale-110 transition-transform duration-300" />
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-serif font-bold text-cream leading-none tracking-wide group-hover:text-white transition-colors">MINAN</span>
          <span className="text-[8px] font-bold tracking-[0.4em] text-spymac-red uppercase">SÉCURITÉ PRIVÉE</span>
        </div>
      </div>

      {/* CENTER: LINKS */}
      <div className="hidden lg:flex gap-8 text-xs font-bold tracking-widest text-cream/70">
        {navLinks.map((item) => (
          <div 
            key={item.label}
            className="relative group"
            onMouseEnter={() => setHoveredMenu(item.label)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button
              onClick={() => !item.dropdown && onNavigate(item.value as Page)}
              className={`flex items-center gap-1 py-2 transition-colors hover:text-spymac-red ${
                currentPage === item.value || (item.dropdown && item.dropdown.some(d => d.value === currentPage)) 
                ? 'text-white' 
                : ''
              }`}
            >
              {item.label}
              {item.dropdown && <ChevronDown className="w-3 h-3" />}
            </button>
            
            <AnimatePresence>
              {item.dropdown && hoveredMenu === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 bg-white py-4 min-w-[200px] shadow-2xl rounded-sm overflow-hidden border-t-4 border-spymac-red"
                >
                  {item.dropdown.map((subItem) => (
                    <button
                      key={subItem.value}
                      onClick={() => onNavigate(subItem.value as Page)}
                      className="block w-full text-left px-6 py-3 text-burgundy/80 hover:text-spymac-red hover:bg-gray-50 transition-colors uppercase text-[10px] tracking-widest font-bold"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* RIGHT: ACTION */}
      <div className="flex items-center gap-6">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-3 bg-spymac-red text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg animate-pulse hover:animate-none"
        >
            <Phone className="w-3 h-3 fill-current" />
            URGENCE 24/7
        </motion.button>
        
        {/* Mobile Menu Button */}
         <button className="lg:hidden text-white flex">
            <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;