import React from 'react';
import { Question, UserAnswerRecord } from '../types';
import { X, CheckCircle2, HelpCircle, Circle, Check } from 'lucide-react';

interface QuestionGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentQuestionIndex: number;
  onSelectQuestion: (index: number) => void;
  userAnswers: Record<number, UserAnswerRecord>;
}

export const QuestionGridModal: React.FC<QuestionGridModalProps> = ({
  isOpen,
  onClose,
  questions,
  currentQuestionIndex,
  onSelectQuestion,
  userAnswers
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 className="font-bold text-base sm:text-lg">Daftar Kisi 25 Soal TKA</h3>
            <p className="text-xs text-slate-300">Pilih nomor soal untuk navigasi instan.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded bg-white border border-slate-300" />
            <span>Belum Dijawab</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded bg-blue-100 border border-blue-400" />
            <span>Dipilih (Belum Kunci)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
            <span>Terkunci Benar</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded bg-amber-600 text-white flex items-center justify-center text-[9px] font-bold">!</span>
            <span>Terkunci (Perlu Review)</span>
          </div>
        </div>

        {/* 25-Question Matrix */}
        <div className="p-5 overflow-y-auto grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isCurrent = idx === currentQuestionIndex;
            const isLocked = ans?.isLocked;
            const isCorrect = ans?.isCorrect;
            const hasSelection = ans && ans.selectedOptions && ans.selectedOptions.length > 0;

            let cardStyle = 'bg-white border-slate-200 text-slate-700 hover:border-blue-400';
            let statusIcon = null;

            if (isLocked) {
              if (isCorrect) {
                cardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                statusIcon = <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
              } else {
                cardStyle = 'bg-amber-50 border-amber-400 text-amber-950 font-bold';
                statusIcon = <HelpCircle className="w-3.5 h-3.5 text-amber-600" />;
              }
            } else if (hasSelection) {
              cardStyle = 'bg-blue-50 border-blue-400 text-blue-900 font-semibold';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  onSelectQuestion(idx);
                  onClose();
                }}
                className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer relative ${cardStyle} ${
                  isCurrent ? 'ring-2 ring-red-600 shadow-sm' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold">Soal {q.number}</span>
                  {statusIcon}
                </div>
                <div className="flex items-center justify-between text-[10px] mt-1 text-slate-500 uppercase font-bold">
                  <span className="px-1 py-0.2 bg-slate-200/80 rounded text-slate-700">
                    {q.questionType.toUpperCase()}
                  </span>
                  <span className="truncate max-w-[65px] text-[9px] text-slate-400">
                    {q.competency.split(' ')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
          >
            Tutup Kisi Soal
          </button>
        </div>

      </div>
    </div>
  );
};
