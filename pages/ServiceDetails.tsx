import React from 'react';
import { PageTransition, ParallaxImage } from '../components/Animations';
import { Page } from '../types';
import { ArrowLeft, CheckCircle, Camera } from 'lucide-react';

interface ServiceDetailsProps {
  onNavigate: (page: Page) => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ onNavigate }) => {
  return (
    <PageTransition>
       {/* Hero */}
       <div className="relative h-[60vh] overflow-hidden">
          <ParallaxImage src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop" alt="CCTV Installation" className="w-full h-full" />
          <div className="absolute inset-0 bg-burgundy/60 flex items-center">
              <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
                  <button onClick={() => onNavigate('services')} className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase text-xs tracking-widest">
                      <ArrowLeft className="w-4 h-4" /> Retour aux Services
                  </button>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">INSTALLATION <br/>VIDÉOSURVEILLANCE</h1>
              </div>
          </div>
       </div>

       <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-[2fr_1fr] gap-20">
            <div>
                <h3 className="text-3xl font-serif font-bold text-white mb-8">Protection Électronique Avancée</h3>
                <p className="text-cream/60 text-lg leading-relaxed mb-8">
                    La vidéosurveillance est la pierre angulaire de la sécurité moderne des biens. Minan Sécurité conçoit, installe et maintient des réseaux de caméras haute définition adaptés à la topologie de vos sites (entrepôts, magasins, chantiers, bureaux).
                </p>
                <p className="text-cream/60 text-lg leading-relaxed mb-12">
                    Nos techniciens certifiés installent des systèmes IP, analogiques ou thermiques, couplés à des enregistreurs numériques sécurisés. L'accès aux images se fait en temps réel via une application smartphone dédiée ou un PC de contrôle, permettant une réactivité immédiate en cas d'incident.
                </p>
                
                <h3 className="text-3xl font-serif font-bold text-white mb-8">Caractéristiques Techniques</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {['Caméras IP 4K / HD', 'Vision Nocturne Infrarouge', 'Détection de Mouvement IA', 'Enregistrement Cloud & Local', 'Accès Smartphone Sécurisé', 'Maintenance 24/7'].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-cream/80 p-4 bg-white/5 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-spymac-red" />
                            {item}
                        </div>
                    ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1590178997917-7294d79e8687?q=80&w=500&auto=format&fit=crop" className="rounded-xl w-full h-48 object-cover" alt="Ecran de contrôle" />
                    <img src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=500&auto=format&fit=crop" className="rounded-xl w-full h-48 object-cover" alt="Installation caméra" />
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl text-burgundy">
                    <Camera className="w-12 h-12 text-spymac-red mb-6" />
                    <h4 className="text-2xl font-serif font-bold mb-4">Devis Installation</h4>
                    <p className="text-gray-600 mb-6">Obtenez une étude personnalisée pour l'équipement de vos locaux en caméras et alarmes.</p>
                    <button onClick={() => onNavigate('contact')} className="w-full bg-burgundy text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-spymac-red transition-colors">
                        Demander un devis
                    </button>
                </div>
                
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6">Catalogue Matériel</h4>
                    <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl cursor-pointer hover:bg-black/40 transition-colors">
                        <span className="text-cream text-sm">Minan_CCTV_2024.pdf</span>
                        <span className="text-spymac-red font-bold text-xs">4.1 MB</span>
                    </div>
                </div>
            </div>
       </div>
    </PageTransition>
  );
};

export default ServiceDetails;