import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative group h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
    >
      <motion.img 
        src={data.imageUrl} 
        alt={data.title} 
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7 }}
        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

      <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
        <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-2 leading-tight max-w-[80%]">
                {data.title}
            </h3>
        </div>
        
        <motion.span 
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          className="px-4 py-1 rounded-full border border-white/30 text-xs text-white font-sans tracking-wide bg-white/10 backdrop-blur-sm"
        >
            {data.category}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;