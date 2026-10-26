import React from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  CheckSquare, 
  Volume2, 
  Layers, 
  Lightbulb, 
  RotateCcw, 
  Save, 
  GraduationCap, 
  ArrowRight,
  ListFilter,
  CheckCircle2
} from 'lucide-react';
import { speechManager } from '../utils/speech';

interface LearningGuideProps {
  onStartPractice: () => void;
}

export const LearningGuide: React.FC<LearningGuideProps> = ({ onStartPractice }) => {

  const narrations = {
    overview: 
      "Welcome to the Learning Guide for TKA English Mastery 2026, guided by Mam Amelia Aritonang. " +
      "This section explains how to answer our three question formats, utilize the seven-step explanation framework, and customize your listening experience.",
    questionTypes: 
      "We feature three distinct question formats. First, Multiple-Choice with five options and one correct answer. " +
      "Second, Multiple-Select with four options where at least two, but never all four, are correct. Full combination accuracy is required. " +
      "Third, True, False, or Not Given, where you verify whether statements agree with, contradict, or go beyond the text.",
    sevenSteps: 
      "After locking your answer, study the seven-step explanation. Step 1 clarifies the question demand. " +
      "Step 2 locates the textual evidence. Step 3 interprets its meaning. Step 4 eliminates weak distractors. " +
      "Step 5 confirms the answer. Step 6 reveals a quick solving strategy, and Step 7 transfers the skill to other reading tasks.",
    narratorTips: 
      "Use our English narrator to sharpen your listening and pronunciation. " +
      "You can adjust the speed between point eight, one point zero, and one point two times, or open the written transcript whenever needed."
  };

  const playSpeech = (text: string) => {
    speechManager.speak(text);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-10 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-red-950 text-white p-6 sm:p-8 border border-red-800 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Panduan Belajar & Asesmen TKA 2026
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Petunjuk Penggunaan & Strategi Menjawab
            </h1>
            <p className="text-sm text-slate-300 flex items-center space-x-1.5 font-medium">
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Instruksi Resmi oleh <strong className="text-amber-300">Mam Amelia Aritonang, S.Pd.</strong></span>
            </p>
          </div>
          <button
            onClick={() => playSpeech(narrations.overview)}
            className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-md transition-all self-start sm:self-center cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Listen to Guide Overview</span>
          </button>
        </div>
      </div>

      {/* Section 1: Cara Menjawab Tiga Bentuk Soal */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Aturan & Format 3 Tipe Soal (25 Soal Terpadu)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Pahami aturan pemilihan dan sistem penilaian untuk masing-masing format soal.
              </p>
            </div>
          </div>
          <button
            onClick={() => playSpeech(narrations.questionTypes)}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
            title="Listen to Question Types Narration"
          >
            <Volume2 className="w-4 h-4 text-red-600" />
            <span className="hidden sm:inline">Dengarkan</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* MCQ */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-blue-900 text-white">
                9 SOAL
              </span>
              <span className="text-xs font-bold text-slate-500">Pilihan Ganda</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Multiple-Choice (MCQ)
            </h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Memiliki <strong>lima opsi</strong>: A, B, C, D, E.</li>
              <li>Hanya <strong>satu jawaban benar</strong>.</li>
              <li>Pilih opsi yang paling didukung kuat oleh teks bacaan.</li>
            </ul>
          </div>

          {/* MSQ */}
          <div className="border border-red-200 rounded-xl p-5 bg-red-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-red-700 text-white">
                8 SOAL
              </span>
              <span className="text-xs font-bold text-red-700">Pilihan Ganda Kompleks</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Multiple-Select (MSQ)
            </h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Memiliki <strong>empat opsi</strong>: A, B, C, D.</li>
              <li>Memiliki <strong>minimal 2 jawaban benar</strong> dan tidak boleh semua (2 atau 3 benar).</li>
              <li><strong>All-or-Nothing</strong>: Seluruh opsi benar wajib dicentang dan opsi salah tidak boleh dipilih.</li>
            </ul>
          </div>

          {/* TFNG */}
          <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-emerald-800 text-white">
                8 SOAL
              </span>
              <span className="text-xs font-bold text-emerald-800">Verifikasi Fakta</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              True / False / Not Given
            </h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
              <li><strong>True</strong>: Pernyataan selaras & didukung bukti teks.</li>
              <li><strong>False</strong>: Pernyataan bertentangan langsung dengan teks.</li>
              <li><strong>Not Given</strong>: Informasi tidak dinyatakan atau tidak dapat dipastikan dari teks.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Kerangka 7 Langkah Pembahasan */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Struktur Pembahasan 7 Langkah (Deep Learning Framework)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Tiap kali jawaban dikunci, Anda akan mempelajari pembuktian sistematis berikut.
              </p>
            </div>
          </div>
          <button
            onClick={() => playSpeech(narrations.sevenSteps)}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
          >
            <Volume2 className="w-4 h-4 text-red-600" />
            <span className="hidden sm:inline">Dengarkan</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-extrabold uppercase text-blue-700 tracking-wider">Step 1</span>
            <h4 className="font-bold text-sm text-slate-900">Understand the Question</h4>
            <p className="text-xs text-slate-600">Mengidentifikasi fokus pertanyaan, jenis instruksi, dan kata kunci utama.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-extrabold uppercase text-blue-700 tracking-wider">Step 2</span>
            <h4 className="font-bold text-sm text-slate-900">Locate the Evidence</h4>
            <p className="text-xs text-slate-600">Menemukan dan mengutip kalimat spesifik dalam teks yang memuat informasi penentu.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-extrabold uppercase text-blue-700 tracking-wider">Step 3</span>
            <h4 className="font-bold text-sm text-slate-900">Interpret the Evidence</h4>
            <p className="text-xs text-slate-600">Menghubungkan bukti tekstual dengan konteks, implikasi logis, dan tujuan penulis.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-extrabold uppercase text-blue-700 tracking-wider">Step 4</span>
            <h4 className="font-bold text-sm text-slate-900">Eliminate Weak Options</h4>
            <p className="text-xs text-slate-600">Menganalisis satu per satu alasan mengapa opsi pengecoh tidak tepat.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-extrabold uppercase text-blue-700 tracking-wider">Step 5</span>
            <h4 className="font-bold text-sm text-slate-900">Confirm the Answer</h4>
            <p className="text-xs text-slate-600">Menegaskan pilihan jawaban yang paling valid dan berbasis bukti kuat.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-extrabold uppercase text-red-700 tracking-wider">Step 6 & 7</span>
            <h4 className="font-bold text-sm text-slate-900">Quick Strategy & Transfer Skill</h4>
            <p className="text-xs text-slate-600">Teknik pemindaian cepat (skimming/scanning) dan kaidah membaca untuk soal lain.</p>
          </div>
        </div>
      </div>

      {/* Section 3: Audio TTS & Offline Autosave */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* TTS Tips */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <Volume2 className="w-5 h-5 text-red-600" />
              <h3 className="font-bold text-slate-900 text-base">Panduan Audio Narator TTS</h3>
            </div>
            <button
              onClick={() => playSpeech(narrations.narratorTips)}
              className="text-xs text-red-600 font-bold hover:underline cursor-pointer"
            >
              Putar Audio
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Aplikasi menggunakan Web Speech API dengan suara English natural (en-US / en-GB). 
            Gunakan tombol <strong>“Listen to Question”</strong>, <strong>“Reading Guide”</strong>, atau tombol pembahasan di tiap langkah. 
            Anda dapat mengatur kecepatan baca (0.8x, 1.0x, 1.2x) dan melihat transkrip tertulis jika audio dibisukan.
          </p>
        </div>

        {/* Offline Autosave Tips */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2.5">
            <Save className="w-5 h-5 text-blue-700" />
            <h3 className="font-bold text-slate-900 text-base">Penyimpanan Progres 100% Offline</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Setiap pilihan jawaban, status penguncian soal, dan posisi soal terakhir secara otomatis tersimpan di <code>localStorage</code> peramban Anda.
            Halaman aman dimuat ulang (refresh) kapan saja tanpa kehilangan progres. Tersedia tombol Reset Progres dengan dialog konfirmasi aman di halaman Dashboard.
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Siap untuk Memulai Latihan?</h3>
          <p className="text-xs text-slate-400">Kerjakan 25 soal secara runtut atau loncat melalui kisi nomor soal.</p>
        </div>
        <button
          onClick={onStartPractice}
          className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 font-bold text-sm text-white flex items-center space-x-2 transition-all shadow-md cursor-pointer whitespace-nowrap"
        >
          <span>Masuk ke Soal 1</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
