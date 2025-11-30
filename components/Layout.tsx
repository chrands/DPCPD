import React from 'react';
import { View } from '../types';
import { Icons } from './Icons';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onChangeView: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onChangeView }) => {
  
  const navItems = [
    { view: View.HOME, label: '首页', icon: Icons.Activity },
    { view: View.EXPERTS, label: '专家团队', icon: Icons.User },
    { view: View.SERVICES, label: '检测服务', icon: Icons.Dna },
    { view: View.REPORT, label: '查报告', icon: Icons.FileText },
  ];

  return (
    <div className="min-h-screen bg-section flex flex-col relative">
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-12 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onChangeView(View.HOME)}>
          <div className="w-8 h-8 rounded-full bg-medical flex items-center justify-center text-white">
            <Icons.Dna size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-wide text-deep leading-none">DPCPD</span>
            <span className="text-[10px] text-medical tracking-wider uppercase">稻田光合</span>
          </div>
        </div>
        
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onChangeView(item.view)}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                currentView === item.view ? 'text-medical font-medium' : 'text-cold hover:text-deep'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="ml-4 px-5 py-2 text-xs border border-medical text-medical hover:bg-medical hover:text-white transition-all duration-300 rounded-sm"
            onClick={() => onChangeView(View.REPORT)}
          >
            查询报告
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-24 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-100 pb-safe z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            const isReport = item.view === View.REPORT;

            if (isReport) {
              return (
                <button
                  key={item.view}
                  onClick={() => onChangeView(item.view)}
                  className="relative -top-5 flex flex-col items-center justify-center"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-glow transition-transform duration-300 ${
                    isActive ? 'bg-medical scale-110' : 'bg-medical text-white'
                  }`}>
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span className={`text-[10px] mt-1 font-medium ${isActive ? 'text-medical' : 'text-cold'}`}>
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <button
                key={item.view}
                onClick={() => onChangeView(item.view)}
                className="flex flex-col items-center justify-center w-full h-full space-y-1"
              >
                <item.icon 
                  size={20} 
                  className={`transition-colors duration-300 ${isActive ? 'text-medical' : 'text-cold'}`} 
                />
                <span className={`text-[10px] ${isActive ? 'text-medical font-medium' : 'text-cold'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};