import React from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Award, 
  BarChart2, 
  Home, 
  CheckCircle, 
  Volume2, 
  ShieldAlert,
  Flame
} from 'lucide-react';
import { speechManager } from '../utils/speech';

export type ActiveTab = 'welcome' | 'guide' | 'practice' | 'dashboard' | 'result';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  completedCount: number;
  totalQuestions: number;
  lastSavedTimestamp: number;
  openQuestionGrid?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  completedCount,
  totalQuestions,
  lastSavedTimestamp
}) => {
  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    
    // Trigger relevant English navigation narration
    let narrationText = '';
    switch (tab) {
      case 'welcome':
        narrationText = "Welcome to TKA English Mastery 2026. Here you can start your practice journey, guided by Mam Amelia Aritonang.";
        break;
      case 'guide':
        narrationText = "This is your Learning Guide. Discover how to conquer Multiple-Choice, Multiple-Select, and True/False/Not Given questions using our seven-step reading strategy.";
        break;
      case 'practice':
        narrationText = "Entering the Practice Arena. Twenty-five curated reading challenges await you. Read smart, locate the evidence, and answer confidently.";
        break;
      case 'dashboard':
        narrationText = "Opening your Progress Dashboard. Analyze your performance across Textual, Inferential, and Evaluative competencies.";
        break;
      case 'result':
        narrationText = "Here is your Final Assessment Report. Review your overall mastery score and recommendations for further improvement.";
        break;
    }
    if (narrationText) {
      speechManager.speak(narrationText);
    }
  };

  return (
    <header className="bg-slate-900 border-b-2 border-red-700 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Teacher Branding */}
          <div 
            onClick={() => handleNavClick('welcome')}
            className="flex items-center space-x-3.5 cursor-pointer group py-1"
          >
            {/* British Heraldic Crest Emblem */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-blue-950 p-0.5 shadow-md flex items-center justify-center ring-2 ring-white/20 group-hover:ring-red-400 transition-all">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex flex-col items-center justify-center p-1">
                <span className="text-[10px] font-black tracking-widest text-red-400 uppercase">TKA</span>
                <span className="text-xs font-black text-white leading-none">2026</span>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-red-300 transition-colors">
                  TKA ENGLISH MASTERY
                </h1>
                <span className="bg-red-600/90 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider shadow-2xs">
                  2026
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
                Guided by <span className="text-amber-300 font-bold">Mam Amelia Aritonang, S.Pd.</span>
              </p>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => handleNavClick('welcome')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'welcome'
                  ? 'bg-red-700 text-white shadow-sm ring-1 ring-white/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Beranda</span>
            </button>

            <button
              onClick={() => handleNavClick('guide')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'guide'
                  ? 'bg-red-700 text-white shadow-sm ring-1 ring-white/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Petunjuk</span>
            </button>

            <button
              onClick={() => handleNavClick('practice')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-red-700 text-white shadow-sm ring-1 ring-white/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Latihan 25 Soal</span>
              <span className="ml-1 bg-slate-800 text-[11px] font-bold px-1.5 py-0.5 rounded-full border border-slate-700 text-slate-200">
                {completedCount}/{totalQuestions}
              </span>
            </button>

            <button
              onClick={() => handleNavClick('dashboard')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-red-700 text-white shadow-sm ring-1 ring-white/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Progres</span>
            </button>

            <button
              onClick={() => handleNavClick('result')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'result'
                  ? 'bg-red-700 text-white shadow-sm ring-1 ring-white/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Hasil</span>
            </button>
          </nav>

          {/* Right Status: Local Autosave Indicator */}
          <div className="flex items-center space-x-2">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg px-2.5 py-1.5 flex items-center space-x-1.5 text-xs text-slate-300 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline font-medium">Tersimpan lokal</span>
              <span className="sm:hidden font-medium">Lokal</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-800/80 overflow-x-auto gap-1">
          <button
            onClick={() => handleNavClick('welcome')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap ${
              activeTab === 'welcome' ? 'bg-red-700 text-white' : 'text-slate-300'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('guide')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap ${
              activeTab === 'guide' ? 'bg-red-700 text-white' : 'text-slate-300'
            }`}
          >
            Petunjuk
          </button>
          <button
            onClick={() => handleNavClick('practice')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap flex items-center space-x-1 ${
              activeTab === 'practice' ? 'bg-red-700 text-white' : 'text-slate-300'
            }`}
          >
            <span>Soal</span>
            <span className="bg-slate-800 text-[10px] px-1 rounded text-amber-300">
              {completedCount}/25
            </span>
          </button>
          <button
            onClick={() => handleNavClick('dashboard')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap ${
              activeTab === 'dashboard' ? 'bg-red-700 text-white' : 'text-slate-300'
            }`}
          >
            Progres
          </button>
          <button
            onClick={() => handleNavClick('result')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap ${
              activeTab === 'result' ? 'bg-red-700 text-white' : 'text-slate-300'
            }`}
          >
            Hasil
          </button>
        </div>
      </div>
    </header>
  );
};
