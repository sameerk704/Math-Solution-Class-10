# JIGUU - Math Formula Guide

## Overview
JIGUU is a lightweight, offline-first Math Formula Guide designed for Class 9 and Class 10 students following NCERT syllabus. The app focuses on quick revision, exam-time recall, and concept clarity using well-structured formulas, clean UI, and student-friendly explanations.

## Current State
- **Version**: 1.0.0 (MVP)
- **Platform**: React Native (Expo) with Express.js backend
- **Status**: Complete and functional

## Project Architecture

### Frontend (Expo React Native)
```
client/
├── App.tsx                    # Root component with font loading
├── components/
│   ├── BackButton.tsx         # Navigation back button (legacy)
│   ├── ChapterCard.tsx        # Chapter list item component
│   ├── ChapterIntroCard.tsx   # Chapter introduction card with key points
│   ├── ColorButton.tsx        # Colorful subject/class buttons
│   ├── CreatorCredit.tsx      # Sameer Khan branding (bottom-right)
│   ├── EmptyState.tsx         # Empty state component
│   ├── ErrorBoundary.tsx      # Error boundary wrapper
│   ├── ErrorFallback.tsx      # Error fallback UI
│   ├── FormulaCard.tsx        # Formula display card
│   ├── JiguuLogo.tsx          # App logo component
│   ├── NavigationButtons.tsx  # Back + Home buttons side-by-side
│   ├── NewsCard.tsx           # News item card
│   ├── ScreenWrapper.tsx      # Wrapper with static header/footer
│   ├── StaticHeader.tsx       # Fixed header with JIGUU logo
│   └── ThemedText/View.tsx    # Themed UI primitives
├── constants/
│   └── theme.ts               # JIGUU color palette, typography, spacing
├── data/
│   ├── formulas.ts            # All Class 9 & 10 formulas (hardcoded)
│   └── news.ts                # News & events data
├── navigation/
│   └── RootStackNavigator.tsx # Stack navigation (no tabs)
└── screens/
    ├── HomeScreen.tsx         # Subject selection (Algebra, Trig, Geometry, News)
    ├── SubjectScreen.tsx      # Class 9/10 selection
    ├── ChapterListScreen.tsx  # Chapter list for selected subject/class
    ├── FormulaScreen.tsx      # Formula display for chapter
    └── NewsEventsScreen.tsx   # News & announcements
```

### Backend (Express.js)
```
server/
├── index.ts                   # Express server entry point
└── templates/
    └── landing-page.html      # Static landing page
```

## Key Design Decisions

### Navigation
- Stack-only navigation (no tabs)
- Flow: Home → Subject → Class → Chapter → Formulas
- NavigationButtons component with Back + Home buttons side-by-side on internal screens
- Home button allows jumping directly to home from any screen
- Animation: "fade" with 150ms duration to prevent white screen flash

### Branding
- JIGUU logo visible on header screens
- Creator credit (Sameer Khan) on every screen (bottom-right)
- Subject color coding: Algebra (purple), Trigonometry (coral), Geometry (green)

### Data
- All formula data is hardcoded (offline-first)
- Covers Class 9 and Class 10 NCERT syllabus
- Subjects: Algebra, Trigonometry, Geometry

## Color Palette
- Background: #FAFBFD
- Algebra: #6C63FF (purple)
- Trigonometry: #FF6584 (coral)
- Geometry: #4CAF50 (green)
- News: #FFA726 (orange)
- Text Primary: #1A1A2E
- Text Secondary: #5F6368

## Typography
- Font: Nunito (Google Fonts)
- Weights: Regular (400), SemiBold (600), Bold (700)

## Running the App
- Frontend: `npm run expo:dev` (port 8081)
- Backend: `npm run server:dev` (port 5000)

## Recent Changes
- January 2026: Added Daily Formula Widget on Home screen
  - Shows a new formula each day with gradient background
  - Includes study tips and lamp icon
  - Colors change daily for visual variety
- January 2026: Added Quick Notes feature
  - Create, edit, delete sticky-note style notes
  - 8 color options per note
  - Local storage (offline, no login required)
  - Teal color (#26A69A) button on Home screen
- January 2026: Fixed Home screen spacing
  - Removed 120px paddingTop, now uses balanced spacing
  - Equal vertical distribution of buttons
- January 2026: Improved content alignment across all screens
  - Uniform padding (Spacing.xl = 20px) on all list screens
  - Better line heights and text alignment
  - Professional, textbook-style appearance
- January 2026: Enhanced content with definitions, advanced formulas, and memory tricks
- Added "What is..." definitions to introduce key concepts
- Content organized from basic to advanced within each chapter
- Added exam tips, problem-solving strategies, and practical applications
- Fixed screen blinking on Android by disabling navigation animations
- All screens and components fully memoized for performance
- Added 40+ additional formulas across all chapters
- Student-friendly notebook-style language throughout

## User Preferences
- Offline-first approach (no backend database required)
- Clean, educational-friendly UI with dark navy background (#1A1A2E)
- JIGUU logo header with "Math Formula Guide" subtitle
- Footer with Sameer Khan photo, name, and "Educator" title (bottom-right)
- Large, colorful buttons for easy navigation
- No horizontal scrolling anywhere
- No navigation animations (prevents screen blinking)
