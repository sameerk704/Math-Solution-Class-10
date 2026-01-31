# JIGUU - Math Formula Tool Design Guidelines

## 1. Brand Identity

**Purpose**: Offline-first formula reference tool for Class 9-10 Math students focusing on quick exam revision and concept clarity.

**Aesthetic Direction**: Educational-friendly with vibrant, confidence-building colors. Clean, spacious layouts that reduce cognitive load during study sessions. Warm and approachable, not intimidating.

**Memorable Element**: Subject-specific color coding system + clean geometric diagrams for visual learners.

**Core Branding Rules** (MUST follow on every screen):
- JIGUU logo always visible at top-center (never stuck to extreme top edge)
- Creator credit "Sameer Khan – MCA, B.Ed – Math Educator" in bottom-right corner of every screen
- No horizontal scrolling anywhere
- Large, rounded, colorful buttons throughout

## 2. Navigation Architecture

**Type**: Stack-only navigation (no tabs or drawer)

**Flow**:
```
Home → Subject Selection → Class Selection → Chapter List → Formula Screen
```

**Screens**:
1. **Home** - Entry point with subject selection
2. **Subject Screen** - Class 9/10 selection for chosen subject
3. **Chapter List** - Scrollable list of chapters for selected class
4. **Formula Screen** - Scrollable formula content with diagrams
5. **News & Events** - Scrollable announcements (accessed from Home)

All navigation uses button taps opening new full screens. Back button (top-left) on all screens except Home.

## 3. Color Palette

**Background**: #FAFBFD (soft off-white, easy on eyes during long study sessions)

**Subject Colors** (for buttons and accents):
- Algebra: #6C63FF (vibrant purple)
- Trigonometry: #FF6584 (warm coral)
- Geometry: #4CAF50 (fresh green)
- News & Events: #FFA726 (friendly orange)

**Text**:
- Primary: #1A1A2E (near-black for formulas)
- Secondary: #5F6368 (gray for labels)
- On Color Buttons: #FFFFFF

**Surface**: #FFFFFF (cards, formula containers)

**Borders**: #E0E0E0 (subtle dividers)

## 4. Typography

**Font**: Nunito (Google Font - friendly, highly legible for math content)

**Type Scale**:
- Logo: Nunito Bold, 28px
- Screen Title: Nunito Bold, 24px
- Button Text: Nunito SemiBold, 18px
- Chapter Name: Nunito Bold, 20px
- Formula Text: Nunito Regular, 16px
- Secondary/Caption: Nunito Regular, 14px
- Creator Credit: Nunito Regular, 12px

## 5. Screen-by-Screen Specifications

### Home Screen
**Purpose**: Subject selection entry point

**Layout**:
- Header: JIGUU logo (center, 60px from top), subtitle "Math Formula Tool" below
- Content: 4 vertical buttons (centered, full-width minus 48px margins)
  - Spacing between buttons: 20px
  - Button height: 64px, corner radius: 16px
  - Button colors match subject palette
- Footer: Creator credit (bottom-right, 16px padding)
- Safe area: Top inset + 60px, Bottom inset + 80px
- Scrollable: No

**Components**: ColorButton (with icon + text)

### Subject Screen (Algebra/Trigonometry/Geometry)
**Purpose**: Class selection

**Layout**:
- Header: Custom transparent, Back button (top-left), JIGUU logo (center)
- Content: 2 large buttons centered vertically
  - "Class 9" and "Class 10"
  - Each button: 160px width, 160px height, corner radius: 24px
  - Vertical spacing between: 32px
  - Background color matches subject color
- Footer: Creator credit
- Safe area: Top inset + 80px, Bottom inset + 80px
- Scrollable: No

**Components**: Back button, ColorButton (large square variant)

### Chapter List Screen
**Purpose**: Navigate to specific chapter formulas

**Layout**:
- Header: Custom transparent, Back button (top-left), JIGUU logo (center), Screen title showing "Class X - [Subject]"
- Content: Scrollable vertical list of chapter buttons
  - Each button: Full-width minus 32px margins, 56px height, 12px corner radius
  - Background: #FFFFFF with subtle shadow
  - Spacing between: 12px
  - Chapter number + name displayed
