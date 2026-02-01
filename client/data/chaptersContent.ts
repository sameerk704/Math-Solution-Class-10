// src/data/chaptersContent.ts
// -----------------------------------------------------------------------------
// CENTRAL OFFLINE CHAPTER CONTENT SOURCE
//
// Purpose:
// - Provides ALL offline chapter metadata.
// - Drives ChapterList, ChapterOverview, MCQs, Exercises.
// - Must stay in sync with formulas.ts chapter IDs.
//
// Every chapter MUST:
// - use same id as formulas.ts
// - define exercises
// - define mcqs (even empty)
//
// -----------------------------------------------------------------------------

export type MCQ = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export type Exercise = {
  number: number;
};

export type ChapterContent = {
  id: string;
  title: string;
  exercises: Exercise[];
  mcqs: MCQ[];
};

export const chaptersContent: ChapterContent[] = [
  {
    id: "real-numbers",
    title: "REAL NUMBERS",
    exercises: [{ number: 1 }, { number: 2 }, { number: 3 }],
    mcqs: [],
  },

  {
    id: "polynomials",
    title: "POLYNOMIALS",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
  },

  {
    id: "pair-linear-equations",
    title: "PAIR OF LINEAR EQUATIONS",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
  },

  {
    id: "quadratic-equations",
    title: "QUADRATIC EQUATIONS",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
  },

  {
    id: "arithmetic-progressions",
    title: "ARITHMETIC PROGRESSIONS",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
  },
];

/* -------------------------------------------------------------------------- */

export function getChapterContent(chapterId: string): ChapterContent | undefined {
  return chaptersContent.find((c) => c.id === chapterId);
}
