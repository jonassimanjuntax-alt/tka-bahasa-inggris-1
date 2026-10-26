export type QuestionType = 'mcq' | 'msq' | 'tfng';

export type Competency = 
  | 'Textual Comprehension' 
  | 'Inferential Comprehension' 
  | 'Evaluation and Appreciation';

export type TextGenre = 
  | 'Descriptive Text'
  | 'Recount Text'
  | 'Narrative Text'
  | 'Report Text'
  | 'Procedure Text'
  | 'Announcement'
  | 'Notice'
  | 'Short Message'
  | 'Advertisement'
  | 'Informative Article';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Challenging' | 'HOTS Advanced';

export interface OptionItem {
  id: string; // 'A', 'B', 'C', 'D', 'E' or 'True', 'False', 'Not Given'
  label: string;
  text: string;
}

export interface StepExplanation {
  step1Understand: string;
  step2LocateEvidence: string;
  step3InterpretEvidence: string;
  step4EliminateWeakOptions: Record<string, string>; // e.g. { A: '...', B: '...' }
  step5ConfirmAnswer: string;
  step6QuickStrategy: string;
  step7TransferSkill: string;
}

export interface NarrationScript {
  questionOverview: string;
  readingGuide: string;
  quickStrategy: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
  explanationSummary: string;
}

export interface VisualStimulusData {
  type: 'infographic' | 'notice' | 'schedule' | 'chart' | 'brochure' | 'diagram' | 'log' | 'report_card';
  title: string;
  subtitle?: string;
  badge?: string;
  metaInfo?: { label: string; value: string }[];
  dataPoints?: { label: string; value: string; detail?: string }[];
  tableData?: { headers: string[]; rows: string[][] };
  footerNote?: string;
  visualTheme?: 'navy' | 'crimson' | 'emerald' | 'amber' | 'slate';
}

export interface Question {
  id: number;
  number: number;
  questionType: QuestionType;
  competency: Competency;
  genre: TextGenre;
  difficulty: DifficultyLevel;
  title: string;
  passage: string[]; // paragraphs
  stimulus: VisualStimulusData;
  questionPrompt: string;
  instructionsPrompt?: string;
  options: OptionItem[];
  // For MCQ: ['B'] (single string in array)
  // For MSQ: ['A', 'C'] (at least 2, never all 4)
  // For TFNG: ['True'] or ['False'] or ['Not Given']
  correctAnswer: string[];
  evidenceText: string;
  explanation: StepExplanation;
  quickStrategySummary: string;
  narration: NarrationScript;
}

export interface UserAnswerRecord {
  selectedOptions: string[];
  isLocked: boolean;
  isCorrect?: boolean;
  timestamp?: number;
}

export interface UserProgress {
  answers: Record<number, UserAnswerRecord>;
  currentQuestionId: number;
  speechRate: number;
  lastActiveTimestamp: number;
}
