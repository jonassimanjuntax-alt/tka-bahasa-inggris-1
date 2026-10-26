import React, { useState } from 'react';
import { Question, OptionItem } from '../types';
import { speechManager } from '../utils/speech';
import { 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  Lightbulb, 
  BookOpen, 
  FileSearch, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  HelpCircle
} from 'lucide-react';

interface ExplanationPanelProps {
  question: Question;
  userSelection: string[];
  isCorrect: boolean;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({
  question,
  userSelection,
  isCorrect
}) => {
  const [activeStepTab, setActiveStepTab] = useState<number>(1);

  const { explanation, quickStrategySummary, narration } = question;

  const playStepSpeech = (stepNumber: number) => {
    let text = '';
    switch (stepNumber) {
      case 1:
        text = `Step 1: Understand the question. ${explanation.step1Understand}`;
        break;
      case 2:
        text = `Step 2: Locate the evidence. In the passage, we find: ${explanation.step2LocateEvidence}`;
        break;
      case 3:
        text = `Step 3: Interpret the evidence. ${explanation.step3InterpretEvidence}`;
        break;
      case 4:
        text = `Step 4: Option Analysis. Let's analyze the options: ` +
          Object.entries(explanation.step4EliminateWeakOptions)
            .map(([opt, desc]) => `Option ${opt}: ${desc}`)
            .join(' ');
        break;
      case 5:
        text = `Step 5: Confirm the answer. ${explanation.step5ConfirmAnswer}`;
        break;
      case 6:
        text = `Step 6: Quick solving strategy. ${explanation.step6QuickStrategy}`;
        break;
      case 7:
        text = `Step 7: Transfer the skill. ${explanation.step7TransferSkill}`;
        break;
      default:
        text = narration.explanationSummary;
    }
    speechManager.speak(text);
  };

  const playFullExplanation = () => {
    const fullText = 
      `Full Explanation for Question ${question.number}. ` +
      `Understand the question: ${explanation.step1Understand}. ` +
      `Textual Evidence: ${explanation.step2LocateEvidence}. ` +
      `Interpretation: ${explanation.step3InterpretEvidence}. ` +
      `Confirmed Answer: Option ${question.correctAnswer.join(', ')}. ` +
      `Quick Strategy: ${explanation.step6QuickStrategy}.`;
    speechManager.speak(fullText);
  };

  const playQuickStrategy = () => {
    speechManager.speak(`Quick Strategy for Question ${question.number}: ${quickStrategySummary}`);
  };

  const stepsList = [
    { num: 1, title: 'Understand the Question', content: explanation.step1Understand },
    { num: 2, title: 'Locate the Evidence', content: explanation.step2LocateEvidence, isQuote: true },
    { num: 3, title: 'Interpret the Evidence', content: explanation.step3InterpretEvidence },
    { num: 4, title: 'Eliminate Weak Options', content: 'See detailed breakdown of all choices below.' },
    { num: 5, title: 'Confirm the Answer', content: explanation.step5ConfirmAnswer },
    { num: 6, title: 'Quick Solving Strategy', content: explanation.step6QuickStrategy, isHighlight: true },
    { num: 7, title: 'Transfer the Skill', content: explanation.step7TransferSkill, isMeta: true }
  ];

  return (
    <div className="rounded-2xl border-2 border-slate-300 bg-white shadow-md overflow-hidden space-y-6 p-5 sm:p-7 animate-in fade-in duration-200 mt-6">
      
      {/* Top Banner: Verification Result & Audio Action */}
      <div className={`p-4 rounded-xl flex flex-wrap items-center justify-between gap-3 border ${
        isCorrect 
          ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
          : 'bg-amber-50 border-amber-300 text-amber-950'
      }`}>
        <div className="flex items-center space-x-3">
          {isCorrect ? (
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
          )}
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-base sm:text-lg">
                {isCorrect ? 'Jawaban Benar!' : 'Perlu Ditinjau Kembali'}
              </span>
              <span className="text-xs px-2 py-0.5 rounded font-extrabold bg-white/80 border">
                Kunci: {question.correctAnswer.join(', ')}
              </span>
            </div>
            <p className="text-xs sm:text-sm opacity-90 mt-0.5">
              {isCorrect ? narration.feedbackCorrect : narration.feedbackIncorrect}
            </p>
          </div>
        </div>

        <button
          onClick={playFullExplanation}
          className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center space-x-1.5 transition-all shadow-sm cursor-pointer ml-auto"
        >
          <Volume2 className="w-4 h-4 text-amber-400" />
          <span>Listen Full Explanation</span>
        </button>
      </div>

      {/* Quick Strategy Callout Card */}
      <div className="bg-gradient-to-r from-red-900 to-slate-900 text-white rounded-xl p-4 sm:p-5 border border-red-700 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-red-600 rounded-lg text-white">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-red-300">
              Quick Solving Strategy (Cara Cepat)
            </span>
          </div>
          <button
            onClick={playQuickStrategy}
            className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs flex items-center space-x-1 cursor-pointer"
            title="Listen to Quick Strategy"
          >
            <Volume2 className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Listen</span>
          </button>
        </div>
        <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed pl-1">
          {quickStrategySummary}
        </p>
      </div>

      {/* 7-Step Navigation Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-900" />
            <span>7-Step Structured Reasoning Framework</span>
          </h3>
          <span className="text-xs text-slate-500 hidden sm:inline font-medium">
            Step-by-step reading mastery
          </span>
        </div>

        {/* Step Buttons */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-2 border-b border-slate-200">
          {stepsList.map((st) => (
            <button
              key={st.num}
              onClick={() => setActiveStepTab(st.num)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeStepTab === st.num
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>Step {st.num}</span>
              {activeStepTab === st.num && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
            </button>
          ))}
        </div>

        {/* Active Step Content Area */}
        {(() => {
          const currentStep = stepsList.find(s => s.num === activeStepTab) || stepsList[0];
          return (
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900">
                  Step {currentStep.num} — {currentStep.title}
                </span>
                <button
                  onClick={() => playStepSpeech(currentStep.num)}
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-bold flex items-center space-x-1 shadow-2xs cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-red-600" />
                  <span>Listen Step {currentStep.num}</span>
                </button>
              </div>

              {/* Special content for Step 2 (Evidence Quote) */}
              {currentStep.num === 2 ? (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-lg bg-amber-50/80 border-l-4 border-amber-500 text-slate-900 text-sm sm:text-base font-serif italic leading-relaxed">
                    "{question.evidenceText}"
                  </div>
                  <p className="text-xs text-slate-600">
                    Kutipan tekstual di atas merupakan bukti eksplisit yang menjadi fondasi penarikan kesimpulan.
                  </p>
                </div>
              ) : currentStep.num === 4 ? (
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {currentStep.content} Lihat analisis per opsi pada kartu di bawah.
                </p>
              ) : (
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-sans font-medium">
                  {currentStep.content}
                </p>
              )}
            </div>
          );
        })()}
      </div>

      {/* Option-by-Option Elimination Analysis Grid */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center space-x-2">
            <FileSearch className="w-4 h-4 text-red-700" />
            <span>Option-by-Option Rational Elimination (Step 4 Detail)</span>
          </h4>
          <button
            onClick={() => playStepSpeech(4)}
            className="text-xs font-bold text-blue-900 hover:underline cursor-pointer flex items-center space-x-1"
          >
            <Volume2 className="w-3.5 h-3.5 text-red-600" />
            <span>Listen All Options</span>
          </button>
        </div>

        <div className="space-y-2.5">
          {question.options.map((opt) => {
            const isTargetCorrect = question.correctAnswer.includes(opt.id);
            const isUserPick = userSelection.includes(opt.id);
            const analysisText = explanation.step4EliminateWeakOptions[opt.id] || 
              (isTargetCorrect ? 'Correct according to textual evidence.' : 'Incorrect option.');

            return (
              <div 
                key={opt.id}
                className={`p-3.5 rounded-xl border text-xs sm:text-sm transition-all ${
                  isTargetCorrect
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                    : isUserPick && !isTargetCorrect
                    ? 'bg-red-50/70 border-red-300 text-red-950'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-start space-x-2.5">
                  <span className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                    isTargetCorrect 
                      ? 'bg-emerald-700 text-white' 
                      : isUserPick && !isTargetCorrect
                      ? 'bg-red-700 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}>
                    {opt.label || opt.id}
                  </span>

                  <div className="space-y-1 flex-1">
                    <div className="font-semibold text-slate-900 text-xs sm:text-sm">
                      {opt.text}
                    </div>
                    <div className={`text-xs leading-relaxed font-medium ${
                      isTargetCorrect ? 'text-emerald-800' : 'text-slate-600'
                    }`}>
                      <strong className={isTargetCorrect ? 'text-emerald-900 font-bold' : 'text-slate-800 font-bold'}>
                        {isTargetCorrect ? '✓ Alasan Benar: ' : '✗ Mengapa Salah: '}
                      </strong>
                      {analysisText}
                    </div>
                  </div>

                  {isTargetCorrect && (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0">
                      KUNCI
                    </span>
                  )}
                  {isUserPick && !isTargetCorrect && (
                    <span className="bg-red-100 text-red-800 text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0">
                      PILIHAN ANDA
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
