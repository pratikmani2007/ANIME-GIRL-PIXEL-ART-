# PIXEL WAIFU

### Create Your Own Anime Girl.

**pixel waifu by Pratik**

Pixel Waifu is a browser-based anime character customization platform that allows visitors to design and generate a personalized, full-body, pixel-art anime girl through an interactive ten-step questionnaire. Built as a fully client-side web application, it dynamically combines modular visual pixel components based on user selections, presenting a real-time preview and exporting high-resolution artwork without relying on external image services or backend infrastructure.

---

## About the Project

Pixel Waifu is designed to deliver a dedicated, interactive character-creation experience reminiscent of classic 16-bit anime role-playing games. The application addresses the challenge of rendering a vast number of unique visual variations without storing pre-rendered image files for every possibility.

Visitors interact with the platform through a structured, multi-step interface:
- Visitors start by providing their name on a welcome screen.
- Visitors progress sequentially through ten individual customization decisions.
- Each choice directly influences an isolated visual component—such as hair color, hairstyle silhouette, skin tone, eye anatomy, garments, footwear, accessories, emotional expression, or environmental backdrop.
- A central character rendering engine continuously composites these components in real time using integer-aligned scalable vector graphics (SVG).
- Upon completing the questionnaire, the application displays the completed character along with options to export the artwork in either high-resolution raster (PNG) or scalable vector (SVG) formats.

---

## Project Highlights

- **Personalized Welcome Experience**: Validates and stores the visitor's name in temporary memory to customize the greeting and generated artwork badge.
- **Ten-Step Sequential Questionnaire**: Ten distinct visual categories covering complete character anatomy and backdrop styling.
- **Four Distinct Choices Per Category**: Exactly four options per question, each providing a visually noticeable variation.
- **Real-Time Live Character Preview**: Immediate visual feedback that reflects user selections as they progress through the customization stages.
- **Full-Body Pixel-Art Generation**: Proportional character representation including complete head, torso, limbs, garments, footwear, and shadows.
- **Layer-Based Occlusion Engine**: Correct front-to-back z-ordering for natural overlap of hair strands, accessories, clothing, and body parts.
- **Progress Tracking**: Step indicators and visual progress meters keep the user informed of their completion status.
- **High-Resolution PNG Export**: Client-side canvas rasterization at 768 x 1152 pixels with nearest-neighbor scaling to preserve razor-sharp pixel edges.
- **Scalable Vector (SVG) Export**: Direct vector markup download for loss-less scaling and reproduction.
- **Synthesized Audio Feedback**: Built-in sound synthesis using the browser Web Audio API for UI feedback without external audio files.
- **Completely Client-Side Architecture**: Zero server round-trips, third-party image APIs, or persistent databases.
- **Strict Data Privacy**: No accounts, cookies, analytics trackers, or local storage persistence.

---

## Customization and Combination System

The character creation system is governed by a combinatorial parameter matrix. The platform defines ten distinct customization parameters, each offering four mutually exclusive options:

```
Total Theoretical Combinations = 4^10 = 1,048,576
```

Instead of storing over one million individual graphic files, the application utilizes a modular component architecture. The character is broken down into structured, parametric visual layers rendered within a unified 96 x 144 unit pixel coordinate space.

### Customization Parameters

| Step | Parameter | Visual Attributes Affected |
| :--- | :--- | :--- |
| 01 | Hair Colour | Highlights, midtones, shadow tones, and shine bar palette |
| 02 | Hairstyle | Silhouette, length, rear tresses, side locks, and bang tufts |
| 03 | Skin Tone | Face, neck, torso, midriff, thighs, knees, calves, and hands |
| 04 | Eye Colour | Iris base, deep shadow, iris highlight, and pupil accents |
| 05 | Eye Style | Eyelash curvature, lash wings, iris geometry, and catchlight placement |
| 06 | Outfit | Garment silhouette, chest overlay, sleeves, skirt pleating, and accents |
| 07 | Footwear | Shoe geometry, sole thickness, boot shafts, laces, and sock styling |
| 08 | Accessories | Head-mounted clips, bows, headphones, or flower wreaths |
| 09 | Expression | Eyebrow angle, mouth shape, nose positioning, and cheek blush density |
| 10 | Background | Environmental setting, celestial bodies, architectural silhouettes, and ground textures |

### Rendering Architecture and Layer Occlusion

To ensure visual consistency and prevent clipping across all 1,048,576 theoretical permutations, rendering is executed in twelve sequential SVG layer groups:

