import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Icons } from './Icons';
import { View } from '../types';

const data = [
  { name: '1月', value: 2400 },
  { name: '2月', value: 3398 },
  { name: '3月', value: 5800 },
  { name: '4月', value: 6908 },
  { name: '5月', value: 8800 },
  { name: '6月', value: 9800 },
  { name: '7月', value: 11300 },
];

interface BentoGridProps {
    onChangeView: (view: View) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onChangeView }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12">
        <div>
            <span className="text-medical font-medium tracking-wider text-sm uppercase block mb-2">The Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-serif text-deep">稻田光合生态圈</h2>
        </div>
        <p className="text-cold text-sm md:text-base max-w-md mt-4 md:mt-0 font-light text-right">
            以“云病理”为链接，以“分子”为深度，以“人才”为源动力。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        
        {/* Card 1: Cloud Pathology+ (Tall, Left) */}
        <div 
            onClick={() => onChangeView(View.SERVICES)}
            className="md:col-span-1 md:row-span-2 rounded-2xl bg-white p-6 shadow-soft border border-gray-50 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-medical transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div>
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                <Icons.Activity size={24} />
            </div>
            <h3 className="text-xl font-serif text-deep mb-2">云病理+</h3>
            <p className="text-sm text-cold font-light leading-relaxed mb-4">
              打破物理空间限制，构建全场景动态服务管理。
            </p>
            <ul className="space-y-2">
                <li className="text-xs text-deep/70 flex items-center gap-2">
                    <span className="w-1 h-1 bg-medical rounded-full"></span> 远程数字会诊
                </li>
                <li className="text-xs text-deep/70 flex items-center gap-2">
                    <span className="w-1 h-1 bg-medical rounded-full"></span> 区域病理中心
                </li>
                 <li className="text-xs text-deep/70 flex items-center gap-2">
                    <span className="w-1 h-1 bg-medical rounded-full"></span> 数字化质控
                </li>
            </ul>
          </div>
          <div className="mt-8 flex justify-end">
             <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-medical group-hover:border-medical group-hover:text-white transition-all">
                <Icons.ArrowRight size={14} />
             </div>
          </div>
        </div>

        {/* Card 2: Molecular Pathology (Wide, Top) */}
        <div 
            onClick={() => onChangeView(View.SERVICES)}
            className="md:col-span-2 md:row-span-1 rounded-2xl bg-deep p-8 shadow-soft flex flex-col md:flex-row items-center justify-between group cursor-pointer hover:shadow-lg transition-all relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-medical/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 flex-1">
             <div className="flex items-center gap-2 text-medical mb-3">
                <Icons.Dna size={20} />
                <span className="text-xs font-medium uppercase tracking-wider">核心深度</span>
             </div>
             <h3 className="text-2xl font-serif text-white mb-2">分子病理</h3>
             <p className="text-white/60 text-sm font-light max-w-sm">
                整合 NGS 与多组学技术，为肿瘤精准诊疗提供决定性依据。
             </p>
          </div>
          <div className="mt-6 md:mt-0 relative z-10 pl-6 border-l border-white/10 hidden md:block">
             <div className="text-3xl font-light text-white mb-1">99.9%</div>
             <div className="text-xs text-white/40 uppercase">检测特异性</div>
          </div>
        </div>

        {/* Card 3: Talent Empowerment (Square, Right Top) */}
        <div 
            onClick={() => onChangeView(View.EXPERTS)}
            className="md:col-span-1 md:row-span-1 rounded-2xl bg-white p-6 shadow-soft border border-gray-50 flex flex-col justify-center items-center text-center group cursor-pointer hover:border-medical/30 transition-all"
        >
            <div className="w-14 h-14 rounded-full bg-section mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-deep">
                <Icons.User size={24} />
            </div>
            <h3 className="text-lg font-serif text-deep mb-1">技术人才赋能</h3>
            <p className="text-xs text-cold font-light mb-4">专家资源库 & 人才培养</p>
            <span className="text-medical text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                进入名人堂 <Icons.ArrowRight size={12} />
            </span>
        </div>

        {/* Card 4: AI/Data (Wide, Bottom Center) */}
        <div className="md:col-span-2 md:row-span-1 rounded-2xl bg-white p-6 shadow-soft border border-gray-50 flex flex-col relative overflow-hidden">
             <div className="flex justify-between items-start z-10 mb-4">
                <div>
                    <h3 className="text-lg font-serif text-deep">技术应用创新</h3>
                    <p className="text-xs text-cold font-light">AI 辅助诊断效率趋势</p>
                </div>
                <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                    +90% 效率提升
                </div>
             </div>
             <div className="flex-1 w-full h-full absolute bottom-0 left-0 right-0 opacity-20 hover:opacity-30 transition-opacity">
                 <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0099A8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0099A8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#0099A8" strokeWidth={2} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
        </div>

        {/* Card 5: Sub-specialties (Square, Bottom Right) */}
        <div 
             onClick={() => onChangeView(View.SERVICES)}
             className="md:col-span-1 md:row-span-1 rounded-2xl bg-section p-6 flex flex-col justify-center hover:bg-medical hover:text-white transition-colors group cursor-pointer"
        >
            <Icons.Microscope size={32} className="text-medical mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-lg font-serif text-deep mb-2 group-hover:text-white transition-colors">亚专科能力</h3>
            <p className="text-xs text-cold group-hover:text-white/80 transition-colors">
                覆盖肿瘤、遗传、感染等全病种诊断能力。
            </p>
        </div>

      </div>
    </div>
  );
};