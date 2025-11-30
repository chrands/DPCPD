import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { Icons } from './Icons';

const servicesData: ServiceItem[] = [
  {
    id: '1',
    category: '分子病理',
    title: '实体肿瘤全景基因检测',
    method: 'NGS (二代测序)',
    description: '检测 500+ 个癌症相关基因的 SNV、Indel、CNV 和融合。该面板旨在为实体肿瘤的靶向治疗和免疫治疗决策提供指导。',
    sensitivity: '99.5%',
    specificity: '99.9%',
    turnaroundTime: '7 个工作日',
    sampleType: 'FFPE 组织 / 外周血'
  },
  {
    id: '2',
    category: '分子病理',
    title: '遗传性肿瘤筛查',
    method: 'NGS + Sanger 验证',
    description: '筛查 BRCA1/2 及 30 多个其他易感基因的胚系突变。',
    sensitivity: '>99%',
    specificity: '>99%',
    turnaroundTime: '14 个工作日',
    sampleType: '外周血 / 唾液'
  },
  {
    id: '3',
    category: '云病理',
    title: '远程数字病理会诊',
    method: 'Digital Pathology',
    description: '通过高精度数字切片扫描与云端传输，邀请国内外顶尖专家进行远程实时会诊，打破地域限制。',
    sensitivity: 'N/A',
    specificity: 'N/A',
    turnaroundTime: '24-48 小时',
    sampleType: '数字切片 / 实体切片'
  },
  {
    id: '4',
    category: '感染病学',
    title: 'mNGS 病原微生物宏基因组检测',
    method: 'Metagenomic NGS',
    description: '无偏倚检测各类临床样本中的细菌、真菌、病毒和寄生虫。',
    sensitivity: '高',
    specificity: '高',
    turnaroundTime: '24-48 小时',
    sampleType: '肺泡灌洗液 / 脑脊液 / 外周血'
  }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const categories = Array.from(new Set(servicesData.map(s => s.category)));

  if (selectedService) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-12 px-6 md:px-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setSelectedService(null)}
          className="flex items-center gap-2 text-cold hover:text-medical transition-colors mb-8 text-sm uppercase tracking-wide"
        >
          <Icons.ChevronRight className="rotate-180" size={16} /> 返回列表
        </button>

        <div className="border-t-4 border-medical pt-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-section text-cold text-xs font-medium rounded-sm uppercase">{selectedService.category}</span>
            <span className="text-medical font-medium text-sm">{selectedService.method}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif text-deep mb-8">{selectedService.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-sm text-cold uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">项目摘要 / Description</h3>
              <p className="text-deep leading-relaxed font-light text-lg mb-8">
                {selectedService.description}
                <sup className="text-medical cursor-pointer hover:underline ml-1" title="Reference available upon request">[1]</sup>
              </p>
              
              <h3 className="text-sm text-cold uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">检测方法学</h3>
              <p className="text-deep/80 leading-relaxed font-light mb-8">
                采用国际领先的技术平台，结合稻田光合“入库-诊断-赋能”的闭环质控体系。
              </p>
            </div>

            <div className="md:col-span-1 bg-section p-6 rounded-lg h-fit">
              <h3 className="text-sm text-cold uppercase tracking-wider mb-6">核心参数</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-cold mb-1">灵敏度</div>
                  <div className="text-3xl font-light text-medical">{selectedService.sensitivity}</div>
                </div>
                <div>
                  <div className="text-xs text-cold mb-1">特异性</div>
                  <div className="text-3xl font-light text-medical">{selectedService.specificity}</div>
                </div>
                <div>
                  <div className="text-xs text-cold mb-1">检测周期 (TAT)</div>
                  <div className="text-xl font-light text-deep">{selectedService.turnaroundTime}</div>
                </div>
                 <div>
                  <div className="text-xs text-cold mb-1">样本类型</div>
                  <div className="text-sm font-light text-deep">{selectedService.sampleType}</div>
                </div>
              </div>
              
               <button className="w-full mt-8 h-12 bg-medical text-white rounded-lg font-medium shadow-glow hover:bg-medical-dark transition-colors text-sm">
                预约检测
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 px-6 md:px-12 max-w-6xl mx-auto">
      
      {/* Header Section aligning with the 3 pillars */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-100 pb-12">
        <div>
            <span className="text-medical text-xs font-medium uppercase tracking-wider mb-2 block">Our Capabilities</span>
            <h1 className="text-4xl md:text-5xl font-serif text-deep mb-6">临床检测与服务</h1>
            <p className="text-cold font-light text-lg">
                基于“云病理+”与“分子病理”双核驱动，提供从常规病理到复杂基因组学的全方位解决方案。
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-section rounded-xl">
                <Icons.Activity className="text-medical mb-3" size={24} />
                <h3 className="text-deep font-medium mb-1">云病理+</h3>
                <p className="text-xs text-cold leading-relaxed">数字化切片扫描、远程专家会诊、AI 辅助筛查，实现病理诊断的即时化与共享化。</p>
            </div>
            <div className="p-6 bg-section rounded-xl">
                <Icons.Dna className="text-medical mb-3" size={24} />
                <h3 className="text-deep font-medium mb-1">分子病理</h3>
                <p className="text-xs text-cold leading-relaxed">NGS 高通量测序、FISH、PCR，深入分子层面，为肿瘤靶向与免疫治疗提供精准导航。</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-20">
        {/* Sidebar Filters (Desktop) */}
        <div className="hidden md:block md:col-span-3 border-r border-gray-100 pr-6 h-fit sticky top-32">
          <h3 className="text-xs font-medium text-cold uppercase tracking-wider mb-4">亚专科分类</h3>
          <ul className="space-y-3">
             <li className="text-medical font-medium cursor-pointer flex items-center justify-between">
                全部项目 <Icons.ChevronRight size={14} />
             </li>
             {categories.map(c => (
                 <li key={c} className="text-deep/60 hover:text-medical cursor-pointer transition-colors font-light flex items-center justify-between group">
                    {c}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-medical">
                        <Icons.ChevronRight size={14} />
                    </span>
                 </li>
             ))}
          </ul>
        </div>

        {/* List */}
        <div className="md:col-span-9 space-y-4">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group border-b border-gray-100 pb-6 pt-2 cursor-pointer hover:bg-gray-50/50 hover:px-4 rounded-lg -mx-4 transition-all duration-300"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg md:text-xl font-medium text-deep group-hover:text-medical transition-colors font-serif">
                  {service.title}
                </h3>
                <span className="text-xs text-medical bg-medical/5 px-2 py-1 rounded-full font-medium">{service.method}</span>
              </div>
              <p className="text-sm text-cold font-light line-clamp-2 mb-3 max-w-2xl">
                {service.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Icons.Flask size={12} /> {service.sampleType}</span>
                <span className="flex items-center gap-1"><Icons.Activity size={12} /> TAT: {service.turnaroundTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};