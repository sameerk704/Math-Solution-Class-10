// src/data/chaptersContent.ts
// =======================================================
// OFFLINE CHAPTER CONTENT DATABASE
//
// Used by:
// - ChapterOverviewScreen
// - IntroScreen
// - KeyPointsScreen
// - MCQScreen
//
// All Class 10 chapters 1–14 are included here.
// Safe fallback guaranteed.
// =======================================================

export type Exercise = {
  number: number;
};

export type MCQ = {
  id: string;
  question: string;
  options: string[];
};

export type ChapterContent = {
  id: string;
  title: string;
  introductionText: string;
  exercises: Exercise[];
  mcqs: MCQ[];
  sections: {
    type: "keypoints";
  }[];
};

// -------------------------------------------------------

export const chaptersContent: ChapterContent[] = [
  // =====================================================
  // 1–5
  // =====================================================

  {
    id: "real-numbers",
    title: "Real Numbers",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }, { number: 3 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "polynomials",
    title: "Polynomials",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }, { number: 3 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "pair-linear",
    title: "Pair of Linear Equations",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "quadratic",
    title: "Quadratic Equations",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "arithmetic",
    title: "Arithmetic Progressions",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  // =====================================================
  // 6–14  ✅ NEWLY ADDED
  // =====================================================

  {
    id: "triangles",
    title: "Triangles",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "coordinate-geometry",
    title: "Coordinate Geometry",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "intro-trigonometry",
    title: "Introduction to Trigonometry",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "applications-trigonometry",
    title: "Applications of Trigonometry",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "circles",
    title: "Circles",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "areas-circles",
    title: "Areas Related to Circles",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "surface-areas-volumes",
    title: "Surface Areas and Volumes",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "statistics",
    title: "Statistics",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },

  {
    id: "probability",
    title: "Probability",
    introductionText: "Introduction content will be added later.",
    exercises: [{ number: 1 }, { number: 2 }],
    mcqs: [],
    sections: [{ type: "keypoints" }],
  },
];

// -------------------------------------------------------

export function getChapterContent(chapterId: string): ChapterContent {
  const found = chaptersContent.find((c) => c.id === chapterId);

  return (
    found ?? {
      id: chapterId,
      title: "Unknown Chapter",
      introductionText: "Content will be added later.",
      exercises: [],
      mcqs: [],
      sections: [],
    }
  );
}
