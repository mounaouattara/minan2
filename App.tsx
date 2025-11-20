import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/CreateModal';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Utility from './pages/Utility';
import { Page } from './types';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-2 bg-spymac-red origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const SystemStatusBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-burgundy-light border-b border-white/5 z-[60] flex items-center justify-center">
      <div className="max-w-[1800px] w-full px-6 md:px-12 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-white/60">
           <div className="flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               Systèmes Opérationnels
           </div>
           <div className="hidden md:block">
               Protection Active: <span className="text-white">24/7</span>
           </div>
           <div className="flex items-center gap-2">
               <Globe className="w-3 h-3" />
               Intervention: <span className="text-white">Île-de-France / Rhône</span>
           </div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Smooth scroll to top on page change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'services': return <Services />;
      case 'service-details': return <ServiceDetails onNavigate={setCurrentPage} />;
      case 'about': return <About onNavigate={setCurrentPage} />;
      case 'contact': return <Contact />;
      case 'pricing': return <Pricing />;
      case 'faq': return <FAQ />;
      case 'blog': return <Blog view="list" onNavigate={setCurrentPage} />;
      case 'blog-details': return <Blog view="details" onNavigate={setCurrentPage} />;
      case 'operations': return <Projects view="list" onNavigate={setCurrentPage} />;
      case 'operation-details': return <Projects view="details" onNavigate={setCurrentPage} />;
      case 'team': return <About onNavigate={setCurrentPage} />; 
      case 'team-details': return <About onNavigate={setCurrentPage} />;
      case 'licenses':
        return <Utility page={currentPage} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-burgundy text-cream font-sans selection:bg-spymac-red selection:text-white overflow-x-hidden flex flex-col">
      <SystemStatusBar />
      <ScrollProgress />
      
      {/* Navbar is fixed, passed down prop to handle offset if needed, but CSS handles it */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        onContactClick={() => setIsContactOpen(true)} 
      />

      {/* Main padding top accounts for Status Bar (32px) + Navbar (approx 80-100px) */}
      <main className="flex-grow pt-8"> 
        <AnimatePresence mode="wait">
          {React.cloneElement(renderPage() as React.ReactElement, { key: currentPage })}
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentPage} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}