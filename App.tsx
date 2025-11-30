import React, { useState } from 'react';
import { View } from './types';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Reports } from './components/Reports';
import { Experts } from './components/Experts';
import { LoadingBar } from './components/LoadingBar';
import { Icons } from './components/Icons';

export default function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onChangeView={setCurrentView} />;
      case View.SERVICES:
        return <Services />;
      case View.REPORT:
        return <Reports />;
      case View.EXPERTS:
        return <Experts />;
      case View.PROFILE:
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 bg-section rounded-full flex items-center justify-center text-cold mb-4">
                    <Icons.User size={32} />
                </div>
                <h2 className="text-xl font-serif text-deep">个人中心</h2>
                <p className="text-cold font-light mt-2">请登录以管理您的预约信息。</p>
                <button className="mt-6 px-6 py-2 border border-medical text-medical rounded-sm hover:bg-medical hover:text-white transition-colors">
                    登录
                </button>
            </div>
        );
      default:
        return <Home onChangeView={setCurrentView} />;
    }
  };

  return (
    <>
      <LoadingBar />
      <Layout currentView={currentView} onChangeView={setCurrentView}>
        {renderContent()}
      </Layout>
    </>
  );
}