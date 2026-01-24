
import React from 'react';
import { DiseaseInfo } from '../types';
import { MEDICATIONS } from '../constants';

interface ReportProps {
  reportData: DiseaseInfo;
  onGoPharmacy: () => void;
}

const Report: React.FC<ReportProps> = ({ reportData, onGoPharmacy }) => {
  // Filter recommended medications based on the IDs in the disease info
  const recommendedMeds = MEDICATIONS.filter(med => reportData.recommendations.includes(med.id));

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-12 animate-fadeIn grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="p-10 border-b border-slate-50 bg-white">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold tracking-widest uppercase">AI 实时分析报告</span>
                  <span className="text-[11px] font-bold text-slate-300">#{reportData.id}</span>
                </div>
                <h2 className="text-slate-900 text-4xl md:text-5xl font-black tracking-tight">
                  {reportData.name} <span className="text-slate-300 font-light text-2xl ml-2 tracking-normal">{reportData.latinName}</span>
                </h2>
                <div className="flex flex-wrap items-center gap-8 pt-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between w-48">
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">诊断置信度</span>
                      <span className="text-navy font-bold text-sm">{reportData.confidence}%</span>
                    </div>
                    <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-navy" style={{ width: `${reportData.confidence}%` }}></div>
                    </div>
                  </div>
                  <div className="h-10 w-px bg-slate-100 hidden sm:block"></div>
                  <div className="flex flex-col gap-1 text-slate-500">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">严重程度</span>
                    <div className={`flex items-center gap-2 font-bold text-sm ${
                      reportData.severity === 'high' ? 'text-red-600' : 'text-amber-600'
                    }`}>
                      <span className="material-symbols-outlined text-[18px]">warning</span>
                      {reportData.severityText}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 min-w-[180px]">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-navy text-white text-xs font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  预约专家复核
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-slate-200 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  导出 PDF 报告
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-10 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="size-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                  <span className="material-symbols-outlined text-navy text-xl">biotech</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">详细症状解读</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {reportData.insights.map((insight, idx) => (
                  <InsightCard 
                    key={idx}
                    icon={insight.icon} 
                    color={insight.color} 
                    title={insight.title} 
                    desc={insight.desc} 
                  />
                ))}
              </div>
            </section>

            <section>
              <div className="p-10 rounded-[2.5rem] bg-navy text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-lg">
                    <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">Environment Analysis</p>
                    <h4 className="text-2xl font-bold">{reportData.environment.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{reportData.environment.desc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {reportData.environment.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-6 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 min-w-[100px]">
                        <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">{metric.label}</p>
                        <p className={`text-2xl font-bold ${metric.color || ''}`}>{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[180px] opacity-[0.03] rotate-12">park</span>
              </div>
            </section>
          </div>
        </div>
        
        <div className="p-8 bg-slate-100/50 rounded-3xl border border-slate-200/50 flex items-start gap-5">
           <span className="material-symbols-outlined text-slate-400">gavel</span>
           <p className="text-xs text-slate-500 leading-relaxed italic">
             <strong>医疗声明：</strong> 本系统生成的报告仅基于 AI 图像识别与自然语言处理技术对演示病例库进行的匹配。它不能替代执业兽医师的临床诊断。
           </p>
        </div>
      </div>

      <div className="lg:col-span-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden sticky top-28">
           <div className="p-8 bg-white border-b border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Recommended</p>
                <h2 className="text-xl font-black text-navy flex items-center gap-2">
                  <span className="material-symbols-outlined">medication</span>
                  推荐治疗方案
                </h2>
              </div>
           </div>
           <div className="divide-y divide-slate-50">
             {recommendedMeds.map(med => (
               <ProductItem 
                 key={med.id}
                 name={med.name} 
                 subtitle={med.subtitle} 
                 price={med.price.toFixed(2)} 
                 tag={med.tag}
                 img={med.imageUrl} 
               />
             ))}
           </div>
           <div className="p-8 bg-slate-50/50">
              <button 
                onClick={onGoPharmacy}
                className="w-full py-4 bg-white border border-slate-200 text-navy rounded-2xl font-black text-xs hover:bg-navy hover:text-white transition-all uppercase tracking-widest"
              >
                查看完整处方单
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const InsightCard: React.FC<{ icon: string; title: string; desc: string; color: string }> = ({ icon, title, desc, color }) => (
  <div className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all shadow-sm">
    <div className="flex items-start gap-4">
      <span className={`material-symbols-outlined ${color}`}>{icon}</span>
      <div>
        <p className="font-bold text-sm text-slate-900">{title}</p>
        <p className="text-[12px] text-slate-500 mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const ProductItem: React.FC<{ name: string; subtitle: string; price: string; img: string; tag?: string }> = ({ name, subtitle, price, img, tag }) => (
  <div className="p-8 hover:bg-slate-50/50 transition-all cursor-pointer group">
    <div className="flex gap-6">
      <div className="w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100 p-4 flex items-center justify-center">
        <img src={img} alt={name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-[14px] text-slate-900">{name}</h4>
            {tag && <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{tag}</span>}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">{subtitle}</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-black text-navy tracking-tighter">¥{price}</span>
          <button className="size-10 bg-navy text-white flex items-center justify-center rounded-xl hover:bg-blue-600 transition-all shadow-lg">
            <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Report;
