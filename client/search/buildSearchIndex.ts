
// src/search/buildSearchIndex.ts
// --------------------------------------------------
// SEARCH INDEX BUILDER
//
// Purpose:
// Converts offline chapter content into
// a flat global searchable dataset.
//
// This runs once at app startup.
//
// Registers:
// - Chapters → ExerciseHub
// - Exercises → QuestionList
//
// (Later we extend for:
//  Questions, Parts, Examples, Theorems)
//
// --------------------------------------------------

import { chaptersContent } from "@/data/chaptersContent";

import { addSearchItem } from "./searchIndex";

/* --------------------------------------------------
   BUILD INDEX
-------------------------------------------------- */

export function buildSearchIndex() {
  // Clear console for debugging clarity
  console.log("🔍 Building global search index...");

  chaptersContent.forEach((chapter) => {
    // ---------------------------
    // CHAPTER ENTRY
    // ---------------------------

    addSearchItem({
      id: chapter-${chapter.id},
      label: chapter.name,
      keywords: [
        chapter.name,
        chapter.id.replace("-", " "),
      ],
      target: "ExerciseHub",
      params: {
        chapterId: chapter.id,
        chapterName: chapter.name,
      },
    });

    // ---------------------------
    // EXERCISES
    // ---------------------------

    chapter.exercises.forEach((exercise) => {
      addSearchItem({
        id: exercise-${chapter.id}-${exercise.number},
        label: Exercise ${exercise.number},
        keywords: [
          exercise ${exercise.number},
          exercise.number,
          chapter.name,
        ],
        target: "QuestionList",
        params: {
          chapterId: chapter.id,
          chapterName: chapter.name,
          exerciseNumber: exercise.number,
        },
      });
    });
  });

  console.log("✅ Search index built successfully");
}
