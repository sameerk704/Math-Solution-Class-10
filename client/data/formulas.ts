// src/data/formulas.ts

export type Subject = "algebra" | "trigonometry" | "geometry";

export interface Chapter {
  id: string;
  number: number;
  name: string;
  subject: Subject;
  classLevel: 10;
}

export interface Formula {
  id: string;
  title: string;
  formula: string;
  chapterId: string;
}

/* -----------------------------
   CLASS 10 CHAPTER LIST
-------------------------------- */

export const class10Chapters: Chapter[] = [
  { id: "real-numbers", number: 1, name: "REAL NUMBERS", subject: "algebra", classLevel: 10 },
  { id: "polynomials", number: 2, name: "POLYNOMIALS", subject: "algebra", classLevel: 10 },
  { id: "pair-linear-equations", number: 3, name: "PAIR OF LINEAR EQUATIONS", subject: "algebra", classLevel: 10 },
  { id: "quadratic-equations", number: 4, name: "QUADRATIC EQUATIONS", subject: "algebra", classLevel: 10 },
  { id: "arithmetic-progressions", number: 5, name: "ARITHMETIC PROGRESSIONS", subject: "algebra", classLevel: 10 },

  { id: "triangles", number: 6, name: "TRIANGLES", subject: "geometry", classLevel: 10 },
  { id: "coordinate-geometry", number: 7, name: "COORDINATE GEOMETRY", subject: "geometry", classLevel: 10 },

  { id: "intro-trigonometry", number: 8, name: "INTRODUCTION TO TRIGONOMETRY", subject: "trigonometry", classLevel: 10 },
  { id: "applications-trigonometry", number: 9, name: "SOME APPLICATIONS OF TRIGONOMETRY", subject: "trigonometry", classLevel: 10 },

  { id: "circles", number: 10, name: "CIRCLES", subject: "geometry", classLevel: 10 },
  { id: "areas-circles", number: 11, name: "AREAS RELATED TO CIRCLES", subject: "geometry", classLevel: 10 },
  { id: "surface-areas-volumes", number: 12, name: "SURFACE AREAS AND VOLUMES", subject: "geometry", classLevel: 10 },

  { id: "statistics", number: 13, name: "STATISTICS", subject: "algebra", classLevel: 10 },
  { id: "probability", number: 14, name: "PROBABILITY", subject: "algebra", classLevel: 10 },
];

/* -----------------------------
   CHAPTER HELPERS
-------------------------------- */

export function getClass10AllChapters(): Chapter[] {
  return class10Chapters;
}

/* -----------------------------
   FORMULAS (SAMPLE DATA)
-------------------------------- */

export const formulaData: Record<string, Formula[]> = {
  "real-numbers": [
    {
      id: "rn-1",
      title: "Euclid Division Lemma",
      formula: "a = bq + r",
      chapterId: "real-numbers",
    },
  ],

  triangles: [
    {
      id: "tri-1",
      title: "Pythagoras Theorem",
      formula: "a² + b² = c²",
      chapterId: "triangles",
    },
  ],

  probability: [
    {
      id: "prob-1",
      title: "Probability Formula",
      formula: "P(E) = favourable / total",
      chapterId: "probability",
    },
  ],
};

/* -----------------------------
   SAFE GLOBAL HELPERS
-------------------------------- */

export function getAllFormulasFlat(): Formula[] {
  const list: Formula[] = [];

  Object.values(formulaData || {}).forEach((arr) => {
    if (Array.isArray(arr)) {
      arr.forEach((f) => list.push(f));
    }
  });

  return list;
}

export function getFormulasForChapter(chapterId: string): Formula[] {
  return formulaData[chapterId] ?? [];
}
