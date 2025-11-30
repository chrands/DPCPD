import React from 'react';
import { View } from '../types';
import { BentoGrid } from './BentoGrid';
import { Icons } from './Icons';
import { BioCanvas } from './BioCanvas';

interface HomeProps {
    onChangeView: (view: View) => void;
}

export const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center bg-deep">
        
        {/* Background Layer 1: Static Dark Gradient/Image */}
        <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 scale-105"
            style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2500&auto=format&fit=crop")',
            }}
        />
        
        {/* Background Layer 2: Color Overlay to Brand */}
        <div className="absolute inset-0 bg-gradient-to-b from-medical/10 to-deep/95 mix-blend-multiply pointer-events-none z-10" />
        
        {/* Background Layer 3: Interactive Particles */}
        <div className="absolute inset-0 z-0">
             <BioCanvas />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-6xl px-6 pt-10 pointer-events-none">
          {/* Enable pointer events for buttons */}
          
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pointer-events-auto">
             <span className="w-2 h-2 rounded-full bg-medical animate-pulse"></span>
             <span className="text-white/80 text-xs tracking-widest uppercase">Photosynthesis Model</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            稻田光合
          </h1>
          
          <div className="h-px w-24 bg-medical mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            三大内核形成<span className="text-medical font-medium mx-2">“病理精准”</span>飞轮效应
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 text-left md:text-center pointer-events-auto">
             <div className="p-4 border-l-2 md:border-l-0 md:border-t-2 border-medical/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-lg font-medium text-white mb-1">云病理+</h3>
                <p className="text-sm text-gray-400 font-light">打破时空限制的远程诊断体系</p>
             </div>
             <div className="p-4 border-l-2 md:border-l-0 md:border-t-2 border-medical/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-lg font-medium text-white mb-1">分子病理</h3>
                <p className="text-sm text-gray-400 font-light">赋能精准医疗的整合式诊断</p>
             </div>
             <div className="p-4 border-l-2 md:border-l-0 md:border-t-2 border-medical/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-lg font-medium text-white mb-1">技术人才赋能</h3>
                <p className="text-sm text-gray-400 font-light">专家资源与人才培养蓄水池</p>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <button 
                onClick={() => onChangeView(View.SERVICES)}
                className="w-full sm:w-auto px-10 py-4 bg-medical text-white hover:bg-medical-dark transition-all duration-300 rounded-sm font-medium shadow-glow flex items-center justify-center gap-2 group"
            >
                <Icons.Dna size={18} />
                探索核心业务
            </button>
             <button 
                onClick={() => onChangeView(View.EXPERTS)}
                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white hover:bg-white hover:text-deep transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
            >
                <Icons.User size={18} />
                专家名人堂
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30 z-20 pointer-events-none">
            <Icons.ChevronRight size={24} className="rotate-90" />
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="bg-section -mt-24 relative z-20 rounded-t-[3rem] md:rounded-none pt-12 md:pt-0">
          <BentoGrid onChangeView={onChangeView} />
      </section>
    </div>
  );
};