
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 py-16 border-t border-slate-100 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-navy">pets</span>
            <span className="text-lg font-black tracking-tight text-navy">PETAI <span className="text-slate-300 font-light">HEALTH</span></span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            全球领先的宠物 AI 医疗诊断系统，结合顶尖兽医知识库与深度神经网络，为您的爱宠提供精准的健康守护。
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-navy hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">public</span>
            </div>
            <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-navy hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">mail</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-navy">服务项目</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li><a className="hover:text-navy transition-colors" href="#">快速诊断</a></li>
              <li><a className="hover:text-navy transition-colors" href="#">专家连线</a></li>
              <li><a className="hover:text-navy transition-colors" href="#">年度体检方案</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-navy">帮助中心</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li><a className="hover:text-navy transition-colors" href="#">数据安全</a></li>
              <li><a className="hover:text-navy transition-colors" href="#">隐私权政策</a></li>
              <li><a className="hover:text-navy transition-colors" href="#">常见问题</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-8 mt-16 pt-8 border-t border-slate-50 text-center">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">© 2024 PetAI Health Global. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
