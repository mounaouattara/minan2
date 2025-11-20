import React from 'react';

export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  description?: string;
  client?: string;
  date?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: React.ReactNode;
  features?: string[];
}

export type Page = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-details'
  | 'operations' 
  | 'operation-details'
  | 'blog' 
  | 'blog-details'
  | 'pricing' 
  | 'faq' 
  | 'team' 
  | 'team-details'
  | 'contact'
  | 'licenses';