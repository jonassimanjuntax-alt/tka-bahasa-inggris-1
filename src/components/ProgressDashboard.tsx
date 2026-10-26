import React, { useState } from 'react';
import { Question, UserAnswerRecord } from '../types';
import { speechManager } from '../utils/speech';
import { 
  BarChart3, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  Volume2, 
  RotateCcw, 
  Flame, 
  ArrowRight,
  Target,
  BookOpen,
  BrainCircuit,
  Trash2,
  X
} from 'lucide-react';

interface ProgressDashboardProps {
  questions: Question[];
  userAnswers: Record<number, UserAnswerRecord>;
  onNavigateToQuestion: (index: number) => void;
  onResetProgress: () => void;
  onOpenResults: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  questions,
  userAnswers,
  onNavigateToQuestion,
  onResetProgress,
  onOpenResults
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const dashboardNarration = 
    "Your progress tells a story about your learning. Look beyond your total score. " +
    "Identify the skills you are improving, revisit the questions you found challenging, " +
    "and use the explanations to strengthen your reasoning. Progress comes from understanding the evidence, not simply memorizing answers.";

  const playDashboardSpeech = () => {
    speechManager.speak(dashboardNarration);
  };

  // Calculations
  const totalQuestions = questions.length;
  let lockedCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  const competencyStats: Record<string, { total: number; correct: number; locked: number }> = {
    'Textual Comprehension': { total: 0, correct: 0, locked: 0 },
    'Inferential Comprehension': { total: 0, correct: 0, locked: 0 },
    'Evaluation and Appreciation': { total: 0, correct: 0, locked: 0 }
  };

  questions.forEach(q => {
    if (competencyStats[q.competency]) {
      competencyStats[q.competency].total += 1;
    }
    const ans = userAnswers[q.id];
    if (ans && ans.isLocked) {
      lockedCount += 1;
      if (competencyStats[q.competency]) {
        competencyStats[q.competency].locked += 1;
      }
      if (ans.isCorrect) {
        correctCount += 1;
        if (competencyStats[q.competency]) {
          competencyStats[q.competency].correct += 1;
        }
      } else {
        incorrectCount += 1;
      }
    }
  });

  const remainingCount = totalQuestions - lockedCount;
  const accuracyPercent = lockedCount > 0 ? Math.round((correctCount / lockedCount) * 100) : 0;

  // Recommendations based on lowest competency
  const competenciesArray = Object.entries(competencyStats).map(([compName, data]) => {
    const rate = data.locked > 0 ? Math.round((data.correct / data.locked) * 100) : 0;
    return { name: compName, ...data, rate };
  });

