import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Factory, Users, Building2, Radio, Quote, Siren, CheckCircle2, Smartphone, Activity, Dog, Star, Lock, Video, Eye, Truck, ShoppingBag, Play, Fingerprint, FileCheck, Globe, Briefcase, HardHat, Plane, Server, Coffee, ChevronsDown, Camera, Award, Target, ShieldCheck } from 'lucide-react';
import { motion, useScroll, AnimatePresence, useTransform } from 'framer-motion';
import { PageTransition, RevealText, CountUp, StaggerContainer, StaggerItem, ScaleIn } from '../components/Animations';
import { Project, Page } from '../types';

// UPDATED: Strictly K9, Tech, and Patrol images with descriptions
const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop", // Tech/CCTV
    title: "Installation Technique",
    subtitle: "Systèmes de Pointe",
    description: "Déploiement de réseaux de vidéosurveillance 4K et de contrôle d'accès biométrique."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop", // Corporate Window
    title: "Sérénité Corporate",
    subtitle: "Protection des Biens",
    description: "Une surveillance discrète et efficace pour vos bureaux et sièges sociaux."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1622035815120-b1a5e1e2795c?q=80&w=1600&auto=format&fit=crop", // Guard Luxury
    title: "Agents Qualifiés",
    subtitle: "Protection Humaine",
    description: "Des agents de sécurité certifiés pour le contrôle et l'accueil sur vos sites de prestige."
  }
];

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sécurité Industrielle',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    category: 'Logistique'
  },
  {
    id: '2',
    title: 'Surveillance Siège Social',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    category: 'Tertiaire'
  },
  {
    id: '3',
    title: 'Protection Retail',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    category: 'Luxe'
  }
];

const ICONS_MARQUEE = [Shield, Lock, Video, Eye, Siren, Radio, Users, Dog];

const TRUST_LOGOS = [
    { Icon: Truck, name: "TRANSLOG" },
    { Icon: ShoppingBag, name: "MALLCENTER" },
    { Icon: Factory, name: "INDUSCORP" },
    { Icon: Building2, name: "IMMOWEST" },
    { Icon: Plane, name: "AEROFRET" },
    { Icon: Briefcase, name: "BANKHOLDING" },
    { Icon: HardHat, name: "BTP GROUP" },
    { Icon: Globe, name: "TECHGLOBAL" },
    { Icon: Server, name: "DATAFORT" },
    { Icon: Coffee, name: "LUXHOTEL" },
];

