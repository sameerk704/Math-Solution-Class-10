// src/data/chaptersContent.ts
// --------------------------------------------------
// OFFLINE DATA SOURCE for all chapter sections.
// Stores:
//  - Introduction text
//  - Key Points
//  - MCQs
//  - Exercise numbers
//
// Every screen (Intro / KeyPoints / MCQs / Exercises)
// reads from this file.
//
// NO backend dependency.
// Fully scalable for future content injection.
// --------------------------------------------------

export type ChapterSectionType =
  | "introduction"
  | "keypoints"
  | "mcqs"
  | "exercise";

/* --------------------------------------------------
   MCQ STRUCTURE
-------------------------------------------------- */

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
}

/* --------------------------------------------------
   CHAPTER CONTENT STRUCTURE
-------------------------------------------------- */

export interface ChapterContent {
  chapterId: string;

  introduction: string;

  keyPoints: string[];

  mcqs: MCQ[];

  exercises: number[];
}

/* --------------------------------------------------
   DEFAULT FALLBACK (for chapters not yet added)
-------------------------------------------------- */

function buildDefaultChapter(chapterId: string): ChapterContent {
  return {
    chapterId,
    sections: [
      {
        id: "intro",
        title: "Introduction",
        type: "intro",
        items: [
          "Introduction content will be added here for this chapter."
        ]
      },

      {
        id: "keypoints",
        title: "Key Points",
        type: "keypoints",
        items: [
          "Key points will be added later.",
          "Important definitions will appear here."
        ]
      },

      {
        id: "mcqs",
        title: "MCQs",
        type: "mcqs",
        items: []
      },

      {
        id: "exercise-1",
        title: "Exercise 1",
        type: "exercise",
        exerciseNo: 1
      },

      {
        id: "exercise-2",
        title: "Exercise 2",
        type: "exercise",
        exerciseNo: 2
      },

      {
        id: "exercise-3",
        title: "Exercise 3",
        type: "exercise",
        exerciseNo: 3
      }
    ]
  };
}

/* --------------------------------------------------
   CHAPTER MAP (Add real data here later)
-------------------------------------------------- */

const chapterContentMap: Record<string, ChapterContent> = {
  "real-numbers": {
    chapterId: "real-numbers",

    introduction:
      "Real numbers include rational and irrational numbers. Euclid’s Division Lemma is an important concept.",

    keyPoints: [
      "Euclid Division Lemma: a = bq + r",
      "Fundamental Theorem of Arithmetic",
    ],

    mcqs: [
      {
        id: "rn-1",
        question: "What is Euclid’s Division Lemma?",
        options: [
          "a = bq + r",
          "a = b + q + r",
          "a = br + q",
          "a = qb + r",
        ],
        answerIndex: 0,
      },
    ],

    exercises: [1, 2, 3],
  },

  triangles: {
    chapterId: "triangles",

    introduction:
      "Triangles are polygons with three sides. Pythagoras theorem is important.",

    keyPoints: [
      "Pythagoras theorem: a² + b² = c²",
      "Two triangles are similar if...",
    ],

    mcqs: [
      {
        id: "tri-1",
        question: "What does Pythagoras theorem state?",
        options: [
          "a² + b² = c²",
          "a + b = c",
          "a² + b = c",
          "ab = c",
        ],
        answerIndex: 0,
      },
    ],

    exercises: [1, 2],
  },
};

/* --------------------------------------------------
   PUBLIC HELPERS
-------------------------------------------------- */

export function getChapterContent(chapterId: string): ChapterContent {
  return (
    chapterContentMap[chapterId] ??
    buildDefaultChapter(chapterId)
  );
}
