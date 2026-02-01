// src/data/chaptersContent.ts
// ------------------------------------------------------------------
// Central OFFLINE content store for ALL chapter sections.
// This file provides:
//  • Introduction text
//  • Key Points
//  • MCQs
//  • Exercises
// Content is mapped by chapterId and section type.
// No backend is used — everything is local & scalable.
// ------------------------------------------------------------------

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
  introductionText: string;
}

/* ------------------------------------------------------------------
   DEFAULT SECTIONS SHOWN ON OVERVIEW SCREEN
------------------------------------------------------------------ */

function buildDefaultSections(): ChapterSection[] {
  return [
    { id: "intro", title: "INTRODUCTION", type: "introduction" },
    { id: "keypoints", title: "KEY POINTS", type: "keypoints" },
    { id: "mcqs", title: "MCQs", type: "mcqs" },
    { id: "ex-1", title: "EXERCISE 1", type: "exercise", exerciseNumber: 1 },
    { id: "ex-2", title: "EXERCISE 2", type: "exercise", exerciseNumber: 2 },
    { id: "ex-3", title: "EXERCISE 3", type: "exercise", exerciseNumber: 3 },
  ];
}

/* ------------------------------------------------------------------
   INTRO CONTENT MAP (REAL OFFLINE TEXT)
------------------------------------------------------------------ */

const introContentByChapter: Record<string, string> = {
  "real-numbers":
    "Real Numbers include all rational and irrational numbers. In this chapter we study Euclid’s Division Lemma, Fundamental Theorem of Arithmetic and properties of numbers.",

  polynomials:
    "This chapter introduces polynomials, their degrees, zeroes and the relation between zeroes and coefficients.",

  triangles:
    "Triangles are three-sided polygons. In this chapter we explore similarity of triangles, Pythagoras theorem and their applications.",

  probability:
    "Probability deals with the chance of occurrence of events. This chapter explains experimental probability and basic concepts.",

  DEFAULT:
    "Introduction content for this chapter will be added soon.",
};

/* ------------------------------------------------------------------
   PUBLIC HELPERS
------------------------------------------------------------------ */

export function getChapterContent(chapterId: string): ChapterContent {
  return {
    chapterId,
    sections: buildDefaultSections(),
    introductionText:
      introContentByChapter[chapterId] ??
      introContentByChapter.DEFAULT,
  };
}
