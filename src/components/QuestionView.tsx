import React, { useState, useEffect } from 'react';
import { Question, UserAnswerRecord } from '../types';
import { VisualStimulus } from './VisualStimulus';
import { ExplanationPanel } from './ExplanationPanel';
import { QuestionGridModal } from './QuestionGridModal';
import { speechManager } from '../utils/speech';
import { 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  Lock, 
  Unlock, 
  Volume2, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Sparkles, 
  RotateCcw,
  Zap,
  Info
} from 'lucide-react';

interface QuestionViewProps {
  questions: Question[];
  currentIndex: number;
  onNavigateIndex: (index: number) => void;
  userAnswers: Record<number, UserAnswerRecord>;
  onUpdateAnswer: (questionId: number, selectedOptions: string[]) => void;
  onLockAnswer: (questionId: number) => void;
  onUnlockAnswer?: (questionId: number) => void;
  onFinishQuiz: () => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  questions,
  currentIndex,
  onNavigateIndex,
  userAnswers,
  onUpdateAnswer,
  onLockAnswer,
  onUnlockAnswer,
  onFinishQuiz
}) => {
  const currentQuestion = questions[currentIndex];
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'both' | 'passage' | 'stimulus'>('both');

  const currentRecord = userAnswers[currentQuestion.id] || {
    selectedOptions: [],
    isLocked: false
  };

  const selectedOptions = currentRecord.selectedOptions || [];
  const isLocked = currentRecord.isLocked;

  // Question narration on entry
  const playQuestionNarration = () => {
    speechManager.speak(currentQuestion.narration.questionOverview);
  };

  const playReadingGuideNarration = () => {
    speechManager.speak(currentQuestion.narration.readingGuide);
  };

  const playInstructionsNarration = () => {
    let ruleText = '';
    if (currentQuestion.questionType === 'mcq') {
      ruleText = `This is a Multiple-Choice Question with five options. Select exactly one correct answer based on the passage.`;
    } else if (currentQuestion.questionType === 'msq') {
      ruleText = `This is a Multiple-Select Question with four options. You must choose at least two correct options, but not all four. All correct options must be selected to earn the point.`;
    } else {
      ruleText = `This is a True, False, or Not Given question. Choose True if the statement agrees with the text, False if it contradicts the text, or Not Given if the information is missing.`;
    }
    speechManager.speak(ruleText);
  };

  const handleOptionToggle = (optionId: string) => {
    if (isLocked) return;

    if (currentQuestion.questionType === 'mcq' || currentQuestion.questionType === 'tfng') {
      // Single select
      onUpdateAnswer(currentQuestion.id, [optionId]);
    } else {
      // Multiple select
      if (selectedOptions.includes(optionId)) {
        onUpdateAnswer(
          currentQuestion.id,
          selectedOptions.filter(id => id !== optionId)
        );
      } else {
        onUpdateAnswer(currentQuestion.id, [...selectedOptions, optionId]);
      }
    }
  };

  const handleLock = () => {
    if (selectedOptions.length === 0) return;
    onLockAnswer(currentQuestion.id);

    // Supportive audio feedback
    const isCorrect = 
      selectedOptions.length === currentQuestion.correctAnswer.length &&
      selectedOptions.every(val => currentQuestion.correctAnswer.includes(val));

    if (isCorrect) {
      speechManager.speak(currentQuestion.narration.feedbackCorrect);
    } else {
      speechManager.speak(currentQuestion.narration.feedbackIncorrect);
    }
  };

  const isCurrentCorrect = 
    selectedOptions.length === currentQuestion.correctAnswer.length &&
    selectedOptions.every(val => currentQuestion.correctAnswer.includes(val));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Question Header Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        {/* Left: Number & Indicators */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="bg-red-700 text-white font-black text-sm sm:text-base px-3 py-1.5 rounded-xl shadow-2xs">
            Soal {currentQuestion.number} dari {questions.length}
          </div>

          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 border border-blue-200">
            {currentQuestion.competency}
          </span>

          <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hidden sm:inline">
            Genre: {currentQuestion.genre}
          </span>

          <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-slate-100 text-slate-600 hidden md:inline">
            Tingkat: {currentQuestion.difficulty}
          </span>
        </div>

        {/* Right: Audio Triggers & Question Grid Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={playQuestionNarration}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center space-x-1.5 transition-all cursor-pointer"
            title="Listen to the question overview"
          >
            <Volume2 className="w-3.5 h-3.5 text-red-600" />
            <span className="hidden sm:inline">Listen to Question</span>
            <span className="sm:hidden">Audio</span>
          </button>

          <button
            onClick={playReadingGuideNarration}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center space-x-1.5 transition-all cursor-pointer"
            title="Listen to reading guide hints"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden sm:inline">Reading Guide</span>
            <span className="sm:hidden">Guide</span>
          </button>

          <button
            onClick={() => setIsGridOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold flex items-center space-x-1.5 transition-all cursor-pointer"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Kisi Soal</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Passage & Stimulus (7 Cols on LG) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-6">
          
          {/* Passage Header */}
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-red-600" />
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                {currentQuestion.title}
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Reading Stimulus
            </span>
          </div>

          {/* Reading Passage Text */}
          <div className="space-y-4 font-sans text-slate-800 text-[18px] sm:text-[20px] leading-[1.7]">
            {currentQuestion.passage.map((para, pIdx) => (
              <p key={pIdx} className="text-justify font-normal">
                {para}
              </p>
            ))}
          </div>

          {/* Visual Stimulus Component */}
          <div className="pt-2">
            <VisualStimulus data={currentQuestion.stimulus} />
          </div>

        </div>

        {/* Right Column: Question Prompt, Options, Answer Actions & Explanations (5 Cols on LG) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Question Box */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-5">
            
            {/* Format Instructions Bar */}
            <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2">
              <span className="text-xs font-bold text-red-700 flex items-center space-x-1.5">
                <Info className="w-4 h-4 text-red-600" />
                <span>
                  {currentQuestion.questionType === 'mcq' && 'Pilihan Ganda (1 Opsi Benar)'}
                  {currentQuestion.questionType === 'msq' && 'Pilihan Jamak (Pilih 2–3 Opsi Benar)'}
                  {currentQuestion.questionType === 'tfng' && 'Pernyataan (True / False / Not Given)'}
                </span>
              </span>
              <button
                onClick={playInstructionsNarration}
                className="text-[11px] font-bold text-blue-900 hover:underline cursor-pointer flex items-center space-x-1"
              >
                <Volume2 className="w-3 h-3 text-red-600" />
                <span>Aturan</span>
              </button>
            </div>

            {/* Question Text */}
            <h3 className="font-bold text-slate-900 text-[20px] sm:text-[22px] leading-snug">
              {currentQuestion.questionPrompt}
            </h3>

            {/* Options List */}
            <div className="space-y-3 pt-1">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOptions.includes(option.id);
                const isCorrectOption = currentQuestion.correctAnswer.includes(option.id);

                let optionStyles = 'border-slate-200 hover:border-slate-400 bg-white text-slate-800';

                if (isLocked) {
                  if (isCorrectOption) {
                    optionStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                  } else if (isSelected && !isCorrectOption) {
                    optionStyles = 'border-red-400 bg-red-50 text-red-950';
                  } else {
                    optionStyles = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyles = 'border-red-600 bg-red-50/70 text-slate-900 font-semibold ring-2 ring-red-500/20';
                }

                return (
                  <div
                    key={option.id}
                    onClick={() => handleOptionToggle(option.id)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start space-x-3.5 select-none ${optionStyles}`}
                  >
                    {/* Circle / Box Indicator */}
                    <div className="mt-0.5 shrink-0">
                      {currentQuestion.questionType === 'msq' ? (
                        <div className={`w-6 h-6 rounded-md border flex items-center justify-center font-bold text-xs ${
                          isSelected ? 'bg-red-600 border-red-600 text-white' : 'border-slate-400 bg-white text-slate-600'
                        }`}>
                          {isSelected ? '✓' : option.label || option.id}
                        </div>
                      ) : (
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs ${
                          isSelected ? 'bg-red-600 border-red-600 text-white' : 'border-slate-400 bg-white text-slate-700'
                        }`}>
                          {option.label || option.id}
                        </div>
                      )}
                    </div>

                    {/* Option Text */}
                    <div className="text-[18px] leading-relaxed font-sans flex-1">
                      {option.text}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Lock / Submit Button */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              {!isLocked ? (
                <button
                  onClick={handleLock}
                  disabled={selectedOptions.length === 0}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-extrabold text-base shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Kunci Jawaban (Lock Answer)</span>
                </button>
              ) : (
                <div className="flex items-center space-x-2 w-full justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 ${
                      isCurrentCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                    }`}>
                      {isCurrentCorrect ? <CheckCircle2 className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
                      <span>{isCurrentCorrect ? 'Jawaban Benar' : 'Jawaban Belum Tepat'}</span>
                    </span>
                  </div>

                  {onUnlockAnswer && (
                    <button
                      onClick={() => onUnlockAnswer(currentQuestion.id)}
                      className="text-xs text-slate-500 hover:text-slate-800 font-bold underline flex items-center space-x-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Ubah Jawaban</span>
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Explanation Panel: Revealed when Locked */}
          {isLocked && (
            <ExplanationPanel
              question={currentQuestion}
              userSelection={selectedOptions}
              isCorrect={isCurrentCorrect}
            />
          )}

        </div>

      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center justify-between">
        <button
          onClick={() => {
            if (currentIndex > 0) onNavigateIndex(currentIndex - 1);
          }}
          disabled={currentIndex === 0}
          className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-bold flex items-center space-x-1.5 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Soal Sebelumnya</span>
        </button>

        <span className="text-xs sm:text-sm font-bold text-slate-600">
          Nomor {currentQuestion.number} dari {questions.length}
        </span>

        {currentIndex < questions.length - 1 ? (
          <button
            onClick={() => onNavigateIndex(currentIndex + 1)}
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold flex items-center space-x-1.5 shadow-sm cursor-pointer"
          >
            <span>Soal Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onFinishQuiz}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center space-x-1.5 shadow-sm cursor-pointer"
          >
            <span>Selesai & Lihat Hasil</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Question Grid Modal */}
      <QuestionGridModal
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        questions={questions}
        currentQuestionIndex={currentIndex}
        onSelectQuestion={(idx) => onNavigateIndex(idx)}
        userAnswers={userAnswers}
      />

    </div>
  );
};
