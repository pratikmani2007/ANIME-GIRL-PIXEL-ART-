import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMuted, onToggleMute }) => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 border-b border-purple-900/30 bg-slate-950/60 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
        <span className="font-pixel text-xs tracking-wider text-pink-300/90 hover:text-pink-200 transition-colors">
          pixel waifu by Pratik
        </span>
      </div>

      <button
        onClick={() => {
          onToggleMute();
          sound.playSelect();
        }}
        aria-label={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
        className="p-1.5 rounded-lg border border-purple-500/20 bg-purple-950/30 text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
        title={isMuted ? 'Unmute retro chimes' : 'Mute retro chimes'}
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-purple-400/60" /> : <Volume2 className="w-4 h-4 text-pink-400" />}
      </button>
    </header>
  );
};
