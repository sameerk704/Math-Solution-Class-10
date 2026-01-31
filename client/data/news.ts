export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Board Exam Tips 2026",
    date: "January 15, 2026",
    description: "Important tips for Class 10 board exams: Start your revision early, practice previous year papers, and focus on NCERT exercises. Time management during exams is crucial.",
  },
  {
    id: "2",
    title: "Math Tricks: Vedic Mathematics",
    date: "January 12, 2026",
    description: "Learn amazing Vedic math tricks for faster calculations! Multiply large numbers in seconds, find squares instantly, and solve complex problems with simple techniques.",
  },
  {
    id: "3",
    title: "JIGUU App Update",
    date: "January 10, 2026",
    description: "We've added new formulas for Class 9 and Class 10 chapters. Now featuring subject-wise chapters for Algebra, Trigonometry, and Geometry!",
  },
  {
    id: "4",
    title: "Quick Tip: Trigonometry Made Easy",
    date: "January 8, 2026",
    description: "Master trigonometry easily! For sin values: Write 0,1,2,3,4 then take square root and divide by 2. For cos: Reverse the order! This gives all standard angle values.",
  },
  {
    id: "5",
    title: "Geometry Problem Solving",
    date: "January 5, 2026",
    description: "Always draw a neat diagram first! Mark all given information. Look for similar triangles, parallel lines, and cyclic quadrilaterals - these are key to solving most geometry problems.",
  },
  {
    id: "6",
    title: "Algebra Practice Tips",
    date: "January 3, 2026",
    description: "Practice polynomials daily! Start with simple identities like (a+b)², then move to factorization. Remember: Factor theorem says if P(a)=0, then (x-a) is a factor.",
  },
  {
    id: "7",
    title: "Quick Revision Strategy",
    date: "December 28, 2025",
    description: "For last-minute revision, focus on formulas, identities, and solved examples. Use JIGUU app for quick formula reference during exam preparation.",
  },
];
