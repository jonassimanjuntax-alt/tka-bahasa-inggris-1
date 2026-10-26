import React, { useEffect, useState } from 'react';
import { speechManager, SpeechStatus } from '../utils/speech';
import { 
  Volume2, 
  VolumeX, 
  Pause, 
  Play, 
  RotateCcw, 
  Square, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Headphones
} from 'lucide-react';

interface AudioNarratorBarProps {
  currentContextName?: string;
}

export const AudioNarratorBar: React.FC<AudioNarratorBarProps> = ({ currentContextName }) => {
  const [speechState, setSpeechState] = useState<SpeechStatus>(speechManager.getStatus());
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const unsubscribe = speechManager.subscribe((status) => {
      setSpeechState(status);
    });
    return () => unsubscribe();
  }, []);

  const rates = [0.8, 1.0, 1.2];

  const handleTogglePlayPause = () => {
    if (speechState.isSpeaking && !speechState.isPaused) {
      speechManager.pause();
    } else if (speechState.isPaused) {
      speechManager.resume();
    } else if (speechState.currentText) {
      speechManager.speak(speechState.currentText);
    }
  };

  const handleStop = () => {
    speechManager.stop();
  };

  const handleRepeat = () => {
    if (speechState.currentText) {
      speechManager.speak(speechState.currentText);
    }
  };

  const handleChangeRate = (r: number) => {
    speechManager.setRate(r);
  };

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white shadow-md sticky top-0 z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        {/* Narrator Identity and Wave Indicator */}
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-xs ring-2 ring-red-400/40">
            <Headphones className="w-4 h-4" />
            {speechState.isSpeaking && !speechState.isPaused && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                English Audio Narrator
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                • Guided by Mam Amelia Aritonang
              </span>
            </div>
            <div className="text-xs text-slate-300 font-medium flex items-center space-x-1.5">
              <span>{currentContextName || 'Instructional Companion'}</span>
              {speechState.isSpeaking && !speechState.isPaused && (
                <span className="inline-flex items-center space-x-0.5 text-emerald-400 ml-1">
                  <span className="w-1 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="w-1 h-3.5 bg-emerald-400 rounded-full animate-pulse delay-75" />
                  <span className="w-1 h-2 bg-emerald-400 rounded-full animate-pulse delay-150" />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Controls: Play/Pause, Stop, Repeat, Speed, Transcript */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Play/Pause */}
          <button
            onClick={handleTogglePlayPause}
            disabled={!speechState.currentText}
            className={`p-2 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all cursor-pointer ${
              speechState.isSpeaking && !speechState.isPaused
                ? 'bg-amber-600 hover:bg-amber-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
            title={speechState.isSpeaking && !speechState.isPaused ? 'Pause Narration' : 'Play / Resume'}
          >
            {speechState.isSpeaking && !speechState.isPaused ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Play</span>
              </>
            )}
          </button>

          {/* Stop */}
          <button
            onClick={handleStop}
            disabled={!speechState.isSpeaking && !speechState.isPaused}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            title="Stop Narration"
          >
            <Square className="w-3.5 h-3.5" />
          </button>

          {/* Repeat */}
          <button
            onClick={handleRepeat}
            disabled={!speechState.currentText}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            title="Repeat Narration"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Speed Rate Pill Select */}
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
            {rates.map((r) => (
              <button
                key={r}
                onClick={() => handleChangeRate(r)}
                className={`px-2 py-1 rounded font-semibold transition-all cursor-pointer ${
                  speechState.rate === r
                    ? 'bg-red-600 text-white shadow-2xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {r}x
              </button>
            ))}
          </div>

          {/* Transcript Toggle */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white flex items-center space-x-1 border border-slate-700 cursor-pointer"
            title="Show Written Transcript"
          >
            <span className="hidden sm:inline">Transcript</span>
            {showTranscript ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expandable Transcript Banner */}
      {showTranscript && (
        <div className="bg-slate-950 border-t border-slate-800 px-4 py-3 sm:px-6">
          <div className="max-w-4xl mx-auto flex items-start space-x-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              <span className="font-bold text-red-400 block mb-0.5 uppercase tracking-wide text-[11px]">
                Narration Transcript:
              </span>
              {speechState.currentText ? (
                <p className="italic font-serif text-slate-200">
                  "{speechState.currentText}"
                </p>
              ) : (
                <p className="text-slate-400 italic">
                  Select a question, guide section, or menu item to hear and read the instructional narration.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
