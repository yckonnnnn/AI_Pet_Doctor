
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { label: '工作台', page: Page.LANDING },
    { label: '交互中心', page: Page.DIAGNOSIS },
    { label: '病例库', page: Page.REPORT },
    { label: '高端药房', page: Page.PHARMACY },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => onNavigate(Page.LANDING)}
          >
            <div className="size-10 bg-navy rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-2xl">clinical_notes</span>
            </div>
            <h2 className="text-navy text-xl font-black tracking-tight uppercase">
              PetAI <span className="font-light text-slate-400">Hub</span>
            </h2>
          </div>
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-[13px] font-bold tracking-wide transition-all ${
                  currentPage === item.page 
                    ? 'text-navy border-b-2 border-navy' 
                    : 'text-slate-400 hover:text-navy'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-900">Zack</p>
              <p className="text-[10px] text-slate-400">ID: 8824109</p>
            </div>
            <div 
              className="size-10 rounded-full border-2 border-white shadow-sm bg-center bg-cover" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCb4JPMuG5wPhBTLy40YXa20eCXCQiH67dEO9EL1LA1cqsIqMpwh4dyM_wUQ75OgsPcBNd-fDg40qj8iTDNseauicXAW7STINU1STOszAj-qNVv43SxxqTpAeMtRV9PXJuO0gsBaZNgDt6ZzHNz8Ny0nBWyCOanaehLo_wHJkSPYE6vde_s-fHu-14buxl774gQaELnqdypIV99QyE5KxgoLI2MgAhQvd7wm_17VhVXSiIG2aKHr0rSqANsVG2g2k7eoFqP3oIpO3L")' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
