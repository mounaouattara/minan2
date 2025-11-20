import React from 'react';
import { PageTransition } from '../components/Animations';
import { Page } from '../types';

interface UtilityProps {
  page: Page;
}

const Utility: React.FC<UtilityProps> = ({ page }) => {
  const renderContent = () => {
    switch (page) {
      case 'licenses':
        return (
             <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold text-xl mb-2">Photographie</h3>
                    <p className="text-cream/60 mb-4">Licence Unsplash</p>
                    <p className="text-sm text-cream/40">Toutes les images utilisées proviennent d'Unsplash et sont libres d'utilisation à des fins commerciales et non commerciales.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold text-xl mb-2">Icônes</h3>
                    <p className="text-cream/60 mb-4">Lucide React</p>
                    <p className="text-sm text-cream/40">Bibliothèque d'icônes open source sous licence ISC.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold text-xl mb-2">Polices</h3>
                    <p className="text-cream/60 mb-4">Google Fonts</p>
                    <p className="text-sm text-cream/40">Zilla Slab et Inter sont sous licence Open Font License.</p>
                </div>
             </div>
        );
      default:
        return <div>Contenu introuvable</div>;
    }
  };

  return (
    <PageTransition className="min-h-screen pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
       <div className="mb-20 border-b border-white/10 pb-10">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream capitalize">
                {page === 'licenses' ? 'Licences & Crédits' : page.replace('-', ' ')}
            </h1>
       </div>
       {renderContent()}
    </PageTransition>
  );
};

export default Utility;