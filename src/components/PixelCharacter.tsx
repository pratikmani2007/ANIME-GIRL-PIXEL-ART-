import React from 'react';
import { CharacterSelections } from '../types/character';

interface PixelCharacterProps {
  selections: CharacterSelections;
  className?: string;
  animate?: boolean;
}

// Color palettes for character components
export const SKIN_PALETTES = {
  porcelain: {
    base: '#FFF0E8',
    shadow: '#F5D4C4',
    deep: '#E8BEAA',
    highlight: '#FFFFFF',
    blush: '#FFAAA6',
    shyBlush: '#FF8882',
  },
  warm_beige: {
    base: '#FAD9B8',
    shadow: '#E8BE92',
    deep: '#D1A373',
    highlight: '#FFF1E0',
    blush: '#F28A85',
    shyBlush: '#EB6C67',
  },
  honey_tan: {
    base: '#D99F72',
    shadow: '#B87A4F',
    deep: '#9E6238',
    highlight: '#ECC09B',
    blush: '#C9655E',
    shyBlush: '#B84E47',
  },
  deep_cocoa: {
    base: '#8C5838',
    shadow: '#6E3F22',
    deep: '#522A12',
    highlight: '#A8704D',
    blush: '#9E4540',
    shyBlush: '#8F3430',
  },
};

export const HAIR_PALETTES = {
  midnight_black: {
    base: '#1E202E',
    shadow: '#11121C',
    deep: '#090A10',
    highlight: '#3F445E',
    shine: '#626A8F',
  },
  cocoa_brown: {
    base: '#6E3E26',
    shadow: '#4C2715',
    deep: '#311609',
    highlight: '#A66746',
    shine: '#C78968',
  },
  ocean_blue: {
    base: '#2289B8',
    shadow: '#14597D',
    deep: '#0B3850',
    highlight: '#5CC3E8',
    shine: '#A2ECFA',
  },
  sakura_pink: {
    base: '#F48FB1',
    shadow: '#CE5E83',
    deep: '#9B3958',
    highlight: '#FFAEC7',
    shine: '#FFF0F5',
  },
};

export const EYE_PALETTES = {
  sapphire_blue: {
    base: '#2563EB',
    deep: '#1D4ED8',
    highlight: '#60A5FA',
    catch: '#FFFFFF',
  },
  emerald_green: {
    base: '#059669',
    deep: '#047857',
    highlight: '#34D399',
    catch: '#FFFFFF',
  },
  amber_gold: {
    base: '#D97706',
    deep: '#B45309',
    highlight: '#FBBF24',
    catch: '#FFFFFF',
  },
  violet: {
    base: '#7C3AED',
    deep: '#6D28D9',
    highlight: '#A78BFA',
    catch: '#FFFFFF',
  },
};

