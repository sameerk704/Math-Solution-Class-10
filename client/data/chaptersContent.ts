// src/data/chaptersContent.ts
// --------------------------------------------------
// Central offline chapter content store.
//
// Purpose:
// - Defines exercises per chapter (NCERT style).
// - Supports Examples / Theorems / MCQs.
// - Global search ready.
// --------------------------------------------------

export type Exercise = {
  number: string; // "1.1", "2.3" etc
};

export type ChapterContent = {
  id: string;
  name: string;

  exercises: Exercise[];

  examples: string[];
  theorems: string[];
  mcqs: number;
};

/* --------------------------------------------------
   CLASS 10 — COMPLETE MAP (1–14)
-------------------------------------------------- */

export const chaptersContent: ChapterContent[] = [
  {
    id: "real-numbers",
    name: "Real Numbers",
    exercises: [{ number: "1.1" }, { number: "1.2" }, { number: "1.3" }],
    examples: ["Example 1", "Example 2"],
    theorems: ["Theorem 1"],
    mcqs: 10,
  },

  {
    id: "polynomials",
    name: "Polynomials",
    exercises: [{ number: "2.1" }, { number: "2.2" }, { number: "2.3" }],
    examples: ["Example 1", "Example 2"],
    theorems: ["Theorem 1"],
    mcqs: 12,
  },

  {
    id: "pair-linear-equations",
    name: "Pair of Linear Equations",
    exercises: [{ number: "3.1" }, { number: "3.2" }],
    examples: ["Example 1"],
    theorems: ["Theorem 1"],
    mcqs: 8,
  },

  {
    id: "quadratic-equations",
    name: "Quadratic Equations",
    exercises: [{ number: "4.1" }, { number: "4.2" }],
    examples: ["Example 1"],
    theorems: ["Theorem 1"],
    mcqs: 9,
  },

  {
    id: "arithmetic-progressions",
    name: "Arithmetic Progressions",
    exercises: [{ number: "5.1" }, { number: "5.2" }],
    examples: ["Example 1"],
    theorems: ["Theorem 1"],
    mcqs: 10,
  },

  {
    id: "triangles",
    name: "Triangles",
    exercises: [{ number: "6.1" }, { number: "6.2" }],
    examples: [],
    theorems: ["Theorem 1", "Theorem 2"],
    mcqs: 11,
  },

  {
    id: "coordinate-geometry",
    name: "Coordinate Geometry",
    exercises: [{ number: "7.1" }, { number: "7.2" }],
    examples: [],
    theorems: [],
    mcqs: 7,
  },

  {
    id: "intro-trigonometry",
    name: "Introduction to Trigonometry",
    exercises: [{ number: "8.1" }, { number: "8.2" }],
    examples: [],
    theorems: [],
    mcqs: 9,
  },

  {
    id: "applications-trigonometry",
    name: "Applications of Trigonometry",
    exercises: [{ number: "9.1" }],
    examples: [],
    theorems: [],
    mcqs: 6,
  },

  {
    id: "circles",
    name: "Circles",
    exercises: [{ number: "10.1" }],
    examples: [],
    theorems: [],
    mcqs: 8,
  },

  {
    id: "areas-circles",
    name: "Areas Related to Circles",
    exercises: [{ number: "11.1" }],
    examples: [],
    theorems: [],
    mcqs: 7,
  },

  {
    id: "surface-areas-volumes",
    name: "Surface Areas and Volumes",
    exercises: [{ number: "12.1" }],
    examples: [],
    theorems: [],
    mcqs: 9,
  },

  {
    id: "statistics",
    name: "Statistics",
    exercises: [{ number: "13.1" }],
    examples: [],
    theorems: [],
    mcqs: 6,
  },

  {
    id: "probability",
    name: "Probability",
    exercises: [{ number: "14.1" }],
    examples: [],
    theorems: [],
    mcqs: 6,
  },
];

/* --------------------------------------------------
   SAFE HELPERS — USED EVERYWHERE
-------------------------------------------------- */

export function getChapterContent(chapterId: string): ChapterContent | null {
  return chaptersContent.find((c) => c.id === chapterId) ?? null;
}

export function getChapterExercises(chapterId: string): Exercise[] {
  return getChapterContent(chapterId)?.exercises ?? [];
}

export function getChapterExamples(chapterId: string): string[] {
  return getChapterContent(chapterId)?.examples ?? [];
}

export function getChapterTheorems(chapterId: string): string[] {
  return getChapterContent(chapterId)?.theorems ?? [];
}

export function getChapterMcqCount(chapterId: string): number {
  return getChapterContent(chapterId)?.mcqs ?? 0;
}
