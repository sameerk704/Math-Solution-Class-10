// src/data/chapterSolutions.ts
// --------------------------------------------------
// SOLUTION DATA STORE
//
// Purpose:
// - Holds question part text + solutions.
// - Indexed by chapter + exercise + question + part.
// - Used by SolutionScreen.
//
// Future:
// - Diagrams
// - LaTeX rendering
// - Images
// --------------------------------------------------

export type SolutionStep = {
  id: string;
  text: string;
};

export type QuestionPartSolution = {
  partId: string;
  questionText: string;
  steps: SolutionStep[];
  finalAnswer: string;
};

export const chapterSolutions: Record<string, QuestionPartSolution[]> =
{
  "real-numbers": [
    {
      partId: "rn-1-1-i",
      questionText:
        "Find the HCF of 306 and 657 using Euclid’s division algorithm.",
      steps: [
        { id: "s1", text: "Apply Euclid’s division algorithm." },
        { id: "s2", text: "657 = 306 × 2 + 45" },
        { id: "s3", text: "306 = 45 × 6 + 36" },
        { id: "s4", text: "45 = 36 × 1 + 9" },
        { id: "s5", text: "36 = 9 × 4 + 0" },
      ],
      finalAnswer: "HCF = 9",
    },
  ],
};

/* --------------------------------------------------
   HELPER
-------------------------------------------------- */

export function getSolutionForPart(
  chapterId: string,
  partId: string
): QuestionPartSolution | undefined {
  return chapterSolutions[chapterId]?.find(
    (s) => s.partId === partId
  );
}
