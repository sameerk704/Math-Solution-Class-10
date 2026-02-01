/**
 * File: chaptersContent.ts
 *
 * Purpose:
 * Stores chapter overview structure:
 * - Introduction
 * - Key Points
 * - MCQs
 * - Exercises (dynamic per chapter)
 */

export type ChapterSectionType =
  | "intro"
  | "keypoints"
  | "mcqs"
  | "exercise";

export interface ChapterSection {
  id: string;
  title: string;
  type: ChapterSectionType;
  route: string;
}

export interface ChapterContent {
  chapterId: string;
  sections: ChapterSection[];
}

/* -----------------------------------
   MASTER CHAPTER CONTENT MAP
------------------------------------ */

export const chaptersContentMap: Record<
  string,
  ChapterContent
> = {
  "real-numbers": {
    chapterId: "real-numbers",
    sections: [
      {
        id: "intro",
        title: "INTRODUCTION",
        type: "intro",
        route: "ChapterIntro",
      },
      {
        id: "keypoints",
        title: "KEY POINTS",
        type: "keypoints",
        route: "ChapterKeyPoints",
      },
      {
        id: "mcqs",
        title: "MCQs",
        type: "mcqs",
        route: "ChapterMCQs",
      },

      {
        id: "ex1",
        title: "EXERCISE 1",
        type: "exercise",
        route: "Exercise",
      },
      {
        id: "ex2",
        title: "EXERCISE 2",
        type: "exercise",
        route: "Exercise",
      },
    ],
  },

  polynomials: {
    chapterId: "polynomials",
    sections: [
      {
        id: "intro",
        title: "INTRODUCTION",
        type: "intro",
        route: "ChapterIntro",
      },
      {
        id: "keypoints",
        title: "KEY POINTS",
        type: "keypoints",
        route: "ChapterKeyPoints",
      },
      {
        id: "mcqs",
        title: "MCQs",
        type: "mcqs",
        route: "ChapterMCQs",
      },

      {
        id: "ex1",
        title: "EXERCISE 1",
        type: "exercise",
        route: "Exercise",
      },
      {
        id: "ex2",
        title: "EXERCISE 2",
        type: "exercise",
        route: "Exercise",
      },
      {
        id: "ex3",
        title: "EXERCISE 3",
        type: "exercise",
        route: "Exercise",
      },
    ],
  },

  triangles: {
    chapterId: "triangles",
    sections: [
      {
        id: "intro",
        title: "INTRODUCTION",
        type: "intro",
        route: "ChapterIntro",
      },
      {
        id: "keypoints",
        title: "KEY POINTS",
        type: "keypoints",
        route: "ChapterKeyPoints",
      },
      {
        id: "mcqs",
        title: "MCQs",
        type: "mcqs",
        route: "ChapterMCQs",
      },

      {
        id: "ex1",
        title: "EXERCISE 1",
        type: "exercise",
        route: "Exercise",
      },
      {
        id: "ex2",
        title: "EXERCISE 2",
        type: "exercise",
        route: "Exercise",
      },
      {
        id: "ex3",
        title: "EXERCISE 3",
        type: "exercise",
        route: "Exercise",
      },
      {
        id: "ex4",
        title: "EXERCISE 4",
        type: "exercise",
        route: "Exercise",
      },
    ],
  },
};

/* -----------------------------------
   SAFE HELPER
------------------------------------ */

export function getChapterContent(
  chapterId: string
): ChapterContent | null {
  return chaptersContentMap[chapterId] ?? null;
}
