import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Video, Zap, UserCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Sécurité Privée',
    description: 'Agents de sécurité qualifiés (ADS) pour le gardiennage de sites, contrôle d\'accès et protection des biens et des personnes sur site.',
    icon: <UserCheck className="w-10 h-10" />
  },
  {
    id: '2',
    title: 'Installation Caméras',
    description: 'Étude, installation et maintenance de systèmes de vidéosurveillance HD/4K et thermiques. Visualisation à distance sur smartphone.',
    icon: <Video className="w-10 h-10" />
  },
  {
    id: '3',
    title: 'Systèmes d\'Alarme',
    description: 'Installation d\'alarmes anti-intrusion filaires ou sans fil, détecteurs de mouvement et périmétriques connectés au centre de veille.',
    icon: <Eye className="w-10 h-10" />
  },
  {
    id: '4',
    title: 'Sécurité Mobile',
    description: 'Rondes de surveillance aléatoires ou programmées en véhicule pour dissuader les intrusions sur vos parkings et entrepôts.',
    icon: <Lock className="w-10 h-10" />
  },
  {
    id: '5',
    title: 'Sécurité Incendie',
    description: 'Agents SSIAP 1, 2 et 3 pour la prévention des risques incendie dans les ERP et IGH. Gestion des systèmes de sécurité incendie.',
    icon: <Zap className="w-10 h-10" />
  },
  {
    id: '6',
    title: 'Audit & Conseil',
    description: 'Analyse complète de la vulnérabilité de vos biens immobiliers et recommandations pour le renforcement des accès.',
    icon: <Shield className="w-10 h-10" />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto"
    >
      <div className="mb-20">
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif font-bold text-cream mb-6"
        >
          NOS <span className="text-spymac-red">SERVICES</span>
        </motion.h1>
        <motion.p 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-cream/60 max-w-2xl font-light"
        >
          Expertise en sécurité privée, gardiennage et installation de systèmes électroniques.
        </motion.p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
            whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            className="border border-white/10 p-10 rounded-3xl bg-white/0 transition-colors group cursor-default"
          >
            <div className="w-20 h-20 rounded-2xl bg-spymac-red/10 flex items-center justify-center mb-8 group-hover:bg-spymac-red group-hover:text-white text-spymac-red transition-colors">
              {service.icon}
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-spymac-red transition-colors">
              {service.title}
            </h3>
            <p className="text-cream/60 leading-relaxed font-light">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;