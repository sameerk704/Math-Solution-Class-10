// src/data/chaptersContent.ts
// --------------------------------------------------
// Provides overview sections for each chapter.
// Currently returns same structure for ALL chapters.
// Can be extended later with real content.
// --------------------------------------------------

export type ChapterSectionType =
  | "introduction"
  | "keypoints"
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

/* --------------------------------------------------
   DEFAULT TEMPLATE FOR ALL CHAPTERS
-------------------------------------------------- */

function buildDefaultSections(): ChapterSection[] {
  return [
    {
      id: "intro",
      title: "INTRODUCTION",
      type: "introduction",
    },
    {
      id: "keypoints",
      title: "KEY POINTS",
      type: "keypoints",
    },
    {
      id: "mcqs",
      title: "MCQs",
      type: "mcqs",
    },
    {
      id: "ex-1",
      title: "EXERCISE 1",
      type: "exercise",
      exerciseNumber: 1,
    },
    {
      id: "ex-2",
      title: "EXERCISE 2",
      type: "exercise",
      exerciseNumber: 2,
    },
    {
      id: "ex-3",
      title: "EXERCISE 3",
      type: "exercise",
      exerciseNumber: 3,
    },
  ];
}

/* --------------------------------------------------
   PUBLIC HELPER
-------------------------------------------------- */

export function getChapterContent(chapterId: string): ChapterContent {
  return {
    chapterId,
    sections: buildDefaultSections(),
  };
};
