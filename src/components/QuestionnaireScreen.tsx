import React from 'react';
import { ArrowLeft, ArrowRight, Check, Sparkles, HelpCircle } from 'lucide-react';
import { CharacterSelections } from '../types/character';
import { QUESTIONS } from '../data/questions';
import { PixelCharacter } from './PixelCharacter';
import { sound } from '../utils/audio';

interface QuestionnaireScreenProps {
  currentQuestionIndex: number;
  selections: CharacterSelections;
  answersGiven: Partial<Record<keyof CharacterSelections, any>>;
  userName: string;
  onSelectOption: (key: keyof CharacterSelections, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const QuestionnaireScreen: React.FC<QuestionnaireScreenProps> = ({
  currentQuestionIndex,
  selections,
  answersGiven,
  userName,
  onSelectOption,
  onNext,
  onBack,
}) => {
  const currentQ = QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUESTIONS.length;
  const currentKey = currentQ.key;
  const selectedValue = answersGiven[currentKey];
  const hasSelected = selectedValue !== undefined && selectedValue !== null;

  const handleOptionClick = (optionId: any) => {
    sound.playSelect();
    onSelectOption(currentKey, optionId);
  };

  const handleNextClick = () => {
    if (!hasSelected) return;
    if (currentQuestionIndex === totalQuestions - 1) {
      sound.playFanfare();
    } else {
      sound.playStep();
    }
    onNext();
  };

  const handleBackClick = () => {
    sound.playBack();
    onBack();
  };

  // Progress percentage
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="min-h-[calc(100vh-49px)] flex flex-col justify-between px-4 py-4 sm:py-6 max-w-6xl mx-auto w-full">
      {/* Top Progress & Step Bar */}
      <div className="w-full mb-4 sm:mb-6">
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-400 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-pink-400 text-xs sm:text-sm">
              QUESTION {String(currentQ.number).padStart(2, '0')} / {totalQuestions}
            </span>
            <span className="hidden sm:inline-block text-slate-600">·</span>
            <span className="hidden sm:inline-block text-slate-300 font-semibold tracking-wide">
              {currentQ.category}
            </span>
          </div>
          <span className="font-pixel text-[11px] text-purple-400">
            {progressPercent}% COMPLETE
          </span>
        </div>

        {/* Progress bar track */}
        <div className="w-full h-2 rounded-full bg-slate-900 border border-purple-900/40 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Content Split: Left (Questions & Cards) vs Right (Live Preview) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start my-auto">
        {/* Left: Question + 4 Options (col-span 7 or 8) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Question Heading */}
          <div className="mb-5 sm:mb-6">
            <span className="text-xs uppercase tracking-widest text-pink-400/80 font-semibold">
              Step {currentQ.number} for {userName || 'you'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug">
              {currentQ.heading}
            </h2>
          </div>

          {/* 4 Selectable Option Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedValue === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleOptionClick(option.id)}
                  className={`relative p-3.5 sm:p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[100px] sm:min-h-[110px] group ${
                    isSelected
                      ? 'bg-purple-950/60 border-pink-400 ring-2 ring-pink-500/30 shadow-lg shadow-pink-500/10'
                      : 'bg-slate-900/70 border-purple-900/30 hover:border-purple-500/50 hover:bg-slate-800/80'
                  }`}
                >
                  {/* Top line: Number index & Badge/Color */}
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={`text-[10px] font-pixel px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-pink-500/30 text-pink-200 border border-pink-400/40'
                          : 'bg-slate-800/80 text-slate-400 border border-slate-700/50'
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    {/* Color Swatch or Badge */}
                    <div className="flex items-center gap-1.5">
                      {option.accentColor && (
                        <span
                          className="w-4 h-4 rounded-full border border-white/30 shadow-sm shrink-0"
                          style={{ backgroundColor: option.accentColor }}
                        />
                      )}
                      {option.badge && (
                        <span className="text-[10px] font-medium text-purple-300/80 bg-purple-900/30 px-1.5 py-0.5 rounded">
                          {option.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Label and Check icon */}
                  <div className="flex items-start justify-between gap-2 mt-auto">
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-semibold leading-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}
                      >
                        {option.label}
                      </h3>
                      {option.description && (
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {option.description}
                        </p>
                      )}
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border mt-0.5 transition-all ${
                        isSelected
                          ? 'bg-pink-500 border-pink-400 text-white'
                          : 'border-slate-700 bg-slate-800/50 text-transparent'
                      }`}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Live Dynamic Character Preview (col-span 5) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[280px] sm:max-w-[320px] bg-slate-900/90 rounded-2xl p-3 border-2 border-purple-500/20 shadow-xl backdrop-blur-sm relative">
            {/* Header label on preview */}
            <div className="flex items-center justify-between px-2 py-1 mb-2 border-b border-purple-900/30">
              <span className="text-[10px] font-pixel text-purple-300">LIVE PREVIEW</span>
              <span className="text-[10px] text-pink-400/80 font-medium">Real-time Updating</span>
            </div>

            {/* SVG Character Display */}
            <div className="w-full aspect-[2/3] rounded-xl overflow-hidden bg-slate-950 relative border border-purple-900/20">
              <PixelCharacter selections={selections} />
            </div>

            <div className="text-center mt-2">
              <p className="text-[11px] text-slate-400">
                Updating with each choice you make
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area: Motivational Message & Navigation Buttons */}
      <div className="w-full mt-6 pt-4 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Back Button */}
        <button
          type="button"
          onClick={handleBackClick}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-purple-500/20 bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{currentQuestionIndex === 0 ? 'Edit Name' : 'Back'}</span>
        </button>

        {/* IMPORTANT BOTTOM MESSAGE:
            "After a visitor selects an option, display this message near the bottom of the question screen:
            'A few steps to unlock your anime girl ✨'
            This message should be visually attractive, softly animated and consistent across all ten questions.
            It must appear after a selection is made.
            Before a selection is made, keep the Next button disabled and provide a subtle instruction to choose an option."
        */}
        <div className="order-first sm:order-none text-center">
          {hasSelected ? (
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-medium animate-float">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>A few steps to unlock your anime girl ✨</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              <span>Please select an option above to continue</span>
            </div>
          )}
        </div>

        {/* Next / Reveal Button */}
        <button
          type="button"
          onClick={handleNextClick}
          disabled={!hasSelected}
          className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            hasSelected
              ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30 transform hover:-translate-y-0.5 active:translate-y-0'
              : 'bg-slate-800/70 text-slate-500 border border-slate-700/40 cursor-not-allowed opacity-60'
          }`}
        >
          <span>
            {currentQuestionIndex === totalQuestions - 1
              ? 'REVEAL MY ANIME GIRL ✨'
              : 'Next Question'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
