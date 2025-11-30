import React, { useState } from 'react';
import { Icons } from './Icons';

export const Reports: React.FC = () => {
  const [reportId, setReportId] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
        setIsLoading(false);
        alert('演示：报告系统集成将在此触发。');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-section flex items-center justify-center p-6 pb-24 md:pb-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-soft p-8 md:p-10 border border-white">
        
        <div className="text-center mb-10">
            <div className="w-12 h-12 bg-section rounded-full flex items-center justify-center mx-auto mb-4 text-medical">
                <Icons.Lock size={20} />
            </div>
            <h2 className="text-2xl font-serif text-deep mb-2">安全查询</h2>
            <p className="text-cold text-sm font-light">请输入您的信息以获取临床报告。</p>
        </div>

        <form onSubmit={handleSearch} className="space-y-6">
            <div className="space-y-1">
                <label className="text-xs font-medium text-cold uppercase tracking-wider ml-1">报告编号 / 条形码</label>
                <div className="relative group">
                    <Icons.FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-medical transition-colors" size={18} />
                    <input 
                        type="text" 
                        value={reportId}
                        onChange={(e) => setReportId(e.target.value)}
                        className="w-full bg-section border border-transparent rounded-lg py-3 pl-10 pr-4 text-deep outline-none focus:border-medical focus:bg-white transition-all duration-300 placeholder:text-gray-300 font-light"
                        placeholder="例如：NV-2024-8901"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-medium text-cold uppercase tracking-wider ml-1">手机号码</label>
                <div className="relative group">
                    <Icons.User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-medical transition-colors" size={18} />
                    <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-section border border-transparent rounded-lg py-3 pl-10 pr-4 text-deep outline-none focus:border-medical focus:bg-white transition-all duration-300 placeholder:text-gray-300 font-light"
                        placeholder="请输入预留手机号"
                    />
                </div>
            </div>

            <button 
                type="submit"
                disabled={!reportId || !phone || isLoading}
                className={`w-full h-12 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 ${
                    !reportId || !phone ? 'bg-gray-200 cursor-not-allowed' : 'bg-medical hover:bg-medical-dark shadow-glow'
                }`}
            >
                {isLoading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <>
                        查询报告 <Icons.ArrowRight size={18} />
                    </>
                )}
            </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-50 text-center">
            <p className="text-[10px] text-cold">
                数据传输已通过 SSL/TLS 加密。
                <br />符合国家信息安全等级保护标准。
            </p>
        </div>
      </div>
    </div>
  );
};