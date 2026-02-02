// src/search/searchIndexBuilder.ts
// --------------------------------------------------
// SEARCH INDEX BUILDER
//
// Purpose:
// Builds a GLOBAL searchable index from all
// offline content in the app.
//
// This powers:
// - Header search bar
// - Voice search
// - Question lookup
// - Example/Theorem lookup
//
// Index Includes:
// - Chapters
// - Exercises
// - Questions
// - Question parts
// - Examples
// - Theorems
// - MCQs
// - Formulas
//
// Runs ONCE when app starts (inside SearchProvider).
// --------------------------------------------------

import { class10Chapters } from "@/data/formulas";
import { formulaData } from "@/data/formulas";
import { chaptersContent } from "@/data/chaptersContent";

/* --------------------------------------------------
   SEARCH ENTITY TYPES
-------------------------------------------------- */

export type SearchEntityType =
  | "chapter"
  | "exercise"
  | "question"
  | "part"
  | "example"
  | "theorem"
  | "mcq"
  | "formula";

/* --------------------------------------------------
   INDEX ITEM STRUCTURE
-------------------------------------------------- */

export interface SearchIndexItem {
  id: string;
  type: SearchEntityType;

  title: string;
  subtitle?: string;

  chapterId: string;
  chapterName: string;

  exerciseNumber?: string;
  questionNumber?: string;
  partLabel?: string;

  keywords: string[];
}

/* --------------------------------------------------
   UTILITY
-------------------------------------------------- */

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

/* --------------------------------------------------
   MAIN BUILDER
-------------------------------------------------- */

export function buildSearchIndex(): SearchIndexItem[] {
  const index: SearchIndexItem[] = [];

  /* -------------------------------
     CHAPTERS
  -------------------------------- */

  class10Chapters.forEach((chapter) => {
    index.push({
      id: chapter-${chapter.id},
      type: "chapter",
      title: chapter.name,
      subtitle: "Chapter",
      chapterId: chapter.id,
      chapterName: chapter.name,
      keywords: [normalize(chapter.name)],
    });
  });

  /* -------------------------------
     EXERCISES / QUESTIONS
  -------------------------------- */

  chaptersContent.forEach((chapter) => {
    chapter.exercises.forEach((exercise) => {
      index.push({
        id: exercise-${chapter.id}-${exercise.number},
        type: "exercise",
        title: Exercise ${exercise.number},
        subtitle: chapter.name,
        chapterId: chapter.id,
        chapterName: chapter.name,
        exerciseNumber: exercise.number,
        keywords: [
          normalize(chapter.name),
          normalize(exercise.number),
          "exercise",
        ],
      });

      // 🔮 Placeholder for later when questions/parts added
      if ((exercise as any).questions) {
        (exercise as any).questions.forEach((q: any, qIndex: number) => {
          const qLabel = ${exercise.number} Q${qIndex + 1};

          index.push({
            id: question-${chapter.id}-${qLabel},
            type: "question",
            title: Question ${qIndex + 1},
            subtitle: Exercise ${exercise.number},
            chapterId: chapter.id,
            chapterName: chapter.name,
            exerciseNumber: exercise.number,
            questionNumber: ${qIndex + 1},
            keywords: [
              normalize(chapter.name),
              normalize(exercise.number),
              q${qIndex + 1},
            ],
          });

          if (q.parts) {
            q.parts.forEach((part: any) => {
              index.push({
                id: part-${chapter.id}-${qLabel}-${part.label},
                type: "part",
                title: Part ${part.label},
                subtitle: qLabel,
                chapterId: chapter.id,
                chapterName: chapter.name,
                exerciseNumber: exercise.number,
                questionNumber: ${qIndex + 1},
                partLabel: part.label,
                keywords: [
                  normalize(chapter.name),
                  normalize(exercise.number),
                  normalize(part.label),
                ],
              });
            });
          }
        });
      }
    });
  });

  /* -------------------------------
     FORMULAS
  -------------------------------- */

  Object.entries(formulaData).forEach(([chapterId, formulas]) => {
    formulas.forEach((f) => {
      index.push({
        id: formula-${f.id},
        type: "formula",
        title: f.title,
        subtitle: "Formula",
        chapterId,
        chapterName:
          class10Chapters.find((c) => c.id === chapterId)?.name ||
          "Unknown Chapter",
        keywords: [
          normalize(f.title),
          normalize(chapterId),
          "formula",
        ],
      });
    });
  });

  /* -------------------------------
     MCQs / EXAMPLES / THEOREMS
     (expandable later)
  -------------------------------- */

  // These will be added when
  // data models appear in chaptersContent.ts

  return index;
}
