import React from 'react';
import { Expert } from '../types';
import { Icons } from './Icons';

const experts: Expert[] = [
    {
        id: '1',
        name: '赵 钢',
        title: '主任医师 / 教授',
        specialty: '神经病理',
        description: '第四军医大学西京医院病理科主任，中华医学会病理学分会委员。长期从事神经系统肿瘤的病理诊断与研究。',
        imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: '2',
        name: '邱 英',
        title: '主任医师',
        specialty: '分子病理',
        description: '西安交通大学第一附属医院病理科副主任，擅长肿瘤分子病理诊断及个体化治疗检测。',
        imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: '3',
        name: '李增山',
        title: '教授 / 博士生导师',
        specialty: '消化道病理',
        description: '空军军医大学西京消化病医院病理科主任，中国抗癌协会肿瘤病理专业委员会常委。',
        imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2664&auto=format&fit=crop'
    },
    {
        id: '4',
        name: '闫庆国',
        title: '主任医师',
        specialty: '胸部肿瘤病理',
        description: '陕西省肿瘤医院病理科主任，专注于肺癌及纵隔肿瘤的疑难病理诊断。',
        imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop'
    },
     {
        id: '5',
        name: '程 虹',
        title: '副主任医师',
        specialty: '妇科病理',
        description: '西安市第四医院病理科主任，陕西省医学会病理学分会委员，擅长妇科肿瘤病理诊断。',
        imageUrl: 'https://images.unsplash.com/photo-1594824476969-51c44d7eccca?q=80&w=2670&auto=format&fit=crop'
    }
];

export const Experts: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10 hidden md:block"></div>
            <div className="inline-block bg-white px-8">
                <span className="px-3 py-1 bg-medical/10 text-medical rounded-full text-xs font-medium tracking-wide mb-4 inline-block">
                    技术人才赋能 · Talent Empowerment
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-deep mb-6">稻田光合专家名人堂</h1>
                <p className="text-cold font-light max-w-2xl mx-auto text-lg leading-relaxed">
                    以<span className="text-deep font-normal">“专家资源+人才培养”</span>为源动力，构建病理诊断的顶级智库。
                    <br/>汇聚行业权威，赋能基层医疗，实现技术的精准下沉。
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert) => (
                <div key={expert.id} className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-500 hover:-translate-y-1">
                    <div className="aspect-[4/3] overflow-hidden bg-section relative">
                        {/* Grayscale filter removed on hover */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                            style={{ backgroundImage: `url(${expert.imageUrl})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                            <h3 className="text-2xl font-serif mb-1">{expert.name}</h3>
                            <p className="text-medical text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                                <span className="w-8 h-px bg-medical"></span>
                                {expert.title}
                            </p>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                             <span className="px-2 py-0.5 rounded-sm bg-section text-deep text-[10px] font-medium uppercase tracking-wider">{expert.specialty}</span>
                        </div>
                        <p className="text-cold text-sm font-light leading-relaxed line-clamp-3 mb-6">
                            {expert.description}
                        </p>
                        
                        <button className="flex items-center gap-2 text-medical text-xs font-medium hover:gap-3 transition-all">
                            查看详细履历 <Icons.ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            ))}
            
            {/* Join Us Card */}
             <div className="group relative bg-section border border-dashed border-gray-300 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center hover:border-medical transition-colors cursor-pointer min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-cold mb-4 group-hover:text-medical group-hover:scale-110 transition-all shadow-sm">
                    <Icons.User size={32} />
                </div>
                <h3 className="text-xl font-serif text-deep mb-2">加入专家智库</h3>
                <p className="text-cold text-sm font-light max-w-xs leading-relaxed mb-6">
                    如果您是病理学领域的专家，欢迎加入稻田光合，共同推动行业技术发展与人才培养。
                </p>
                <button className="px-6 py-2 border border-deep/20 text-deep text-sm rounded-sm hover:bg-deep hover:text-white transition-all">
                    联系我们
                </button>
             </div>
        </div>
      </div>
    </div>
  );
};