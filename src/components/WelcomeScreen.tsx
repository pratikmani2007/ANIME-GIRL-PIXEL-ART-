import React, { useState } from 'react';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { PixelCharacter } from './PixelCharacter';
import { DEFAULT_CHARACTER } from '../data/questions';
import { sound } from '../utils/audio';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
  initialName?: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, initialName = '' }) => {
  const [name, setName] = useState(initialName);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Please enter your name to begin your creation journey ✨');
      sound.playBack();
      return;
    }
    sound.playFanfare();
    onStart(trimmed);
  };

  return (
    <div className="min-h-[calc(100vh-49px)] flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 z-10">
        {/* Left Column: Pixel Artwork Showcase */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            {/* Soft decorative glow behind preview */}
            <div className="absolute -inset-3 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-glow" />

            {/* Pixel Character Frame */}
            <div className="relative w-64 h-96 sm:w-72 sm:h-[432px] rounded-2xl p-3 bg-slate-900/90 border-2 border-pink-400/30 shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="w-full h-full rounded-xl overflow-hidden relative animate-float">
                <PixelCharacter selections={DEFAULT_CHARACTER} />
              </div>

              {/* Little corner badges */}
              <div className="absolute top-4 left-4 bg-slate-950/80 border border-pink-500/40 px-2 py-0.5 rounded text-[10px] font-pixel text-pink-300">
                100% CODE ART
              </div>
              <div className="absolute bottom-4 right-4 bg-slate-950/80 border border-purple-500/40 px-2 py-0.5 rounded text-[10px] font-pixel text-purple-300">
                1M+ LOOKS
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Content & Start Form */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
          {/* Subtle sub-brand pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-medium mb-4">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/40" />
            <span>Interactive Full-Body Pixel Creator</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight">
            CREATE YOUR OWN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
              ANIME GIRL
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-md">
            A little imagination, ten choices, and one character made just for you.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="creator-name" className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                Your Name
              </label>
              <div className="relative">
                <input
                  id="creator-name"
                  type="text"
                  maxLength={30}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your name..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    error
                      ? 'border-pink-500 ring-pink-500/30'
                      : 'border-purple-500/30 focus:border-pink-400 focus:ring-pink-500/20'
                  }`}
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-xs text-pink-400 font-medium mt-1 flex items-center gap-1.5">
                  <span>✦</span> {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:via-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 hover:shadow-pink-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span className="text-base tracking-wide">START CREATING</span>
              <Sparkles className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform" />
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Feature Highlights */}
          <div className="mt-8 pt-6 border-t border-purple-900/30 grid grid-cols-3 gap-4 w-full text-center">
            <div>
              <p className="text-xs font-pixel text-pink-400">10 STEPS</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Quick & Fun</p>
            </div>
            <div>
              <p className="text-xs font-pixel text-purple-400">1,048,576</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Combinations</p>
            </div>
            <div>
              <p className="text-xs font-pixel text-cyan-400">HD EXPORT</p>
              <p className="text-[11px] text-slate-400 mt-0.5">PNG & SVG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
