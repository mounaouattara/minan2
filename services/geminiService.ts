import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const chatWithSecurityExpert = async (history: {role: string, parts: {text: string}[]}[], userMessage: string) => {
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: "Vous êtes un expert technique chez Minan Sécurité, une entreprise de SÉCURITÉ PRIVÉE leader. Votre domaine d'expertise est le gardiennage (agents de sécurité), la sécurité incendie (SSIAP), la sécurité mobile et l'installation de systèmes de sécurité électronique (Vidéosurveillance, Alarmes). Vous répondez de manière professionnelle, précise et technique en français."
    },
    history: history
  });

  const result = await chat.sendMessage({ message: userMessage });
  return result.text;
};