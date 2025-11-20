import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition, RevealText, ParallaxImage } from '../components/Animations';
import { BlogPost, Page } from '../types';
import { ArrowRight, Calendar, User } from 'lucide-react';

const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Vidéosurveillance : IP vs Analogique, que choisir ?',
    date: '12 Oct 2024',
    category: 'Technique',
    excerpt: 'Comparatif des technologies de caméras pour sécuriser votre entreprise. Pourquoi la transition vers l\'IP est essentielle.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop',
    content: '...'
  },
  {
    id: '2',
    title: 'Sécurisation des chantiers : les indispensables',
    date: '28 Sep 2024',
    category: 'BTP',
    excerpt: 'Comment prévenir le vol de matériaux et de carburant sur les chantiers de construction grâce à la surveillance humaine et électronique.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
    content: '...'
  },
  {
    id: '3',
    title: 'Le rôle de l\'agent de sécurité incendie (SSIAP)',
    date: '15 Sep 2024',
    category: 'Réglementation',
    excerpt: 'Obligations légales et missions des agents SSIAP dans les Établissements Recevant du Public (ERP) et Immeubles de Grande Hauteur (IGH).',
    image: 'https://images.unsplash.com/photo-1584432984462-8a621803b6c3?q=80&w=1000&auto=format&fit=crop',
    content: '...'
  },
  {
    id: '4',
    title: 'Dissuasion : L\'efficacité des rondes aléatoires',
    date: '30 Aou 2024',
    category: 'Gardiennage',
    excerpt: 'Pourquoi les patrouilles mobiles imprévisibles sont plus efficaces que les rondes à horaires fixes pour la protection des zones industrielles.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop',
    content: '...'
  }
];

interface BlogProps {
  view: 'list' | 'details';
  onNavigate: (page: Page) => void;
}

const Blog: React.FC<BlogProps> = ({ view, onNavigate }) => {
  if (view === 'details') {
    const post = POSTS[0];
    return (
      <PageTransition className="pt-32 pb-20">
        <div className="h-[60vh] relative w-full overflow-hidden">
           <ParallaxImage src={post.image} alt={post.title} className="w-full h-full" />
           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="max-w-4xl px-6 text-center">
                <span className="bg-spymac-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                    {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">{post.title}</h1>
                <div className="flex items-center justify-center gap-6 text-white/70 text-sm">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4"/> {post.date}</span>
                    <span className="flex items-center gap-2"><User className="w-4 h-4"/> Minan Technique</span>
                </div>
              </div>
           </div>
        </div>
        <div className="max-w-3xl mx-auto px-6 py-20 text-cream/80 text-lg leading-relaxed space-y-6">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-spymac-red">
                Le choix entre la vidéosurveillance IP (Internet Protocol) et analogique est crucial lors de l'installation d'un nouveau système de sécurité. Bien que l'analogique ait longtemps dominé le marché pour son coût réduit, la technologie IP offre aujourd'hui des avantages indéniables.
            </p>
            <p>
                Une caméra IP traite l'image numériquement en interne, permettant des résolutions bien supérieures (4K et au-delà) et des fonctionnalités intelligentes comme la détection de mouvement avancée ou la lecture de plaques d'immatriculation directement embarquée.
            </p>
            <h3 className="text-3xl font-serif font-bold text-white pt-10">L'avantage du câblage</h3>
            <p>
                L'IP utilise des câbles réseau standard (RJ45) et peut souvent être alimenté par le même câble (PoE - Power over Ethernet), simplifiant grandement l'installation par rapport aux câbles coaxiaux de l'analogique. Pour une entreprise cherchant à pérenniser son installation, l'IP est le choix logique.
            </p>
            <button onClick={() => onNavigate('blog')} className="mt-10 text-spymac-red hover:text-white transition-colors font-bold flex items-center gap-2">
                <ArrowRight className="rotate-180" /> Retour aux Articles
            </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="min-h-screen pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="mb-20 border-b border-white/10 pb-10">
        <RevealText>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-cream">
            ACTUALITÉS <span className="text-spymac-red">SÉCURITÉ</span>
          </h1>
        </RevealText>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
        {POSTS.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
            onClick={() => onNavigate('blog-details')}
          >
            <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8 relative">
                <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                    {post.category}
                </div>
            </div>
            <div className="flex items-center gap-4 text-spymac-red text-xs font-bold tracking-widest mb-4">
                <span>{post.date}</span>
                <span className="w-10 h-px bg-spymac-red/50"></span>
                <span>INFO</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-spymac-red transition-colors leading-tight">
                {post.title}
            </h2>
            <p className="text-cream/50 line-clamp-3 mb-6">
                {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-white text-sm font-bold group-hover:gap-4 transition-all">
                LIRE L'ARTICLE <ArrowRight className="w-4 h-4 text-spymac-red" />
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Blog;