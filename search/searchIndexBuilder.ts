// src/search/searchIndexBuilder.ts
// --------------------------------------------------
// SEARCH INDEX BUILDER
//
// Purpose:
// Builds a flat searchable index from all offline
// chapter content.
//
// Indexed Items:
// - Chapters
// - Exercises
// - Questions
// - Question Parts
// - Examples
// - Theorems
// - MCQs
//
// Output:
// One global array of SearchIndexItem objects.
//
// This runs once at app startup and is cached.
//
// --------------------------------------------------

import { chaptersContent } from "@/data/chaptersContent";

/* --------------------------------------------------
   SEARCH TYPES
-------------------------------------------------- */

export type SearchItemType =
  | "chapter"
  | "exercise"
  | "question"
  | "question-part"
  | "example"
  | "theorem"
  | "mcq";

/* --------------------------------------------------
   SEARCH INDEX SHAPE
-------------------------------------------------- */

export interface SearchIndexItem {
  id: string;

  chapterId: string;
  chapterName: string;

  type: SearchItemType;

  label: string; // what user sees
  searchText: string; // lowercase searchable blob

  navigation: {
    screen: string;
    params: any;
  };
}

/* --------------------------------------------------
   MAIN BUILDER
-------------------------------------------------- */

export function buildSearchIndex(): SearchIndexItem[] {
  const index: SearchIndexItem[] = [];

  for (const chapter of chaptersContent) {
    // --------------------------------------------
    // CHAPTER ENTRY
    // --------------------------------------------
    index.push({
      id: chapter.id,
      chapterId: chapter.id,
      chapterName: chapter.name,
      type: "chapter",
      label: chapter.name,
      searchText: chapter.name.toLowerCase(),
      navigation: {
        screen: "ChapterOverview",
        params: {
          chapterId: chapter.id,
          chapterName: chapter.name,
        },
      },
    });

    // --------------------------------------------
    // EXERCISES
    // --------------------------------------------
    for (const exercise of chapter.exercises) {
      index.push({
        id: ${chapter.id}-${exercise.number},
        chapterId: chapter.id,
        chapterName: chapter.name,
        type: "exercise",
        label: Exercise ${exercise.number},
        searchText: exercise ${exercise.number} ${chapter.name}.toLowerCase(),
        navigation: {
          screen: "QuestionList",
          params: {
            chapterId: chapter.id,
            chapterName: chapter.name,
            exerciseNumber: exercise.number,
          },
        },
      });

      // (questions/examples/theorems will be added here later)
    }
  }

  return index;
}
