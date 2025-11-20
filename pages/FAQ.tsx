import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { PageTransition, RevealText } from '../components/Animations';

const QUESTIONS = [
  {
    q: "Combien de temps faut-il pour installer un système d'alarme et de caméras ?",
    a: "Pour une installation standard (maison ou petit commerce), l'installation se fait généralement en une journée. Pour des sites industriels complexes, nous réalisons d'abord un audit technique, puis planifions l'installation sur plusieurs jours en fonction de la surface à couvrir."
  },
  {
    q: "Proposez-vous de la surveillance 24/7 ?",
    a: "Oui. Nous proposons des services de gardiennage physique avec agents présents sur site 24/7, ainsi que de la télésurveillance vidéo reliée à notre PC de sécurité qui veille sur vos locaux à distance nuit et jour."
  },
  {
    q: "Vos agents sont-ils certifiés ?",
    a: "Absolument. Tous nos agents sont titulaires de leur carte professionnelle CNAPS à jour. Nos agents de sécurité incendie possèdent les diplômes SSIAP (1, 2 ou 3) et nos agents cynophiles sont certifiés avec leur chien."
  },
  {
    q: "Que se passe-t-il si l'alarme se déclenche ?",
    a: "En cas de déclenchement, notre centre de télésurveillance effectue une levée de doute (vidéo ou audio). Si l'intrusion est confirmée, nous envoyons immédiatement une patrouille d'intervention mobile sur place et prévenons les forces de l'ordre si nécessaire."
  },
  {
    q: "Puis-je voir mes caméras sur mon téléphone ?",
    a: "Oui, tous nos systèmes de vidéosurveillance modernes sont connectés. Nous configurons pour vous une application sécurisée sur votre smartphone ou tablette vous permettant de visualiser vos caméras en direct de n'importe où."
  }
];

interface AccordionItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ q, a, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={false}
      className="border-b border-white/10"
    >
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span className={`text-xl md:text-2xl font-serif font-bold transition-colors ${isOpen ? 'text-spymac-red' : 'text-cream group-hover:text-white'}`}>
          {q}
        </span>
        <div className={`p-2 rounded-full border transition-colors ${isOpen ? 'border-spymac-red bg-spymac-red text-white' : 'border-white/20 text-white/50 group-hover:border-white group-hover:text-white'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-cream/60 leading-relaxed max-w-3xl">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageTransition className="min-h-screen pt-40 pb-20 px-6 md:px-12 max-w-[1000px] mx-auto">
      <div className="text-center mb-20">
        <RevealText>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-cream mb-4">
            FAQ
          </h1>
        </RevealText>
        <p className="text-xl text-cream/60">Questions fréquentes sur nos services de sécurité.</p>
      </div>

      <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5 backdrop-blur-sm">
        {QUESTIONS.map((item, i) => (
          <AccordionItem 
            key={i}
            q={item.q}
            a={item.a}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </PageTransition>
  );
};

export default FAQ;