interface HomeProps {
    onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      {/* HERO SECTION - Burgundy */}
      <header className="relative min-h-[95vh] bg-burgundy flex flex-col justify-center overflow-hidden pt-20 z-30">
        
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img 
                        src={HERO_SLIDES[currentSlide].image} 
                        alt="Security Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy/80 to-burgundy/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-transparent to-transparent"></div>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Content Container */}
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center pb-32 flex-grow relative z-10">
            
            {/* Text Content */}
            <div className="relative">
                <RevealText delay={0.1}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                            <Star className="w-3 h-3 fill-current text-spymac-red" />
                            Depuis 2005
                        </div>
                        <span className="h-px w-12 bg-white/10"></span>
                        <h4 className="text-cream/60 font-serif text-lg italic">L'Excellence Opérationnelle</h4>
                    </div>
                </RevealText>
                
                <div className="relative mb-8">
                    <RevealText delay={0.2}>
                        <h1 className="text-[5rem] sm:text-[6.5rem] md:text-[8rem] leading-[0.85] font-serif font-bold text-cream tracking-tighter">
                            MINAN
                        </h1>
                    </RevealText>
                    
                    <RevealText delay={0.3}>
                        <h1 className="text-[5rem] sm:text-[6.5rem] md:text-[8rem] leading-[0.85] font-serif font-bold text-cream tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cream to-white/50">
                            SÉCURITÉ
                        </h1>
                    </RevealText>
                </div>

                <RevealText delay={0.4}>
                    <p className="text-xl md:text-2xl text-white/60 font-light max-w-xl mb-10 leading-relaxed pl-6 border-l-2 border-spymac-red/50">
                        <span className="text-white font-semibold">Une référence</span> en protection privée. Maîtres-chiens, installation de caméras et interventions 24/7.
                    </p>
                </RevealText>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <button 
                        onClick={() => onNavigate('contact')}
                        className="relative overflow-hidden bg-spymac-red text-white px-10 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-burgundy transition-colors flex items-center justify-center gap-4 group text-sm shadow-2xl hover:scale-105 transform duration-300"
                    >
                        Demander un devis
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={() => onNavigate('services')}
                        className="border border-white/10 text-white/80 px-10 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-burgundy transition-colors text-sm backdrop-blur-sm flex items-center gap-2"
                    >
                        Nos Solutions
                    </button>
                </motion.div>
            </div>

            {/* Right Side: Interactive Carousel Card */}
            <div className="relative hidden lg:block h-[500px]">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl z-0 bg-burgundy-light"
                >
                     <AnimatePresence mode="wait">
                        <motion.img 
                            key={currentSlide}
                            src={HERO_SLIDES[currentSlide].image}
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/20 to-transparent opacity-40"></div>
                    
                    <div className="absolute top-10 left-0 right-0 overflow-hidden opacity-50">
                        <motion.div 
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                            className="flex gap-12 whitespace-nowrap"
                        >
                             {[...ICONS_MARQUEE, ...ICONS_MARQUEE, ...ICONS_MARQUEE].map((Icon, i) => (
                                 <Icon key={i} className="w-12 h-12 text-white drop-shadow-lg" />
                             ))}
                        </motion.div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:scale-110 transition-transform group z-20">
                        <Play className="w-8 h-8 text-white fill-current ml-1 group-hover:text-spymac-red transition-colors" />
                    </div>

                    <div className="absolute bottom-12 left-10 right-10 z-20">
                        <AnimatePresence mode="wait">
                             <motion.div
                                key={currentSlide}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="bg-burgundy/80 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl"
                             >
                                 <h3 className="text-white font-serif font-bold text-2xl mb-1">{HERO_SLIDES[currentSlide].title}</h3>
                                 <p className="text-spymac-red text-[10px] font-bold uppercase tracking-widest mb-3">{HERO_SLIDES[currentSlide].subtitle}</p>
                                 <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className="overflow-hidden"
                                 >
                                    <p className="text-white/90 text-sm font-light leading-relaxed border-t border-white/10 pt-3">
                                        {HERO_SLIDES[currentSlide].description}
                                    </p>
                                 </motion.div>
                             </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* HERO ARROW */}
        <motion.div 
            style={{ opacity: arrowOpacity }}
            className="absolute bottom-16 left-0 right-0 z-40 flex justify-center pointer-events-none"
        >
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="group flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(159,17,17,0.3)] group-hover:shadow-[0_0_50px_rgba(159,17,17,0.6)] transition-all duration-500">
                    <ChevronsDown className="w-8 h-8 text-white group-hover:text-spymac-red transition-colors duration-300" />
                </div>
            </motion.div>
        </motion.div>
      </header>

      {/* STATS SECTION - Cream Background */}
      <section className="bg-cream py-24 relative z-20">
           <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <StaggerContainer className="grid md:grid-cols-3 gap-12 relative">
                     {/* Stat 1 */}
                     <StaggerItem className="relative md:pr-12 text-center md:text-left group">
                        <div className="text-6xl font-serif font-bold text-burgundy mb-4">
                            <CountUp end={630} suffix="+" />
                        </div>
                        <h4 className="text-sm font-bold text-burgundy/60 mb-2 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                            <Briefcase className="w-4 h-4 text-spymac-red" /> Clients Satisfaits
                        </h4>
                        <p className="text-burgundy/80 text-sm leading-relaxed">Des grands comptes aux commerces locaux, nous bâtissons des relations durables.</p>
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-burgundy/10 -rotate-12"></div>
                     </StaggerItem>
                     
                     {/* Stat 2 */}
                     <StaggerItem className="relative md:px-12 text-center md:text-left group">
                        <div className="text-6xl font-serif font-bold text-burgundy mb-4">
                            <CountUp end={1025} suffix="+" />
                        </div>
                        <h4 className="text-sm font-bold text-burgundy/60 mb-2 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                            <Camera className="w-4 h-4 text-spymac-red" /> Caméras Actives
                        </h4>
                        <p className="text-burgundy/80 text-sm leading-relaxed">Un réseau de vidéoprotection haute définition opérationnel 24h/24.</p>
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-burgundy/10 -rotate-12"></div>
                     </StaggerItem>
                     
                     {/* Stat 3 */}
                     <StaggerItem className="relative md:pl-12 text-center md:text-left group">
                        <div className="text-6xl font-serif font-bold text-burgundy mb-4">
                            <CountUp end={450} suffix="+" />
                        </div>
                        <h4 className="text-sm font-bold text-burgundy/60 mb-2 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                            <Users className="w-4 h-4 text-spymac-red" /> Agents Qualifiés
                        </h4>
                        <p className="text-burgundy/80 text-sm leading-relaxed">Une force humaine formée aux normes les plus strictes (CNAPS, SSIAP).</p>
                     </StaggerItem>
                </StaggerContainer>
           </div>
      </section>

      {/* COLLABORATORS & PARTNERS SECTION */}
      <section className="bg-cream py-12 border-t border-burgundy/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-10 text-center">
                 <h4 className="text-burgundy/40 font-bold uppercase tracking-widest text-xs">Collaborateurs & Partenaires</h4>
            </div>
            <div className="flex overflow-hidden relative">
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    className="flex gap-24 whitespace-nowrap opacity-50"
                >
                    {[...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS].map((client, i) => (
                        <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
                            <client.Icon className="w-8 h-8 text-burgundy" />
                            <span className="text-lg font-bold text-burgundy tracking-widest uppercase">{client.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
      </section>

      {/* SAFEGUARDING BANNER - Burgundy (Dark) */}
      <section className="bg-burgundy py-32 px-6 relative z-10">
           <div className="max-w-6xl mx-auto text-center relative z-10">
                <RevealText>
                    <h3 className="text-3xl md:text-6xl font-serif font-bold text-white leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-spymac-red to-red-400">150,000+ Heures</span> de surveillance assurées chaque année pour garantir votre sérénité.
                    </h3>
                </RevealText>
           </div>
      </section>

      {/* EXPERTS SECTION - Cream (Light) */}
      <section className="bg-cream py-24 px-6 md:px-12 relative z-20">
        <div className="max-w-[1600px] mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <p className="text-spymac-red font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-xs">
                        <Shield className="w-4 h-4" /> Nos Experts
                    </p>
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy">UNITÉS D'ÉLITE</h2>
                    </div>
                </div>
                <button onClick={() => onNavigate('services')} className="hidden md:flex items-center gap-2 text-burgundy/60 hover:text-burgundy transition-colors uppercase tracking-widest text-xs border-b border-burgundy/10 pb-1 font-bold">
                    Voir tous les services <ArrowRight className="w-4 h-4" />
                </button>
             </div>

             {/* Compact Grid - Cards are Dark on Light Background */}
             <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 
                 {/* Card 1: ADS */}
                 <StaggerItem 
                    onClick={() => onNavigate('services')}
                    className="group cursor-pointer bg-burgundy rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
                 >
                    <div className="h-56 overflow-hidden relative">
                         <img 
                            src="https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=500&auto=format&fit=crop" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                            alt="ADS" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-burgundy to-transparent"></div>
                    </div>
                    <div className="p-6 relative -mt-8">
                        <div className="w-12 h-12 bg-spymac-red rounded-lg flex items-center justify-center mb-4 shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-spymac-red transition-colors">ADS</h3>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Agent de Sécurité</p>
                    </div>
                 </StaggerItem>

                 {/* Card 2: K9 */}
                 <StaggerItem 
                    onClick={() => onNavigate('services')}
                    className="group cursor-pointer bg-burgundy rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
                 >
                    <div className="h-56 overflow-hidden relative">
                         <img 
                            src="https://images.unsplash.com/photo-1588413322880-44117878e85c?q=80&w=500&auto=format&fit=crop" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                            alt="K9" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-burgundy to-transparent"></div>
                    </div>
                    <div className="p-6 relative -mt-8">
                        <div className="w-12 h-12 bg-spymac-red rounded-lg flex items-center justify-center mb-4 shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                            <Dog className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-spymac-red transition-colors">CYNOPHILE</h3>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Maître-Chien</p>
                    </div>
                 </StaggerItem>

                 {/* Card 3: SSIAP */}
                 <StaggerItem 
                    onClick={() => onNavigate('services')}
                    className="group cursor-pointer bg-burgundy rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
                 >
                    <div className="h-56 overflow-hidden relative bg-burgundy-light flex items-center justify-center group-hover:bg-white/5 transition-colors">
                        <Radio className="w-20 h-20 text-white/10 group-hover:text-white/20 transition-colors" />
                        <div className="absolute inset-0 bg-gradient-to-t from-burgundy to-transparent"></div>
                    </div>
                    <div className="p-6 relative -mt-8">
                        <div className="w-12 h-12 bg-spymac-red rounded-lg flex items-center justify-center mb-4 shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                            <Siren className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-spymac-red transition-colors">SSIAP</h3>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Sécurité Incendie</p>
                    </div>
                 </StaggerItem>

                 {/* Card 4: MOBILE */}
                 <StaggerItem 
                    onClick={() => onNavigate('services')}
                    className="group cursor-pointer bg-burgundy rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
                 >
                    <div className="h-56 overflow-hidden relative">
                         <img 
                            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=500&auto=format&fit=crop" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                            alt="Mobile" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-burgundy to-transparent"></div>
                    </div>
                    <div className="p-6 relative -mt-8">
                        <div className="w-12 h-12 bg-spymac-red rounded-lg flex items-center justify-center mb-4 shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                            <Truck className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-spymac-red transition-colors">RONDIER</h3>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Intervention Mobile</p>
                    </div>
                 </StaggerItem>
             </StaggerContainer>
        </div>
      </section>

      {/* PROCESS SECTION - Burgundy (Dark) */}
      <section className="bg-burgundy pt-32 pb-24 px-6 md:px-12 relative z-10">
           <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <div className="flex items-center gap-4">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">LE PROCESSUS</h2>
                        </div>
                        <p className="text-white/50 max-w-md pl-1">Une méthodologie rigoureuse pour une protection sans faille.</p>
                    </div>
                    <div className="hidden md:block h-px w-64 bg-white/10 mb-4"></div>
                </div>

                <StaggerContainer className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: FileCheck, title: "Audit & Analyse", desc: "Diagnostic des vulnérabilités." },
                        { icon: Fingerprint, title: "Stratégie", desc: "Plan de sécurité sur mesure." },
                        { icon: Shield, title: "Déploiement", desc: "Mise en place des agents et systèmes." }
                    ].map((step, i) => (
                        <StaggerItem key={i} className="relative bg-white/5 border border-white/5 p-10 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="text-6xl font-serif font-bold text-white/5 absolute top-4 right-6">0{i+1}</div>
                            <div className="w-16 h-16 bg-spymac-red/10 text-spymac-red rounded-full flex items-center justify-center mb-6 border border-spymac-red/20">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-white/60 leading-relaxed">{step.desc}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
           </div>
      </section>

      {/* PROJECTS - Cream (Light) */}
      <section className="bg-cream py-32 px-6 md:px-12 relative z-20">
        <div className="max-w-[1600px] mx-auto relative z-10">
           <div className="flex justify-between items-end mb-12">
                <div>
                     <div className="flex items-center gap-4">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-burgundy mb-4">NOS MISSIONS</h2>
                     </div>
                </div>
                <button onClick={() => onNavigate('operations')} className="hidden md:block border border-burgundy/20 px-8 py-3 rounded-full text-burgundy hover:bg-burgundy hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
                    Toutes nos références
                </button>
           </div>

           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, i) => (
                    <StaggerItem
                        key={i}
                        onClick={() => onNavigate('operation-details')}
                        className="relative h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl"
                    >
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <span className="bg-white text-burgundy px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">{project.category}</span>
                            <h3 className="text-2xl font-serif font-bold text-white leading-tight">{project.title}</h3>
                        </div>
                    </StaggerItem>
                ))}
           </StaggerContainer>
        </div>
      </section>

      {/* MASSIVE CTA - Burgundy (Dark) */}
      <section className="bg-burgundy py-32 px-6 text-center relative overflow-hidden">
           <div className="relative z-10 max-w-4xl mx-auto pt-10">
               <ScaleIn>
                    <div className="flex items-center justify-center gap-6 mb-6">
                        <h2 className="text-5xl md:text-8xl font-serif font-bold text-cream">SÉCURITÉ ABSOLUE</h2>
                    </div>
               </ScaleIn>
               <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-light">Nos experts sont prêts à intervenir. Réponse garantie sous 2 heures.</p>
               <button onClick={() => onNavigate('contact')} className="bg-spymac-red text-white px-12 py-6 rounded-full text-lg font-bold tracking-widest uppercase hover:bg-white hover:text-burgundy transition-all shadow-2xl hover:scale-105 transform">
                   Démarrer mon projet
               </button>
           </div>
      </section>
    </PageTransition>
  );
};

export default Home;