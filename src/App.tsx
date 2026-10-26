import React, { useState, useEffect } from 'react';
import { QUESTIONS_DATA } from './data/questionsData';
import { UserAnswerRecord, UserProgress } from './types';
import { Navbar, ActiveTab } from './components/Navbar';
import { AudioNarratorBar } from './components/AudioNarratorBar';
import { WelcomePage } from './components/WelcomePage';
import { LearningGuide } from './components/LearningGuide';
import { QuestionView } from './components/QuestionView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { FinalResult } from './components/FinalResult';
import { speechManager } from './utils/speech';

const STORAGE_KEY = 'tka_english_mastery_2026_progress_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('welcome');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswerRecord>>({});
  const [lastSaved, setLastSaved] = useState<number>(Date.now());
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load progress from localStorage on initial render
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: UserProgress = JSON.parse(saved);
        if (parsed.answers) {
          setUserAnswers(parsed.answers);
        }
        if (typeof parsed.currentQuestionId === 'number') {
          const matchedIndex = QUESTIONS_DATA.findIndex(q => q.id === parsed.currentQuestionId);
          if (matchedIndex !== -1) {
            setCurrentIndex(matchedIndex);
          }
        }
        if (parsed.speechRate) {
          speechManager.setRate(parsed.speechRate);
        }
      }
    } catch (e) {
      console.warn('Failed to load local progress:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Autosave to localStorage on changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      const currentQuestionId = QUESTIONS_DATA[currentIndex]?.id || 1;
      const progressData: UserProgress = {
        answers: userAnswers,
        currentQuestionId,
        speechRate: speechManager.getStatus().rate,
        lastActiveTimestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
      setLastSaved(Date.now());
    } catch (e) {
      console.warn('Failed to autosave progress:', e);
    }
  }, [userAnswers, currentIndex, isLoaded]);

  // Answer selection update
  const handleUpdateAnswer = (questionId: number, selectedOptions: string[]) => {
    setUserAnswers(prev => {
      const existing = prev[questionId] || { selectedOptions: [], isLocked: false };
      return {
        ...prev,
        [questionId]: {
          ...existing,
          selectedOptions,
          timestamp: Date.now()
        }
      };
    });
  };

  // Lock answer and evaluate correctness
  const handleLockAnswer = (questionId: number) => {
    const question = QUESTIONS_DATA.find(q => q.id === questionId);
    if (!question) return;

    setUserAnswers(prev => {
      const existing = prev[questionId] || { selectedOptions: [], isLocked: false };
      const selected = existing.selectedOptions || [];

      // Calculate correctness strictly
      let isCorrect = false;
      if (question.questionType === 'mcq' || question.questionType === 'tfng') {
        isCorrect = selected.length === 1 && selected[0] === question.correctAnswer[0];
      } else if (question.questionType === 'msq') {
        // Strict all-or-nothing: every correct option selected, no incorrect option selected
        isCorrect =
          selected.length === question.correctAnswer.length &&
          selected.every(val => question.correctAnswer.includes(val));
      }

      return {
        ...prev,
        [questionId]: {
          ...existing,
          isLocked: true,
          isCorrect,
          timestamp: Date.now()
        }
      };
    });
  };

  // Unlock answer to allow re-selection
  const handleUnlockAnswer = (questionId: number) => {
    setUserAnswers(prev => {
      const existing = prev[questionId];
      if (!existing) return prev;
      return {
        ...prev,
        [questionId]: {
          ...existing,
          isLocked: false
        }
      };
    });
  };

  // Safe reset
  const handleResetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUserAnswers({});
    setCurrentIndex(0);
    setActiveTab('welcome');
    speechManager.stop();
  };

  const handleStartPractice = () => {
    setActiveTab('practice');
    speechManager.speak(
      `Starting Question 1: ${QUESTIONS_DATA[0].title}. Read the stimulus carefully and examine the evidence.`
    );
  };

  const handleNavigateToQuestion = (index: number) => {
    setCurrentIndex(index);
    setActiveTab('practice');
    const targetQ = QUESTIONS_DATA[index];
    speechManager.speak(`Navigating to Question ${targetQ.number}: ${targetQ.title}.`);
  };

  // Completed count calculation
  const completedCount = Object.values(userAnswers).filter(a => a.isLocked).length;

  // Active question context title for the top audio bar
  const activeQuestion = QUESTIONS_DATA[currentIndex];
  let narratorContext = 'Instructional Companion';
  if (activeTab === 'practice' && activeQuestion) {
    narratorContext = `Soal ${activeQuestion.number}: ${activeQuestion.title}`;
  } else if (activeTab === 'welcome') {
    narratorContext = 'Welcome & Overview';
  } else if (activeTab === 'guide') {
    narratorContext = 'Learning Strategy Guide';
  } else if (activeTab === 'dashboard') {
    narratorContext = 'Progress & Diagnostics';
  } else if (activeTab === 'result') {
    narratorContext = 'Final Assessment Report';
  }

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedCount={completedCount}
        totalQuestions={QUESTIONS_DATA.length}
        lastSavedTimestamp={lastSaved}
      />

      {/* Floating Audio Narrator Assistant Bar */}
      <AudioNarratorBar currentContextName={narratorContext} />

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'welcome' && (
          <WelcomePage
            onStart={handleStartPractice}
            onOpenGuide={() => {
              setActiveTab('guide');
              speechManager.speak("Welcome to the Learning Guide. Learn how to master each question format.");
            }}
          />
        )}

        {activeTab === 'guide' && (
          <LearningGuide
            onStartPractice={handleStartPractice}
          />
        )}

        {activeTab === 'practice' && (
          <QuestionView
            questions={QUESTIONS_DATA}
            currentIndex={currentIndex}
            onNavigateIndex={(idx) => setCurrentIndex(idx)}
            userAnswers={userAnswers}
            onUpdateAnswer={handleUpdateAnswer}
            onLockAnswer={handleLockAnswer}
            onUnlockAnswer={handleUnlockAnswer}
            onFinishQuiz={() => {
              setActiveTab('result');
              speechManager.speak("Practice session completed! Review your final score and competency breakdown.");
            }}
          />
        )}

        {activeTab === 'dashboard' && (
          <ProgressDashboard
            questions={QUESTIONS_DATA}
            userAnswers={userAnswers}
            onNavigateToQuestion={handleNavigateToQuestion}
            onResetProgress={handleResetProgress}
            onOpenResults={() => setActiveTab('result')}
          />
        )}

        {activeTab === 'result' && (
          <FinalResult
            questions={QUESTIONS_DATA}
            userAnswers={userAnswers}
            onNavigateToQuestion={handleNavigateToQuestion}
            onRestart={() => {
              setCurrentIndex(0);
              setActiveTab('practice');
            }}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-6 text-xs text-center space-y-1.5">
        <div className="font-extrabold text-white text-sm">
          TKA ENGLISH MASTERY 2026
        </div>
        <div>
          Guided by <span className="text-amber-400 font-bold">Mam Amelia Aritonang, S.Pd.</span> • SMA / MA / SMK / MAK Sederajat
        </div>
        <div className="text-slate-500 text-[11px] font-medium pt-1">
          Read Smart • Think Deeply • Answer Confidently • Web Speech API TTS • 100% Offline Autosave
        </div>
      </footer>

    </div>
  );
}
