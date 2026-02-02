// src/data/chaptersContent.ts
// --------------------------------------------------
// CENTRAL OFFLINE CONTENT SOURCE FOR ALL CHAPTERS
//
// Controls:
// - Intro text
// - Key points
// - MCQs
// - Exercises
// - Questions
// - Parts
//
// Every chapter ALWAYS returns:
// Intro / KeyPoints / MCQs / Exercises[]
// --------------------------------------------------

export type QuestionPart = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  text: string;
  parts: QuestionPart[];
};

export type Exercise = {
  number: number;
  questions: Question[];
};

export type ChapterContent = {
  chapterId: string;
  intro: string;
  keyPoints: string[];
  mcqs: string[];
  exercises: Exercise[];
};

/* -------------------------------------------------- */

function buildDefaultExercises(): Exercise[] {
  return [
    {
      number: 1,
      questions: [
        {
          id: "q1",
          text: "Solve the given problem.",
          parts: [
            { id: "a", text: "Part (a)" },
            { id: "b", text: "Part (b)" },
          ],
        },
        {
          id: "q2",
          text: "Find the required value.",
          parts: [],
        },
      ],
    },
    {
      number: 2,
      questions: [
        {
          id: "q1",
          text: "Prove the statement.",
          parts: [],
        },
      ],
    },
    {
      number: 3,
      questions: [
        {
          id: "q1",
          text: "Calculate area.",
          parts: [],
        },
      ],
    },
  ];
}

/* -------------------------------------------------- */

export function getChapterContent(chapterId: string): ChapterContent {
  return {
    chapterId,
    intro: "Introduction content will be added later.",
    keyPoints: ["Key point 1", "Key point 2"],
    mcqs: [],
    exercises: buildDefaultExercises(),
  };
}
