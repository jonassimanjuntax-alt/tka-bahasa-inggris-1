/**
 * Web Speech API Controller for English Instructional Narrator
 * Mam Amelia Aritonang, S.Pd. - TKA English Mastery 2026
 */

export interface SpeechStatus {
  isSpeaking: boolean;
  isPaused: boolean;
  currentText: string;
  hasSupport: boolean;
  rate: number;
}

type SpeechListener = (status: SpeechStatus) => void;

class SpeechManager {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<SpeechListener> = new Set();
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private voicesLoaded: boolean = false;
  private rate: number = 1.0;
  private currentText: string = '';
  private isSpeaking: boolean = false;
  private isPaused: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    if (voices.length > 0) {
      this.voicesLoaded = true;
      // Prioritize natural English voices (Google US English, Samantha, Daniel, Karen, Victoria, Natural, en-US, en-GB)
      const englishVoices = voices.filter(v => v.lang.startsWith('en'));
      const naturalEn = englishVoices.find(
        v =>
          (v.name.includes('Natural') ||
           v.name.includes('Google') ||
           v.name.includes('Samantha') ||
           v.name.includes('Daniel') ||
           v.name.includes('Serena')) &&
          (v.lang === 'en-US' || v.lang === 'en-GB')
      );
      const standardEn = englishVoices.find(v => v.lang === 'en-US' || v.lang === 'en-GB');
      this.selectedVoice = naturalEn || standardEn || englishVoices[0] || voices[0] || null;
    }
  }

  public subscribe(listener: SpeechListener): () => void {
    this.listeners.add(listener);
    listener(this.getStatus());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const status = this.getStatus();
    this.listeners.forEach(fn => fn(status));
  }

  public getStatus(): SpeechStatus {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
      currentText: this.currentText,
      hasSupport: !!this.synth,
      rate: this.rate,
    };
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.7, Math.min(1.5, newRate));
    if (this.isSpeaking && this.currentText) {
      const remainingText = this.currentText;
      this.stop();
      this.speak(remainingText);
    } else {
      this.notify();
    }
  }

  public speak(text: string, onEnd?: () => void) {
    if (!this.synth || !text) {
      this.currentText = text;
      this.notify();
      return;
    }

    // Always stop previous utterances to prevent stacking
    this.synth.cancel();
    this.isSpeaking = false;
    this.isPaused = false;

    // Clean text of unnecessary formatting before speaking
    const cleanText = text
      .replace(/[*_#`~]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    this.currentText = cleanText;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (!this.selectedVoice) {
      this.initVoices();
    }
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.lang = this.selectedVoice?.lang || 'en-US';
    utterance.rate = this.rate;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      this.notify();
    };

    utterance.onpause = () => {
      this.isPaused = true;
      this.notify();
    };

    utterance.onresume = () => {
      this.isPaused = false;
      this.notify();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.notify();
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis notice/event:', e);
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.notify();
    };

    this.currentUtterance = utterance;

    // Small timeout to circumvent chrome speech synthesis bugs
    setTimeout(() => {
      try {
        if (this.synth) {
          this.synth.speak(utterance);
        }
      } catch (err) {
        console.warn('SpeechSynthesis error:', err);
      }
    }, 50);
  }

  public pause() {
    if (this.synth && this.isSpeaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  public resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.notify();
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.isPaused = false;
    this.currentUtterance = null;
    this.notify();
  }
}

export const speechManager = new SpeechManager();
