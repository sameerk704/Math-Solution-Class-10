// src/search/searchIndexBuilder.ts
// --------------------------------------------------
// SEARCH INDEX BUILDER
//
// Purpose:
// Builds a flat, optimized in-memory index of EVERYTHING
// that can be searched globally:
//
// • Chapters
// • Exercises
// • Questions
// • Question Parts
// • Examples
// • Theorems
// • MCQs
// • Formulas
//
// Used by:
// - SearchProvider
// - Query Engine
//
// This runs ONCE at app start.
// --------------------------------------------------

import { class10Chapters } from "@/data/formulas";
import { chaptersContent } from "@/data/chaptersContent";

/* --------------------------------------------------
   TYPES
-------------------------------------------------- */

export type SearchEntityType =
  | "chapter"
  | "exercise"
  | "question"
  | "question-part"
  | "example"
  | "theorem"
  | "mcq"
  | "formula";

export interface SearchIndexItem {
  id: string;
  label: string;
  type: SearchEntityType;
  keywords: string[];
  chapterId: string;

  // Navigation helpers
  exerciseNumber?: string;
  questionId?: string;
}

/* --------------------------------------------------
   NORMALIZER
-------------------------------------------------- */

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s.]/g, "")
    .trim();
}

/* --------------------------------------------------
   INDEX BUILDER
-------------------------------------------------- */

export async function buildSearchIndex(): Promise<SearchIndexItem[]> {
  const index: SearchIndexItem[] = [];

  /* ---------------- CHAPTERS ---------------- */

  class10Chapters.forEach((chapter) => {
    index.push({
      id: chapter-${chapter.id},
      label: chapter.name,
      type: "chapter",
      keywords: normalize(chapter.name).split(" "),
      chapterId: chapter.id,
    });
  });

  /* ---------------- EXERCISES ---------------- */

  chaptersContent.forEach((chapter) => {
    chapter.exercises.forEach((exercise) => {
      index.push({
        id: exercise-${chapter.id}-${exercise.number},
        label: Exercise ${exercise.number},
        type: "exercise",
        keywords: normalize(
          exercise ${exercise.number} ${chapter.name}
        ).split(" "),
        chapterId: chapter.id,
        exerciseNumber: exercise.number,
      });
    });
  });

  /* --------------------------------------------------
     (QUESTIONS / PARTS / EXAMPLES / THEOREMS / MCQs)
     → Will auto index once added into chaptersContent
  -------------------------------------------------- */

  return index;
}

