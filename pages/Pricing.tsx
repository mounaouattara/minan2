import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PageTransition, RevealText } from '../components/Animations';

const PLANS = [
  {
    name: 'SURVEILLANCE MOBILE',
    price: 'Sur Devis',
    period: '',
    features: ['Rondes aléatoires de nuit', 'Vérification extérieure', 'Intervention sur alarme (24/7)', 'Rapport électronique de ronde'],
    cta: 'Demander un devis',
    popular: false
  },
  {
    name: 'GARDIENNAGE SITE',
    price: '23€',
    period: '/heure (est.)',
    features: ['Agent de sécurité qualifié (ADS)', 'Contrôle d\'accès entrées/sorties', 'Surveillance caméras sur site', 'Rondes de prévention incendie', 'Main courante électronique'],
    cta: 'Commander un agent',
    popular: true
  },
  {
    name: 'INSTALLATION CCTV',
    price: 'Pack Pro',
    period: '',
    features: ['Audit de sécurité sur site', 'Installation caméras HD/IP', 'Enregistreur numérique (NVR)', 'Formation utilisation', 'Maintenance annuelle incluse'],
    cta: 'Étude Gratuite',
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <PageTransition className="min-h-screen pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="text-center mb-20">
        <RevealText className="inline-block">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-cream mb-6">
            NOS <span className="text-spymac-red">OFFRES</span>
          </h1>
        </RevealText>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-cream/60 max-w-2xl mx-auto"
        >
          Des solutions adaptées aux besoins des entreprises, commerces et chantiers.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`relative p-10 rounded-3xl border ${plan.popular ? 'border-spymac-red bg-spymac-red/10' : 'border-white/10 bg-white/5'} hover:bg-white/10 transition-colors duration-300 group`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-spymac-red text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl">
                LE PLUS DEMANDÉ
              </div>
            )}
            <h3 className="text-xl font-bold text-white tracking-widest mb-4">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-serif font-bold text-cream">{plan.price}</span>
              <span className="text-cream/50 text-sm">{plan.period}</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-cream/80 text-sm">
                  <Check className="w-4 h-4 text-spymac-red" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold tracking-widest text-sm uppercase transition-all ${plan.popular ? 'bg-spymac-red text-white hover:bg-red-700' : 'bg-white text-burgundy hover:bg-cream'}`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Pricing;