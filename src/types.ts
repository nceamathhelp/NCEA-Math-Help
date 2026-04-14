export type Difficulty = 'Achieved' | 'Merit' | 'Excellence';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // index of options
  explanation: string;
  difficulty: Difficulty;
  imageUrl?: string;
  graphData?: { x: number; y: number }[];
  graphType?: 'scatter' | 'line' | 'residual';
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[]; // indices of selected options
  isFinished: boolean;
  questions: Question[];
}

export type View = 'home' | 'level-select' | 'subject-select' | 'difficulty-select' | 'quiz' | 'results' | 'review' | 'progress';

export interface QuizAttempt {
  date: string;
  difficulty: Difficulty;
  score: number;
  total: number;
  incorrectQuestions: string[]; // IDs of questions missed
}

export interface UserProgress {
  attempts: QuizAttempt[];
  strugglingConcepts: string[]; // Concept tags or question IDs
}

export interface Concept {
  id: string;
  title: string;
  content: string;
  example?: string;
  formula?: string;
  category: 'Basics' | 'Analysis' | 'Evaluation';
}
