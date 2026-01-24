
import React, { useState } from 'react';
import { Page, DiseaseInfo } from './types';
import Landing from './pages/Landing';
import Diagnosis from './pages/Diagnosis';
import Report from './pages/Report';
import Pharmacy from './pages/Pharmacy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DISEASE_LIBRARY } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);
  const [activeReport, setActiveReport] = useState<DiseaseInfo>(DISEASE_LIBRARY[0]);

  const handleDiagnosisComplete = (matchedDisease: DiseaseInfo) => {
    setActiveReport(matchedDisease);
    setCurrentPage(Page.REPORT);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.LANDING: return <Landing onStart={() => setCurrentPage(Page.DIAGNOSIS)} />;
      case Page.DIAGNOSIS: return <Diagnosis onReport={handleDiagnosisComplete} />;
      case Page.REPORT: return <Report reportData={activeReport} onGoPharmacy={() => setCurrentPage(Page.PHARMACY)} />;
      case Page.PHARMACY: return <Pharmacy />;
      default: return <Landing onStart={() => setCurrentPage(Page.DIAGNOSIS)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
