import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TeamMember, Page } from '../types';
import { PageTransition, RevealText, ParallaxImage } from '../components/Animations';

const TEAM: TeamMember[] = [
  { id: '1', name: 'Benjamin Smith', role: 'Escorte Sécurité', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop' },
  { id: '2', name: 'Helena Robert', role: 'Consultante Sécurité', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
  { id: '3', name: 'Nicholas Foster', role: 'Agent de Sécurité', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop' },
  { id: '4', name: 'Sara Fox', role: 'Agent de Sécurité', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
];

interface AboutProps {
    onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <PageTransition className="min-h-screen">
      {/* History / Intro */}
      <div className="pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RevealText>
                <h1 className="text-6xl md:text-8xl font-serif font-bold text-cream mb-12 leading-none">
                ORIGINES <br/>
                <span className="text-white/10">D'ÉLITE</span>
                </h1>
            </RevealText>
            <div className="w-24 h-1 bg-spymac-red mb-12"></div>
            <p className="text-xl text-cream/70 leading-relaxed mb-8">
              Fondée en 2005 par d'anciens membres des forces spéciales, Minan Sécurité a débuté avec une mission unique : fournir une sécurité sans compromis à ceux qui ne peuvent se permettre la moindre erreur.
            </p>
            <p className="text-xl text-cream/70 leading-relaxed">
              Aujourd'hui, nous opérons dans plus de 40 pays, protégeant des actifs, des infrastructures et des vies grâce à un mélange d'expertise tactique et de technologie de pointe.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0 border border-white/20 translate-x-4 translate-y-4"></div>
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=1000&auto=format&fit=crop" 
              alt="Centre de Commandement" 
              className="w-full h-full grayscale contrast-125 relative z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <section className="bg-burgundy-light py-32 px-4 md:px-12 border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
         <div className="max-w-5xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-serif font-bold text-white mb-16 text-center"
            >
              CHAÎNE DE COMMANDEMENT
            </motion.h2>
            
            {TEAM.map((member, i) => (
                <motion.div 
                  key={member.id} 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  onClick={() => onNavigate('team-details')}
                  className="group flex items-center justify-between border-b border-white/10 py-10 hover:bg-white/5 transition-all px-6 cursor-pointer"
                >
                    <div className="flex items-center gap-10">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden relative">
                             <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div>
                            <h4 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-spymac-red transition-colors">{member.name}</h4>
                            <p className="text-white/40 font-sans text-sm uppercase tracking-wider">{member.role}</p>
                        </div>
                    </div>
                    <ArrowRight className="text-white/10 w-10 h-10 group-hover:text-white group-hover:translate-x-4 transition-all duration-300" />
                </motion.div>
            ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default About;