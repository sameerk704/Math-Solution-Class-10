// src/data/chapterQuestions.ts
// --------------------------------------------------
// QUESTION + PART STRUCTURE (NCERT STYLE)
//
// Used by:
// QuestionListScreen
// QuestionPartsScreen
// Search Engine later
// --------------------------------------------------

export type QuestionPart = {
  id: string;
  label: string; // (i), (ii)
};

export type Question = {
  id: string;
  exerciseNumber: string;
  number: number;
  parts: QuestionPart[];
};

export const chapterQuestions: Record<string, Question[]> = {
  "real-numbers": [
    {
      id: "rn-1-1",
      exerciseNumber: "1.1",
      number: 1,
      parts: [
        { id: "rn-1-1-i", label: "(i)" },
        { id: "rn-1-1-ii", label: "(ii)" },
      ],
    },

    {
      id: "rn-1-2",
      exerciseNumber: "1.1",
      number: 2,
      parts: [{ id: "rn-1-2-i", label: "(i)" }],
    },
  ],
};

/* --------------------------------------------------
   HELPERS
-------------------------------------------------- */

export function getQuestionsForExercise(
  chapterId: string,
  exerciseNumber: string
): Question[] {
  return (
    chapterQuestions[chapterId]?.filter(
      (q) => q.exerciseNumber === exerciseNumber
    ) ?? []
  );
}
