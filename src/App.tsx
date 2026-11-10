import { useState } from 'react';
import { AppScreen, CharacterSelections } from './types/character';
import { DEFAULT_CHARACTER, QUESTIONS } from './data/questions';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionnaireScreen } from './components/QuestionnaireScreen';
import { RevealScreen } from './components/RevealScreen';
import { sound } from './utils/audio';

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('welcome');
  const [userName, setUserName] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // In-memory selections for real-time live preview & final reveal
  const [selections, setSelections] = useState<CharacterSelections>(DEFAULT_CHARACTER);

  // Tracks what the user has explicitly answered
  const [answersGiven, setAnswersGiven] = useState<
    Partial<Record<keyof CharacterSelections, any>>
  >({});

  const handleStart = (name: string) => {
    setUserName(name);
    setScreen('questionnaire');
  };

  const handleSelectOption = (key: keyof CharacterSelections, value: any) => {
    setAnswersGiven((prev) => ({
      ...prev,
      [key]: value,
    }));
    setSelections((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setScreen('reveal');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setScreen('welcome');
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswersGiven({});
    setSelections(DEFAULT_CHARACTER);
    setScreen('welcome');
  };

  const handleToggleMute = () => {
    const newMuted = sound.toggleMute();
    setIsMuted(newMuted);
  };

  return (
    <div className="min-h-screen bg-[#0c0e17] text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      {/* Top Header with brand mark and sound toggle */}
      <Header isMuted={isMuted} onToggleMute={handleToggleMute} />

      {/* Screen Views */}
      <main className="flex-1 flex flex-col">
        {screen === 'welcome' && (
          <WelcomeScreen
            onStart={handleStart}
            initialName={userName}
          />
        )}

        {screen === 'questionnaire' && (
          <QuestionnaireScreen
            currentQuestionIndex={currentQuestionIndex}
            selections={selections}
            answersGiven={answersGiven}
            userName={userName}
            onSelectOption={handleSelectOption}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {screen === 'reveal' && (
          <RevealScreen
            userName={userName}
            selections={selections}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}
