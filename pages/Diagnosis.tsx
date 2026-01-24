
import React, { useState, useRef } from 'react';
import { DISEASE_LIBRARY } from '../constants';
import { DiseaseInfo } from '../types';

interface DiagnosisProps {
  onReport: (disease: DiseaseInfo) => void;
}

const Diagnosis: React.FC<DiagnosisProps> = ({ onReport }) => {
  const [description, setDescription] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleAnalyze = () => {
    if (!description && !imagePreview) return;
    
    setAnalyzing(true);
    
    // Simulate smart keyword matching
    // In a real app, we'd also send the image to a vision API
    const input = description.toLowerCase();
    let bestMatch = DISEASE_LIBRARY[0]; // Fallback to Dermatitis
    let maxMatches = 0;

    DISEASE_LIBRARY.forEach(disease => {
      const matchCount = disease.keywords.filter(k => input.includes(k)).length;
      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestMatch = disease;
      }
    });

    // If there's an image but no text matches, we might bias towards a specific case for demo purposes
    if (maxMatches === 0 && imagePreview) {
      // Just a demo logic: if image is present, keep the default or pick one
      bestMatch = DISEASE_LIBRARY[0];
    }

    setTimeout(() => {
      setAnalyzing(false);
      onReport(bestMatch);
    }, 2500);
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-12 animate-fadeIn">
      <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200/60 shadow-xl bg-gradient-to-br from-white to-slate-50">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-navy tracking-tight mb-3">智能交互诊断</h1>
          <p className="text-slate-400 text-lg">描述症状（如：呕吐、口炎、皮肤痒等）或上传照片，我们的 AI 专家将立即为您分析</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Chat-like input */}
          <div className="space-y-6">
            <div className="flex flex-col h-[500px] bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
               <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                 <Message type="ai" text="您好。我是 PetAI 智能医疗助手。您可以尝试输入不同症状来查看演示效果：比如“肠胃不舒服一直在呕吐”或者“嘴巴红肿不吃猫粮”。您也可以直接上传患处照片。" />
                 {description && <Message type="user" text={description} />}
                 {imagePreview && (
                   <div className="flex justify-end">
                     <div className="max-w-[85%] p-2 bg-navy rounded-2xl rounded-tr-none">
                       <img src={imagePreview} alt="Upload preview" className="rounded-xl max-h-48 object-cover" />
                     </div>
                   </div>
                 )}
                 {analyzing && <Message type="ai" text="正在通过深度神经网络提取病理特征，正在匹配病例库..." loading />}
               </div>
               <div className="p-6 bg-white border-t border-slate-100">
                  <div className="relative">
                    <textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-slate-50 border-transparent rounded-2xl p-5 pr-14 text-base focus:ring-navy focus:bg-white transition-all resize-none h-32" 
                      placeholder="描述症状，例如：呕吐、拉稀、口臭、抓挠皮肤..."
                    />
                    <button 
                      onClick={handleAnalyze}
                      disabled={(!description && !imagePreview) || analyzing}
                      className="absolute bottom-4 right-4 size-10 bg-navy text-white rounded-xl hover:bg-slate-800 disabled:bg-slate-200 transition-all flex items-center justify-center shadow-lg"
                    >
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
               </div>
            </div>
          </div>

          {/* Right: Media Evidence */}
          <div className="space-y-8">
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <div 
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
              className={`bg-white border-2 border-dashed rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[400px] group transition-all cursor-pointer relative overflow-hidden ${
                imagePreview ? 'border-navy' : 'border-slate-200 hover:border-navy hover:bg-slate-50'
              }`}
            >
              {imagePreview ? (
                <div className="absolute inset-0 w-full h-full">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-2xl flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      <span className="material-symbols-outlined text-navy">sync</span>
                      <span className="text-navy font-bold text-sm">更换照片</span>
                    </div>
                  </div>
                  <button 
                    onClick={clearImage}
                    className="absolute top-6 right-6 size-10 bg-white/90 backdrop-blur text-navy rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              ) : (
                <>
                  <div className="size-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-slate-300 group-symbols group-hover:text-navy">add_a_photo</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 mb-2">点击或拖拽照片至此处</p>
                  <p className="text-sm text-slate-400">系统将根据照片特征自动匹配疾病库</p>
                </>
              )}
              
              {!imagePreview && (
                <div className="mt-12 w-full max-w-xs space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                    影像拍摄建议
                  </div>
                  <div className="p-4 bg-slate-100 rounded-2xl text-[12px] text-slate-500 leading-relaxed">
                    自然光线下拍摄，尝试拨开患处毛发，使皮肤清晰暴露以获得最高识别准确率。
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-navy text-white rounded-3xl shadow-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Diagnosis Engine</p>
                <h3 className="text-xl font-bold">启动全项智能分析</h3>
              </div>
              <button 
                onClick={handleAnalyze}
                disabled={(!description && !imagePreview) || analyzing}
                className="px-6 py-3 bg-white text-navy rounded-xl font-bold hover:bg-slate-100 transition-all"
              >
                开始诊断
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Message: React.FC<{ type: 'ai' | 'user'; text: string; loading?: boolean }> = ({ type, text, loading }) => (
  <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-[85%] p-5 rounded-2xl text-sm leading-relaxed ${
      type === 'user' 
        ? 'bg-navy text-white rounded-tr-none' 
        : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
    }`}>
      {loading && <span className="inline-block animate-pulse mr-2">●</span>}
      {text}
    </div>
  </div>
);

export default Diagnosis;
