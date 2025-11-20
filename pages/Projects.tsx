import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition, RevealText, ParallaxImage } from '../components/Animations';
import { Project, Page } from '../types';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sécurisation Entrepôt Logistique',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    category: 'Industriel',
    client: 'Groupe Transport',
    description: 'Installation d\'un système complet de vidéoprotection (45 caméras) et contrôle d\'accès biométrique pour un hub logistique de 10 000m².'
  },
  {
    id: '2',
    title: 'Gardiennage Chantier BTP',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
    category: 'Construction',
    client: 'Promoteur Immobilier',
    description: 'Surveillance physique 24/7 avec maîtres-chiens pour prévenir les vols de matériaux et le vandalisme sur un chantier de construction résidentiel.'
  },
  {
    id: '3',
    title: 'Vidéosurveillance Galerie Marchande',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    category: 'Retail',
    client: 'Centre Commercial',
    description: 'Déploiement d\'un PC de sécurité et installation de caméras dômes motorisées pour la surveillance des flux clients et la prévention de la démarque.'
  },
    {
    id: '4',
    title: 'Rondes Mobiles Zone Industrielle',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop',
    category: 'Mobile',
    client: 'Association ZI',
    description: 'Mise en place de patrouilles mobiles aléatoires nocturnes pour sécuriser un parc d\'activités de 50 entreprises.'
  }
];

interface ProjectsProps {
  view: 'list' | 'details';
  onNavigate: (page: Page) => void;
}

const Projects: React.FC<ProjectsProps> = ({ view, onNavigate }) => {
  if (view === 'details') {
      const project = PROJECTS[0];
      return (
          <PageTransition>
               <div className="h-[80vh] w-full relative">
                  <ParallaxImage src={project.imageUrl} alt={project.title} className="w-full h-full" />
                  <div className="absolute bottom-0 left-0 p-12 md:p-24 bg-gradient-to-t from-burgundy via-burgundy/80 to-transparent w-full">
                      <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6">{project.title}</h1>
                      <div className="flex gap-12 text-cream/80">
                          <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-spymac-red mb-1">Client</div>
                              <div className="text-xl">{project.client}</div>
                          </div>
                          <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-spymac-red mb-1">Type</div>
                              <div className="text-xl">{project.category}</div>
                          </div>
                          <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-spymac-red mb-1">Date</div>
                              <div className="text-xl">Nov 2024</div>
                          </div>
                      </div>
                  </div>
               </div>
               
               <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 grid md:grid-cols-2 gap-20">
                  <div>
                      <h3 className="text-4xl font-serif font-bold text-white mb-8">Le Défi Technique</h3>
                      <p className="text-cream/60 text-lg leading-relaxed mb-8">
                          Ce site logistique présentait de multiples zones aveugles et un flux constant de camions, rendant le contrôle des accès difficile. L'objectif était de couvrir 100% du périmètre extérieur et de sécuriser les zones de chargement contre le vol de fret.
                      </p>
                      <h3 className="text-4xl font-serif font-bold text-white mb-8 pt-8">Notre Intervention</h3>
                      <p className="text-cream/60 text-lg leading-relaxed">
                          Nous avons installé un réseau fibre optique dédié pour supporter 45 caméras IP haute définition. Des barrières infrarouges ont été placées sur le périmètre. Le système est relié à notre centre de télésurveillance pour une levée de doute vidéo immédiate en cas d'alarme.
                      </p>
                  </div>
                  <div className="space-y-8">
                      <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                          <Shield className="w-8 h-8 text-spymac-red mb-4" />
                          <h4 className="text-xl font-bold text-white mb-2">Matériel Installé</h4>
                          <ul className="space-y-2 text-cream/50 mt-4">
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-spymac-red"/> 30 Caméras fixes IP67</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-spymac-red"/> 15 Dômes motorisés PTZ</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-spymac-red"/> Serveur NVR 64 canaux</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-spymac-red"/> Barrières infrarouges actives</li>
                          </ul>
                      </div>
                      <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                           <Shield className="w-8 h-8 text-green-500 mb-4" />
                          <h4 className="text-xl font-bold text-white mb-2">Résultat</h4>
                          <p className="text-cream/50">Zéro intrusion détectée depuis la mise en service. Réduction de 40% des coûts liés à la démarque inconnue sur les quais de chargement.</p>
                      </div>
                  </div>
               </div>
               <div className="px-6 md:px-12 pb-32 grid md:grid-cols-2 gap-8">
                  <img src="https://images.unsplash.com/photo-1590178997917-7294d79e8687?q=80&w=1000&auto=format&fit=crop" className="w-full h-[400px] object-cover rounded-3xl" alt="Control Room" />
                  <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop" className="w-full h-[400px] object-cover rounded-3xl" alt="Camera" />
               </div>
               <div className="flex justify-center pb-20">
                   <button onClick={() => onNavigate('operations')} className="border border-white/20 px-8 py-3 rounded-full text-white hover:bg-white hover:text-burgundy transition-colors uppercase text-xs font-bold tracking-widest">
                       Retour aux Réalisations
                   </button>
               </div>
          </PageTransition>
      )
  }

  return (
    <PageTransition className="min-h-screen pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="mb-20">
        <RevealText>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-cream">
            NOS <span className="text-spymac-red">RÉALISATIONS</span>
          </h1>
        </RevealText>
        <p className="text-xl text-cream/60 mt-4 max-w-2xl">Découvrez nos installations techniques et nos dispositifs de sécurité physique sur le terrain.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => onNavigate('operation-details')}
          >
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/50 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-spymac-red text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                        <h3 className="text-3xl font-serif font-bold text-white mb-2">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-burgundy transition-all">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Projects;