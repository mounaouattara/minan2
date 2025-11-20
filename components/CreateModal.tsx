import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Shield } from 'lucide-react';
import { chatWithSecurityExpert } from '../services/geminiService';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour. Je suis l\'assistant virtuel de Minan Sécurité. Je peux vous renseigner sur nos services de gardiennage, sécurité incendie ou installation d\'alarmes. Comment puis-je vous aider ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-burgundy/90 backdrop-blur-sm" 
            onClick={onClose}
          ></motion.div>
          
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="relative w-full max-w-md bg-cream rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[80vh] sm:h-[600px] border border-spymac-red/20"
          >
            
            {/* Header */}
            <div className="bg-burgundy p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-spymac-red rounded-full flex items-center justify-center shadow-lg shadow-red-900/50">
                        <Shield className="text-white w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-white font-serif text-lg">Minan Conseil</h3>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-white/50 text-xs uppercase tracking-wider">Service Client</span>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-cream">
                {messages.map((msg, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                            msg.role === 'user' 
                            ? 'bg-burgundy text-white rounded-tr-sm shadow-lg' 
                            : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
                        }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-gray-200 shadow-sm flex gap-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                if (!input.trim()) return;
                const userMsg = input;
                setInput('');
                setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
                setIsLoading(true);
                try {
                  const history = messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
                  const response = await chatWithSecurityExpert(history, userMsg);
                  setMessages(prev => [...prev, { role: 'model', text: response || "Je ne peux pas répondre pour le moment." }]);
                } catch (error) {
                  setMessages(prev => [...prev, { role: 'model', text: "Système hors ligne." }]);
                } finally {
                  setIsLoading(false);
                }
              }} 
              className="p-4 bg-white border-t border-gray-100"
            >
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Écrivez votre message..."
                        className="w-full bg-gray-100 text-gray-900 rounded-full py-4 pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    />
                    <button 
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 top-2 p-2 bg-spymac-red rounded-full text-white hover:bg-red-700 transition-colors disabled:opacity-50"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;