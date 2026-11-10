export type HairColorId = 'midnight_black' | 'cocoa_brown' | 'ocean_blue' | 'sakura_pink';
export type HairstyleId = 'long_straight' | 'twin_tails' | 'short_bob' | 'wavy_shoulder';
export type SkinToneId = 'porcelain' | 'warm_beige' | 'honey_tan' | 'deep_cocoa';
export type EyeColorId = 'sapphire_blue' | 'emerald_green' | 'amber_gold' | 'violet';
export type EyeStyleId = 'soft_round' | 'sharp_cat' | 'dreamy_half_lidded' | 'sparkling_wide';
export type OutfitId = 'pastel_hoodie' | 'elegant_gothic' | 'fantasy_adventurer' | 'modern_streetwear';
export type FootwearId = 'chunky_sneakers' | 'lace_up_boots' | 'mary_jane' | 'fantasy_knee_high';
export type AccessoryId = 'star_clips' | 'ribbon_bow' | 'headphones' | 'flower_crown';
export type ExpressionId = 'cheerful_smile' | 'shy_blush' | 'confident_smirk' | 'calm_gentle';
export type BackgroundId = 'sakura_garden' | 'moonlit_night' | 'magical_starlight' | 'cozy_pastel_room';

export interface CharacterSelections {
  hairColor: HairColorId;
  hairstyle: HairstyleId;
  skinTone: SkinToneId;
  eyeColor: EyeColorId;
  eyeStyle: EyeStyleId;
  outfit: OutfitId;
  footwear: FootwearId;
  accessory: AccessoryId;
  expression: ExpressionId;
  background: BackgroundId;
}

export interface QuestionOption<T extends string> {
  id: T;
  label: string;
  description?: string;
  accentColor?: string;
  badge?: string;
  icon?: string;
}

export interface QuestionDefinition<K extends keyof CharacterSelections> {
  key: K;
  number: number;
  category: string;
  heading: string;
  hint: string;
  options: QuestionOption<CharacterSelections[K]>[];
}

export type AppScreen = 'welcome' | 'questionnaire' | 'reveal';
