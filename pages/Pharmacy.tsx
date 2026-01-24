
import React from 'react';
import { MEDICATIONS } from '../constants';

const Pharmacy: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-8 py-12 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
           <h1 className="text-5xl font-black text-navy tracking-tight mb-4">高端药房</h1>
           <p className="text-slate-400 text-lg">专业处方级宠物药品，通过 AI 诊断中心认证。受管制药物需上传兽医师处方证明。</p>
        </div>
        <div className="flex gap-4">
           <div className="relative">
             <input 
               type="text" 
               placeholder="搜索药品或品牌..." 
               className="pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-sm w-80 focus:ring-navy focus:border-navy" 
             />
             <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MEDICATIONS.map((med) => (
          <div key={med.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="aspect-square bg-slate-50 p-12 flex items-center justify-center border-b border-slate-100">
              <img src={med.imageUrl} alt={med.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  {med.tag && <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded mb-2 uppercase tracking-widest">{med.tag}</span>}
                  <h3 className="text-xl font-bold text-navy">{med.name}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-6">{med.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-navy tracking-tighter">¥{med.price.toFixed(2)}</span>
                <button className="px-6 py-3 bg-navy text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  加入购物车
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-12 bg-navy rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
         <div className="relative z-10 max-w-2xl">
           <h2 className="text-4xl font-bold mb-4">处方药配送服务</h2>
           <p className="text-slate-400 text-lg leading-relaxed">
             通过我们的认证流程，您可以轻松获取处方药物。系统将自动验证您的 AI 诊断报告，或协助您联系执业兽医师开具证明。
           </p>
         </div>
         <button className="relative z-10 px-10 py-5 bg-white text-navy rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl">
           了解配送流程
         </button>
         <span className="material-symbols-outlined absolute -right-12 -bottom-12 text-[240px] opacity-5 rotate-12">local_shipping</span>
      </div>
    </div>
  );
};

export default Pharmacy;