1. **Background Layer**: Scenic gradients, distant geometry (mountains, skyline, or room walls), and atmospheric objects.
2. **Ground and Shadow Layer**: Elliptical contact shadow positioned under the character's feet.
3. **Rear Hair Layer**: Hair sections positioned behind the torso and shoulders (long locks, pigtails, or bob back).
4. **Body Base and Legs Layer**: Pelvis, thighs, knees, calves, and core torso colored according to the selected skin tone palette.
5. **Footwear and Socks Layer**: Socks, boot shafts, shoes, laces, and sole platforms anchored at the base coordinates.
6. **Outfit Layer**: Dresses, hoodies, belts, pleats, collars, and waist detailing.
7. **Arms and Hands Layer**: Upper arms, forearm bracers or sleeves, and hands.
8. **Neck and Face Base Layer**: Neck shadow, jawline contour, chin curve, cheeks, and ears.
9. **Eye Anatomy Layer**: Sclera, irises, pupils, lash strokes, and catchlights.
10. **Facial Expression Layer**: Mouth shape, eyebrow curves, nose anchor, and blush marks.
11. **Front Hair and Bangs Layer**: Hair roots, front fringe, forehead halo shine, and side framing tendrils.
12. **Accessories and Ambient Particles Layer**: Hair clips, bows, headphones, flower crowns, and foreground drifting particles.

---

## Technology Stack

The project relies on standard modern web standards and lightweight frontend libraries:

| Technology | Role and Purpose |
| :--- | :--- |
| React 19 (`react`, `react-dom`) | Declarative UI structure, step management, and reactive state machine |
| TypeScript | Strict type safety for selection models, question schemas, and color palettes |
| Vite | Frontend development server, module bundler, and production build tool |
| Tailwind CSS v4 (`@tailwindcss/vite`) | Utility-first responsive styling and typography management |
| Lucide React (`lucide-react`) | Minimalist UI icons for navigation, checks, audio controls, and exports |
| HTML5 Canvas API | High-resolution pixelated raster rendering for PNG generation |
| Scalable Vector Graphics (SVG) | Parametric pixel-art drawing engine with crisp edge rendering |
| Web Audio API | Client-side sound synthesis producing retro chimes without external audio assets |

---

## How the Application Works

The user journey proceeds through eight stages:

1. **Arrival**: The visitor accesses the application and views the introductory hero interface and sample pixel character.
2. **Identity Entry**: The visitor enters their name. The system verifies that the input contains non-whitespace characters before permitting progression.
3. **Sequential Questionnaire**: The visitor navigates through questions 1 through 10. Each question presents four cards containing visual identifiers, descriptions, and color indicators.
4. **State Dispatch**: Each option selection immediately updates both the questionnaire progress state and the live character preview model.
5. **Dynamic Composition**: The `PixelCharacter` SVG component recalculates coordinates, fills, and silhouettes based on the active selection state.
6. **Completion and Reveal**: After answering the tenth question, the application transitions to the reveal screen, addressing the visitor by name.
7. **Artwork Export**: The visitor triggers either PNG or SVG export. The artwork is processed and saved directly via the browser.
8. **Session Reset**: The visitor can select "Create Another Character", which resets the memory state and returns to the initial screen.

---

## Project Architecture

```
/
├── .env.example              # Environment variable template
├── .gitignore                # Git ignore patterns
├── index.html                # Application HTML entry point and font declarations
├── metadata.json             # AI Studio platform configuration
├── package.json              # Project dependencies and script definitions
├── tsconfig.json             # TypeScript compiler settings
├── vite.config.ts            # Vite bundler and plugin configuration
└── src/
    ├── App.tsx               # Root component orchestrating screen routing and state
    ├── main.tsx              # React DOM mounting entry point
    ├── index.css             # Global CSS, font definitions, and pixel utilities
    ├── types/
    │   └── character.ts      # TypeScript interfaces for selections, options, and screens
    ├── data/
    │   └── questions.ts      # Data definitions for the 10 questions and 40 options
    ├── utils/
    │   ├── audio.ts          # Web Audio API sound synthesizer
    │   └── exporter.ts       # Canvas rasterization and SVG export functions
    └── components/
        ├── Header.tsx        # Top navigation bar with branding and audio toggle
        ├── PixelCharacter.tsx# Core SVG character rendering engine and palettes
        ├── WelcomeScreen.tsx # Screen 1: Visitor introduction and name input form
        ├── QuestionnaireScreen.tsx # Screen 2: 10-step customization interface
        └── RevealScreen.tsx  # Screen 3: Final character showcase and export tools
```

### Component Responsibilities

- **`App.tsx`**: Manages the high-level application state, including active screen navigation (`welcome`, `questionnaire`, `reveal`), the visitor's name, active character selections, and audio muting.
- **`PixelCharacter.tsx`**: Houses the SVG coordinate system (`viewBox="0 0 96 144"`), color lookup tables for skin, hair, and eyes, and modular rendering functions for all ten character aspects.
- **`exporter.ts`**: Handles client-side file generation by cloning the SVG DOM tree, drawing to an offscreen HTML Canvas with disabled smoothing, and downloading through temporary object URLs.
- **`audio.ts`**: Encapsulates an `AudioContext` instance providing non-blocking oscillator tones for selection clicks, progression, back navigation, and completion fanfares.

