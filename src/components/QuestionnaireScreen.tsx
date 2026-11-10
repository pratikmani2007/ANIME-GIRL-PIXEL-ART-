import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import { CharacterSelections } from '../types/character';
import { QUESTIONS } from '../data/questions';
import { PixelCharacter } from './PixelCharacter';
import { OptionThumbnail } from './OptionThumbnail';
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
  const currentAnswer = answersGiven[currentKey];

  // Transient state for the option tapped during the transition
  const [justSelectedId, setJustSelectedId] = useState<string | null>(null);
  const isAdvancingRef = useRef<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear transition lock whenever question index changes
  useEffect(() => {
    isAdvancingRef.current = false;
    setJustSelectedId(null);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentQuestionIndex]);

  const handleOptionClick = (optionId: any) => {
    // Prevent accidental double advancement caused by repeated taps
    if (isAdvancingRef.current) return;
    isAdvancingRef.current = true;
    setJustSelectedId(optionId);

    // Save selection immediately in memory & update character preview
    onSelectOption(currentKey, optionId);
    sound.playSelect();

    // Automatic advancement after a smooth 380ms transition
    timerRef.current = setTimeout(() => {
      if (currentQuestionIndex === totalQuestions - 1) {
        sound.playFanfare();
      } else {
        sound.playStep();
      }
      onNext();
    }, 380);
  };

  const handleBackClick = () => {
    // Prevent back navigation while in the middle of advancing
    if (isAdvancingRef.current) return;
    sound.playBack();
    onBack();
  };

  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="h-full max-h-full flex flex-col justify-between px-3 py-2 sm:px-6 sm:py-4 max-w-6xl mx-auto w-full overflow-hidden select-none">
      {/* 1. TOP PROGRESS SECTION */}
      <div className="w-full shrink-0 mb-1.5 sm:mb-3">
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-400 mb-1.5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-pixel text-pink-400 text-xs sm:text-sm tracking-wide">
              QUESTION {String(currentQ.number).padStart(2, '0')} / {totalQuestions}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 font-semibold tracking-wide text-[11px] sm:text-xs uppercase">
              {currentQ.category}
            </span>
          </div>
          <span className="font-pixel text-[10px] sm:text-xs text-purple-400">
            {progressPercent}%
          </span>
        </div>

        {/* Smooth animated progress bar */}
        <div className="w-full h-1.5 sm:h-2 rounded-full bg-slate-900 border border-purple-900/40 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 2. MIDDLE SECTION: RESPONSIVE CONTENT */}
      {/* On Mobile: compact vertical layout with centered preview & 2x2 grid */}
      {/* On Desktop/Laptop: 2-column layout with left cards and right large preview */}
      <div className="flex-1 min-h-0 flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center justify-center my-auto w-full">
        {/* MOBILE PREVIEW (Visible only on < lg screens) */}
        <div className="lg:hidden shrink-0 flex items-center justify-center w-full mb-2">
          <div className="relative group flex flex-col items-center">
            {/* Soft decorative glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-md opacity-60" />

            {/* Character Container: sized to fit mobile screen without scrolling */}
            <div className="relative h-[130px] xs:h-[150px] sm:h-[175px] aspect-[2/3] rounded-xl p-1.5 bg-slate-900/90 border border-purple-500/30 shadow-lg backdrop-blur-md overflow-hidden">
              <div className="w-full h-full rounded-lg overflow-hidden bg-slate-950 relative">
                <PixelCharacter selections={selections} />
              </div>
              <div className="absolute bottom-1 right-1 bg-slate-950/80 border border-pink-500/40 px-1.5 py-0.2 rounded text-[8px] font-pixel text-pink-300">
                LIVE
              </div>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN (ON DESKTOP) / MAIN QUESTION & 2x2 OPTIONS (ON MOBILE) */}
        <div className="w-full lg:col-span-7 flex flex-col justify-center flex-1 min-h-0">
          {/* Question Heading */}
          <div className="text-center lg:text-left mb-2 sm:mb-4 shrink-0">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-pink-400 font-semibold block">
              Step {currentQ.number} {userName ? `for ${userName}` : ''}
            </span>
            <h2 className="text-base xs:text-lg sm:text-2xl font-bold text-white leading-tight mt-0.5">
              {currentQ.heading}
            </h2>
          </div>

          {/* 4 Customization Options: Compact 2x2 Grid on Mobile & Desktop */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
            {currentQ.options.map((option, idx) => {
              const isCurrentlySelected = (justSelectedId === option.id) || (currentAnswer === option.id && !justSelectedId);
              const isTappedNow = justSelectedId === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleOptionClick(option.id)}
                  disabled={isAdvancingRef.current}
                  className={`relative p-2 xs:p-2.5 sm:p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer flex items-center gap-2 sm:gap-3 min-h-[52px] xs:min-h-[58px] sm:min-h-[72px] group active:scale-[0.98] ${
                    isCurrentlySelected
                      ? 'bg-purple-950/80 border-pink-400 ring-2 ring-pink-500/40 shadow-md shadow-pink-500/20 scale-[1.01]'
                      : 'bg-slate-900/75 border-purple-900/30 hover:border-purple-500/50 hover:bg-slate-800/80'
                  } ${isTappedNow ? 'animate-pulse' : ''}`}
                >
                  {/* Miniature SVG Visual Representation */}
                  <div className="shrink-0 flex items-center justify-center rounded-lg bg-slate-950/70 p-0.5 border border-purple-900/40">
                    <OptionThumbnail
                      questionKey={currentKey}
                      optionId={option.id}
                      className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
                    />
                  </div>

                  {/* Option Label & Badge */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center gap-1 mb-0.5">
                      <span className="text-[9px] font-pixel text-slate-400 hidden xs:inline">
                        0{idx + 1}
                      </span>
                      {option.badge && (
                        <span className="text-[9px] font-medium text-purple-300 bg-purple-900/40 px-1 py-0.2 rounded truncate hidden sm:inline-block">
                          {option.badge}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-xs sm:text-sm font-semibold leading-tight line-clamp-2 transition-colors ${
                        isCurrentlySelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}
                    >
                      {option.label}
                    </h3>
                  </div>

                  {/* Visual Checkmark Indicator */}
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isCurrentlySelected
                        ? 'bg-pink-500 border-pink-400 text-white shadow-sm'
                        : 'border-slate-700 bg-slate-800/50 text-transparent opacity-40 group-hover:opacity-80'
                    }`}
                  >
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: DESKTOP LARGE CHARACTER PREVIEW (Hidden on mobile, visible on lg) */}
        <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:items-center">
          <div className="w-full max-w-[280px] xl:max-w-[320px] bg-slate-900/90 rounded-2xl p-3 border-2 border-purple-500/25 shadow-2xl backdrop-blur-sm relative">
            <div className="flex items-center justify-between px-2 py-1 mb-2 border-b border-purple-900/30">
              <span className="text-[10px] font-pixel text-purple-300">LIVE PREVIEW</span>
              <span className="text-[10px] text-pink-400 font-medium">Automatic Update</span>
            </div>

            <div className="w-full aspect-[2/3] rounded-xl overflow-hidden bg-slate-950 relative border border-purple-900/20">
              <PixelCharacter selections={selections} />
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-2">
              Tap any option to advance automatically
            </p>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: MOTIVATIONAL MESSAGE & BACK BUTTON */}
      <div className="w-full shrink-0 pt-2 sm:pt-3 border-t border-purple-900/20 flex items-center justify-between gap-3">
        {/* Back Button */}
        <button
          type="button"
          onClick={handleBackClick}
          disabled={isAdvancingRef.current}
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-purple-500/20 bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 text-xs sm:text-sm font-medium cursor-pointer shrink-0 disabled:opacity-50"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{currentQuestionIndex === 0 ? 'Edit Name' : 'Back'}</span>
        </button>

        {/* Motivational Message */}
        <div className="text-right sm:text-center flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-300 text-[11px] sm:text-xs font-medium animate-float max-w-full truncate">
            <Sparkles className="w-3 h-3 text-pink-400 shrink-0" />
            <span className="truncate">A few steps to unlock your anime girl ✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};
