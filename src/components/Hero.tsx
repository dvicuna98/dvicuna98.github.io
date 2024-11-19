import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-400 text-lg tracking-wider">SOFTWARE ARCHITECT</p>
              <h1 className="text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Diego Vicuña
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed border-l-2 border-blue-400 pl-6">
              Passionate about crafting elegant architectures and leading teams to build 
              scalable solutions. Specialized in event-driven systems and domain-driven design.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="https://github.com/dvicuna98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
              >
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-400/10 transition-all duration-300">
                  <Github size={20} className="group-hover:text-blue-400" />
                </span>
                <span className="text-sm uppercase tracking-wider">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/diego-jeanpierre-vicu%C3%B1a-rodr%C3%ADguez-8b1532203/?locale=en_US" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
              >
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-400/10 transition-all duration-300">
                  <Linkedin size={20} className="group-hover:text-blue-400" />
                </span>
                <span className="text-sm uppercase tracking-wider">LinkedIn</span>
              </a>
              <a 
                href="mailto:diegojeanpierre98@gmail.com"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
              >
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-400/10 transition-all duration-300">
                  <Mail size={20} className="group-hover:text-blue-400" />
                </span>
                <span className="text-sm uppercase tracking-wider">Email</span>
              </a>
            </div>
          </div>

          <button 
            onClick={scrollToExperience}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce p-2 hover:text-blue-400 transition-colors"
            aria-label="Scroll to experience section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </header>
  );
}