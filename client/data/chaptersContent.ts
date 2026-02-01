// src/data/chaptersContent.ts
// --------------------------------------------------
// CENTRAL CHAPTER CONTENT STORE
//
// Purpose:
// Holds all academic content for each chapter:
// - Introduction
// - Key Points
// - MCQs
// - Exercises
//
// IMPORTANT RULES:
// 1) Every chapter MUST contain these arrays:
//    - introduction
//    - keyPoints
//    - mcqs
//    - exercises
//
// 2) No field should ever be undefined.
// 3) Screens can safely map/length on these.
//
// This design prevents runtime crashes.
//
// --------------------------------------------------

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
}

export interface Exercise {
  number: number;
  title: string;
}

export interface ChapterContent {
  chapterId: string;
  introduction: string[];
  keyPoints: string[];
  mcqs: MCQ[];
  exercises: Exercise[];
}

// --------------------------------------------------
// CHAPTER DATA MAP
// --------------------------------------------------

const chapterContentMap: Record<string, ChapterContent> = {
  "real-numbers": {
    chapterId: "real-numbers",

    introduction: ["Introduction content will be added later."],

    keyPoints: ["Key points will be added later."],

    mcqs: [
      {
        id: "rn-1",
        question: "Which of the following is an irrational number?",
        options: ["2", "4", "√2", "6"],
        answerIndex: 2,
      },
    ],

    exercises: [
      { number: 1, title: "Euclid Division Lemma" },
      { number: 2, title: "HCF Problems" },
      { number: 3, title: "Decimal Expansions" },
    ],
  },

  polynomials: {
    chapterId: "polynomials",

    introduction: ["Introduction content will be added later."],

    keyPoints: ["Important definitions will appear here."],

    mcqs: [],

    exercises: [
      { number: 1, title: "Basic Polynomial Questions" },
      { number: 2, title: "Graphs of Polynomials" },
      { number: 3, title: "Zeros of Polynomial" },
    ],
  },
};

// --------------------------------------------------
// SAFE PUBLIC HELPER
// --------------------------------------------------

export function getChapterContent(chapterId: string): ChapterContent {
  const chapter = chapterContentMap[chapterId];

  if (!chapter) {
    return {
      chapterId,
      introduction: [],
      keyPoints: [],
      mcqs: [],
      exercises: [],
    };
  }

  return {
    chapterId: chapter.chapterId,
    introduction: chapter.introduction ?? [],
    keyPoints: chapter.keyPoints ?? [],
    mcqs: chapter.mcqs ?? [],
    exercises: chapter.exercises ?? [],
  };
}
