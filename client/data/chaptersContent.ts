// FILE: src/data/chaptersContent.ts
// PURPOSE:
// Central scalable content registry for all chapters.
// Controls what appears on ChapterOverviewScreen:
// - Introduction
// - Key Points
// - MCQs
// - Dynamic Exercises list per chapter

export type ChapterSectionType =
  | "introduction"
  | "key-points"
  | "mcqs"
  | "exercise";

export interface ChapterSection {
  id: string;
  title: string;
  type: ChapterSectionType;
  exerciseNumber?: number;
}

export interface ChapterContent {
  chapterId: string;
  sections: ChapterSection[];
}

/* ---------------------------------------------------
   MASTER CONTENT MAP (SCALABLE)
---------------------------------------------------- */

const chaptersContent: Record<string, ChapterContent> = {
  "real-numbers": {
    chapterId: "real-numbers",
    sections: [
      { id: "intro", title: "INTRODUCTION", type: "introduction" },
      { id: "keypoints", title: "KEY POINTS", type: "key-points" },
      { id: "mcqs", title: "MCQs", type: "mcqs" },

      { id: "ex1", title: "EXERCISE 1", type: "exercise", exerciseNumber: 1 },
      { id: "ex2", title: "EXERCISE 2", type: "exercise", exerciseNumber: 2 },
    ],
  },

  polynomials: {
    chapterId: "polynomials",
    sections: [
      { id: "intro", title: "INTRODUCTION", type: "introduction" },
      { id: "keypoints", title: "KEY POINTS", type: "key-points" },
      { id: "mcqs", title: "MCQs", type: "mcqs" },

      { id: "ex1", title: "EXERCISE 1", type: "exercise", exerciseNumber: 1 },
      { id: "ex2", title: "EXERCISE 2", type: "exercise", exerciseNumber: 2 },
      { id: "ex3", title: "EXERCISE 3", type: "exercise", exerciseNumber: 3 },
    ],
  },

  "pair-linear-equations": {
    chapterId: "pair-linear-equations",
    sections: [
      { id: "intro", title: "INTRODUCTION", type: "introduction" },
      { id: "keypoints", title: "KEY POINTS", type: "key-points" },
      { id: "mcqs", title: "MCQs", type: "mcqs" },

      { id: "ex1", title: "EXERCISE 1", type: "exercise", exerciseNumber: 1 },
      { id: "ex2", title: "EXERCISE 2", type: "exercise", exerciseNumber: 2 },
      { id: "ex3", title: "EXERCISE 3", type: "exercise", exerciseNumber: 3 },
      { id: "ex4", title: "EXERCISE 4", type: "exercise", exerciseNumber: 4 },
    ],
  },
};

/* ---------------------------------------------------
   SAFE ACCESS HELPERS
---------------------------------------------------- */

export function getChapterContent(
  chapterId: string
): ChapterContent | null {
  return chaptersContent[chapterId] ?? null;
}
