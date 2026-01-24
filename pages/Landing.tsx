
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="animate-fadeIn">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-medical-blue animate-pulse"></span>
              全天候 AI 医疗支持已上线
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-navy leading-[1.1] mb-8 tracking-tight">
              重新定义<br/><span className="text-medical-blue">宠物健康检测</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mb-12">
              融合尖端计算机视觉与兽医学大数据，为您的爱宠提供精准、即时的健康评估。足不出户，掌握爱宠的每一处细微变化。
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onStart}
                className="bg-navy text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-2xl transition-all"
              >
                立即开始诊断
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
              <button className="bg-white text-navy border border-slate-200 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                查看演示视频
              </button>
            </div>
            <div className="mt-16 flex items-center gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-2xl font-bold text-navy">99.2%</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">诊断准确率</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-navy">15M+</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">标注病例库</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-navy">&lt; 10s</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">平均反馈耗时</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <div 
                className="w-full h-full bg-cover bg-center grayscale-[10%] hover:grayscale-0 transition-all duration-700" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt_8aH-WYeXgQKAlVUr5CVer7fDVzJ_aHqFHizSOAqB64r9I6_Mod3Th2_VYZQWZNCRz8-B_vkPNpYPumMBuGx6-54BROJvl3gBGJ_UdmzKIz5ioWFJv8MEIAfqxE3eiFKELaGo_ytYitGv4g5a1wfzhyxWEp-Us1WnJC_jh96RTvA8KYDD1p7v0KP8qnDaTSUbUzFWEwJ44S9d_fxOnij7rFKOCMwEd2NSmwexgHiK3Op7EGcfIhqBVZq5sqk1r66Gbul0mONZDKb')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-medical-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-slate-200/50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100/50 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-navy mb-6">简约，而不简单</h2>
            <p className="text-slate-500">通过三步直观操作，即可获得基于深度学习模型的专业医疗分析报告。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon="add_a_photo" 
              title="上传病灶照片" 
              desc="拍摄爱宠异常部位（如皮肤、眼部或口腔），AI 将自动提取特征并进行像素级分析。" 
            />
            <FeatureCard 
              icon="neurology" 
              title="云端神经网络分析" 
              desc="基于全球顶级兽医数据库，我们的模型将进行数以亿计的参数比对，识别潜在风险。" 
            />
            <FeatureCard 
              icon="description" 
              title="获取深度评估报告" 
              desc="提供结构化的健康分析、分级预警及专业的护理建议，为就医提供有力参考。" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-50 group hover:-translate-y-2 transition-transform">
    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-navy mb-8 group-hover:bg-navy group-hover:text-white transition-colors">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Landing;