  const lowestComp = [...competenciesArray].sort((a, b) => a.rate - b.rate)[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 space-y-8 animate-in fade-in duration-300">
      
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-red-950 text-white rounded-2xl p-6 sm:p-8 border border-red-800 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">
            Pemantauan Progres Belajar Mandiri
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Progress Dashboard & Performance Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
            Evaluasi capaian 25 soal secara objektif berbasis bukti penalaran.
          </p>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            onClick={playDashboardSpeech}
            className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-sm cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Listen to Dashboard Guide</span>
          </button>
        </div>
      </div>

      {/* 4 Summary Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Completed */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-1">
          <span className="text-xs font-bold text-slate-500 uppercase">Terkunci (Selesai)</span>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            {lockedCount} <span className="text-sm font-semibold text-slate-400">/ {totalQuestions}</span>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            {remainingCount} soal belum dikunci
          </p>
        </div>

        {/* Correct */}
        <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-sm space-y-1">
          <span className="text-xs font-bold text-emerald-700 uppercase">Jawaban Benar</span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-700">
            {correctCount}
          </div>
          <p className="text-xs text-emerald-600 font-medium">
            Verifikasi bukti akurat
          </p>
        </div>

        {/* Incorrect / Review */}
        <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-sm space-y-1">
          <span className="text-xs font-bold text-amber-700 uppercase">Perlu Ditinjau</span>
          <div className="text-2xl sm:text-3xl font-black text-amber-700">
            {incorrectCount}
          </div>
          <p className="text-xs text-amber-600 font-medium">
            Gunakan pembahasan 7 langkah
          </p>
        </div>

        {/* Accuracy */}
        <div className="bg-white rounded-2xl p-5 border border-blue-200 shadow-sm space-y-1">
          <span className="text-xs font-bold text-blue-900 uppercase">Akurasi Berjalan</span>
          <div className="text-2xl sm:text-3xl font-black text-blue-900">
            {accuracyPercent}%
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
            <div 
              className="bg-blue-900 h-full rounded-full transition-all duration-500" 
              style={{ width: `${accuracyPercent}%` }}
            />
          </div>
        </div>

      </div>

      {/* Competency Mastery Breakdown */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center space-x-2">
            <Target className="w-5 h-5 text-red-600" />
            <span>Performa Berdasarkan Tiga Kompetensi Kognitif</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Analisis kekuatan dan area peningkatan (areas to improve) berdasarkan pengerjaan saat ini.
          </p>
        </div>

        <div className="space-y-4">
          {competenciesArray.map((comp) => (
            <div key={comp.name} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-bold text-sm sm:text-base text-slate-900">
                  {comp.name}
                </span>
                <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-white border border-slate-300 text-slate-800">
                  {comp.correct} Benar dari {comp.locked} Terkunci (Total {comp.total} Soal)
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-red-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${comp.locked > 0 ? (comp.correct / comp.total) * 100 : 0}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-slate-500 font-medium pt-0.5">
                <span>
                  {comp.locked === 0 
                    ? 'Belum dikerjakan' 
                    : comp.rate >= 80 
                    ? 'Current performance: Sangat Baik' 
                    : comp.rate >= 50 
                    ? 'Current performance: Cukup Memuaskan' 
                    : 'Areas to improve: Butuh Latihan Lebih'}
                </span>
                <span className="font-bold text-slate-700">{comp.rate}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostic Recommendations */}
      <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200 shadow-sm space-y-3">
        <div className="flex items-center space-x-2 text-amber-900 font-bold text-base">
          <BrainCircuit className="w-5 h-5 text-amber-700" />
          <span>Rekomendasi Strategi Belajar dari Mam Amelia</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
          {lockedCount === 0 ? (
            "Anda baru memulai latihan. Kerjakan beberapa soal terlebih dahulu untuk membentuk pola diagnostik pemahaman membaca Anda."
          ) : lowestComp && lowestComp.rate < 70 ? (
            `Berdasarkan data pengerjaan, kompetensi "${lowestComp.name}" memerlukan penguatan khusus. Fokuslah pada Step 2 (Locate the Evidence) dan Step 4 (Eliminate Weak Options) saat membaca teks agar terhindar dari asumsi personal yang tidak didukung bacaan.`
          ) : (
            "Performa membaca kritis Anda menunjukkan perkembangan solid di seluruh kompetensi! Pertahankan disiplin memverifikasi bukti tekstual dan manfaatkan Quick Strategy untuk menghemat waktu ujian resmi."
          )}
        </p>
      </div>

      {/* Question Jump Matrix */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">
            Tinjau atau Kerjakan Kembali Tiap Nomor Soal
          </h3>
          <span className="text-xs text-slate-500">Klik nomor untuk membuka</span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isLocked = ans?.isLocked;
            const isCorrect = ans?.isCorrect;

            let color = 'bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-400';
            if (isLocked) {
              color = isCorrect 
                ? 'bg-emerald-600 text-white border-emerald-600' 
                : 'bg-amber-600 text-white border-amber-600';
            }

            return (
              <button
                key={q.id}
                onClick={() => onNavigateToQuestion(idx)}
                className={`p-2.5 rounded-xl border text-center font-black text-xs sm:text-sm transition-all cursor-pointer shadow-2xs ${color}`}
                title={`Soal ${q.number}: ${q.competency}`}
              >
                {q.number}
              </button>
            );
          })}
        </div>
      </div>

      {/* Danger Zone: Reset Progress Action */}
      <div className="p-6 rounded-2xl bg-white border border-red-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-red-700">Mulai Ulang Progres Latihan</h4>
          <p className="text-xs text-slate-500">
            Hapus seluruh jawaban dan status penguncian untuk mengulang latihan dari awal.
          </p>
        </div>

        <button
          onClick={() => setShowResetConfirm(true)}
          className="px-4 py-2.5 rounded-xl border border-red-300 hover:bg-red-50 text-red-700 text-xs font-bold flex items-center space-x-1.5 transition-all cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
          <span>Reset Progres Latihan</span>
        </button>
      </div>

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95 duration-150">
            <div className="flex items-center space-x-3 text-red-600">
              <div className="p-2 bg-red-100 rounded-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Konfirmasi Reset Progres
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Apakah Anda yakin ingin menghapus semua jawaban yang tersimpan? 
              Seluruh riwayat pengerjaan, skor, dan status pembahasan untuk aplikasi ini akan diatur ulang ke kondisi awal.
            </p>
            <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Batal (Cancel)
              </button>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowResetConfirm(false);
                }}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold cursor-pointer shadow-sm"
              >
                Ya, Hapus & Mulai Baru
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
