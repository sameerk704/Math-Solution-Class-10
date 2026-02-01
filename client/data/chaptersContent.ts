export type Exercise = {
  number: number;
};

export type Chapter = {
  id: string;
  title: string;
  exercises: Exercise[];
};

export const chaptersContent: Chapter[] = [
  {
    id: "real-numbers",
    title: "Real Numbers",
    exercises: [{ number: 1 }, { number: 2 }],
  },

  {
    id: "polynomials",
    title: "Polynomials",
    exercises: [{ number: 1 }, { number: 2 }, { number: 3 }],
  },

  {
    id: "pair-linear",
    title: "Pair of Linear Equations",
    exercises: [{ number: 1 }, { number: 2 }],
  },

  {
    id: "quadratic",
    title: "Quadratic Equations",
    exercises: [{ number: 1 }, { number: 2 }],
  },

  {
    id: "arithmetic",
    title: "Arithmetic Progressions",
    exercises: [{ number: 1 }, { number: 2 }],
  },
];
