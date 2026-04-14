import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronRight, 
  Home, 
  GraduationCap, 
  BarChart3, 
  Trophy, 
  RefreshCcw,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Info,
  History,
  Lightbulb,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  LineChart,
  Line
} from 'recharts';
import { Difficulty, Question, QuizState, View, UserProgress, QuizAttempt } from './types';
import { BIVARIATE_QUESTIONS } from './data/questions';
import { BIVARIATE_CONCEPTS } from './data/concepts';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isFinished: false,
    questions: []
  });

  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [progress, setProgress] = useState<UserProgress>({
    attempts: [],
    strugglingConcepts: []
  });

  // Load progress on mount
  useEffect(() => {
    const saved = localStorage.getItem('ncea_math_progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    localStorage.setItem('ncea_math_progress', JSON.stringify(progress));
  }, [progress]);

  // Initialize quiz
  const startQuiz = (difficulty: Difficulty) => {
    const filtered = BIVARIATE_QUESTIONS.filter(q => q.difficulty === difficulty);
    // Shuffle and pick 10
    const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isFinished: false,
      questions: shuffled
    });
    setSelectedDifficulty(difficulty);
    setView('quiz');
    setShowFeedback(false);
  };

  const handleAnswer = (optionIndex: number) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    setLastAnswerCorrect(isCorrect);
    setShowFeedback(true);
    
    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, optionIndex]
    }));
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    if (quizState.currentQuestionIndex + 1 < quizState.questions.length) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      // Save attempt
      const attempt: QuizAttempt = {
        date: new Date().toISOString(),
        difficulty: selectedDifficulty!,
        score: quizState.score,
        total: quizState.questions.length,
        incorrectQuestions: quizState.questions
          .filter((_, i) => quizState.answers[i] !== quizState.questions[i].correctAnswer)
          .map(q => q.id)
      };

      setProgress(prev => {
        const newAttempts = [attempt, ...prev.attempts].slice(0, 50); // Keep last 50
        // Update struggling concepts (simple logic: if missed more than twice)
        const allMissed = newAttempts.flatMap(a => a.incorrectQuestions);
        const counts: Record<string, number> = {};
        allMissed.forEach(id => counts[id] = (counts[id] || 0) + 1);
        const struggling = Object.keys(counts).filter(id => counts[id] >= 2);

        return {
          attempts: newAttempts,
          strugglingConcepts: struggling
        };
      });

      setView('results');
    }
  };

  const resetToHome = () => {
    setView('home');
    setSelectedLevel(null);
    setSelectedSubject(null);
    setSelectedDifficulty(null);
  };

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center space-y-8 py-12"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
          <GraduationCap size={48} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          NCEA Math Help
        </h1>
        <p className="text-xl text-slate-600 max-w-lg mx-auto">
          Kia ora! Let's master NCEA Statistics together with clear explanations and targeted practice.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 max-w-md mx-auto">
        <Button 
          size="lg" 
          className="h-20 text-xl justify-between px-8"
          onClick={() => { setSelectedLevel(3); setView('subject-select'); }}
        >
          <span className="flex items-center gap-3">
            <BookOpen className="text-blue-200" />
            NCEA Level 3
          </span>
          <ChevronRight />
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="h-20 text-xl justify-between px-8"
          onClick={() => setView('progress')}
        >
          <span className="flex items-center gap-3">
            <History className="text-blue-500" />
            My Progress
          </span>
          <ChevronRight />
        </Button>
      </div>
    </motion.div>
  );

  const renderSubjectSelect = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-2xl mx-auto space-y-8 py-12"
    >
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setView('home')}>
          <ArrowLeft />
        </Button>
        <h2 className="text-3xl font-bold text-slate-900">Level 3 Subjects</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 max-w-md mx-auto">
        <div className="space-y-4">
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full h-20 text-xl justify-between px-8 border-2 border-blue-100 hover:border-blue-300"
            onClick={() => { setSelectedSubject('Bivariate'); setView('difficulty-select'); }}
          >
            <span className="flex items-center gap-3">
              <BarChart3 className="text-blue-500" />
              Bivariate Data
            </span>
            <ChevronRight />
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-14 text-lg justify-center gap-2"
            onClick={() => setView('review')}
          >
            <Lightbulb className="text-amber-500" />
            Review Bivariate Concepts
          </Button>
        </div>

        <Separator className="my-4" />
        <p className="text-center text-slate-400 text-sm">More subjects coming soon</p>
      </div>
    </motion.div>
  );

  const renderReview = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 space-y-8"
    >
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setView('subject-select')}>
          <ArrowLeft />
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Review Concepts</h2>
          <p className="text-slate-500">Bivariate Statistics Essentials</p>
        </div>
      </div>

      <Tabs defaultValue="Basics" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="Basics">Basics</TabsTrigger>
          <TabsTrigger value="Analysis">Analysis</TabsTrigger>
          <TabsTrigger value="Evaluation">Evaluation</TabsTrigger>
        </TabsList>
        
        {['Basics', 'Analysis', 'Evaluation'].map((cat) => (
          <TabsContent key={cat} value={cat} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {BIVARIATE_CONCEPTS.filter(c => c.category === cat).map((concept) => (
                <Card key={concept.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">{concept.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-slate-700 leading-relaxed">{concept.content}</p>
                    {concept.formula && (
                      <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm border-l-4 border-blue-500">
                        <p className="text-slate-500 text-xs mb-1 uppercase font-bold">Formula</p>
                        {concept.formula}
                      </div>
                    )}
                    {concept.example && (
                      <div className="bg-amber-50 p-3 rounded-lg text-sm border-l-4 border-amber-400 italic">
                        <p className="text-amber-600 text-xs mb-1 uppercase font-bold not-italic">Example</p>
                        {concept.example}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );

  const renderProgress = () => {
    const totalAttempts = progress.attempts.length;
    const avgScore = totalAttempts > 0 
      ? (progress.attempts.reduce((acc, curr) => acc + curr.score, 0) / (totalAttempts * 10)) * 100 
      : 0;

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto py-12 px-4 space-y-8"
      >
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setView('home')}>
            <ArrowLeft />
          </Button>
          <h2 className="text-3xl font-bold text-slate-900">My Progress</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-blue-100">Total Quizzes</CardDescription>
              <CardTitle className="text-4xl">{totalAttempts}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-green-600 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-green-100">Average Score</CardDescription>
              <CardTitle className="text-4xl">{Math.round(avgScore)}%</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-amber-500 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-amber-100">Struggling Concepts</CardDescription>
              <CardTitle className="text-4xl">{progress.strugglingConcepts.length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="text-blue-500" />
                Recent Attempts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                {progress.attempts.length === 0 ? (
                  <p className="text-center text-slate-500 py-8">No quizzes attempted yet.</p>
                ) : (
                  <div className="space-y-4">
                    {progress.attempts.map((attempt, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-bold">{attempt.difficulty}</p>
                          <p className="text-xs text-slate-500">{new Date(attempt.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-black text-blue-600">{attempt.score}/{attempt.total}</p>
                          <Badge variant={attempt.score >= 8 ? 'default' : attempt.score >= 5 ? 'secondary' : 'destructive'}>
                            {Math.round((attempt.score / attempt.total) * 100)}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="text-amber-500" />
                Areas for Improvement
              </CardTitle>
              <CardDescription>Based on questions you've missed multiple times</CardDescription>
            </CardHeader>
            <CardContent>
              {progress.strugglingConcepts.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <CheckCircle2 className="mx-auto text-green-500" size={48} />
                  <p className="text-slate-500">You're doing great! No specific struggling concepts identified yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {progress.strugglingConcepts.map((id) => {
                    const question = BIVARIATE_QUESTIONS.find(q => q.id === id);
                    return (
                      <div key={id} className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm font-medium text-amber-900 mb-2">{question?.text}</p>
                        <div className="flex items-center gap-2 text-xs text-amber-700">
                          <Info size={14} />
                          <span>Review: {question?.difficulty} level concepts</span>
                        </div>
                      </div>
                    );
                  })}
                  <Button variant="outline" className="w-full mt-4" onClick={() => setView('review')}>
                    Open Concept Review
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    );
  };

  const renderDifficultySelect = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-2xl mx-auto space-y-8 py-12"
    >
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setView('subject-select')}>
          <ArrowLeft />
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Bivariate Data</h2>
          <p className="text-slate-500">Choose your challenge level</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {(['Achieved', 'Merit', 'Excellence'] as Difficulty[]).map((diff) => (
          <Card 
            key={diff} 
            className="cursor-pointer hover:border-blue-500 transition-colors group"
            onClick={() => startQuiz(diff)}
          >
            <CardHeader className="text-center">
              <Badge variant={diff === 'Achieved' ? 'secondary' : diff === 'Merit' ? 'default' : 'destructive'} className="w-fit mx-auto mb-2">
                {diff}
              </Badge>
              <CardTitle>{diff}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-slate-500">
              {diff === 'Achieved' && "Focus on identifying trends, strength, and basic features."}
              {diff === 'Merit' && "Explain features in context and discuss reliability."}
              {diff === 'Excellence' && "Deep statistical insight, causality, and model evaluation."}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group-hover:text-blue-600">
                Start Quiz
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.div>
  );

  const renderQuiz = () => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const progress = ((quizState.currentQuestionIndex) / quizState.questions.length) * 100;

    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="mb-8 space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <Badge variant="outline" className="mb-2">{selectedDifficulty} Level</Badge>
              <h3 className="text-lg font-medium text-slate-600">Question {quizState.currentQuestionIndex + 1} of {quizState.questions.length}</h3>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-blue-600">{Math.round(progress)}% Complete</span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={quizState.currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl leading-tight">
                  {currentQuestion.text}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentQuestion.graphData && (
                  <div className="h-64 w-full bg-slate-50 rounded-xl border p-4 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis type="number" dataKey="x" hide />
                        <YAxis type="number" dataKey="y" hide />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        {currentQuestion.graphType === 'residual' && <ReferenceLine y={0} stroke="#64748b" strokeWidth={2} />}
                        <Scatter name="Data" data={currentQuestion.graphData} fill="#2563eb" />
                      </ScatterChart>
                    </ResponsiveContainer>
                    <p className="text-center text-xs text-slate-400 mt-2 font-medium uppercase tracking-widest">
                      {currentQuestion.graphType === 'residual' ? 'Residual Plot' : 'Scatter Plot'}
                    </p>
                  </div>
                )}
                <div className="grid gap-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = quizState.answers[quizState.currentQuestionIndex] === index;
                    const isCorrect = index === currentQuestion.correctAnswer;
                    
                    let buttonVariant: "outline" | "default" | "secondary" | "destructive" = "outline";
                    if (showFeedback) {
                      if (isCorrect) buttonVariant = "default"; // Green-ish in shadcn default
                      else if (isSelected) buttonVariant = "destructive";
                    } else if (isSelected) {
                      buttonVariant = "secondary";
                    }

                    return (
                      <Button
                        key={index}
                        variant={buttonVariant}
                        className={`h-auto py-4 px-6 justify-start text-left text-lg whitespace-normal ${
                          showFeedback && isCorrect ? 'bg-green-600 hover:bg-green-600 text-white border-green-600' : ''
                        }`}
                        disabled={showFeedback}
                        onClick={() => handleAnswer(index)}
                      >
                        <span className="mr-4 font-bold opacity-50">{String.fromCharCode(65 + index)}.</span>
                        {option}
                        {showFeedback && isCorrect && <CheckCircle2 className="ml-auto shrink-0" />}
                        {showFeedback && isSelected && !isCorrect && <XCircle className="ml-auto shrink-0" />}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>

              {showFeedback && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 p-6 bg-slate-50 border-t rounded-b-lg"
                >
                  <div className="flex gap-4">
                    <div className={`p-2 rounded-full h-fit ${lastAnswerCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {lastAnswerCorrect ? <CheckCircle2 size={24} /> : <Info size={24} />}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">
                        {lastAnswerCorrect ? "Spot on!" : "Not quite, but that's okay!"}
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                      <Button onClick={nextQuestion} className="mt-4">
                        {quizState.currentQuestionIndex + 1 === quizState.questions.length ? "See Results" : "Next Question"}
                        <ChevronRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  const renderResults = () => {
    const percentage = (quizState.score / quizState.questions.length) * 100;
    let message = "";
    let icon = <Trophy className="text-yellow-500" size={64} />;

    if (percentage === 100) message = "Perfect score! You're a stats legend!";
    else if (percentage >= 80) message = "Fantastic work! You've got a great handle on this.";
    else if (percentage >= 50) message = "Good effort! A bit more practice and you'll be flying.";
    else message = "Keep going! Statistics is all about practice. You'll get there!";

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto py-12 px-4 text-center space-y-8"
      >
        <div className="space-y-4">
          <div className="flex justify-center">{icon}</div>
          <h2 className="text-4xl font-bold">Quiz Complete!</h2>
          <p className="text-xl text-slate-600">{message}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border-2 shadow-sm space-y-6">
          <div className="flex justify-around items-center">
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-wider text-slate-500 font-bold">Score</p>
              <p className="text-5xl font-black text-blue-600">{quizState.score} / {quizState.questions.length}</p>
            </div>
            <Separator orientation="vertical" className="h-16" />
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-wider text-slate-500 font-bold">Accuracy</p>
              <p className="text-5xl font-black text-blue-600">{Math.round(percentage)}%</p>
            </div>
          </div>
          
          <div className="pt-4">
            <p className="text-slate-500 italic">"The more we practice, the more we see the patterns in the data!"</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => startQuiz(selectedDifficulty!)} className="gap-2">
            <RefreshCcw size={20} /> Try Again
          </Button>
          <Button size="lg" variant="outline" onClick={resetToHome} className="gap-2">
            <Home size={20} /> Back to Home
          </Button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={resetToHome}>
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <BarChart3 size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">NCEA Math Help</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button onClick={resetToHome} className="hover:text-blue-600 transition-colors">Home</button>
            <span className="text-slate-300">/</span>
            <span className={selectedLevel ? "text-slate-900" : ""}>Level {selectedLevel || '...'}</span>
            {selectedSubject && (
              <>
                <span className="text-slate-300">/</span>
                <span className="text-slate-900">{selectedSubject}</span>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          {view === 'home' && renderHome()}
          {view === 'subject-select' && renderSubjectSelect()}
          {view === 'difficulty-select' && renderDifficultySelect()}
          {view === 'quiz' && renderQuiz()}
          {view === 'results' && renderResults()}
          {view === 'review' && renderReview()}
          {view === 'progress' && renderProgress()}
        </AnimatePresence>
      </main>

      <footer className="py-8 border-t bg-white mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2026 NCEA Math Help. Comprehensive Statistics Support.</p>
        </div>
      </footer>
    </div>
  );
}