export const PixelCharacter: React.FC<PixelCharacterProps> = ({
  selections,
  className = 'w-full h-full',
  animate = true,
}) => {
  const skin = SKIN_PALETTES[selections.skinTone] || SKIN_PALETTES.porcelain;
  const hair = HAIR_PALETTES[selections.hairColor] || HAIR_PALETTES.sakura_pink;
  const eye = EYE_PALETTES[selections.eyeColor] || EYE_PALETTES.sapphire_blue;

  return (
    <svg
      viewBox="0 0 96 144"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animate ? 'transition-all duration-300' : ''}`}
      style={{
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges',
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Background Gradients */}
        <linearGradient id="sakuraSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B3E5FC" />
          <stop offset="55%" stopColor="#FFE0B2" />
          <stop offset="100%" stopColor="#F8BBD0" />
        </linearGradient>

        <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B0F2A" />
          <stop offset="60%" stopColor="#1B1C47" />
          <stop offset="100%" stopColor="#312255" />
        </linearGradient>

        <linearGradient id="magicSky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16082F" />
          <stop offset="45%" stopColor="#381363" />
          <stop offset="75%" stopColor="#1C2D62" />
          <stop offset="100%" stopColor="#0D4B66" />
        </linearGradient>

        <linearGradient id="roomWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="100%" stopColor="#EAD2BC" />
        </linearGradient>
      </defs>

      {/* 1. BACKGROUND */}
      <g id="layer-background">
        {selections.background === 'sakura_garden' && (
          <g id="bg-sakura">
            <rect x="0" y="0" width="96" height="144" fill="url(#sakuraSky)" />
            {/* Distant mountains */}
            <path d="M 0,92 L 20,78 L 44,90 L 68,74 L 96,88 L 96,144 L 0,144 Z" fill="#D7BDE2" opacity="0.6" />
            <path d="M 0,98 L 28,86 L 56,96 L 78,85 L 96,96 L 96,144 L 0,144 Z" fill="#C39BD3" opacity="0.7" />
            {/* Sakura tree trunk & branches */}
            <rect x="2" y="10" width="6" height="85" fill="#4E342E" />
            <rect x="8" y="24" width="16" height="4" fill="#4E342E" />
            <rect x="20" y="20" width="10" height="4" fill="#4E342E" />
            <rect x="8" y="44" width="12" height="4" fill="#4E342E" />
            {/* Sakura blossom pixel clusters */}
            <rect x="0" y="4" width="36" height="24" fill="#F48FB1" />
            <rect x="4" y="0" width="28" height="28" fill="#F8BBD0" />
            <rect x="8" y="2" width="20" height="18" fill="#FFFFFF" opacity="0.5" />
            <rect x="18" y="14" width="24" height="20" fill="#F48FB1" />
            <rect x="22" y="18" width="16" height="14" fill="#F8BBD0" />
            {/* Right side branch */}
            <rect x="82" y="0" width="14" height="30" fill="#F48FB1" />
            <rect x="74" y="6" width="18" height="18" fill="#F8BBD0" />
            {/* Garden Ground and Flagstone path */}
            <rect x="0" y="112" width="96" height="32" fill="#81C784" />
            <rect x="0" y="110" width="96" height="3" fill="#66BB6A" />
            {/* Stone pavers */}
            <rect x="28" y="122" width="16" height="8" fill="#90A4AE" />
            <rect x="52" y="120" width="18" height="7" fill="#78909C" />
            <rect x="36" y="132" width="24" height="8" fill="#90A4AE" />
            <rect x="14" y="128" width="10" height="6" fill="#78909C" />
            <rect x="74" y="127" width="12" height="7" fill="#78909C" />
            {/* Garden lantern on left */}
            <rect x="8" y="96" width="10" height="4" fill="#78909C" />
            <rect x="10" y="86" width="6" height="10" fill="#CFD8DC" />
            <rect x="11" y="88" width="4" height="6" fill="#FFF59D" />
            <rect x="6" y="83" width="14" height="4" fill="#546E7A" />
            <rect x="10" y="79" width="6" height="4" fill="#78909C" />
          </g>
        )}

        {selections.background === 'moonlit_night' && (
          <g id="bg-night">
            <rect x="0" y="0" width="96" height="144" fill="url(#nightSky)" />
            {/* Glowing pixel moon */}
            <rect x="70" y="12" width="14" height="14" fill="#FFF9C4" />
            <rect x="68" y="14" width="18" height="10" fill="#FFF9C4" />
            <rect x="67" y="16" width="20" height="6" fill="#FFF9C4" />
            {/* Crescent cutout */}
            <rect x="65" y="10" width="10" height="10" fill="#0B0F2A" />
            <rect x="63" y="12" width="12" height="10" fill="#0B0F2A" />
            {/* Moon glow */}
            <rect x="64" y="8" width="26" height="22" fill="#FFF9C4" opacity="0.15" />
            {/* Twinkling stars */}
            <rect x="12" y="14" width="2" height="2" fill="#FFFFFF" />
            <rect x="28" y="24" width="2" height="2" fill="#E0E7FF" />
            <rect x="48" y="16" width="2" height="2" fill="#FFFFFF" />
            <rect x="20" y="42" width="2" height="2" fill="#BAE6FD" />
            <rect x="84" y="46" width="2" height="2" fill="#FFFFFF" />
            <rect x="8" y="60" width="2" height="2" fill="#FEF08A" />
            {/* City skyline silhouettes */}
            <rect x="0" y="88" width="18" height="38" fill="#181533" />
            <rect x="4" y="92" width="2" height="2" fill="#FDE047" />
            <rect x="8" y="98" width="2" height="2" fill="#FDE047" />
            <rect x="4" y="106" width="2" height="2" fill="#93C5FD" />
            <rect x="16" y="82" width="16" height="44" fill="#120F26" />
            <rect x="20" y="88" width="2" height="3" fill="#FDE047" />
            <rect x="24" y="96" width="2" height="3" fill="#FDE047" />
            <rect x="68" y="86" width="14" height="40" fill="#181533" />
            <rect x="72" y="92" width="2" height="2" fill="#FDE047" />
            <rect x="80" y="78" width="16" height="48" fill="#120F26" />
            <rect x="86" y="84" width="2" height="3" fill="#FDE047" />
            <rect x="90" y="94" width="2" height="3" fill="#93C5FD" />
            {/* Ground cobblestone */}
            <rect x="0" y="118" width="96" height="26" fill="#1E1B38" />
            <rect x="0" y="116" width="96" height="2" fill="#2D2854" />
            {/* Street lantern on left */}
            <rect x="6" y="68" width="2" height="50" fill="#374151" />
            <rect x="4" y="64" width="6" height="5" fill="#4B5563" />
            <rect x="5" y="65" width="4" height="4" fill="#FDE047" />
            <rect x="2" y="62" width="10" height="9" fill="#FEF08A" opacity="0.25" />
          </g>
        )}

        {selections.background === 'magical_starlight' && (
          <g id="bg-magic">
            <rect x="0" y="0" width="96" height="144" fill="url(#magicSky)" />
            {/* Cosmic nebula clouds */}
            <path d="M 0,20 Q 35,40 60,15 T 96,35 L 96,80 Q 55,60 30,85 T 0,65 Z" fill="#6B21A8" opacity="0.35" />
            <path d="M 0,55 Q 40,80 75,50 T 96,75 L 96,110 Q 60,95 20,110 Z" fill="#0E7490" opacity="0.3" />
            {/* Floating magical crystal shards */}
            <polygon points="12,30 16,22 20,30 16,38" fill="#67E8F9" />
            <polygon points="14,30 16,24 18,30 16,36" fill="#E0F2FE" />
            <polygon points="80,38 84,32 88,38 84,44" fill="#C084FC" />
            <polygon points="82,38 84,34 86,38 84,42" fill="#F3E8FF" />
            <polygon points="76,82 79,76 82,82 79,88" fill="#67E8F9" opacity="0.8" />
            {/* Stardust particles */}
            <rect x="18" y="16" width="2" height="2" fill="#F0ABFC" />
            <rect x="36" y="28" width="2" height="2" fill="#67E8F9" />
            <rect x="52" y="18" width="3" height="3" fill="#FFFFFF" />
            <rect x="74" y="20" width="2" height="2" fill="#FDE047" />
            <rect x="88" y="60" width="2" height="2" fill="#67E8F9" />
            <rect x="8" y="70" width="2" height="2" fill="#C084FC" />
            {/* Cosmic Floor & Magic Runic Circle */}
            <rect x="0" y="116" width="96" height="28" fill="#131438" />
            <ellipse cx="48" cy="126" rx="42" ry="12" fill="none" stroke="#818CF8" strokeWidth="1" opacity="0.6" />
            <ellipse cx="48" cy="126" rx="34" ry="9" fill="none" stroke="#C084FC" strokeWidth="1" opacity="0.5" />
            {/* Rune markings */}
            <rect x="22" y="125" width="2" height="2" fill="#E0E7FF" />
            <rect x="34" y="130" width="2" height="2" fill="#E0E7FF" />
            <rect x="62" y="130" width="2" height="2" fill="#E0E7FF" />
            <rect x="74" y="125" width="2" height="2" fill="#E0E7FF" />
            <rect x="48" y="132" width="2" height="2" fill="#E0E7FF" />
          </g>
        )}

        {selections.background === 'cozy_pastel_room' && (
          <g id="bg-room">
            <rect x="0" y="0" width="96" height="144" fill="url(#roomWall)" />
            {/* Cozy Window */}
            <rect x="10" y="14" width="30" height="42" fill="#BAE6FD" />
            {/* Pastel sky inside window */}
            <rect x="10" y="32" width="30" height="24" fill="#FED7AA" />
            {/* Fluffy pixel clouds */}
            <rect x="14" y="22" width="12" height="5" fill="#FFFFFF" opacity="0.9" />
            <rect x="24" y="26" width="10" height="4" fill="#FFFFFF" opacity="0.8" />
            {/* Window frame */}
            <rect x="8" y="12" width="34" height="3" fill="#FFFFFF" />
            <rect x="8" y="12" width="3" height="46" fill="#FFFFFF" />
            <rect x="39" y="12" width="3" height="46" fill="#FFFFFF" />
            <rect x="8" y="55" width="34" height="3" fill="#FFFFFF" />
            <rect x="24" y="12" width="2" height="44" fill="#FFFFFF" />
            <rect x="8" y="34" width="34" height="2" fill="#FFFFFF" />
            {/* Fairy lights string across top */}
            <path d="M 0,8 Q 24,18 48,10 T 96,12" fill="none" stroke="#475569" strokeWidth="0.5" />
            <rect x="12" y="12" width="2" height="2" fill="#FEF08A" />
            <rect x="26" y="14" width="2" height="2" fill="#F472B6" />
            <rect x="42" y="11" width="2" height="2" fill="#67E8F9" />
            <rect x="58" y="12" width="2" height="2" fill="#FEF08A" />
            <rect x="74" y="13" width="2" height="2" fill="#A78BFA" />
            <rect x="88" y="11" width="2" height="2" fill="#4ADE80" />
            {/* Bookshelf on right */}
            <rect x="74" y="24" width="20" height="60" fill="#D4A373" />
            <rect x="74" y="42" width="20" height="2" fill="#BC8A5F" />
            <rect x="74" y="60" width="20" height="2" fill="#BC8A5F" />
            {/* Books */}
            <rect x="76" y="30" width="3" height="12" fill="#F43F5E" />
            <rect x="80" y="28" width="4" height="14" fill="#3B82F6" />
            <rect x="85" y="32" width="3" height="10" fill="#10B981" />
            <rect x="76" y="48" width="4" height="12" fill="#8B5CF6" />
            <rect x="81" y="46" width="3" height="14" fill="#F59E0B" />
            <rect x="86" y="50" width="5" height="10" fill="#EC4899" />
            {/* Potted succulent on window sill */}
            <rect x="12" y="50" width="6" height="5" fill="#EA580C" />
            <rect x="13" y="46" width="4" height="4" fill="#22C55E" />
            {/* Floor and Rug */}
            <rect x="0" y="114" width="96" height="30" fill="#C99865" />
            <rect x="0" y="112" width="96" height="2" fill="#996E42" />
            {/* Pastel checkered rug */}
            <rect x="16" y="118" width="64" height="22" fill="#DDD6FE" />
            <rect x="18" y="120" width="60" height="18" fill="#EDE9FE" />
            <rect x="24" y="122" width="10" height="6" fill="#C4B5FD" />
            <rect x="44" y="122" width="10" height="6" fill="#C4B5FD" />
            <rect x="64" y="122" width="10" height="6" fill="#C4B5FD" />
            <rect x="34" y="128" width="10" height="6" fill="#C4B5FD" />
            <rect x="54" y="128" width="10" height="6" fill="#C4B5FD" />
          </g>
        )}
      </g>

      {/* 2. GROUND SHADOW */}
      <g id="layer-shadow">
        <ellipse cx="48" cy="135" rx="16" ry="3.5" fill="#000000" opacity="0.35" />
        <ellipse cx="48" cy="135" rx="11" ry="2" fill="#000000" opacity="0.2" />
      </g>

      {/* 3. REAR HAIR */}
      <g id="layer-rear-hair">
        {selections.hairstyle === 'long_straight' && (
          <g id="hair-rear-straight">
            {/* Flowing long hair cascading behind body */}
            <rect x="30" y="34" width="36" height="74" fill={hair.shadow} />
            <rect x="32" y="34" width="32" height="72" fill={hair.base} />
            {/* Width widening below shoulders */}
            <rect x="28" y="56" width="40" height="50" fill={hair.shadow} />
            <rect x="30" y="58" width="36" height="46" fill={hair.base} />
            {/* Bottom strands */}
            <rect x="30" y="104" width="4" height="5" fill={hair.base} />
            <rect x="36" y="104" width="5" height="7" fill={hair.base} />
            <rect x="43" y="104" width="6" height="8" fill={hair.base} />
            <rect x="51" y="104" width="5" height="7" fill={hair.base} />
            <rect x="58" y="104" width="5" height="5" fill={hair.base} />
            <rect x="64" y="104" width="4" height="4" fill={hair.base} />
            {/* Silky vertical shine streaks */}
            <rect x="34" y="60" width="2" height="36" fill={hair.highlight} opacity="0.7" />
            <rect x="40" y="62" width="2" height="34" fill={hair.highlight} opacity="0.8" />
            <rect x="54" y="62" width="2" height="34" fill={hair.highlight} opacity="0.8" />
            <rect x="60" y="60" width="2" height="36" fill={hair.highlight} opacity="0.7" />
          </g>
        )}

        {selections.hairstyle === 'twin_tails' && (
          <g id="hair-rear-twintails">
            {/* Base head backing */}
            <rect x="34" y="34" width="28" height="20" fill={hair.shadow} />
            {/* Left Twin Tail */}
            {/* Ribbon tie */}
            <rect x="24" y="28" width="6" height="4" fill="#F43F5E" />
            {/* Curving bouncy ponytail */}
            <rect x="18" y="30" width="10" height="20" fill={hair.shadow} />
            <rect x="20" y="32" width="7" height="18" fill={hair.base} />
            <rect x="16" y="46" width="11" height="22" fill={hair.shadow} />
            <rect x="18" y="48" width="8" height="18" fill={hair.base} />
            <rect x="14" y="64" width="12" height="22" fill={hair.shadow} />
            <rect x="16" y="66" width="9" height="18" fill={hair.base} />
            <rect x="16" y="84" width="6" height="6" fill={hair.base} />
            <rect x="19" y="86" width="3" height="4" fill={hair.shadow} />
            {/* Left tail highlight */}
            <rect x="21" y="34" width="2" height="14" fill={hair.highlight} opacity="0.8" />
            <rect x="19" y="50" width="2" height="16" fill={hair.highlight} opacity="0.8" />
            <rect x="18" y="68" width="2" height="12" fill={hair.highlight} opacity="0.8" />

            {/* Right Twin Tail */}
            {/* Ribbon tie */}
            <rect x="66" y="28" width="6" height="4" fill="#F43F5E" />
            {/* Curving bouncy ponytail */}
            <rect x="68" y="30" width="10" height="20" fill={hair.shadow} />
            <rect x="69" y="32" width="7" height="18" fill={hair.base} />
            <rect x="69" y="46" width="11" height="22" fill={hair.shadow} />
            <rect x="70" y="48" width="8" height="18" fill={hair.base} />
            <rect x="70" y="64" width="12" height="22" fill={hair.shadow} />
            <rect x="71" y="66" width="9" height="18" fill={hair.base} />
            <rect x="74" y="84" width="6" height="6" fill={hair.base} />
            <rect x="74" y="86" width="3" height="4" fill={hair.shadow} />
            {/* Right tail highlight */}
            <rect x="72" y="34" width="2" height="14" fill={hair.highlight} opacity="0.8" />
            <rect x="73" y="50" width="2" height="16" fill={hair.highlight} opacity="0.8" />
            <rect x="74" y="68" width="2" height="12" fill={hair.highlight} opacity="0.8" />
          </g>
        )}

        {selections.hairstyle === 'short_bob' && (
          <g id="hair-rear-bob">
            {/* Chic rounded bob behind nape */}
            <rect x="33" y="34" width="30" height="24" fill={hair.shadow} />
            <rect x="34" y="36" width="28" height="20" fill={hair.base} />
            <rect x="31" y="42" width="34" height="14" fill={hair.shadow} />
            <rect x="33" y="44" width="30" height="10" fill={hair.base} />
            <rect x="36" y="54" width="24" height="4" fill={hair.shadow} />
          </g>
        )}

        {selections.hairstyle === 'wavy_shoulder' && (
          <g id="hair-rear-wavy">
            {/* Soft cascading waves down to chest */}
            <rect x="31" y="34" width="34" height="46" fill={hair.shadow} />
            <rect x="33" y="36" width="30" height="42" fill={hair.base} />
            {/* Bouncy wave tips */}
            <rect x="29" y="52" width="38" height="28" fill={hair.shadow} />
            <rect x="31" y="54" width="34" height="24" fill={hair.base} />
            {/* Wave curls */}
            <rect x="28" y="70" width="6" height="8" fill={hair.base} />
            <rect x="34" y="74" width="6" height="6" fill={hair.base} />
            <rect x="42" y="76" width="6" height="5" fill={hair.base} />
            <rect x="49" y="76" width="6" height="5" fill={hair.base} />
            <rect x="56" y="74" width="6" height="6" fill={hair.base} />
            <rect x="62" y="70" width="6" height="8" fill={hair.base} />
            {/* Highlights */}
            <rect x="33" y="58" width="2" height="16" fill={hair.highlight} opacity="0.75" />
            <rect x="61" y="58" width="2" height="16" fill={hair.highlight} opacity="0.75" />
          </g>
        )}
      </g>

      {/* 4. LEGS & BODY BASE */}
      <g id="layer-body-base">
        {/* Upper thighs */}
        <rect x="40" y="80" width="7" height="22" fill={skin.base} />
        <rect x="49" y="80" width="7" height="22" fill={skin.base} />
        {/* Inner thigh shadow */}
        <rect x="45" y="80" width="2" height="20" fill={skin.shadow} />
        <rect x="49" y="80" width="2" height="20" fill={skin.shadow} />

        {/* Knees */}
        <rect x="41" y="102" width="6" height="6" fill={skin.base} />
        <rect x="49" y="102" width="6" height="6" fill={skin.base} />
        {/* Soft knee blush highlight */}
        <rect x="43" y="104" width="2" height="2" fill={skin.blush} opacity="0.4" />
        <rect x="51" y="104" width="2" height="2" fill={skin.blush} opacity="0.4" />

        {/* Calves */}
        <rect x="41" y="108" width="6" height="17" fill={skin.base} />
        <rect x="49" y="108" width="6" height="17" fill={skin.base} />
        {/* Calf outer subtle shadow */}
        <rect x="40" y="110" width="1" height="12" fill={skin.shadow} />
        <rect x="55" y="110" width="1" height="12" fill={skin.shadow} />

        {/* Torso Base */}
        <rect x="40" y="52" width="16" height="28" fill={skin.base} />
        {/* Waist contour */}
        <rect x="42" y="66" width="12" height="10" fill={skin.base} />
        <rect x="40" y="74" width="16" height="8" fill={skin.base} />
      </g>

      {/* 5. FOOTWEAR & SOCKS */}
      <g id="layer-footwear">
        {selections.footwear === 'chunky_sneakers' && (
          <g id="footwear-sneakers">
            {/* Ribbed ankle socks */}
            <rect x="41" y="120" width="6" height="6" fill="#FFFFFF" />
            <rect x="49" y="120" width="6" height="6" fill="#FFFFFF" />
            <rect x="41" y="122" width="6" height="1" fill="#F472B6" />
            <rect x="49" y="122" width="6" height="1" fill="#38BDF8" />

            {/* Left sneaker */}
            <rect x="38" y="126" width="9" height="9" fill="#F8FAFC" />
            <rect x="37" y="129" width="11" height="6" fill="#E2E8F0" />
            {/* Chunky white platform sole */}
            <rect x="36" y="132" width="13" height="4" fill="#FFFFFF" />
            <rect x="36" y="135" width="13" height="1" fill="#94A3B8" />
            {/* Sneaker accents */}
            <rect x="39" y="127" width="2" height="4" fill="#F472B6" />
            <rect x="43" y="127" width="3" height="2" fill="#38BDF8" />

            {/* Right sneaker */}
            <rect x="49" y="126" width="9" height="9" fill="#F8FAFC" />
            <rect x="48" y="129" width="11" height="6" fill="#E2E8F0" />
            {/* Chunky white platform sole */}
            <rect x="47" y="132" width="13" height="4" fill="#FFFFFF" />
            <rect x="47" y="135" width="13" height="1" fill="#94A3B8" />
            {/* Sneaker accents */}
            <rect x="55" y="127" width="2" height="4" fill="#F472B6" />
            <rect x="50" y="127" width="3" height="2" fill="#38BDF8" />
          </g>
        )}

        {selections.footwear === 'lace_up_boots' && (
          <g id="footwear-laceup">
            {/* Dark over-knee socks */}
            <rect x="41" y="98" width="6" height="16" fill="#1E1B2E" />
            <rect x="49" y="98" width="6" height="16" fill="#1E1B2E" />
            <rect x="41" y="98" width="6" height="1" fill="#4B5563" />
            <rect x="49" y="98" width="6" height="1" fill="#4B5563" />

            {/* Left boot shaft */}
            <rect x="40" y="112" width="8" height="20" fill="#262626" />
            <rect x="38" y="128" width="11" height="7" fill="#1A1A1A" />
            {/* Chunky tread sole */}
            <rect x="37" y="133" width="12" height="3" fill="#0A0A0A" />
            {/* Metallic eyelets and silver cross laces */}
            <rect x="42" y="115" width="4" height="1" fill="#E5E7EB" />
            <rect x="42" y="118" width="4" height="1" fill="#E5E7EB" />
            <rect x="42" y="121" width="4" height="1" fill="#E5E7EB" />
            <rect x="42" y="124" width="4" height="1" fill="#E5E7EB" />
            <rect x="40" y="127" width="4" height="1" fill="#E5E7EB" />

            {/* Right boot shaft */}
            <rect x="48" y="112" width="8" height="20" fill="#262626" />
            <rect x="47" y="128" width="11" height="7" fill="#1A1A1A" />
            {/* Chunky tread sole */}
            <rect x="47" y="133" width="12" height="3" fill="#0A0A0A" />
            {/* Metallic eyelets and silver cross laces */}
            <rect x="50" y="115" width="4" height="1" fill="#E5E7EB" />
            <rect x="50" y="118" width="4" height="1" fill="#E5E7EB" />
            <rect x="50" y="121" width="4" height="1" fill="#E5E7EB" />
            <rect x="50" y="124" width="4" height="1" fill="#E5E7EB" />
            <rect x="52" y="127" width="4" height="1" fill="#E5E7EB" />
          </g>
        )}

        {selections.footwear === 'mary_jane' && (
          <g id="footwear-maryjane">
            {/* Frilly lace socks */}
            <rect x="41" y="122" width="6" height="7" fill="#FFFFFF" />
            <rect x="49" y="122" width="6" height="7" fill="#FFFFFF" />
            {/* Ruffled lace trim */}
            <rect x="40" y="121" width="8" height="2" fill="#FFFFFF" />
            <rect x="48" y="121" width="8" height="2" fill="#FFFFFF" />
            <rect x="40" y="120" width="1" height="1" fill="#E2E8F0" />
            <rect x="42" y="120" width="1" height="1" fill="#E2E8F0" />
            <rect x="44" y="120" width="1" height="1" fill="#E2E8F0" />
            <rect x="46" y="120" width="1" height="1" fill="#E2E8F0" />
            <rect x="49" y="120" width="1" height="1" fill="#E2E8F0" />
            <rect x="51" y="120" width="1" height="1" fill="#E2E8F0" />
            <rect x="53" y="120" width="1" height="1" fill="#E2E8F0" />
            <rect x="55" y="120" width="1" height="1" fill="#E2E8F0" />

            {/* Left shoe */}
            <rect x="38" y="129" width="9" height="6" fill="#1C1917" />
            <rect x="37" y="132" width="11" height="3" fill="#0C0A09" />
            {/* Glossy highlight */}
            <rect x="39" y="130" width="3" height="1" fill="#78716C" />
            {/* Strap and gold buckle */}
            <rect x="41" y="128" width="5" height="1" fill="#1C1917" />
            <rect x="42" y="128" width="2" height="1" fill="#FBBF24" />

            {/* Right shoe */}
            <rect x="49" y="129" width="9" height="6" fill="#1C1917" />
            <rect x="48" y="132" width="11" height="3" fill="#0C0A09" />
            {/* Glossy highlight */}
            <rect x="54" y="130" width="3" height="1" fill="#78716C" />
            {/* Strap and gold buckle */}
            <rect x="50" y="128" width="5" height="1" fill="#1C1917" />
            <rect x="52" y="128" width="2" height="1" fill="#FBBF24" />
          </g>
        )}

        {selections.footwear === 'fantasy_knee_high' && (
          <g id="footwear-fantasy">
            {/* Left knee-high boot */}
            {/* Folded top cuff with golden trim */}
            <rect x="39" y="103" width="9" height="4" fill="#78350F" />
            <rect x="39" y="103" width="9" height="1" fill="#F59E0B" />
            {/* Boot calf */}
            <rect x="40" y="107" width="8" height="22" fill="#58240C" />
            <rect x="38" y="127" width="11" height="8" fill="#451A03" />
            {/* Soles and pointed toe */}
            <rect x="37" y="133" width="12" height="3" fill="#290E02" />
            {/* Golden ankle buckle strap */}
            <rect x="39" y="127" width="9" height="1.5" fill="#D97706" />
            <rect x="43" y="126" width="2" height="3" fill="#FCD34D" />

            {/* Right knee-high boot */}
            {/* Folded top cuff with golden trim */}
            <rect x="48" y="103" width="9" height="4" fill="#78350F" />
            <rect x="48" y="103" width="9" height="1" fill="#F59E0B" />
            {/* Boot calf */}
            <rect x="48" y="107" width="8" height="22" fill="#58240C" />
            <rect x="47" y="127" width="11" height="8" fill="#451A03" />
            {/* Soles and pointed toe */}
            <rect x="47" y="133" width="12" height="3" fill="#290E02" />
            {/* Golden ankle buckle strap */}
            <rect x="48" y="127" width="9" height="1.5" fill="#D97706" />
            <rect x="51" y="126" width="2" height="3" fill="#FCD34D" />
          </g>
        )}
      </g>

      {/* 6. OUTFIT (TORSO & SKIRT/BOTTOMS) */}
      <g id="layer-outfit">
        {selections.outfit === 'pastel_hoodie' && (
          <g id="outfit-hoodie">
            {/* Pleated skirt */}
            <rect x="38" y="73" width="20" height="14" fill="#C4B5FD" />
            <rect x="37" y="77" width="22" height="11" fill="#DDD6FE" />
            {/* Pleat shadow lines */}
            <rect x="40" y="77" width="1" height="11" fill="#A78BFA" />
            <rect x="44" y="77" width="1" height="11" fill="#A78BFA" />
            <rect x="48" y="77" width="1" height="11" fill="#A78BFA" />
            <rect x="51" y="77" width="1" height="11" fill="#A78BFA" />
            <rect x="55" y="77" width="1" height="11" fill="#A78BFA" />

            {/* Oversized lavender hoodie body */}
            <rect x="36" y="52" width="24" height="23" fill="#DDD6FE" />
            <rect x="37" y="54" width="22" height="19" fill="#EDE9FE" />
            {/* Kangaroo pocket */}
            <rect x="41" y="65" width="14" height="7" fill="#C4B5FD" />
            <rect x="42" y="66" width="12" height="5" fill="#DDD6FE" />
            {/* Hoodie bottom ribbing */}
            <rect x="36" y="72" width="24" height="3" fill="#C4B5FD" />
            {/* Drawstring cords hanging */}
            <rect x="44" y="54" width="1" height="9" fill="#FFFFFF" />
            <rect x="51" y="54" width="1" height="9" fill="#FFFFFF" />
            <rect x="43.5" y="62" width="2" height="2" fill="#F472B6" />
            <rect x="50.5" y="62" width="2" height="2" fill="#F472B6" />
            {/* Collar/Hood neck wrap */}
            <rect x="42" y="50" width="12" height="4" fill="#C4B5FD" />
          </g>
        )}

        {selections.outfit === 'elegant_gothic' && (
          <g id="outfit-gothic">
            {/* Tiered gothic lolita skirt */}
            <rect x="34" y="70" width="28" height="22" fill="#18181B" />
            <rect x="31" y="76" width="34" height="17" fill="#27272A" />
            <rect x="29" y="84" width="38" height="10" fill="#18181B" />
            {/* Crimson velvet accents & frills */}
            <rect x="35" y="73" width="26" height="2" fill="#881337" />
            <rect x="32" y="82" width="32" height="2" fill="#881337" />
            {/* White lace hem */}
            <rect x="29" y="93" width="38" height="2" fill="#FFFFFF" />
            <rect x="29" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="33" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="37" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="41" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="45" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="49" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="53" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="57" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="61" y="94" width="2" height="1" fill="#E4E4E7" />
            <rect x="65" y="94" width="2" height="1" fill="#E4E4E7" />

            {/* Corseted Bodice */}
            <rect x="38" y="52" width="20" height="19" fill="#18181B" />
            <rect x="41" y="54" width="14" height="16" fill="#881337" />
            {/* White lace ruff / jabot at chest */}
            <rect x="44" y="50" width="8" height="6" fill="#FFFFFF" />
            <rect x="46" y="56" width="4" height="3" fill="#E4E4E7" />
            <rect x="47" y="53" width="2" height="2" fill="#BE123C" />
            {/* Corset cross-lacing */}
            <rect x="43" y="60" width="10" height="1" fill="#F43F5E" />
            <rect x="44" y="63" width="8" height="1" fill="#F43F5E" />
            <rect x="45" y="66" width="6" height="1" fill="#F43F5E" />
            <rect x="46" y="68" width="4" height="1" fill="#F43F5E" />
          </g>
        )}

        {selections.outfit === 'fantasy_adventurer' && (
          <g id="outfit-fantasy">
            {/* Adventurer pleated leather battle skirt */}
            <rect x="38" y="72" width="20" height="14" fill="#78350F" />
            <rect x="36" y="76" width="24" height="11" fill="#92400E" />
            {/* White chemise under-layer frill */}
            <rect x="37" y="86" width="22" height="2" fill="#FEF3C7" />

            {/* Leather Bodice & Brass Details */}
            <rect x="38" y="52" width="20" height="21" fill="#451A03" />
            <rect x="40" y="53" width="16" height="19" fill="#78350F" />
            {/* White undershirt showing at neckline */}
            <rect x="44" y="50" width="8" height="4" fill="#FEF3C7" />
            {/* Crossed utility belts */}
            <rect x="37" y="68" width="22" height="3" fill="#290E02" />
            <rect x="46" y="67" width="4" height="5" fill="#F59E0B" />
            {/* Diagonal potion strap & satchel */}
            <path d="M 39,53 L 56,70" stroke="#290E02" strokeWidth="2" />
            <rect x="54" y="69" width="5" height="6" fill="#58240C" />
            {/* Glowing magic potion vial */}
            <rect x="38" y="69" width="3" height="4" fill="#06B6D4" />
            <rect x="39" y="68" width="1" height="1" fill="#F59E0B" />
          </g>
        )}

        {selections.outfit === 'modern_streetwear' && (
          <g id="outfit-streetwear">
            {/* High-waisted techwear cargo skirt */}
            <rect x="39" y="70" width="18" height="14" fill="#0F172A" />
            <rect x="38" y="74" width="20" height="11" fill="#1E293B" />
            {/* Utility belt & hanging orange buckle tape */}
            <rect x="38" y="69" width="20" height="2.5" fill="#020617" />
            <rect x="45" y="68" width="6" height="4" fill="#F97316" />
            {/* Hanging cyber strap */}
            <rect x="42" y="72" width="1.5" height="12" fill="#F97316" />
            <rect x="53" y="72" width="1.5" height="9" fill="#38BDF8" />

            {/* Cropped graphic inner top */}
            <rect x="42" y="52" width="12" height="12" fill="#020617" />
            <rect x="45" y="56" width="6" height="3" fill="#F43F5E" />
            {/* Exposed midriff in selected skin tone */}
            <rect x="42" y="64" width="12" height="5" fill={skin.base} />
            <rect x="47.5" y="65" width="1" height="1" fill={skin.shadow} />

            {/* Cropped tech bomber jacket torso frame */}
            <rect x="36" y="51" width="6" height="14" fill="#334155" />
            <rect x="54" y="51" width="6" height="14" fill="#334155" />
            <rect x="37" y="52" width="4" height="12" fill="#475569" />
            <rect x="55" y="52" width="4" height="12" fill="#475569" />
          </g>
        )}
      </g>

      {/* 7. ARMS & HANDS */}
      <g id="layer-arms">
        {selections.outfit === 'pastel_hoodie' && (
          <g id="arms-hoodie">
            {/* Relaxed oversized hoodie sleeves */}
            <rect x="32" y="52" width="7" height="26" fill="#DDD6FE" />
            <rect x="57" y="52" width="7" height="26" fill="#DDD6FE" />
            <rect x="33" y="54" width="5" height="22" fill="#EDE9FE" />
            <rect x="58" y="54" width="5" height="22" fill="#EDE9FE" />
            {/* Ribbed sleeve cuffs */}
            <rect x="32" y="77" width="7" height="3" fill="#C4B5FD" />
            <rect x="57" y="77" width="7" height="3" fill="#C4B5FD" />
            {/* Cute hands emerging */}
            <rect x="33" y="80" width="5" height="6" fill={skin.base} />
            <rect x="58" y="80" width="5" height="6" fill={skin.base} />
            <rect x="32" y="82" width="2" height="3" fill={skin.base} />
            <rect x="62" y="82" width="2" height="3" fill={skin.base} />
          </g>
        )}

        {selections.outfit === 'elegant_gothic' && (
          <g id="arms-gothic">
            {/* Flared lolita sleeves */}
            <rect x="33" y="52" width="6" height="22" fill="#18181B" />
            <rect x="57" y="52" width="6" height="22" fill="#18181B" />
            <rect x="34" y="54" width="4" height="18" fill="#27272A" />
            <rect x="58" y="54" width="4" height="18" fill="#27272A" />
            {/* Flared lace cuffs */}
            <rect x="31" y="73" width="9" height="6" fill="#FFFFFF" />
            <rect x="56" y="73" width="9" height="6" fill="#FFFFFF" />
            <rect x="31" y="78" width="9" height="1" fill="#E4E4E7" />
            <rect x="56" y="78" width="9" height="1" fill="#E4E4E7" />
            {/* Dainty hands */}
            <rect x="33" y="78" width="5" height="6" fill={skin.base} />
            <rect x="58" y="78" width="5" height="6" fill={skin.base} />
          </g>
        )}

        {selections.outfit === 'fantasy_adventurer' && (
          <g id="arms-fantasy">
            {/* Pauldrons on shoulders */}
            <rect x="31" y="50" width="8" height="5" fill="#78350F" />
            <rect x="57" y="50" width="8" height="5" fill="#78350F" />
            <rect x="31" y="50" width="8" height="1.5" fill="#F59E0B" />
            <rect x="57" y="50" width="8" height="1.5" fill="#F59E0B" />
            {/* Bare upper arms */}
            <rect x="33" y="55" width="5" height="12" fill={skin.base} />
            <rect x="58" y="55" width="5" height="12" fill={skin.base} />
            {/* Leather bracers */}
            <rect x="32" y="67" width="6" height="12" fill="#58240C" />
            <rect x="58" y="67" width="6" height="12" fill="#58240C" />
            <rect x="32" y="72" width="6" height="1.5" fill="#D97706" />
            <rect x="58" y="72" width="6" height="1.5" fill="#D97706" />
            {/* Hands */}
            <rect x="33" y="79" width="5" height="6" fill={skin.base} />
            <rect x="58" y="79" width="5" height="6" fill={skin.base} />
          </g>
        )}

        {selections.outfit === 'modern_streetwear' && (
          <g id="arms-streetwear">
            {/* Bomber jacket sleeves with sporty cyan/orange racing stripes */}
            <rect x="32" y="51" width="7" height="24" fill="#334155" />
            <rect x="57" y="51" width="7" height="24" fill="#334155" />
            {/* Stripes */}
            <rect x="31" y="54" width="2" height="18" fill="#F97316" />
            <rect x="63" y="54" width="2" height="18" fill="#38BDF8" />
            {/* Ribbed elastic wrist cuff */}
            <rect x="32" y="74" width="7" height="3" fill="#0F172A" />
            <rect x="57" y="74" width="7" height="3" fill="#0F172A" />
            {/* Hands */}
            <rect x="33" y="77" width="5" height="7" fill={skin.base} />
            <rect x="58" y="77" width="5" height="7" fill={skin.base} />
          </g>
        )}
      </g>

      {/* 8. NECK & FACE BASE */}
      <g id="layer-face-base">
        {/* Neck */}
        <rect x="45" y="46" width="6" height="7" fill={skin.shadow} />
        <rect x="46" y="47" width="4" height="6" fill={skin.base} />

        {/* Head/Face base contour */}
        <rect x="37" y="24" width="22" height="20" fill={skin.base} />
        <rect x="35" y="27" width="26" height="15" fill={skin.base} />
        {/* Rounded anime chin */}
        <rect x="39" y="42" width="18" height="3" fill={skin.base} />
        <rect x="43" y="45" width="10" height="2" fill={skin.base} />
        <rect x="45" y="46.5" width="6" height="1" fill={skin.shadow} />

        {/* Ears */}
        <rect x="34" y="33" width="3" height="6" fill={skin.base} />
        <rect x="35" y="34" width="1" height="4" fill={skin.shadow} />
        <rect x="59" y="33" width="3" height="6" fill={skin.base} />
        <rect x="60" y="34" width="1" height="4" fill={skin.shadow} />
      </g>

      {/* 9. EYES */}
      <g id="layer-eyes">
        {/* Left eye base (x=39..46), Right eye base (x=50..57) */}
        {/* Eye sclera (whites) */}
        <rect x="40" y="33" width="6" height="6" fill="#FFFFFF" />
        <rect x="50" y="33" width="6" height="6" fill="#FFFFFF" />

        {selections.eyeStyle === 'soft_round' && (
          <g id="eyes-soft-round">
            {/* Upper curved lash line */}
            <rect x="39" y="32" width="8" height="2" fill="#18181B" />
            <rect x="49" y="32" width="8" height="2" fill="#18181B" />
            {/* Irises */}
            <rect x="41" y="33" width="5" height="5" fill={eye.deep} />
            <rect x="41" y="35" width="5" height="3" fill={eye.base} />
            <rect x="42" y="36" width="3" height="2" fill={eye.highlight} />
            {/* Right Iris */}
            <rect x="50" y="33" width="5" height="5" fill={eye.deep} />
            <rect x="50" y="35" width="5" height="3" fill={eye.base} />
            <rect x="51" y="36" width="3" height="2" fill={eye.highlight} />
            {/* Catchlights */}
            <rect x="41" y="33" width="2" height="2" fill={eye.catch} />
            <rect x="44" y="36" width="1" height="1" fill={eye.catch} />
            <rect x="50" y="33" width="2" height="2" fill={eye.catch} />
            <rect x="53" y="36" width="1" height="1" fill={eye.catch} />
          </g>
        )}

        {selections.eyeStyle === 'sharp_cat' && (
          <g id="eyes-sharp-cat">
            {/* Upturned cat flick upper eyeliner */}
            <rect x="39" y="33" width="7" height="1.5" fill="#18181B" />
            <rect x="37" y="31.5" width="3" height="2" fill="#18181B" />
            <rect x="50" y="33" width="7" height="1.5" fill="#18181B" />
            <rect x="56" y="31.5" width="3" height="2" fill="#18181B" />
            {/* Tapered cat-like irises */}
            <rect x="41" y="33" width="4" height="5" fill={eye.deep} />
            <rect x="41" y="34.5" width="4" height="3" fill={eye.base} />
            <rect x="42.5" y="34" width="1" height="4" fill={eye.highlight} />
            {/* Right */}
            <rect x="51" y="33" width="4" height="5" fill={eye.deep} />
            <rect x="51" y="34.5" width="4" height="3" fill={eye.base} />
            <rect x="52.5" y="34" width="1" height="4" fill={eye.highlight} />
            {/* Highlights */}
            <rect x="41" y="33" width="2" height="1.5" fill={eye.catch} />
            <rect x="51" y="33" width="2" height="1.5" fill={eye.catch} />
          </g>
        )}

        {selections.eyeStyle === 'dreamy_half_lidded' && (
          <g id="eyes-dreamy">
            {/* Lowered sleepy eyelid shadow */}
            <rect x="39" y="32" width="7" height="2.5" fill="#18181B" />
            <rect x="40" y="34" width="6" height="1.5" fill={skin.shadow} />
            <rect x="50" y="32" width="7" height="2.5" fill="#18181B" />
            <rect x="50" y="34" width="6" height="1.5" fill={skin.shadow} />
            {/* Half visible iris */}
            <rect x="41" y="35" width="5" height="3.5" fill={eye.deep} />
            <rect x="42" y="36" width="3" height="2.5" fill={eye.base} />
            <rect x="50" y="35" width="5" height="3.5" fill={eye.deep} />
            <rect x="51" y="36" width="3" height="2.5" fill={eye.base} />
            {/* Gentle catchlight */}
            <rect x="42" y="35" width="1.5" height="1.5" fill={eye.catch} />
            <rect x="51" y="35" width="1.5" height="1.5" fill={eye.catch} />
          </g>
        )}

        {selections.eyeStyle === 'sparkling_wide' && (
          <g id="eyes-sparkling-wide">
            {/* Big shoujo lash arc */}
            <rect x="39" y="31.5" width="8" height="2" fill="#18181B" />
            <rect x="49" y="31.5" width="8" height="2" fill="#18181B" />
            {/* Delicate lower lash dots */}
            <rect x="40" y="39.5" width="1" height="1" fill="#18181B" />
            <rect x="44" y="39.5" width="1" height="1" fill="#18181B" />
            <rect x="51" y="39.5" width="1" height="1" fill="#18181B" />
            <rect x="55" y="39.5" width="1" height="1" fill="#18181B" />
            {/* Oversized luminous irises */}
            <rect x="40" y="33" width="6" height="6" fill={eye.deep} />
            <rect x="40" y="35" width="6" height="4" fill={eye.base} />
            <rect x="41" y="36.5" width="4" height="2" fill={eye.highlight} />
            {/* Right */}
            <rect x="50" y="33" width="6" height="6" fill={eye.deep} />
            <rect x="50" y="35" width="6" height="4" fill={eye.base} />
            <rect x="51" y="36.5" width="4" height="2" fill={eye.highlight} />
            {/* Triple Shoujo Star Catchlights */}
            <rect x="41" y="33" width="2.5" height="2.5" fill={eye.catch} />
            <rect x="44" y="34.5" width="1.5" height="1.5" fill={eye.catch} />
            <rect x="42" y="37" width="1.5" height="1.5" fill={eye.catch} />
            <rect x="51" y="33" width="2.5" height="2.5" fill={eye.catch} />
            <rect x="54" y="34.5" width="1.5" height="1.5" fill={eye.catch} />
            <rect x="52" y="37" width="1.5" height="1.5" fill={eye.catch} />
          </g>
        )}
      </g>

      {/* 10. FACIAL EXPRESSION (BROWS, BLUSH, NOSE, MOUTH) */}
      <g id="layer-expression">
        {/* Tiny cute nose */}
        <rect x="47.5" y="39" width="1" height="1" fill={skin.shadow} />

        {selections.expression === 'cheerful_smile' && (
          <g id="exp-cheerful">
            {/* Happy curved eyebrows */}
            <rect x="40" y="29" width="6" height="1.5" fill={hair.shadow} />
            <rect x="50" y="29" width="6" height="1.5" fill={hair.shadow} />
            {/* Rosy cheek blush */}
            <rect x="36" y="38" width="4" height="2" fill={skin.blush} opacity="0.6" />
            <rect x="56" y="38" width="4" height="2" fill={skin.blush} opacity="0.6" />
            {/* Joyful open smile */}
            <rect x="45" y="42" width="6" height="1.5" fill="#9F1239" />
            <rect x="46" y="43.5" width="4" height="2" fill="#E11D48" />
            <rect x="47" y="43" width="2" height="1" fill="#FFFFFF" />
          </g>
        )}

        {selections.expression === 'shy_blush' && (
          <g id="exp-shy">
            {/* Soft worried/bashful angled brows */}
            <path d="M 40,30 L 46,28.5" stroke={hair.shadow} strokeWidth="1.5" />
            <path d="M 56,30 L 50,28.5" stroke={hair.shadow} strokeWidth="1.5" />
            {/* Prominent diagonal blush stripes across cheeks & nose */}
            <rect x="35" y="37" width="6" height="3" fill={skin.shyBlush} opacity="0.75" />
            <rect x="45" y="38" width="6" height="2" fill={skin.shyBlush} opacity="0.6" />
            <rect x="55" y="37" width="6" height="3" fill={skin.shyBlush} opacity="0.75" />
            {/* Cute anime diagonal blush lines */}
            <rect x="36" y="36" width="1" height="4" fill="#E11D48" opacity="0.6" />
            <rect x="39" y="36" width="1" height="4" fill="#E11D48" opacity="0.6" />
            <rect x="56" y="36" width="1" height="4" fill="#E11D48" opacity="0.6" />
            <rect x="59" y="36" width="1" height="4" fill="#E11D48" opacity="0.6" />
            {/* Bashful small wavy mouth */}
            <rect x="46" y="43" width="4" height="1.5" fill="#BE123C" />
          </g>
        )}

        {selections.expression === 'confident_smirk' && (
          <g id="exp-smirk">
            {/* One arched eyebrow, one level */}
            <path d="M 40,29.5 L 46,29" stroke={hair.shadow} strokeWidth="1.5" />
            <path d="M 50,28 L 56,26.5" stroke={hair.shadow} strokeWidth="1.5" />
            {/* Subtle cheek glow */}
            <rect x="36" y="38" width="3" height="2" fill={skin.blush} opacity="0.4" />
            <rect x="57" y="38" width="3" height="2" fill={skin.blush} opacity="0.4" />
            {/* Cocky one-sided smirk */}
            <path d="M 45,43 L 49,43 L 52,41" stroke="#9F1239" strokeWidth="1.5" fill="none" />
          </g>
        )}

        {selections.expression === 'calm_gentle' && (
          <g id="exp-calm">
            {/* Serene soft gentle brows */}
            <rect x="40" y="29.5" width="6" height="1.5" fill={hair.shadow} />
            <rect x="50" y="29.5" width="6" height="1.5" fill={hair.shadow} />
            {/* Soft natural blush */}
            <rect x="36" y="38" width="4" height="2" fill={skin.blush} opacity="0.45" />
            <rect x="56" y="38" width="4" height="2" fill={skin.blush} opacity="0.45" />
            {/* Delicate calm closed smile */}
            <path d="M 45,42.5 Q 48,44 51,42.5" stroke="#9F1239" strokeWidth="1.5" fill="none" />
          </g>
        )}
      </g>

      {/* 11. FRONT HAIR & BANGS */}
      <g id="layer-front-hair">
        {/* Crown of hair */}
        <rect x="33" y="18" width="30" height="9" fill={hair.base} />
        <rect x="31" y="21" width="34" height="8" fill={hair.base} />
        {/* Hair root shading */}
        <rect x="33" y="17" width="30" height="2" fill={hair.shadow} />

        {selections.hairstyle === 'long_straight' && (
          <g id="hair-front-straight">
            {/* Sleek straight hime bangs */}
            <rect x="34" y="24" width="28" height="6" fill={hair.base} />
            {/* Center parted neat bang blocks */}
            <rect x="36" y="28" width="6" height="3" fill={hair.base} />
            <rect x="44" y="28" width="8" height="3" fill={hair.base} />
            <rect x="54" y="28" width="6" height="3" fill={hair.base} />
            {/* Cheek-framing hime side strands */}
            <rect x="32" y="24" width="4" height="24" fill={hair.base} />
            <rect x="32" y="44" width="3" height="6" fill={hair.shadow} />
            <rect x="60" y="24" width="4" height="24" fill={hair.base} />
            <rect x="61" y="44" width="3" height="6" fill={hair.shadow} />
          </g>
        )}

        {selections.hairstyle === 'twin_tails' && (
          <g id="hair-front-twintails">
            {/* Arched playful anime bangs */}
            <rect x="34" y="24" width="28" height="5" fill={hair.base} />
            {/* Feathered bang tips */}
            <rect x="36" y="28" width="5" height="3" fill={hair.base} />
            <rect x="43" y="28" width="4" height="2.5" fill={hair.base} />
            <rect x="49" y="28" width="4" height="2.5" fill={hair.base} />
            <rect x="55" y="28" width="5" height="3" fill={hair.base} />
            {/* Cute side wisps */}
            <rect x="33" y="25" width="3" height="17" fill={hair.base} />
            <rect x="60" y="25" width="3" height="17" fill={hair.base} />
            {/* Tiny ahoge / cowlick tuft on top */}
            <rect x="47" y="14" width="2" height="4" fill={hair.base} />
            <rect x="49" y="13" width="2" height="2" fill={hair.base} />
          </g>
        )}

        {selections.hairstyle === 'short_bob' && (
          <g id="hair-front-bob">
            {/* Layered modern feathered bangs */}
            <rect x="33" y="24" width="30" height="5" fill={hair.base} />
            <rect x="35" y="28" width="7" height="3" fill={hair.base} />
            <rect x="44" y="28" width="8" height="2" fill={hair.base} />
            <rect x="54" y="28" width="7" height="3" fill={hair.base} />
            {/* Face framing curved bob cheeks */}
            <rect x="32" y="25" width="4" height="19" fill={hair.base} />
            <rect x="34" y="42" width="3" height="3" fill={hair.base} />
            <rect x="60" y="25" width="4" height="19" fill={hair.base} />
            <rect x="59" y="42" width="3" height="3" fill={hair.base} />
          </g>
        )}

        {selections.hairstyle === 'wavy_shoulder' && (
          <g id="hair-front-wavy">
            {/* Romantic side-swept bangs */}
            <rect x="33" y="24" width="30" height="5" fill={hair.base} />
            <rect x="34" y="27" width="12" height="4" fill={hair.base} />
            <rect x="48" y="27" width="14" height="3" fill={hair.base} />
            {/* Soft textured wavy side tendrils */}
            <rect x="31" y="25" width="4" height="22" fill={hair.base} />
            <rect x="30" y="40" width="4" height="8" fill={hair.base} />
            <rect x="61" y="25" width="4" height="22" fill={hair.base} />
            <rect x="62" y="40" width="4" height="8" fill={hair.base} />
          </g>
        )}

        {/* Luminous Anime Hair Shine Bar (Halo) */}
        <rect x="36" y="22" width="24" height="2" fill={hair.shine} opacity="0.85" />
        <rect x="40" y="22" width="16" height="2" fill="#FFFFFF" opacity="0.6" />
        <rect x="33" y="23" width="2" height="2" fill={hair.shine} opacity="0.5" />
        <rect x="61" y="23" width="2" height="2" fill={hair.shine} opacity="0.5" />
      </g>

      {/* 12. ACCESSORIES */}
      <g id="layer-accessory">
        {selections.accessory === 'star_clips' && (
          <g id="acc-star-clips">
            {/* Left golden star hair clip */}
            <rect x="35" y="26" width="4" height="4" fill="#FBBF24" />
            <rect x="36" y="25" width="2" height="6" fill="#FDE047" />
            <rect x="34" y="27" width="6" height="2" fill="#FDE047" />
            <rect x="36" y="27" width="2" height="2" fill="#FFFFFF" />

            {/* Right golden star hair clip */}
            <rect x="57" y="27" width="4" height="4" fill="#FBBF24" />
            <rect x="58" y="26" width="2" height="6" fill="#FDE047" />
            <rect x="56" y="28" width="6" height="2" fill="#FDE047" />
            <rect x="58" y="28" width="2" height="2" fill="#FFFFFF" />
          </g>
        )}

        {selections.accessory === 'ribbon_bow' && (
          <g id="acc-ribbon-bow">
            {/* Big silk ribbon bow perched atop head */}
            {/* Bow center knot */}
            <rect x="46" y="17" width="4" height="4" fill="#BE123C" />
            <rect x="47" y="18" width="2" height="2" fill="#FB7185" />
            {/* Left bow wing */}
            <rect x="38" y="14" width="8" height="7" fill="#E11D48" />
            <rect x="36" y="15" width="3" height="5" fill="#BE123C" />
            <rect x="40" y="16" width="4" height="3" fill="#FDA4AF" />
            {/* Right bow wing */}
            <rect x="50" y="14" width="8" height="7" fill="#E11D48" />
            <rect x="57" y="15" width="3" height="5" fill="#BE123C" />
            <rect x="52" y="16" width="4" height="3" fill="#FDA4AF" />
            {/* Flowing ribbon tails behind ears */}
            <rect x="44" y="21" width="3" height="6" fill="#BE123C" />
            <rect x="49" y="21" width="3" height="6" fill="#BE123C" />
          </g>
        )}

        {selections.accessory === 'headphones' && (
          <g id="acc-headphones">
            {/* Headband arch over hair */}
            <rect x="32" y="16" width="32" height="3" fill="#334155" />
            <rect x="34" y="15" width="28" height="2" fill="#F472B6" />
            <rect x="38" y="15" width="20" height="1.5" fill="#FFFFFF" opacity="0.6" />
            {/* Left ear cup */}
            <rect x="30" y="30" width="5" height="11" fill="#1E293B" />
            <rect x="29" y="32" width="2" height="7" fill="#F472B6" />
            <rect x="31" y="33" width="3" height="5" fill="#38BDF8" />
            {/* Right ear cup */}
            <rect x="61" y="30" width="5" height="11" fill="#1E293B" />
            <rect x="65" y="32" width="2" height="7" fill="#F472B6" />
            <rect x="62" y="33" width="3" height="5" fill="#38BDF8" />
          </g>
        )}

        {selections.accessory === 'flower_crown' && (
          <g id="acc-flower-crown">
            {/* Woven green vine base */}
            <path d="M 33,26 Q 48,24 63,26" fill="none" stroke="#15803D" strokeWidth="1.5" />
            {/* Leaves */}
            <rect x="37" y="24" width="2" height="2" fill="#22C55E" />
            <rect x="45" y="23" width="2" height="2" fill="#22C55E" />
            <rect x="53" y="23" width="2" height="2" fill="#22C55E" />
            <rect x="59" y="25" width="2" height="2" fill="#22C55E" />
            {/* Sakura blossoms */}
            <rect x="34" y="24" width="3" height="3" fill="#F472B6" />
            <rect x="35" y="25" width="1" height="1" fill="#FEF08A" />
            <rect x="41" y="23" width="4" height="4" fill="#F472B6" />
            <rect x="42.5" y="24.5" width="1" height="1" fill="#FEF08A" />
            <rect x="48" y="22" width="4" height="4" fill="#DDD6FE" />
            <rect x="49.5" y="23.5" width="1" height="1" fill="#FEF08A" />
            <rect x="55" y="23" width="4" height="4" fill="#F472B6" />
            <rect x="56.5" y="24.5" width="1" height="1" fill="#FEF08A" />
            <rect x="61" y="25" width="3" height="3" fill="#DDD6FE" />
            <rect x="62" y="26" width="1" height="1" fill="#FEF08A" />
          </g>
        )}
      </g>

      {/* 13. AMBIENT PARTICLES / FOREGROUND EFFECTS */}
      <g id="layer-ambient">
        {selections.background === 'sakura_garden' && (
          <g id="amb-sakura-petals">
            {/* Drifting cherry petals */}
            <rect x="14" y="38" width="2" height="2" fill="#F472B6" />
            <rect x="22" y="62" width="2" height="1.5" fill="#F8BBD0" />
            <rect x="76" y="52" width="2" height="2" fill="#F472B6" />
            <rect x="68" y="88" width="2" height="1.5" fill="#F8BBD0" />
            <rect x="26" y="104" width="2" height="2" fill="#F472B6" />
            <rect x="82" y="116" width="2" height="2" fill="#F8BBD0" />
          </g>
        )}

        {selections.background === 'moonlit_night' && (
          <g id="amb-night-sparkles">
            {/* Starlight cross flares */}
            <path d="M 24,48 L 24,54 M 21,51 L 27,51" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.8" />
            <path d="M 72,70 L 72,74 M 70,72 L 74,72" stroke="#FEF08A" strokeWidth="0.8" opacity="0.8" />
            <rect x="86" y="28" width="1.5" height="1.5" fill="#93C5FD" />
          </g>
        )}

        {selections.background === 'magical_starlight' && (
          <g id="amb-magic-sparkles">
            {/* Magic sparkle rings */}
            <circle cx="22" cy="74" r="3" fill="none" stroke="#67E8F9" strokeWidth="0.5" opacity="0.7" />
            <circle cx="76" cy="62" r="4" fill="none" stroke="#C084FC" strokeWidth="0.5" opacity="0.7" />
            <rect x="21.5" y="73.5" width="1" height="1" fill="#FFFFFF" />
            <rect x="75.5" y="61.5" width="1" height="1" fill="#FFFFFF" />
          </g>
        )}

        {selections.background === 'cozy_pastel_room' && (
          <g id="amb-room-lights">
            {/* Warm fairy light glows */}
            <circle cx="13" cy="13" r="3" fill="#FEF08A" opacity="0.25" />
            <circle cx="27" cy="15" r="3" fill="#F472B6" opacity="0.2" />
            <circle cx="43" cy="12" r="3" fill="#67E8F9" opacity="0.2" />
            <circle cx="59" cy="13" r="3" fill="#FEF08A" opacity="0.25" />
            <circle cx="75" cy="14" r="3" fill="#A78BFA" opacity="0.2" />
          </g>
        )}
      </g>
    </svg>
  );
};
