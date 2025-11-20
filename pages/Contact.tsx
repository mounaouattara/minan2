import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Building2, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
              <h4 className="text-spymac-red font-bold uppercase tracking-widest mb-4">Parlons Sécurité</h4>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-12">
                CONTACTEZ <br/> <span className="text-white/50">NOS SERVICES</span>
              </h1>
          </motion.div>
          
          <div className="space-y-12">
            {[
              { icon: <MapPin />, title: "Siège Social", text: "12 Avenue des Champs-Élysées, 75008 Paris" },
              { icon: <Phone />, title: "Standard & Urgence", text: "+33 1 45 67 89 10 (Disponible 24/7)" },
              { icon: <Mail />, title: "Email", text: "contact@minan-securite.fr" },
              { icon: <Clock />, title: "Horaires Bureaux", text: "Lundi - Vendredi : 09h00 - 18h00" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-start gap-6 group"
              >
                <div className="p-4 rounded-full border border-white/10 text-spymac-red group-hover:bg-spymac-red group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-10 rounded-3xl shadow-2xl"
        >
          <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-burgundy">Formulaire de Contact</h3>
              <p className="text-gray-500 text-sm mt-2">Nos équipes vous répondent sous 2 heures ouvrées.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nom & Prénom</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-spymac-red focus:ring-1 focus:ring-spymac-red transition-all" placeholder="Jean Dupont" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Entreprise</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-spymac-red focus:ring-1 focus:ring-spymac-red transition-all" placeholder="Nom de votre société" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-spymac-red focus:ring-1 focus:ring-spymac-red transition-all" placeholder="email@entreprise.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Téléphone</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-spymac-red focus:ring-1 focus:ring-spymac-red transition-all" placeholder="01 23 45 67 89" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Objet de la demande</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-spymac-red focus:ring-1 focus:ring-spymac-red transition-all appearance-none">
                <option>Demande de devis</option>
                <option>Candidature / Recrutement</option>
                <option>Partenariat</option>
                <option>Autre demande</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-spymac-red focus:ring-1 focus:ring-spymac-red transition-all" placeholder="Détaillez votre besoin..."></textarea>
            </div>

            <button type="button" className="w-full bg-burgundy hover:bg-spymac-red text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all group shadow-lg">
              ENVOYER LE MESSAGE
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;