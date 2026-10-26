import React, { useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Volume2, 
  ArrowRight, 
  ShieldCheck, 
  BrainCircuit, 
  Compass, 
  Target, 
  Award,
  Layers,
  GraduationCap
} from 'lucide-react';
import { speechManager } from '../utils/speech';

interface WelcomePageProps {
  onStart: () => void;
  onOpenGuide: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onStart, onOpenGuide }) => {
  const welcomeNarration = 
    "Hello, and welcome to TKA English Mastery 2026! I’m here to guide you through every reading challenge. " +
    "You don’t have to know everything right now. We’ll learn how to find evidence, understand hidden meanings, " +
    "evaluate information, and answer questions with confidence. Guided by Mam Amelia Aritonang, let’s begin!";

  const handlePlayWelcome = () => {
    speechManager.speak(welcomeNarration);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-12 animate-in fade-in duration-300">
      {/* British Royal Emblem Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-red-950 text-white p-6 sm:p-12 shadow-xl border-2 border-red-800">
        
        {/* Subtle decorative background flags / heraldic accents */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-600/30 border border-red-500/40 rounded-full px-3.5 py-1 text-xs font-semibold text-red-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Persiapan Resmi TKA Bahasa Inggris Wajib 2026</span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              TKA ENGLISH MASTERY <span className="text-red-500">2026</span>
            </h1>
            <p className="text-lg sm:text-2xl font-serif italic text-amber-200 mt-2 font-medium">
              “Read Smart. Think Deeply. Answer Confidently.”
            </p>
          </div>

          {/* Teacher Identity Callout */}
          <div className="flex items-center space-x-3.5 bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 max-w-lg">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-sm ring-2 ring-white/30">
              <GraduationCap className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-blue-200 font-bold block">
                Educational Mentor & Assessment Specialist
              </span>
              <span className="text-base sm:text-lg font-extrabold text-white">
                Mam Amelia Aritonang, S.Pd.
              </span>
              <span className="text-xs text-slate-300 block">
                SMA / MA / SMK / MAK Sederajat • Kurikulum Mandiri 2026
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-sans">
            Aplikasi interaktif yang dirancang khusus untuk mengasah kompetensi membaca tingkat tinggi (HOTS) 
            berdasarkan bukti tekstual. Dilengkapi 25 soal autentik, stimulus visual informatif, sistem 
            pembahasan terstruktur 7-langkah, cara cepat praktis, dan narator Text-to-Speech berbahasa Inggris.
          </p>

          {/* Actions: Start & Listen */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onStart}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/30 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Mulai Latihan (Start Learning)</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handlePlayWelcome}
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 flex items-center space-x-2 transition-all cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>Dengarkan Sambutan (English Audio)</span>
            </button>

            <button
              onClick={onOpenGuide}
              className="px-4 py-3.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Petunjuk Penggunaan</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3 Core Competencies Grid */}
      <div className="space-y-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Acuan Kisi-Kisi & Asesmen 2026
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Tiga Pilar Kompetensi Membaca Kritis
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Dirancang secara berimbang pada 25 soal dengan penalaran berbasis bukti tekstual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Competency 1 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900 inline-block">
                8 Soal • Literal Mastery
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                1. Textual Comprehension
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Menemukan informasi eksplisit, detail spesifik, ide pokok, urutan peristiwa, dan informasi pendukung secara presisi tanpa distorsi.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-blue-800">
              Kata Kunci: “According to the text”, “Explicit detail”
            </div>
          </div>

          {/* Competency 2 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-red-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-800 flex items-center justify-center font-bold">
                <BrainCircuit className="w-5 h-5 text-red-700" />
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 text-red-900 inline-block">
                9 Soal • Deductive Reasoning
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                2. Inferential Comprehension
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Menarik kesimpulan tersirat, makna kosakata kontekstual, tujuan komunikatif, sebab-akibat, serta menghubungkan petunjuk antarparagraf.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-red-800">
              Kata Kunci: “Can be inferred”, “Implies”, “Most likely”
            </div>
          </div>

          {/* Competency 3 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                <Target className="w-5 h-5 text-amber-700" />
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 inline-block">
                8 Soal • Critical Analysis
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                3. Evaluation & Appreciation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mengevaluasi validitas argumen, sudut pandang penulis, kecukupan bukti, relevansi data visual, serta implikasi sosial-etis isi bacaan.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-amber-900">
              Kata Kunci: “Author’s purpose”, “Evidence evaluation”
            </div>
          </div>
        </div>
      </div>

      {/* 4 Essential Application Features */}
      <div className="bg-slate-100/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
          <Award className="w-5 h-5 text-red-600" />
          <span>Keunggulan Metodologis Aplikasi Latihan</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-2xs border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold text-red-600 block">DISTRIBUSI FORMAT</span>
            <div className="font-extrabold text-slate-900 text-base">25 Soal Lengkap</div>
            <p className="text-xs text-slate-600">
              9 MCQ (5 Opsi), 8 MSQ (4 Opsi jamak), 8 True/False/Not Given dalam satu alur terpadu.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-2xs border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold text-blue-700 block">AUDIO INTERACTIVE</span>
            <div className="font-extrabold text-slate-900 text-base">Web Speech TTS</div>
            <p className="text-xs text-slate-600">
              Narator bahasa Inggris alami untuk pertanyaan, panduan bacaan, tips cepat, dan pembahasan.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-2xs border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold text-emerald-700 block">7-STEP FRAMEWORK</span>
            <div className="font-extrabold text-slate-900 text-base">Deep Explanation</div>
            <p className="text-xs text-slate-600">
              Dari bedah soal, bukti kutipan, analisis seluruh opsi, hingga cara cepat & transfer keahlian.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-2xs border border-slate-200 space-y-1.5">
            <span className="text-xs font-bold text-amber-700 block">OFFLINE RELIABILITY</span>
            <div className="font-extrabold text-slate-900 text-base">Autosave Lokal</div>
            <p className="text-xs text-slate-600">
              Seluruh progres otomatis tersimpan di browser via localStorage, aman dari reload.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="text-center space-y-3 pt-4">
        <button
          onClick={onStart}
          className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-3 cursor-pointer"
        >
          <span>Mulai Sesi Latihan Sekarang</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-xs text-slate-500 font-medium">
          TKA ENGLISH MASTERY 2026 • Guided by Mam Amelia Aritonang, S.Pd.
        </p>
      </div>
    </div>
  );
};