---

## Installation and Local Development

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (version 18.0.0 or higher recommended)
- npm, pnpm, or bun package manager

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/pixel-waifu.git
   ```

2. **Navigate to the project root**:
   ```bash
   cd pixel-waifu
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The local development server runs on `http://localhost:3000`.

5. **Type check and lint the project**:
   ```bash
   npm run lint
   ```

6. **Create a production build**:
   ```bash
   npm run build
   ```
   The bundled distribution files will be generated in the `dist` directory.

7. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## Character Export System

Pixel Waifu includes an in-browser export pipeline that converts the inline SVG markup into downloadable graphic files without server assistance.

### Supported Export Formats

1. **Portable Network Graphics (PNG)**:
   - **Resolution**: 768 x 1152 pixels (an exact 8x integer upscaling of the 96 x 144 grid).
   - **Rendering Method**: The live SVG node is cloned and serialized to an XML string via `XMLSerializer`. The string is converted to a Blob URL and loaded into an `HTMLImageElement`. The image is drawn onto an offscreen `<canvas>` element of dimensions 768 x 1152.
   - **Pixel Edge Preservation**: To avoid blurry bilinear filtering, the 2D canvas context explicitly disables interpolation:
     ```javascript
     ctx.imageSmoothingEnabled = false;
     ```
   - **Download Execution**: The canvas is serialized via `canvas.toBlob(...)`, assigned to a temporary anchor tag with a download attribute, and triggered programmatically.

2. **Scalable Vector Graphics (SVG)**:
   - **Characteristics**: Direct vector markup retaining crisp coordinate geometry at any scale.
   - **Rendering Method**: The serialized XML string is formatted into an `image/svg+xml` Blob and downloaded directly.

In both export pipelines, temporary object URLs are automatically revoked through `URL.revokeObjectURL` to prevent memory leaks.

---

## Privacy and Data Handling

Pixel Waifu operates under a strict client-side data privacy model:

- **No Remote Transmission**: The visitor's name, customization choices, and generated characters are processed entirely inside the visitor's local browser runtime.
- **No Database**: The application does not connect to any external relational database, NoSQL store, or document storage.
- **No Persistent Browser Storage**: The application does not write to `localStorage`, `sessionStorage`, `IndexedDB`, or HTTP cookies.
- **Session Lifespan**: All state variables reside in transient React memory. Reloading or navigating away from the page discards all session data immediately.
- **No Third-Party Analytics**: No third-party tracking scripts, telemetry collectors, or external advertising libraries are present in the codebase.

---

## Responsive Design

The user interface is built to function across varied device form factors:

- **Desktop and Laptop Displays**: Features a balanced two-column presentation on the customization screen, positioning question options on the left and a dedicated live preview on the right.
- **Tablet Devices**: Flexible CSS grid layouts adapt column spans and font scales to maintain legibility without horizontal scrolling.
- **Mobile Handsets**: On smaller touch devices, the interface stacks logically into a single-column flow with accessible touch targets (minimum 44px height for interactive options) and scaled preview proportions.
- **Vector Scaling**: The character renderer uses the SVG `preserveAspectRatio="xMidYMid meet"` attribute to scale to any container width while preserving strict aspect ratio and pixel alignment.

---

## Contributing

Contributions that enhance character visual variety, improve rendering performance, or extend accessibility are welcome.

### Potential Contribution Areas

- New hairstyle silhouettes, garments, or accessories matching the 96 x 144 grid.
- Accessibility refinements (ARIA labels, focus ring indicators, and keyboard navigation enhancements).
- Performance optimizations within SVG group rendering.
- Color palette additions for existing customization categories.

### Contribution Guidelines

1. Fork the repository.
2. Create a descriptive feature branch:
   ```bash
   git checkout -b feature/new-accessory
   ```
3. Commit your changes with clear, concise messages.
4. Verify that TypeScript compilation passes without errors:
   ```bash
   npm run lint
   ```
5. Submit a pull request explaining your additions.

---

## Future Development

The following enhancements represent potential roadmap considerations for future versions:

- Additional customization categories (such as headwear, pets, and outerwear layers).
- Keyboard shortcuts for rapid questionnaire option selection.
- Color palette customization tools allowing custom hex color definitions.
- Animated pixel idle loops (subtle breathing or eye blinking).

---

## Author

**Pratik Mani**

Project: Pixel Waifu  
Branding: pixel waifu by Pratik

---

## License

No license has currently been specified for this project. All rights are reserved by the author.
