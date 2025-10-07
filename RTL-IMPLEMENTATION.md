# RTL (Right-to-Left) Support Implementation

This project now includes full RTL support using Mantine's DirectionProvider. Here's what has been implemented:

## Features

### 1. **DirectionProvider Integration**
- Added `DirectionProvider` from `@mantine/core` to the App component
- Automatically detects RTL languages and switches direction
- Updates the HTML `dir` attribute dynamically

### 2. **Language Switcher Component**
- Created `LanguageSwitcher` component with visual RTL/LTR indicators
- Supports multiple languages including RTL languages:
  - Arabic (ar) - العربية
  - Hebrew (he) - עברית
  - Persian (fa) - فارسی  
  - Urdu (ur) - اردو
  - And LTR languages: English, Spanish, German, Portuguese

### 3. **Dynamic Direction Updates**
- Custom hook `useRTLEffect` that:
  - Monitors language changes
  - Updates Mantine's direction provider
  - Updates HTML document direction attribute
  - Ensures proper RTL/LTR switching

### 4. **Translation Loading**
- Dynamic loading of translation files from `/public/locals/`
- Supports all available language files in the project
- Fallback to English if translation loading fails

## Usage

### Language Switching
Users can switch languages using the language switcher component which shows:
- Language selection dropdown
- Visual RTL/LTR direction indicator
- Current language highlighting

### RTL Languages Supported
The following languages are configured as RTL:
- `ar` - Arabic
- `he` - Hebrew  
- `fa` - Persian/Farsi
- `ur` - Urdu

### Adding New RTL Languages
To add a new RTL language:

1. Add the translation file to `/public/locals/[lang].json`
2. Update the `rtlLanguages` array in `useRTLEffect.ts`
3. Add the language to the `languages` array in `LanguageSwitcher.tsx`

## Components

### LanguageSwitcher
```tsx
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';

// Use in your component
<LanguageSwitcher />
```

### RTLDemo
A demo component that shows how RTL affects layout:
```tsx
import { RTLDemo } from '@/components/RTLDemo/RTLDemo';

<RTLDemo />
```

## Technical Details

### File Structure
```
src/
├── components/
│   ├── LanguageSwitcher/
│   │   ├── LanguageSwitcher.tsx
│   │   └── index.ts
│   └── RTLDemo/
│       ├── RTLDemo.tsx
│       └── index.ts
├── hooks/
│   └── useRTLEffect.ts
└── i18.tsx (updated for dynamic loading)
```

### Key Changes Made
1. **App.tsx**: Added DirectionProvider wrapper and RTL effect hook
2. **i18.tsx**: Modified to load translations dynamically instead of static imports
3. **Home.page.tsx**: Added LanguageSwitcher and RTLDemo components
4. **New Components**: LanguageSwitcher, RTLDemo, useRTLEffect hook

### Browser Support
- All modern browsers support RTL direction
- CSS properties automatically flip for RTL (margin-left becomes margin-right, etc.)
- Mantine components handle RTL automatically when DirectionProvider is used

## Testing RTL

1. Run the development server: `pnpm dev`
2. Open http://localhost:5173 in your browser
3. Click the language switcher icon
4. Select an RTL language (Arabic, Hebrew, Persian, or Urdu)
5. Observe how the layout automatically switches to RTL direction

The RTL Demo component will show various layout examples that demonstrate the RTL behavior.
