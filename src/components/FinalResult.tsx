import React from 'react';
import { Question, UserAnswerRecord } from '../types';
import { speechManager } from '../utils/speech';
import { 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  Volume2, 
  Sparkles, 
  ArrowRight,
  Target,
  BookOpen,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';

interface FinalResultProps {
  questions: Question[];
  userAnswers: Record<number, UserAnswerRecord>;
  onNavigateToQuestion: (index: number) => void;
  onRestart: () => void;
}

export const FinalResult: React.FC<FinalResultProps> = ({
  questions,
  userAnswers,
  onNavigateToQuestion,
  onRestart
}) => {
  const totalQuestions = questions.length;
  let correctCount = 0;
  let lockedCount = 0;

  const competencyScores: Record<string, { total: number; correct: number }> = {
    'Textual Comprehension': { total: 0, correct: 0 },
    'Inferential Comprehension': { total: 0, correct: 0 },
    'Evaluation and Appreciation': { total: 0, correct: 0 }
  };

  questions.forEach(q => {
    if (competencyScores[q.competency]) {
      competencyScores[q.competency].total += 1;
    }
    const ans = userAnswers[q.id];
    if (ans && ans.isLocked) {
      lockedCount += 1;
      if (ans.isCorrect) {
        correctCount += 1;
        if (competencyScores[q.competency]) {
          competencyScores[q.competency].correct += 1;
        }
      }
    }
  });

  const finalScore = Math.round((correctCount / totalQuestions) * 100);

  const getTier = (score: number) => {
    if (score >= 88) {
      return {
        title: 'Advanced Reading Mastery',
        badgeColor: 'bg-emerald-600 text-white',
        desc: 'Luar biasa! Pemahaman literal, penalaran deduktif, dan evaluasi kritis Anda berada pada tingkat mahir siap menghadapi TKA 2026.'
      };
    }
    if (score >= 72) {
      return {
        title: 'Proficient Critical Reader',
        badgeColor: 'bg-blue-800 text-white',
        desc: 'Kerja bagus! Daya tanggap bacaan Anda sudah solid, pertajam sedikit lagi eliminasi opsi pengecoh pada teks evaluatif.'
      };
    }
    if (score >= 56) {
      return {
        title: 'Developing Analytical Reader',
        badgeColor: 'bg-amber-600 text-white',
        desc: 'Fondasi membaca Anda sudah terbentuk. Terus latih pemindaian bukti tekstual (Step 2) agar tidak terkecoh inferensi spekulatif.'
      };
    }
    return {
      title: 'Foundational Reader',
      badgeColor: 'bg-red-700 text-white',
      desc: 'Tetap semangat! Pelajari kembali pembahasan terstruktur 7-langkah untuk membiasakan diri dengan pola penalaran bukti.'
    };
  };

  const tier = getTier(finalScore);

  const completionNarration = 
    `Congratulations on completing your practice session on TKA English Mastery 2026! ` +
    `You answered ${correctCount} out of 25 questions correctly, earning a final score of ${finalScore}. ` +
    `Remember Mam Amelia’s message: Keep Reading. Keep Thinking. Keep Improving. ` +
    `Review each explanation carefully to build stronger evidence-based reading habits for the real assessment.`;

  const playCompletionSpeech = () => {
    speechManager.speak(completionNarration);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8 animate-in fade-in duration-300">
      
      {/* Hero Scorecard */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-red-950 text-white p-6 sm:p-10 border-2 border-red-700 shadow-2xl text-center relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1 text-xs font-bold text-amber-300 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Laporan Hasil Akhir TKA Bahasa Inggris 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Pencapaian Belajar Anda
          </h1>

          {/* Big Score Circular / Badge */}
          <div className="py-4">
            <div className="inline-block p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
              <span className="text-5xl sm:text-7xl font-black text-amber-300 tracking-tight">
                {finalScore}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-300 block">
                / 100 Poin
              </span>
            </div>
          </div>

          {/* Tier Badge */}
          <div className="space-y-2">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider ${tier.badgeColor}`}>
              {tier.title}
            </span>
            <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed font-medium">
              {tier.desc}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={playCompletionSpeech}
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-md cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-amber-300" />
              <span>Dengarkan Apresiasi & Pesan Mam Amelia</span>
            </button>
          </div>
        </div>
      </div>

      {/* Transparent Scoring Summary */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <Award className="w-5 h-5 text-red-600" />
          <span>Rincian Penilaian Transparan (25 Soal Terbobot Setara)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Soal Dijawab</span>
            <div className="text-2xl font-black text-slate-900">{lockedCount} / {totalQuestions}</div>
            <p className="text-xs text-slate-500">Soal terkunci dalam asesmen</p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-1">
            <span className="text-xs font-bold text-emerald-800 uppercase">Jawaban Benar</span>
            <div className="text-2xl font-black text-emerald-700">{correctCount} Soal</div>
            <p className="text-xs text-emerald-600">Bobot 4 poin per soal benar</p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-1">
            <span className="text-xs font-bold text-amber-800 uppercase">Jawaban Salah</span>
            <div className="text-2xl font-black text-amber-700">{totalQuestions - correctCount} Soal</div>
            <p className="text-xs text-amber-600">Pelajari bukti tekstualnya</p>
          </div>
        </div>

        {/* Competency Breakdown */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
            Capaian Per Kompetensi
          </h3>

          <div className="space-y-3">
            {Object.entries(competencyScores).map(([name, data]) => {
              const compPercent = Math.round((data.correct / data.total) * 100);
              return (
                <div key={name} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-900">
                    <span>{name}</span>
                    <span>{data.correct} / {data.total} ({compPercent}%)</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-blue-900 h-full rounded-full transition-all duration-500"
                      style={{ width: `${compPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Review Questions Grid */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          Tinjau Kunci & Pembahasan Lengkap Tiap Soal
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Klik nomor soal di bawah untuk membuka kembali teks bacaan, bukti tekstual, dan langkah pembahasannya.
        </p>

        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 pt-2">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isCorrect = ans?.isCorrect;
            return (
              <button
                key={q.id}
                onClick={() => onNavigateToQuestion(idx)}
                className={`p-2.5 rounded-xl border font-bold text-xs transition-all cursor-pointer ${
                  isCorrect
                    ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
                    : 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700'
                }`}
                title={`Soal ${q.number}: ${isCorrect ? 'Benar' : 'Perlu Review'}`}
              >
                {q.number}
              </button>
            );
          })}
        </div>
      </div>

      {/* Official Teacher Closing Message as mandated by prompt */}
      <div className="rounded-2xl bg-slate-950 text-white p-6 sm:p-8 border border-slate-800 text-center space-y-4 shadow-lg">
        <div className="w-12 h-12 rounded-full bg-red-600 mx-auto flex items-center justify-center text-white">
          <GraduationCap className="w-6 h-6" />
        </div>

        <blockquote className="text-xl sm:text-2xl font-serif italic text-amber-200 font-bold max-w-xl mx-auto">
          “Keep Reading. Keep Thinking. Keep Improving.”
        </blockquote>

        <div className="text-xs sm:text-sm text-slate-300 font-semibold uppercase tracking-wider">
          TKA ENGLISH MASTERY 2026 — Guided by Mam Amelia Aritonang, S.Pd.
        </div>

        <div className="pt-2">
          <button
            onClick={onRestart}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold inline-flex items-center space-x-2 border border-slate-700 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Seluruh Latihan (Retake Practice)</span>
          </button>
        </div>
      </div>

    </div>
  );
};