- Footer: Creator credit (fixed)
- Safe area: Top inset + 100px, Bottom inset + 80px
- Scrollable: Yes (content area only)

**Components**: Back button, ChapterCard (list item)

### Formula Screen
**Purpose**: Display formulas with diagrams

**Layout**:
- Header: Custom transparent, Back button (top-left), Chapter name (center, truncated if long)
- Content: Scrollable vertical content
  - Formula sections in white cards (16px padding, 12px corner radius)
  - Each formula on new line with proper spacing (24px between formulas)
  - Geometry chapters include labeled diagrams (centered, max 300px width)
  - Student-friendly explanations below formulas (gray text)
  - Card spacing: 16px vertical gap
- Footer: Creator credit (fixed)
- Safe area: Top inset + 80px, Bottom inset + 80px
- Scrollable: Yes

**Components**: Back button, FormulaCard, DiagramImage (for geometry)

**Special Requirements**:
- Log tables displayed in clean table format (equal column widths)
- Diagrams must be labeled and clear
- No NCERT word-for-word copying

### News & Events Screen
**Purpose**: Exam updates and announcements

**Layout**:
- Header: Custom transparent, Back button (top-left), JIGUU logo (center), "News & Events" title
- Content: Scrollable vertical cards
  - Each card: White background, 16px padding, 12px corner radius, 16px margin horizontal
  - Card spacing: 16px vertical
  - Title (bold) + date + description
- Footer: Creator credit (fixed)
- Safe area: Top inset + 100px, Bottom inset + 80px
- Scrollable: Yes

**Components**: Back button, NewsCard

## 6. Component Specifications

**ColorButton**:
- Border radius: 16px
- Padding: 16px vertical, 24px horizontal
- Shadow: offset (0, 2), opacity 0.10, radius 4px (only for primary action buttons)
- Pressed state: Reduce opacity to 0.85

**Back Button**:
- Icon: Feather "arrow-left", 24px
- Color: #1A1A2E
- Touchable area: 44x44px minimum
- Position: 16px from left edge

**ChapterCard**:
- Background: #FFFFFF
- Border: 1px solid #E0E0E0
- Shadow: offset (0, 1), opacity 0.05, radius 2px
- Pressed state: Background changes to #F5F5F5

**FormulaCard**:
- Background: #FFFFFF
- Padding: 20px
- No border, subtle shadow
- Shadow: offset (0, 2), opacity 0.08, radius 4px

## 7. Assets to Generate

**App Icon** (icon.png):
- Geometric abstraction of math symbols (π, Σ, √) in JIGUU brand colors
- WHERE USED: Device home screen

**Splash Icon** (splash-icon.png):
- JIGUU logo with tagline
- WHERE USED: App launch screen

**Logo** (jiguu-logo.png):
- Full JIGUU wordmark, friendly rounded style
- WHERE USED: Every screen header

**Subject Icons**:
- algebra-icon.png - Simple algebraic symbol (x², √)
- trigonometry-icon.png - Triangle with angle notation
- geometry-icon.png - Compass/protractor visual
- news-icon.png - Megaphone or announcement bell
- WHERE USED: Home screen buttons

**Geometry Diagrams** (generate per chapter as needed):
- triangle-basic.png, circle-chord.png, parallelogram.png, etc.
- Clean line art, labeled points (A, B, C), black lines on transparent background
- WHERE USED: Formula screens for Geometry chapters

**Empty State**:
- empty-news.png - Simple illustration of empty announcement board
- WHERE USED: News & Events screen when no items

**Creator Avatar** (sameer-avatar.png):
- Professional educator illustration or photo placeholder
- WHERE USED: About/Credits section (if added later)

---

**Implementation Notes**:
- All buttons must have visual feedback (opacity change on press)
- Creator credit must be non-intrusive but always visible
- Chapter content will be hardcoded (no backend required initially)
- Offline-first: All content bundled with app