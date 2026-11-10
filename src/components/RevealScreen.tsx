import React, { useRef, useState } from 'react';
import { Download, RotateCcw, Sparkles, Heart, Check, FileImage } from 'lucide-react';
import { CharacterSelections } from '../types/character';
import { PixelCharacter } from './PixelCharacter';
import { QUESTIONS } from '../data/questions';
import { downloadCharacterPNG, downloadCharacterSVG } from '../utils/exporter';
import { sound } from '../utils/audio';

interface RevealScreenProps {
  userName: string;
  selections: CharacterSelections;
  onReset: () => void;
}

export const RevealScreen: React.FC<RevealScreenProps> = ({
  userName,
  selections,
  onReset,
}) => {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [downloadingPNG, setDownloadingPNG] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadPNG = async () => {
    sound.playSelect();
    const svgEl = svgContainerRef.current?.querySelector('svg');
    if (!svgEl) return;

    setDownloadingPNG(true);
    try {
      await downloadCharacterPNG(svgEl, userName);
      setDownloadSuccess('PNG image downloaded in crisp 768x1152 resolution!');
      setTimeout(() => setDownloadSuccess(null), 3500);
    } catch (err) {
      console.error(err);
    } finally {
      setDownloadingPNG(false);
    }
  };

  const handleDownloadSVG = () => {
    sound.playSelect();
    const svgEl = svgContainerRef.current?.querySelector('svg');
    if (!svgEl) return;

    downloadCharacterSVG(svgEl, userName);
    setDownloadSuccess('SVG vector artwork downloaded successfully!');
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  const handleCreateAnother = () => {
    sound.playSelect();
    onReset();
  };

  // Trait name lookups
  const traitList = QUESTIONS.map((q) => {
    const chosen = q.options.find((opt) => opt.id === (selections as any)[q.key]);
    return {
      category: q.category,
      label: chosen?.label || (selections as any)[q.key],
      badge: chosen?.badge,
      color: chosen?.accentColor,
    };
  });

  return (
    <div className="min-h-[calc(100vh-49px)] flex flex-col items-center justify-between px-4 py-8 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/50 border border-pink-500/30 text-pink-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>CREATION COMPLETE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          YOUR ANIME GIRL IS READY! ✨
        </h1>

        <p className="text-lg sm:text-xl text-purple-200 mt-2 font-medium">
          {userName ? (
            <span>
              <span className="text-pink-400 font-semibold">{userName}</span>, meet your new anime girl!
            </span>
          ) : (
            'Meet your new pixel anime girl!'
          )}
        </p>
      </div>

      {/* Main Showcase Split */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto">
        {/* Left: Big Full-Body Character Display (col-span 6 or 7) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative group">
            {/* Soft decorative glow behind preview */}
            <div className="absolute -inset-3 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-500 animate-glow" />

            {/* Character Card Frame */}
            <div
              ref={svgContainerRef}
              className="relative w-72 h-[432px] sm:w-80 sm:h-[480px] rounded-2xl p-3 bg-slate-900/90 border-2 border-pink-400/40 shadow-2xl backdrop-blur-md overflow-hidden"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative shadow-inner">
                <PixelCharacter selections={selections} className="w-full h-full animate-float" />
              </div>

              {/* Character name badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-slate-950/85 border border-pink-500/50 px-3.5 py-1 rounded-full text-xs font-pixel text-pink-300 shadow-lg whitespace-nowrap">
                {userName ? `${userName}'s Waifu` : 'Pixel Waifu'}
              </div>
            </div>
          </div>

          {/* Download Notification Toast */}
          {downloadSuccess && (
            <div className="mt-3 px-4 py-2 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-bounce">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{downloadSuccess}</span>
            </div>
          )}
        </div>

        {/* Right: Actions & Selected Attributes (col-span 6) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Download Actions */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/20 backdrop-blur-sm flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Download className="w-4 h-4 text-pink-400" />
              <span>Save & Download Artwork</span>
            </h3>
            <p className="text-xs text-slate-400">
              Download your custom anime girl as high-resolution artwork directly to your device.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              <button
                type="button"
                onClick={handleDownloadPNG}
                disabled={downloadingPNG}
                className="py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-md shadow-pink-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileImage className="w-4 h-4" />
                <span>{downloadingPNG ? 'GENERATING PNG...' : 'DOWNLOAD AS PNG'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadSVG}
                className="py-3 px-4 rounded-xl font-bold text-sm text-purple-200 bg-purple-950/70 hover:bg-purple-900/80 border border-purple-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>DOWNLOAD AS SVG</span>
              </button>
            </div>
          </div>

          {/* 10 Chosen Attributes Grid */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/20 backdrop-blur-sm flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Your Custom Design Traits (10 / 10)</span>
              <span className="font-pixel text-pink-400">1 of 1,048,576</span>
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {traitList.map((trait, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-slate-950/60 border border-purple-900/20 flex flex-col justify-between"
                >
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {trait.category}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {trait.color && (
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0 border border-white/20"
                        style={{ backgroundColor: trait.color }}
                      />
                    )}
                    <span className="font-medium text-slate-200 truncate">
                      {trait.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reset / Create Another Character */}
          <button
            type="button"
            onClick={handleCreateAnother}
            className="w-full py-3 px-5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <RotateCcw className="w-4 h-4 text-pink-400" />
            <span>CREATE ANOTHER CHARACTER</span>
          </button>
        </div>
      </div>

      {/* Final Message Bottom Section */}
      <div className="w-full mt-10 pt-6 border-t border-purple-900/20 text-center z-10 flex flex-col items-center gap-1.5">
        <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
          <span>Thank you for creating with Pixel Waifu!</span>
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline" />
        </p>
        <p className="text-base sm:text-lg font-pixel text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
          Come visit again! ✨
        </p>
      </div>
    </div>
  );
};
