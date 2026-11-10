import React from 'react';
import { CharacterSelections } from '../types/character';

interface OptionThumbnailProps {
  questionKey: keyof CharacterSelections;
  optionId: string;
  className?: string;
}

export const OptionThumbnail: React.FC<OptionThumbnailProps> = ({
  questionKey,
  optionId,
  className = 'w-7 h-7 sm:w-8 sm:h-8',
}) => {
  const commonSvgProps = {
    viewBox: '0 0 24 24',
    className: `${className} shrink-0`,
    style: { imageRendering: 'pixelated' as const, shapeRendering: 'crispEdges' as const },
  };

  // Question 01: Hair Colour
  if (questionKey === 'hairColor') {
    const hairPalettes: Record<string, { base: string; shadow: string; shine: string }> = {
      midnight_black: { base: '#1E202E', shadow: '#090A10', shine: '#626A8F' },
      cocoa_brown: { base: '#6E3E26', shadow: '#311609', shine: '#C78968' },
      ocean_blue: { base: '#2289B8', shadow: '#0B3850', shine: '#A2ECFA' },
      sakura_pink: { base: '#F48FB1', shadow: '#9B3958', shine: '#FFF0F5' },
    };
    const p = hairPalettes[optionId] || hairPalettes.sakura_pink;
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        <rect x="5" y="4" width="14" height="16" fill={p.shadow} rx="2" />
        <rect x="6" y="5" width="12" height="14" fill={p.base} />
        <rect x="8" y="7" width="8" height="3" fill={p.shine} />
        <rect x="9" y="8" width="6" height="1" fill="#FFFFFF" opacity="0.8" />
        <rect x="6" y="15" width="3" height="4" fill={p.base} />
        <rect x="11" y="15" width="3" height="4" fill={p.base} />
        <rect x="15" y="15" width="3" height="4" fill={p.base} />
      </svg>
    );
  }

  // Question 02: Hairstyle
  if (questionKey === 'hairstyle') {
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        {/* Face center dot */}
        <rect x="9" y="10" width="6" height="7" fill="#FAD9B8" />
        {optionId === 'long_straight' && (
          <g fill="#F48FB1">
            <rect x="6" y="5" width="12" height="5" />
            <rect x="5" y="8" width="3" height="13" />
            <rect x="16" y="8" width="3" height="13" />
            <rect x="8" y="7" width="8" height="2" fill="#FFF0F5" />
          </g>
        )}
        {optionId === 'twin_tails' && (
          <g>
            <rect x="7" y="5" width="10" height="5" fill="#F48FB1" />
            <rect x="4" y="6" width="3" height="2" fill="#E11D48" />
            <rect x="17" y="6" width="3" height="2" fill="#E11D48" />
            <rect x="3" y="8" width="3" height="11" fill="#F48FB1" />
            <rect x="18" y="8" width="3" height="11" fill="#F48FB1" />
            <rect x="9" y="4" width="2" height="2" fill="#F48FB1" />
          </g>
        )}
        {optionId === 'short_bob' && (
          <g fill="#F48FB1">
            <rect x="6" y="5" width="12" height="6" />
            <rect x="5" y="8" width="3" height="8" />
            <rect x="16" y="8" width="3" height="8" />
            <rect x="8" y="14" width="8" height="2" />
          </g>
        )}
        {optionId === 'wavy_shoulder' && (
          <g fill="#F48FB1">
            <rect x="6" y="5" width="12" height="5" />
            <rect x="4" y="8" width="4" height="10" />
            <rect x="16" y="8" width="4" height="10" />
            <rect x="3" y="14" width="4" height="4" />
            <rect x="17" y="14" width="4" height="4" />
          </g>
        )}
      </svg>
    );
  }

  // Question 03: Skin Tone
  if (questionKey === 'skinTone') {
    const tones: Record<string, { base: string; shadow: string; blush: string }> = {
      porcelain: { base: '#FFF0E8', shadow: '#F5D4C4', blush: '#FFAAA6' },
      warm_beige: { base: '#FAD9B8', shadow: '#E8BE92', blush: '#F28A85' },
      honey_tan: { base: '#D99F72', shadow: '#B87A4F', blush: '#C9655E' },
      deep_cocoa: { base: '#8C5838', shadow: '#6E3F22', blush: '#9E4540' },
    };
    const t = tones[optionId] || tones.porcelain;
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        <rect x="5" y="5" width="14" height="14" rx="3" fill={t.base} stroke={t.shadow} strokeWidth="1" />
        <circle cx="8" cy="14" r="1.5" fill={t.blush} />
        <circle cx="16" cy="14" r="1.5" fill={t.blush} />
      </svg>
    );
  }

  // Question 04: Eye Colour
  if (questionKey === 'eyeColor') {
    const eyeColors: Record<string, { iris: string; deep: string; shine: string }> = {
      sapphire_blue: { iris: '#2563EB', deep: '#1D4ED8', shine: '#93C5FD' },
      emerald_green: { iris: '#059669', deep: '#047857', shine: '#6EE7B7' },
      amber_gold: { iris: '#D97706', deep: '#B45309', shine: '#FDE047' },
      violet: { iris: '#7C3AED', deep: '#6D28D9', shine: '#C4B5FD' },
    };
    const e = eyeColors[optionId] || eyeColors.sapphire_blue;
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        {/* Eye white */}
        <rect x="4" y="6" width="16" height="12" rx="2" fill="#FFFFFF" />
        {/* Upper lash */}
        <rect x="3" y="5" width="18" height="2" fill="#18181B" />
        {/* Iris */}
        <rect x="7" y="7" width="10" height="10" fill={e.deep} />
        <rect x="8" y="8" width="8" height="8" fill={e.iris} />
        <rect x="9" y="11" width="6" height="4" fill={e.shine} />
        {/* Catchlight */}
        <rect x="8" y="8" width="3" height="3" fill="#FFFFFF" />
      </svg>
    );
  }

  // Question 05: Eye Style
  if (questionKey === 'eyeStyle') {
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        <rect x="4" y="7" width="16" height="10" fill="#FFFFFF" />
        {optionId === 'soft_round' && (
          <g>
            <rect x="4" y="6" width="16" height="2" fill="#18181B" />
            <circle cx="12" cy="12" r="4" fill="#2563EB" />
            <rect x="10" y="9" width="2" height="2" fill="#FFFFFF" />
          </g>
        )}
        {optionId === 'sharp_cat' && (
          <g>
            <path d="M 4,9 L 18,7 L 21,5" stroke="#18181B" strokeWidth="2" fill="none" />
            <rect x="10" y="8" width="5" height="8" fill="#2563EB" />
            <rect x="11" y="9" width="2" height="2" fill="#FFFFFF" />
          </g>
        )}
        {optionId === 'dreamy_half_lidded' && (
          <g>
            <rect x="4" y="7" width="16" height="3" fill="#18181B" />
            <rect x="5" y="10" width="14" height="2" fill="#F5D4C4" />
            <rect x="9" y="11" width="6" height="5" fill="#2563EB" />
            <rect x="10" y="11" width="2" height="2" fill="#FFFFFF" />
          </g>
        )}
        {optionId === 'sparkling_wide' && (
          <g>
            <rect x="3" y="5" width="18" height="2" fill="#18181B" />
            <rect x="7" y="7" width="10" height="10" fill="#2563EB" />
            <rect x="8" y="8" width="3" height="3" fill="#FFFFFF" />
            <rect x="13" y="9" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="13" width="2" height="2" fill="#FFFFFF" />
          </g>
        )}
      </svg>
    );
  }

  // Question 06: Outfit
  if (questionKey === 'outfit') {
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        {optionId === 'pastel_hoodie' && (
          <g>
            {/* Lavender hoodie */}
            <rect x="5" y="6" width="14" height="9" fill="#DDD6FE" />
            <rect x="8" y="10" width="8" height="4" fill="#C4B5FD" />
            {/* Skirt */}
            <rect x="6" y="15" width="12" height="5" fill="#C4B5FD" />
            <rect x="8" y="15" width="1" height="5" fill="#A78BFA" />
            <rect x="12" y="15" width="1" height="5" fill="#A78BFA" />
            <rect x="15" y="15" width="1" height="5" fill="#A78BFA" />
          </g>
        )}
        {optionId === 'elegant_gothic' && (
          <g>
            {/* Gothic black & crimson dress */}
            <rect x="6" y="6" width="12" height="8" fill="#18181B" />
            <rect x="9" y="6" width="6" height="4" fill="#881337" />
            <rect x="10" y="7" width="4" height="2" fill="#FFFFFF" />
            <path d="M 4,14 L 20,14 L 21,19 L 3,19 Z" fill="#18181B" />
            <rect x="3" y="19" width="18" height="1" fill="#FFFFFF" />
          </g>
        )}
        {optionId === 'fantasy_adventurer' && (
          <g>
            {/* Leather tunic & straps */}
            <rect x="6" y="6" width="12" height="8" fill="#78350F" />
            <rect x="4" y="5" width="4" height="3" fill="#D97706" />
            <rect x="16" y="5" width="4" height="3" fill="#D97706" />
            <rect x="7" y="12" width="10" height="2" fill="#451A03" />
            <rect x="5" y="14" width="14" height="6" fill="#92400E" />
            <rect x="14" y="11" width="3" height="3" fill="#06B6D4" />
          </g>
        )}
        {optionId === 'modern_streetwear' && (
          <g>
            {/* Techwear bomber & cyber skirt */}
            <rect x="5" y="5" width="14" height="8" fill="#334155" />
            <rect x="4" y="6" width="2" height="6" fill="#F97316" />
            <rect x="18" y="6" width="2" height="6" fill="#38BDF8" />
            <rect x="8" y="13" width="8" height="2" fill="#FAD9B8" />
            <rect x="6" y="15" width="12" height="5" fill="#0F172A" />
            <rect x="9" y="15" width="1.5" height="5" fill="#F97316" />
          </g>
        )}
      </svg>
    );
  }

  // Question 07: Footwear
  if (questionKey === 'footwear') {
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        {optionId === 'chunky_sneakers' && (
          <g>
            <rect x="5" y="9" width="6" height="5" fill="#FFFFFF" />
            <rect x="13" y="9" width="6" height="5" fill="#FFFFFF" />
            <rect x="4" y="14" width="7" height="4" fill="#E2E8F0" />
            <rect x="13" y="14" width="7" height="4" fill="#E2E8F0" />
            <rect x="3" y="16" width="8" height="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.5" />
            <rect x="13" y="16" width="8" height="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.5" />
            <rect x="5" y="14" width="2" height="2" fill="#F472B6" />
            <rect x="15" y="14" width="2" height="2" fill="#38BDF8" />
          </g>
        )}
        {optionId === 'lace_up_boots' && (
          <g>
            <rect x="5" y="6" width="6" height="12" fill="#262626" />
            <rect x="13" y="6" width="6" height="12" fill="#262626" />
            <rect x="4" y="16" width="7" height="4" fill="#171717" />
            <rect x="13" y="16" width="7" height="4" fill="#171717" />
            <rect x="6" y="8" width="4" height="1" fill="#E5E7EB" />
            <rect x="6" y="11" width="4" height="1" fill="#E5E7EB" />
            <rect x="6" y="14" width="4" height="1" fill="#E5E7EB" />
            <rect x="14" y="8" width="4" height="1" fill="#E5E7EB" />
            <rect x="14" y="11" width="4" height="1" fill="#E5E7EB" />
            <rect x="14" y="14" width="4" height="1" fill="#E5E7EB" />
          </g>
        )}
        {optionId === 'mary_jane' && (
          <g>
            <rect x="6" y="8" width="5" height="5" fill="#FFFFFF" />
            <rect x="13" y="8" width="5" height="5" fill="#FFFFFF" />
            <rect x="5" y="13" width="6" height="5" fill="#1C1917" />
            <rect x="13" y="13" width="6" height="5" fill="#1C1917" />
            <rect x="6" y="14" width="3" height="1" fill="#FBBF24" />
            <rect x="14" y="14" width="3" height="1" fill="#FBBF24" />
          </g>
        )}
        {optionId === 'fantasy_knee_high' && (
          <g>
            <rect x="5" y="5" width="6" height="13" fill="#58240C" />
            <rect x="13" y="5" width="6" height="13" fill="#58240C" />
            <rect x="5" y="5" width="6" height="2" fill="#F59E0B" />
            <rect x="13" y="5" width="6" height="2" fill="#F59E0B" />
            <rect x="4" y="16" width="7" height="4" fill="#451A03" />
            <rect x="13" y="16" width="7" height="4" fill="#451A03" />
          </g>
        )}
      </svg>
    );
  }

  // Question 08: Accessories
  if (questionKey === 'accessory') {
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        {optionId === 'star_clips' && (
          <g>
            {/* Left star */}
            <rect x="5" y="7" width="5" height="5" fill="#FBBF24" />
            <rect x="6.5" y="5" width="2" height="9" fill="#FDE047" />
            <rect x="4.5" y="7" width="6" height="2" fill="#FDE047" />
            {/* Right star */}
            <rect x="14" y="10" width="5" height="5" fill="#FBBF24" />
            <rect x="15.5" y="8" width="2" height="9" fill="#FDE047" />
            <rect x="13.5" y="10" width="6" height="2" fill="#FDE047" />
          </g>
        )}
        {optionId === 'ribbon_bow' && (
          <g>
            <rect x="10" y="8" width="4" height="4" fill="#BE123C" />
            <rect x="4" y="6" width="6" height="6" fill="#E11D48" />
            <rect x="14" y="6" width="6" height="6" fill="#E11D48" />
            <rect x="7" y="13" width="3" height="6" fill="#BE123C" />
            <rect x="14" y="13" width="3" height="6" fill="#BE123C" />
          </g>
        )}
        {optionId === 'headphones' && (
          <g>
            <path d="M 5,12 A 7 7 0 0 1 19 12" fill="none" stroke="#F472B6" strokeWidth="2.5" />
            <rect x="3" y="11" width="4" height="7" rx="1" fill="#38BDF8" />
            <rect x="17" y="11" width="4" height="7" rx="1" fill="#38BDF8" />
          </g>
        )}
        {optionId === 'flower_crown' && (
          <g>
            <path d="M 4,13 Q 12,8 20,13" fill="none" stroke="#15803D" strokeWidth="2" />
            <circle cx="6" cy="12" r="2.5" fill="#F472B6" />
            <circle cx="10" cy="10" r="2.5" fill="#DDD6FE" />
            <circle cx="14" cy="10" r="2.5" fill="#F472B6" />
            <circle cx="18" cy="12" r="2.5" fill="#DDD6FE" />
          </g>
        )}
      </svg>
    );
  }

  // Question 09: Facial Expression
  if (questionKey === 'expression') {
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        <rect x="4" y="4" width="16" height="16" rx="4" fill="#FAD9B8" />
        {/* Eyes */}
        <rect x="7" y="8" width="3" height="3" fill="#18181B" />
        <rect x="14" y="8" width="3" height="3" fill="#18181B" />
        {optionId === 'cheerful_smile' && (
          <g>
            <circle cx="6" cy="12" r="1.5" fill="#FFAAA6" />
            <circle cx="18" cy="12" r="1.5" fill="#FFAAA6" />
            <path d="M 10,14 Q 12,17 14,14" stroke="#9F1239" strokeWidth="1.5" fill="#E11D48" />
          </g>
        )}
        {optionId === 'shy_blush' && (
          <g>
            <rect x="5" y="11" width="5" height="2" fill="#E11D48" opacity="0.8" />
            <rect x="14" y="11" width="5" height="2" fill="#E11D48" opacity="0.8" />
            <rect x="11" y="14" width="2" height="1.5" fill="#BE123C" />
          </g>
        )}
        {optionId === 'confident_smirk' && (
          <g>
            <path d="M 10,14 L 13,14 L 15,12" stroke="#9F1239" strokeWidth="1.5" fill="none" />
            <rect x="14" y="7" width="3" height="1" fill="#78350F" />
          </g>
        )}
        {optionId === 'calm_gentle' && (
          <g>
            <circle cx="6" cy="12" r="1.5" fill="#FFAAA6" opacity="0.6" />
            <circle cx="18" cy="12" r="1.5" fill="#FFAAA6" opacity="0.6" />
            <path d="M 10,14 Q 12,15 14,14" stroke="#9F1239" strokeWidth="1.5" fill="none" />
          </g>
        )}
      </svg>
    );
  }

  // Question 10: Background
  if (questionKey === 'background') {
    return (
      <svg {...commonSvgProps}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
        {optionId === 'sakura_garden' && (
          <g>
            <rect x="3" y="3" width="18" height="11" fill="#B3E5FC" />
            <rect x="3" y="14" width="18" height="7" fill="#81C784" />
            <rect x="5" y="5" width="7" height="6" fill="#F48FB1" />
            <rect x="14" y="7" width="2" height="2" fill="#F8BBD0" />
            <rect x="11" y="10" width="2" height="2" fill="#F8BBD0" />
          </g>
        )}
        {optionId === 'moonlit_night' && (
          <g>
            <rect x="3" y="3" width="18" height="13" fill="#0B0F2A" />
            <rect x="3" y="16" width="18" height="5" fill="#1E1B38" />
            <circle cx="16" cy="7" r="3" fill="#FFF9C4" />
            <circle cx="15" cy="6" r="2.5" fill="#0B0F2A" />
            <rect x="5" y="6" width="1.5" height="1.5" fill="#FFFFFF" />
            <rect x="8" y="10" width="1.5" height="1.5" fill="#FFFFFF" />
          </g>
        )}
        {optionId === 'magical_starlight' && (
          <g>
            <rect x="3" y="3" width="18" height="18" fill="#16082F" />
            <circle cx="8" cy="9" r="4" fill="#6B21A8" opacity="0.6" />
            <polygon points="15,6 17,10 13,10" fill="#67E8F9" />
            <rect x="7" y="14" width="2" height="2" fill="#F0ABFC" />
            <rect x="14" y="15" width="2" height="2" fill="#67E8F9" />
          </g>
        )}
        {optionId === 'cozy_pastel_room' && (
          <g>
            <rect x="3" y="3" width="18" height="14" fill="#F5E6D3" />
            <rect x="3" y="17" width="18" height="4" fill="#C99865" />
            <rect x="5" y="6" width="7" height="8" fill="#BAE6FD" stroke="#FFFFFF" strokeWidth="0.8" />
            <rect x="15" y="7" width="4" height="9" fill="#D4A373" />
            <circle cx="7" cy="4.5" r="1" fill="#FEF08A" />
            <circle cx="12" cy="4.5" r="1" fill="#F472B6" />
          </g>
        )}
      </svg>
    );
  }

  return (
    <svg {...commonSvgProps}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
      <circle cx="12" cy="12" r="4" fill="#8B5CF6" />
    </svg>
  );
};
