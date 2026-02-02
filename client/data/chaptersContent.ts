// src/data/chaptersContent.ts
// --------------------------------------------------
// Central offline chapter content store.
//
// Purpose:
// - Defines how many exercises exist per chapter.
// - NCERT-style numbering (1.1, 1.2 ...).
// - Used by Exercise Hub & Question lists later.
//
// This is expandable for:
// - Questions
// - Parts
// - Examples
// - Theorems
// --------------------------------------------------

export type Exercise = {
  number: string; // e.g. "1.1"
};

export type ChapterContent = {
  id: string;
  name: string;
  exercises: Exercise[];
};

/* --------------------------------------------------
   CLASS 10 — CHAPTER EXERCISE MAP
-------------------------------------------------- */

export const chaptersContent: ChapterContent[] = [
  {
    id: "real-numbers",
    name: "Real Numbers",
    exercises: [
      { number: "1.1" },
      { number: "1.2" },
      { number: "1.3" },
    ],
  },

  {
    id: "polynomials",
    name: "Polynomials",
    exercises: [
      { number: "2.1" },
      { number: "2.2" },
      { number: "2.3" },
    ],
  },

  {
    id: "pair-linear-equations",
    name: "Pair of Linear Equations",
    exercises: [
      { number: "3.1" },
      { number: "3.2" },
    ],
  },

  {
    id: "quadratic-equations",
    name: "Quadratic Equations",
    exercises: [
      { number: "4.1" },
      { number: "4.2" },
    ],
  },

  {
    id: "arithmetic-progressions",
    name: "Arithmetic Progressions",
    exercises: [
      { number: "5.1" },
      { number: "5.2" },
    ],
  },
];

/* --------------------------------------------------
   HELPERS
-------------------------------------------------- */

export function getChapterExercises(chapterId: string): Exercise[] {
  const chapter = chaptersContent.find((c) => c.id === chapterId);
  return chapter?.exercises ?? [];
}
