import { CharacterSelections, QuestionOption } from '../types/character';

export interface AnyQuestionDefinition {
  key: keyof CharacterSelections;
  number: number;
  category: string;
  heading: string;
  options: QuestionOption<any>[];
}

export const DEFAULT_CHARACTER: CharacterSelections = {
  hairColor: 'sakura_pink',
  hairstyle: 'twin_tails',
  skinTone: 'porcelain',
  eyeColor: 'sapphire_blue',
  eyeStyle: 'sparkling_wide',
  outfit: 'pastel_hoodie',
  footwear: 'chunky_sneakers',
  accessory: 'star_clips',
  expression: 'cheerful_smile',
  background: 'sakura_garden',
};

export const QUESTIONS: AnyQuestionDefinition[] = [
  {
    key: 'hairColor',
    number: 1,
    category: 'HAIR COLOUR',
    heading: 'Choose her hair colour.',
    options: [
      {
        id: 'midnight_black',
        label: 'Midnight Black',
        description: 'Silky raven locks with cool blue undertones',
        accentColor: '#1A1B26',
        badge: 'Classic Raven',
      },
      {
        id: 'cocoa_brown',
        label: 'Cocoa Brown',
        description: 'Warm roasted chestnut with soft caramel highlights',
        accentColor: '#73412B',
        badge: 'Warm & Natural',
      },
      {
        id: 'ocean_blue',
        label: 'Ocean Blue',
        description: 'Luminous cyan azure reminiscent of sunlit tides',
        accentColor: '#298BB9',
        badge: 'Vibrant Mystic',
      },
      {
        id: 'sakura_pink',
        label: 'Sakura Pink',
        description: 'Delicate pastel blossom hue with sweet rosy sheen',
        accentColor: '#F48FB1',
        badge: 'Sweet Pastel',
      },
    ],
  },
  {
    key: 'hairstyle',
    number: 2,
    category: 'HAIRSTYLE',
    heading: 'Which hairstyle suits her?',
    options: [
      {
        id: 'long_straight',
        label: 'Long Straight Hair',
        description: 'Flowing silky tresses cascading past the waist',
        badge: 'Elegant Hime',
      },
      {
        id: 'twin_tails',
        label: 'Twin Tails',
        description: 'Playful bouncy high pigtails tied with ribbons',
        badge: 'Playful & Cute',
      },
      {
        id: 'short_bob',
        label: 'Short Bob',
        description: 'Chic rounded bob framing the cheeks with feathered bangs',
        badge: 'Modern & Chic',
      },
      {
        id: 'wavy_shoulder',
        label: 'Wavy Shoulder-Length Hair',
        description: 'Romantic soft textured waves draping over shoulders',
        badge: 'Soft Romantic',
      },
    ],
  },
  {
    key: 'skinTone',
    number: 3,
    category: 'SKIN TONE',
    heading: 'Choose her skin tone.',
    options: [
      {
        id: 'porcelain',
        label: 'Porcelain',
        description: 'Fair alabaster complexion with soft blush highlights',
        accentColor: '#FFF0E8',
        badge: 'Fair Glow',
      },
      {
        id: 'warm_beige',
        label: 'Warm Beige',
        description: 'Natural sun-kissed warmth with delicate peach undertones',
        accentColor: '#FAD9B8',
        badge: 'Natural Sun',
      },
      {
        id: 'honey_tan',
        label: 'Honey Tan',
        description: 'Golden radiant tan reminiscent of golden hour sunshine',
        accentColor: '#D99F72',
        badge: 'Golden Glow',
      },
      {
        id: 'deep_cocoa',
        label: 'Deep Cocoa',
        description: 'Rich velvety espresso tone with warm amber depth',
        accentColor: '#8C5838',
        badge: 'Velvety Rich',
      },
    ],
  },
  {
    key: 'eyeColor',
    number: 4,
    category: 'EYE COLOUR',
    heading: 'What colour should her eyes be?',
    options: [
      {
        id: 'sapphire_blue',
        label: 'Sapphire Blue',
        description: 'Dazzling deep jewel blue with crystalline reflections',
        accentColor: '#2563EB',
        badge: 'Deep Ocean',
      },
      {
        id: 'emerald_green',
        label: 'Emerald Green',
        description: 'Vivid forest jewel with vibrant mint gleam',
        accentColor: '#059669',
        badge: 'Forest Sparkle',
      },
      {
        id: 'amber_gold',
        label: 'Amber Gold',
        description: 'Warm molten honey and glowing topaz brilliance',
        accentColor: '#D97706',
        badge: 'Golden Sunlight',
      },
      {
        id: 'violet',
        label: 'Violet',
        description: 'Mystical amethyst lavender with starlight glimmer',
        accentColor: '#7C3AED',
        badge: 'Mystic Gem',
      },
    ],
  },
  {
    key: 'eyeStyle',
    number: 5,
    category: 'EYE STYLE',
    heading: 'Choose her eye style.',
    options: [
      {
        id: 'soft_round',
        label: 'Soft Round Eyes',
        description: 'Gentle expressive curved gaze with warm anime highlights',
        badge: 'Gentle & Kind',
      },
      {
        id: 'sharp_cat',
        label: 'Sharp Cat Eyes',
        description: 'Upturned winged lashes with a captivating feline look',
        badge: 'Alluring Wing',
      },
      {
        id: 'dreamy_half_lidded',
        label: 'Dreamy Half-Lidded Eyes',
        description: 'Calm relaxed lids with a serene, introspective gaze',
        badge: 'Serene & Chill',
      },
      {
        id: 'sparkling_wide',
        label: 'Sparkling Wide Eyes',
        description: 'Shoujo manga oversized eyes with luminous triple catchlights',
        badge: 'Ultra Shimmer',
      },
    ],
  },
  {
    key: 'outfit',
    number: 6,
    category: 'OUTFIT',
    heading: 'What should she wear?',
    options: [
      {
        id: 'pastel_hoodie',
        label: 'Pastel Hoodie and Pleated Skirt',
        description: 'Cozy oversized lavender hoodie paired with a crisp pleated skirt',
        badge: 'Cozy Aesthetic',
      },
      {
        id: 'elegant_gothic',
        label: 'Elegant Gothic Dress',
        description: 'Victorian lolita silhouette with lace ruffles, corset & tiered skirt',
        badge: 'Dark Romance',
      },
      {
        id: 'fantasy_adventurer',
        label: 'Fantasy Adventurer Outfit',
        description: 'Leather pauldrons, brass buckles, potion satchel & battle tunic',
        badge: 'Quest Ready',
      },
      {
        id: 'modern_streetwear',
        label: 'Modern Streetwear',
        description: 'Cropped techwear bomber jacket with utility straps & cyber skirt',
        badge: 'Urban Cyber',
      },
    ],
  },
  {
    key: 'footwear',
    number: 7,
    category: 'FOOTWEAR',
    heading: 'Choose her footwear.',
    options: [
      {
        id: 'chunky_sneakers',
        label: 'Chunky Sneakers',
        description: 'Retro high-platform streetwear kicks with ribbed ankle socks',
        badge: 'Street Platform',
      },
      {
        id: 'lace_up_boots',
        label: 'Lace-Up Boots',
        description: 'Polished combat leather boots with cross-laces & over-knee socks',
        badge: 'Combat Chic',
      },
      {
        id: 'mary_jane',
        label: 'Mary Jane Shoes',
        description: 'Classic glossy buckled shoes paired with delicate frilled socks',
        badge: 'Vintage Doll',
      },
      {
        id: 'fantasy_knee_high',
        label: 'Fantasy Knee-High Boots',
        description: 'Ornate fitted calf-length leather boots with golden clasps',
        badge: 'Heroic Ride',
      },
    ],
  },
  {
    key: 'accessory',
    number: 8,
    category: 'ACCESSORIES',
    heading: 'Give her a little extra personality.',
    options: [
      {
        id: 'star_clips',
        label: 'Star Hair Clips',
        description: 'Dainty golden celestial clips sparkling in her bangs',
        badge: 'Starlight Clip',
      },
      {
        id: 'ribbon_bow',
        label: 'Ribbon Bow',
        description: 'Fluffy silk statement hair bow tied in back',
        badge: 'Sweet Ribbon',
      },
      {
        id: 'headphones',
        label: 'Over-Ear Headphones',
        description: 'Sleek pastel gaming headphones with illuminated earcups',
        badge: 'Gamer Vibe',
      },
      {
        id: 'flower_crown',
        label: 'Flower Crown',
        description: 'Woven garland of miniature sakura blossoms and fresh leaves',
        badge: 'Floral Halo',
      },
    ],
  },
  {
    key: 'expression',
    number: 9,
    category: 'FACIAL EXPRESSION',
    heading: 'What expression should she have?',
    options: [
      {
        id: 'cheerful_smile',
        label: 'Cheerful Smile',
        description: 'Bright sunny open grin with happy rosy cheeks',
        badge: 'Pure Joy',
      },
      {
        id: 'shy_blush',
        label: 'Shy Blush',
        description: 'Bashful flustered anime blush with an adorable petite pout',
        badge: 'Sweet Tsundere',
      },
      {
        id: 'confident_smirk',
        label: 'Confident Smirk',
        description: 'Playful one-sided smirk with a raised brow full of charm',
        badge: 'Charming Sassy',
      },
      {
        id: 'calm_gentle',
        label: 'Calm and Gentle',
        description: 'Serene warm closed-lip smile radiating quiet peace',
        badge: 'Serene Warmth',
      },
    ],
  },
  {
    key: 'background',
    number: 10,
    category: 'BACKGROUND',
    heading: 'Choose her world.',
    options: [
      {
        id: 'sakura_garden',
        label: 'Sakura Garden',
        description: 'Daytime Japanese garden with blooming cherry trees & drifting petals',
        badge: 'Spring Breeze',
      },
      {
        id: 'moonlit_night',
        label: 'Moonlit Night',
        description: 'Deep navy midnight sky with a glowing crescent moon and city lights',
        badge: 'City Moon',
      },
      {
        id: 'magical_starlight',
        label: 'Magical Starlight',
        description: 'Cosmic twilight nebula with floating crystals and swirling stardust',
        badge: 'Cosmic Magic',
      },
      {
        id: 'cozy_pastel_room',
        label: 'Cozy Pastel Room',
        description: 'Charming lo-fi bedroom with sunset window, bookshelf & fairy lights',
        badge: 'Lo-Fi Chill',
      },
    ],
  },
];
