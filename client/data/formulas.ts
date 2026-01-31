export type Subject = "algebra" | "trigonometry" | "geometry";

export interface Chapter {
  id: string;
  number: number;
  name: string;
  classLevel: 9 | 10;
  subject: Subject;
}

export interface Formula {
  id: string;
  title: string;
  formula: string;
  explanation?: string;
}

export interface ChapterIntro {
  intro: string;
  keyPoints: string[];
}

// Chapter introductions with key points
export const chapterIntros: Record<string, ChapterIntro> = {
  // ============ ALGEBRA CLASS 9 INTROS ============
  "alg9-1": {
    intro: "Number Systems is the foundation of mathematics! Here you'll learn about different types of numbers - from simple counting numbers to complex irrational numbers. Understanding this chapter helps you work with all kinds of numbers easily.",
    keyPoints: [
      "Natural numbers (N) are counting numbers: 1, 2, 3...",
      "Whole numbers (W) include zero: 0, 1, 2, 3...",
      "Integers (Z) include both positive and negative whole numbers",
      "Rational numbers can be written as p/q where q≠0",
      "Irrational numbers: √2, √3, π cannot be written as fractions",
      "Real numbers R = Rational + Irrational numbers",
      "Every point on number line represents a real number",
      "Terminating decimals are always rational",
      "Non-terminating repeating decimals are rational"
    ]
  },
  "alg9-2": {
    intro: "Polynomials are algebraic expressions with variables and numbers combined using +, -, ×. This chapter teaches you powerful identities that make calculations super quick! Master these identities and you'll solve problems in seconds.",
    keyPoints: [
      "Degree tells us the highest power in a polynomial",
      "(a+b)² and (a-b)² are most used identities",
      "Factorization means breaking expression into simpler parts",
      "Factor Theorem: If P(a)=0, then (x-a) is a factor",
      "These identities save time in exams!"
    ]
  },
  "alg9-3": {
    intro: "Linear Equations in Two Variables means equations with two unknowns (x and y) where highest power is 1. When you draw these equations, you get straight lines! Every point on the line is a solution.",
    keyPoints: [
      "Standard form: ax + by + c = 0",
      "Graph is always a straight line",
      "One equation has infinite solutions",
      "Two lines can be parallel, intersecting, or same",
      "Solutions are points where lines meet"
    ]
  },
  "alg9-4": {
    intro: "Statistics helps us organize and understand data! Instead of looking at 100 numbers, we can find one number (like average) that tells us about all of them. Very useful in real life - from cricket scores to exam marks!",
    keyPoints: [
      "Mean (average) = Sum of all values ÷ Number of values",
      "Median = Middle value when arranged in order",
      "Mode = Most frequently occurring value",
      "Mean is affected by extreme values",
      "Median is best when data has outliers"
    ]
  },
  "alg9-5": {
    intro: "Probability tells us how likely something is to happen! From tossing coins to weather predictions, probability is everywhere. It's expressed as a number between 0 (impossible) and 1 (certain).",
    keyPoints: [
      "Probability = Favorable outcomes ÷ Total outcomes",
      "P(Event) is between 0 and 1",
      "P(not happening) = 1 - P(happening)",
      "If P = 0, event is impossible",
      "If P = 1, event is certain to happen"
    ]
  },

  // ============ ALGEBRA CLASS 10 INTROS ============
  "alg10-1": {
    intro: "Real Numbers goes deeper into number theory! You'll learn about HCF, LCM using prime factorization, and understand why some numbers can never be written as fractions. This knowledge is fundamental for higher mathematics.",
    keyPoints: [
      "Every number has a unique prime factorization",
      "HCF × LCM = Product of two numbers",
      "Rational numbers have terminating or repeating decimals",
      "Irrational numbers have non-terminating, non-repeating decimals",
      "√p is irrational if p is prime"
    ]
  },
  "alg10-2": {
    intro: "Polynomials in Class 10 focuses on zeros (roots) and their relationship with coefficients. You'll learn how the sum and product of zeros are connected to the polynomial's coefficients - very important for board exams!",
    keyPoints: [
      "Zero of polynomial = Value where P(x) = 0",
      "For quadratic ax² + bx + c: Sum of zeros = -b/a",
      "Product of zeros = c/a",
      "Division algorithm helps find quotient and remainder",
      "A polynomial of degree n has at most n zeros"
    ]
  },
  "alg10-3": {
    intro: "Pair of Linear Equations means solving two equations together! There are different methods - graphical, substitution, elimination, and cross-multiplication. Pick the method that suits the problem best.",
    keyPoints: [
      "Two lines can intersect (unique solution), be parallel (no solution), or coincide (infinite solutions)",
      "Substitution: Express one variable in terms of other",
      "Elimination: Make coefficients equal and add/subtract",
      "Cross-multiplication gives direct formula",
      "Graphically, solution is the intersection point"
    ]
  },
  "alg10-4": {
    intro: "Quadratic Equations have the highest power as 2 (like ax² + bx + c = 0). These are solved using factorization or the famous Quadratic Formula. The discriminant tells us about nature of roots!",
    keyPoints: [
      "Standard form: ax² + bx + c = 0 where a ≠ 0",
      "Quadratic formula: x = (-b ± √(b²-4ac)) / 2a",
      "Discriminant D = b² - 4ac determines root type",
      "D > 0: Two different real roots",
      "D = 0: Two equal real roots (x = -b/2a)",
      "D < 0: No real roots (imaginary roots)",
      "Perfect square D gives rational roots",
      "Sum of roots = -b/a, Product = c/a",
      "Factorization works when roots are integers"
    ]
  },
  "alg10-5": {
    intro: "Arithmetic Progressions (AP) is a sequence where difference between consecutive terms is constant. Like 2, 5, 8, 11... (difference is 3). AP formulas help find any term or sum of terms quickly!",
    keyPoints: [
      "Common difference d = a₂ - a₁",
      "nth term: aₙ = a + (n-1)d",
      "Sum of n terms: Sₙ = n/2 × (first + last)",
      "Also: Sₙ = n/2 × [2a + (n-1)d]",
      "If Sₙ is given, aₙ = Sₙ - Sₙ₋₁"
    ]
  },
  "alg10-6": {
    intro: "Statistics in Class 10 deals with grouped data! When data is in groups (like marks 0-10, 10-20...), we use special formulas for mean, median, and mode. These are super important for board exams.",
    keyPoints: [
      "Mean = Σfᵢxᵢ / Σfᵢ for grouped data",
      "Median class contains the middle observation",
      "Mode class has highest frequency",
      "Cumulative frequency helps find median",
      "Ogive graphs show cumulative frequency"
    ]
  },
  "alg10-7": {
    intro: "Probability in Class 10 builds on basic concepts with more real-world applications. You'll solve problems on cards, dice, coins, and understand complementary events better.",
    keyPoints: [
      "P(A) + P(not A) = 1",
      "For a deck of cards: Total = 52",
      "For dice: Total outcomes = 6",
      "For two dice: Total outcomes = 36",
      "Sum of all probabilities = 1"
    ]
  },

  // ============ TRIGONOMETRY CLASS 9 INTROS ============
  "trig9-1": {
    intro: "Trigonometry means 'measuring triangles'! It connects angles with sides of a right triangle. You'll learn about sine, cosine, and tangent - these ratios are used everywhere from building construction to navigation.",
    keyPoints: [
      "Works only with right-angled triangles",
      "Three main ratios: sin, cos, tan",
      "sin θ = Opposite / Hypotenuse",
      "cos θ = Adjacent / Hypotenuse",
      "tan θ = Opposite / Adjacent",
      "Remember: SOH-CAH-TOA!"
    ]
  },
  "trig9-2": {
    intro: "Trigonometric Ratios teaches you the exact values for special angles like 0°, 30°, 45°, 60°, 90°. Memorizing these values is essential - they appear in almost every trigonometry problem!",
    keyPoints: [
      "sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2",
      "sin 60° = √3/2, sin 90° = 1",
      "cos values are reverse of sin values",
      "tan θ = sin θ / cos θ",
      "sin²θ + cos²θ = 1 always!"
    ]
  },

  // ============ TRIGONOMETRY CLASS 10 INTROS ============
  "trig10-1": {
    intro: "Trigonometric Ratios in Class 10 goes deeper into relationships between different ratios. You'll learn about cosec, sec, and cot - the reciprocal ratios. These are used in advanced problems.",
    keyPoints: [
      "cosec θ = 1/sin θ (when sin θ ≠ 0)",
      "sec θ = 1/cos θ (when cos θ ≠ 0)",
      "cot θ = 1/tan θ = cos θ/sin θ",
      "tan θ = sin θ/cos θ",
      "All six ratios are interconnected"
    ]
  },
  "trig10-2": {
    intro: "Trigonometric Identities are equations true for all values of θ. These identities help simplify complex expressions and prove equalities. Master them for scoring full marks in proofs!",
    keyPoints: [
      "sin²θ + cos²θ = 1 (fundamental identity)",
      "1 + tan²θ = sec²θ (divide by cos²θ)",
      "1 + cot²θ = cosec²θ (divide by sin²θ)",
      "sin²θ = 1 - cos²θ and cos²θ = 1 - sin²θ",
      "sec²θ - tan²θ = 1 and cosec²θ - cot²θ = 1",
      "In proofs, start with LHS or complex side",
      "Convert everything to sin and cos first",
      "Look for common factors to simplify"
    ]
  },
  "trig10-3": {
    intro: "Trigonometric Values for complementary angles shows beautiful relationships! sin of an angle equals cos of its complement. This concept makes many problems much easier to solve.",
    keyPoints: [
      "sin(90° - θ) = cos θ",
      "cos(90° - θ) = sin θ",
      "tan(90° - θ) = cot θ",
      "Complementary angles add up to 90°",
      "Use this to simplify expressions"
    ]
  },
  "trig10-4": {
    intro: "Heights and Distances is the practical application of trigonometry! Find heights of buildings, mountains, towers without climbing them. Learn about angle of elevation and depression.",
    keyPoints: [
      "Angle of elevation: Looking upward from horizontal",
      "Angle of depression: Looking downward from horizontal",
      "Draw figure first, mark known values",
      "Use tan for height problems usually",
      "Practice word problems thoroughly!"
    ]
  },

  // ============ GEOMETRY CLASS 9 INTROS ============
  "geo9-1": {
    intro: "Coordinate Geometry places geometry on a number plane! Every point has an address (x, y). This chapter connects algebra with geometry - you can describe shapes using equations.",
    keyPoints: [
      "X-axis is horizontal, Y-axis is vertical",
      "Origin (0, 0) is where axes meet",
      "Four quadrants with different sign combinations",
      "Distance formula finds length between points",
      "Points on axes have one coordinate as zero"
    ]
  },
  "geo9-2": {
    intro: "Lines and Angles is fundamental to all geometry! Understanding angles formed by parallel lines and transversals helps solve many problems. Remember the angle relationships - they appear everywhere.",
    keyPoints: [
      "Acute < 90° < Obtuse < 180° (Straight)",
      "Complementary angles sum to 90°",
      "Supplementary angles sum to 180°",
      "Parallel lines + transversal create equal angles",
      "Sum of angles in triangle = 180°"
    ]
  },
  "geo9-3": {
    intro: "Triangles chapter covers congruence - when two triangles are exactly same! Learn the rules (SSS, SAS, ASA, AAS, RHS) to prove triangles are congruent. Very important for proofs.",
    keyPoints: [
      "Congruent = Same shape AND same size",
      "SSS: Three sides equal",
      "SAS: Two sides + included angle equal",
      "ASA: Two angles + included side equal",
      "RHS: For right triangles - hypotenuse + one side"
    ]
  },
  "geo9-4": {
    intro: "Quadrilaterals are four-sided figures! Each type (parallelogram, rectangle, rhombus, square) has special properties. Know these properties well - they're frequently asked in exams.",
    keyPoints: [
      "Sum of angles = 360° always",
      "Parallelogram: Opposite sides parallel and equal",
      "Rectangle: All angles 90°",
      "Rhombus: All sides equal",
      "Square: All sides equal + all angles 90°"
    ]
  },
  "geo9-5": {
    intro: "Areas of Parallelograms and Triangles shows that figures with same base and height have related areas! This chapter proves these relationships beautifully.",
    keyPoints: [
      "Area of parallelogram = base × height",
      "Area of triangle = ½ × base × height",
      "Same base, same parallels = equal area",
      "Median divides triangle into equal areas",
      "Height is always perpendicular distance"
    ]
  },
  "geo9-6": {
    intro: "Circles introduces you to the most perfect shape in geometry! Learn about chords, diameter, radius, and beautiful angle properties. The inscribed angle theorem is a gem!",
    keyPoints: [
      "Radius = Half of diameter",
      "Diameter is the longest chord",
      "Equal chords are equidistant from center",
      "Angle at center = 2 × angle at circumference",
      "Angle in semicircle = 90°"
    ]
  },
  "geo9-7": {
    intro: "Constructions teaches you to draw geometric figures using only compass and straightedge - no measurements! This skill was valued by ancient mathematicians and still tested in exams.",
    keyPoints: [
      "Only compass and ruler allowed",
      "Learn to bisect angles and lines",
      "Construct 60°, 90°, 120° angles",
      "SSS, SAS, ASA triangle constructions",
      "Practice step by step!"
    ]
  },
  "geo9-8": {
    intro: "Heron's Formula is magical - find area of any triangle using just three sides! No need to find height. Named after ancient mathematician Hero of Alexandria.",
    keyPoints: [
      "First find semi-perimeter s = (a+b+c)/2",
      "Area = √[s(s-a)(s-b)(s-c)]",
      "Works for any triangle",
      "For equilateral: Area = (√3/4)a²",
      "Useful when height is not given"
    ]
  },
  "geo9-9": {
    intro: "Surface Areas and Volumes deals with 3D shapes! Learn formulas for cuboid, cube, cylinder, cone, and sphere. These formulas are used in real life - from packing boxes to filling tanks.",
    keyPoints: [
      "LSA = Lateral/Curved Surface Area",
      "TSA = Total Surface Area = LSA + base areas",
      "Volume = Space inside the solid",
      "Cylinder: V = πr²h, CSA = 2πrh",
      "Cone: V = (1/3)πr²h, CSA = πrl"
    ]
  },

  // ============ GEOMETRY CLASS 10 INTROS ============
  "geo10-1": {
    intro: "Similar Triangles are same shape but different size! The sides are proportional. Learn the criteria (AA, SSS, SAS) and the powerful Pythagoras Theorem. These concepts are building blocks for advanced math.",
    keyPoints: [
      "Similar ≠ Congruent (size can differ)",
      "AA: Two angles equal → Similar triangles",
      "SSS: All three sides proportional → Similar",
      "SAS: Two sides proportional + included angle equal",
      "Ratio of areas = (Ratio of sides)²",
      "BPT: Line || to side divides others proportionally",
      "Pythagoras: Hypotenuse² = Base² + Perpendicular²",
      "Converse: If c² = a² + b², then right triangle",
      "Pythagorean triplets: 3,4,5 | 5,12,13 | 8,15,17"
    ]
  },
  "geo10-2": {
    intro: "Coordinate Geometry in Class 10 adds more tools! Section formula divides lines in ratios, and you can find areas of triangles using coordinates. Pure algebra solving geometry!",
    keyPoints: [
      "Distance = √[(x₂-x₁)² + (y₂-y₁)²]",
      "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)",
      "Section formula for dividing in ratio m:n",
      "Area of triangle using coordinates",
      "Three points collinear if area = 0"
    ]
  },
  "geo10-3": {
    intro: "Circles in Class 10 focuses on tangents - lines that touch circle at exactly one point! The tangent properties are elegant and frequently tested. Master tangent-radius perpendicularity.",
    keyPoints: [
      "Tangent touches circle at one point only",
      "Tangent is perpendicular to radius at contact point",
      "Two tangents from external point are equal",
      "Tangent length = √(d² - r²)",
      "Drawing tangent constructions"
    ]
  },
  "geo10-4": {
    intro: "Constructions in Class 10 are more advanced! Learn to divide lines in given ratios, construct similar triangles, and draw tangents to circles. Practice makes perfect!",
    keyPoints: [
      "Divide line segment in given ratio",
      "Construct triangle similar to given triangle",
      "Draw tangent from external point",
      "Draw tangent at a point on circle",
      "Use compass arcs precisely"
    ]
  },
  "geo10-5": {
    intro: "Areas Related to Circles teaches you to find areas of sectors and segments - pizza slices and bites! Very practical formulas used in engineering and design.",
    keyPoints: [
      "Circumference = 2πr",
      "Area of circle = πr²",
      "Arc length = (θ/360°) × 2πr",
      "Sector area = (θ/360°) × πr²",
      "Segment = Sector - Triangle"
    ]
  },
  "geo10-6": {
    intro: "Surface Areas and Volumes in Class 10 deals with combinations of solids and frustum (cone with top cut off). Real-world problems like water tanks, toys, and decorative items use these formulas.",
    keyPoints: [
      "Combined solids: Add/subtract volumes",
      "Frustum: Cone with top removed",
      "Frustum volume uses both radii",
      "When reshaping solid, volume stays same",
      "Practice word problems well!"
    ]
  }
};

// ============ ALGEBRA CHAPTERS ============
export const algebraChapters: Chapter[] = [
  // Class 9 Algebra
  { id: "alg9-1", number: 1, name: "Number Systems", classLevel: 9, subject: "algebra" },
  { id: "alg9-2", number: 2, name: "Polynomials", classLevel: 9, subject: "algebra" },
  { id: "alg9-3", number: 3, name: "Linear Equations in Two Variables", classLevel: 9, subject: "algebra" },
  { id: "alg9-4", number: 4, name: "Statistics", classLevel: 9, subject: "algebra" },
  { id: "alg9-5", number: 5, name: "Probability", classLevel: 9, subject: "algebra" },
  // Class 10 Algebra
  { id: "alg10-1", number: 1, name: "Real Numbers", classLevel: 10, subject: "algebra" },
  { id: "alg10-2", number: 2, name: "Polynomials", classLevel: 10, subject: "algebra" },
  { id: "alg10-3", number: 3, name: "Pair of Linear Equations", classLevel: 10, subject: "algebra" },
  { id: "alg10-4", number: 4, name: "Quadratic Equations", classLevel: 10, subject: "algebra" },
  { id: "alg10-5", number: 5, name: "Arithmetic Progressions", classLevel: 10, subject: "algebra" },
  { id: "alg10-6", number: 6, name: "Statistics", classLevel: 10, subject: "algebra" },
  { id: "alg10-7", number: 7, name: "Probability", classLevel: 10, subject: "algebra" },
];

// ============ TRIGONOMETRY CHAPTERS ============
export const trigonometryChapters: Chapter[] = [
  // Class 9 Trigonometry
  { id: "trig9-1", number: 1, name: "Introduction to Trigonometry", classLevel: 9, subject: "trigonometry" },
  { id: "trig9-2", number: 2, name: "Trigonometric Ratios", classLevel: 9, subject: "trigonometry" },
  // Class 10 Trigonometry
  { id: "trig10-1", number: 1, name: "Trigonometric Ratios", classLevel: 10, subject: "trigonometry" },
  { id: "trig10-2", number: 2, name: "Trigonometric Identities", classLevel: 10, subject: "trigonometry" },
  { id: "trig10-3", number: 3, name: "Trigonometric Values", classLevel: 10, subject: "trigonometry" },
  { id: "trig10-4", number: 4, name: "Heights and Distances", classLevel: 10, subject: "trigonometry" },
];

// ============ GEOMETRY CHAPTERS ============
export const geometryChapters: Chapter[] = [
  // Class 9 Geometry
  { id: "geo9-1", number: 1, name: "Coordinate Geometry", classLevel: 9, subject: "geometry" },
  { id: "geo9-2", number: 2, name: "Lines and Angles", classLevel: 9, subject: "geometry" },
  { id: "geo9-3", number: 3, name: "Triangles", classLevel: 9, subject: "geometry" },
  { id: "geo9-4", number: 4, name: "Quadrilaterals", classLevel: 9, subject: "geometry" },
  { id: "geo9-5", number: 5, name: "Areas of Parallelograms and Triangles", classLevel: 9, subject: "geometry" },
  { id: "geo9-6", number: 6, name: "Circles", classLevel: 9, subject: "geometry" },
  { id: "geo9-7", number: 7, name: "Constructions", classLevel: 9, subject: "geometry" },
  { id: "geo9-8", number: 8, name: "Heron's Formula", classLevel: 9, subject: "geometry" },
  { id: "geo9-9", number: 9, name: "Surface Areas and Volumes", classLevel: 9, subject: "geometry" },
  // Class 10 Geometry
  { id: "geo10-1", number: 1, name: "Triangles (Similarity)", classLevel: 10, subject: "geometry" },
  { id: "geo10-2", number: 2, name: "Coordinate Geometry", classLevel: 10, subject: "geometry" },
  { id: "geo10-3", number: 3, name: "Circles", classLevel: 10, subject: "geometry" },
  { id: "geo10-4", number: 4, name: "Constructions", classLevel: 10, subject: "geometry" },
  { id: "geo10-5", number: 5, name: "Areas Related to Circles", classLevel: 10, subject: "geometry" },
  { id: "geo10-6", number: 6, name: "Surface Areas and Volumes", classLevel: 10, subject: "geometry" },
];

// Formula data for all chapters
export const formulaData: Record<string, Formula[]> = {
  // ============ ALGEBRA CLASS 9 ============
  
  // Number Systems
  "alg9-1": [
    { id: "f1", title: "Natural Numbers", formula: "N = {1, 2, 3, 4, 5, ...}", explanation: "Counting numbers starting from 1. Used for counting objects." },
    { id: "f2", title: "Whole Numbers", formula: "W = {0, 1, 2, 3, 4, ...}", explanation: "Natural numbers including zero. Zero represents 'nothing' or 'empty'." },
    { id: "f3", title: "Integers", formula: "Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}", explanation: "All positive and negative whole numbers including zero." },
    { id: "f4", title: "Rational Numbers", formula: "Q = p/q, where p, q are integers, q ≠ 0", explanation: "Numbers that can be written as a fraction. Examples: 1/2, 3/4, -5/7" },
    { id: "f5", title: "Irrational Numbers", formula: "Cannot be written as p/q\nExamples: √2, √3, π", explanation: "Non-repeating, non-terminating decimals that cannot be expressed as fractions." },
    { id: "f6", title: "Real Numbers", formula: "R = Rational ∪ Irrational", explanation: "All numbers on the number line, including both rational and irrational numbers." },
    { id: "f7", title: "Rationalizing Factor", formula: "√a × √a = a\n(√a + √b)(√a - √b) = a - b", explanation: "Used to remove square roots from denominator of a fraction." },
    { id: "f8", title: "Laws of Exponents", formula: "aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁰ = 1", explanation: "Rules for multiplying and dividing powers with same base." },
    { id: "f9", title: "Negative Exponents", formula: "a⁻ⁿ = 1/aⁿ\n(a/b)⁻ⁿ = (b/a)ⁿ", explanation: "Negative power means reciprocal of positive power." },
    { id: "f10", title: "Fractional Exponents", formula: "a^(1/n) = ⁿ√a\na^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ", explanation: "Fractional powers represent roots. 1/2 means square root." },
    { id: "f11", title: "Converting Decimal to Fraction", formula: "0.333... = 3/9 = 1/3\n0.272727... = 27/99 = 3/11\n0.1666... = 15/90 = 1/6", explanation: "Repeating part goes in numerator, 9s for how many digits repeat." },
    { id: "f12", title: "Proof: √2 is Irrational", formula: "Assume √2 = p/q (lowest terms)\n2 = p²/q² → p² = 2q²\np is even → p = 2k\n4k² = 2q² → q² = 2k²\nq is also even → Contradiction!", explanation: "Proof by contradiction - classic NCERT proof." },
    { id: "f13", title: "Double Square Root", formula: "√(a + √b) = √x + √y\nwhere x + y = a, xy = b/4", explanation: "Used to simplify nested square roots." },
  ],
  
  // Polynomials Class 9
  "alg9-2": [
    { id: "f1", title: "Polynomial Definition", formula: "P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀", explanation: "An algebraic expression with variables and coefficients combined using addition, subtraction, and multiplication." },
    { id: "f2", title: "Types of Polynomials", formula: "Constant: a (degree 0)\nLinear: ax + b (degree 1)\nQuadratic: ax² + bx + c (degree 2)\nCubic: ax³ + bx² + cx + d (degree 3)", explanation: "Polynomials are classified by their highest power (degree)." },
    { id: "f3", title: "Square of Sum", formula: "(a + b)² = a² + 2ab + b²", explanation: "Expands (a + b) × (a + b). Remember: middle term is always 2ab." },
    { id: "f4", title: "Square of Difference", formula: "(a - b)² = a² - 2ab + b²", explanation: "Expands (a - b) × (a - b). Middle term is negative." },
    { id: "f5", title: "Difference of Squares", formula: "(a + b)(a - b) = a² - b²", explanation: "Product of sum and difference gives difference of squares." },
    { id: "f6", title: "Cube of Sum", formula: "(a + b)³ = a³ + 3a²b + 3ab² + b³", explanation: "Can also write as: a³ + b³ + 3ab(a + b)" },
    { id: "f7", title: "Cube of Difference", formula: "(a - b)³ = a³ - 3a²b + 3ab² - b³", explanation: "Can also write as: a³ - b³ - 3ab(a - b)" },
    { id: "f8", title: "Sum of Cubes", formula: "a³ + b³ = (a + b)(a² - ab + b²)", explanation: "Factorization formula for sum of two cubes." },
    { id: "f9", title: "Difference of Cubes", formula: "a³ - b³ = (a - b)(a² + ab + b²)", explanation: "Factorization formula for difference of two cubes." },
    { id: "f10", title: "Square of Three Terms", formula: "(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca", explanation: "Expansion of square of three terms." },
    { id: "f11", title: "Sum of Squares", formula: "a² + b² = (a + b)² - 2ab\nOR a² + b² = (a - b)² + 2ab", explanation: "Useful for finding sum of squares when sum/difference is known." },
    { id: "f12", title: "Factorization: x² + px + q", formula: "Find numbers whose sum = p, product = q\nx² + 5x + 6 = (x+2)(x+3)\n(sum=5, product=6 → 2,3)", explanation: "Split middle term method for factorization." },
    { id: "f13", title: "Factor Theorem", formula: "If P(a) = 0, then (x - a) is a factor of P(x)", explanation: "Use this to find factors of polynomials." },
    { id: "f14", title: "Remainder Theorem", formula: "When P(x) is divided by (x - a),\nRemainder = P(a)", explanation: "Put x = a in the polynomial to get remainder." },
  ],
  
  // Linear Equations Class 9
  "alg9-3": [
    { id: "f1", title: "What is Linear Equation?", formula: "Equation where highest power of variable = 1\nExamples: 2x + 3 = 7, x + y = 5", explanation: "Definition: An equation that gives a straight line when graphed." },
    { id: "f2", title: "Standard Form", formula: "ax + by + c = 0\nwhere a, b, c are real numbers, a and b not both zero", explanation: "General form of linear equation in two variables." },
    { id: "f3", title: "Solution of Linear Equation", formula: "A pair (x, y) that satisfies ax + by + c = 0", explanation: "Any point on the line is a solution. A linear equation has infinite solutions." },
    { id: "f4", title: "Graph of Linear Equation", formula: "Always a straight line on coordinate plane", explanation: "Every linear equation in two variables represents a straight line." },
    { id: "f5", title: "Equation of X-axis", formula: "y = 0", explanation: "All points on x-axis have y-coordinate = 0" },
    { id: "f6", title: "Equation of Y-axis", formula: "x = 0", explanation: "All points on y-axis have x-coordinate = 0" },
    { id: "f7", title: "Lines Parallel to Axes", formula: "x = k (parallel to y-axis)\ny = k (parallel to x-axis)", explanation: "k is any constant value." },
    { id: "f8", title: "Slope-Intercept Form", formula: "y = mx + c\nm = slope, c = y-intercept", explanation: "Useful form showing how steep the line is and where it crosses y-axis." },
    { id: "f9", title: "Finding Solutions", formula: "Put any value of x, find y\nExample: x + y = 5\nIf x = 1, then y = 4", explanation: "Method to find points that lie on the line." },
  ],
  
  // Statistics Class 9
  "alg9-4": [
    { id: "f1", title: "What is Statistics?", formula: "Collection, organization, analysis of data", explanation: "Definition: Science of collecting and interpreting numerical data." },
    { id: "f2", title: "Mean (Average)", formula: "Mean = Sum of observations / Number of observations\nx̄ = Σxᵢ/n", explanation: "The central value found by adding all values and dividing by count." },
    { id: "f3", title: "Mean for Grouped Data", formula: "Mean = Σ(fᵢxᵢ)/Σfᵢ", explanation: "f = frequency (how many times), x = class mark (middle value of class)." },
    { id: "f4", title: "Median", formula: "Middle value when data is arranged in order\nOdd n: (n+1)/2 th term\nEven n: average of n/2 and (n/2)+1 th terms", explanation: "The middle value that divides data into two equal halves." },
    { id: "f5", title: "Mode", formula: "Most frequently occurring value", explanation: "The value that appears most often in the data set." },
    { id: "f6", title: "Range", formula: "Range = Maximum - Minimum", explanation: "The spread or difference between largest and smallest values." },
    { id: "f7", title: "Class Mark", formula: "Class Mark = (Upper limit + Lower limit)/2", explanation: "The middle value of a class interval, used to represent the class." },
    { id: "f8", title: "Class Width", formula: "Class Width = Upper limit - Lower limit", explanation: "Size or width of each class interval." },
    { id: "f9", title: "Frequency", formula: "Number of times a value appears in data", explanation: "Count of observations falling in each category or class." },
    { id: "f10", title: "When to Use What", formula: "Mean: When all values are important\nMedian: When data has extreme values\nMode: For categorical data", explanation: "Choose the right measure based on your data type." },
  ],
  
  // Probability Class 9
  "alg9-5": [
    { id: "f1", title: "What is Probability?", formula: "Measure of chance that an event will happen", explanation: "Definition: A number between 0 and 1 that tells how likely something is." },
    { id: "f2", title: "Probability Formula", formula: "P(E) = Favorable outcomes / Total outcomes\nP(E) = n(E) / n(S)", explanation: "Basic formula to calculate probability of any event." },
    { id: "f3", title: "Probability Range", formula: "0 ≤ P(E) ≤ 1", explanation: "Probability can never be negative or greater than 1." },
    { id: "f4", title: "Certain Event", formula: "P(certain event) = 1\nExample: Getting less than 7 on a die", explanation: "An event that will definitely happen has probability 1." },
    { id: "f5", title: "Impossible Event", formula: "P(impossible event) = 0\nExample: Getting 7 on a die", explanation: "An event that can never happen has probability 0." },
    { id: "f6", title: "Complementary Events", formula: "P(E) + P(not E) = 1\nP(not E) = 1 - P(E)", explanation: "Either an event happens or it doesn't - total probability is 1." },
    { id: "f7", title: "Experimental Probability", formula: "P(E) = Times E occurred / Total trials", explanation: "Probability calculated from actual experiments or observations." },
    { id: "f8", title: "Coin Toss Basics", formula: "Total outcomes = 2 (Head, Tail)\nP(Head) = 1/2 = 0.5", explanation: "Each outcome is equally likely in a fair coin." },
    { id: "f9", title: "Die Roll Basics", formula: "Total outcomes = 6 (1,2,3,4,5,6)\nP(any number) = 1/6", explanation: "Each face is equally likely in a fair die." },
    { id: "f10", title: "Sum of All Probabilities", formula: "P(all outcomes) = 1\nP(1) + P(2) + ... + P(6) = 1", explanation: "Probabilities of all possible outcomes add up to 1." },
  ],
  
  // ============ ALGEBRA CLASS 10 ============
  
  // Real Numbers Class 10
  "alg10-1": [
    { id: "f1", title: "Euclid's Division Lemma", formula: "a = bq + r, where 0 ≤ r < b", explanation: "When we divide a by b, we get quotient q and remainder r. Remainder is always less than divisor." },
    { id: "f2", title: "Euclid's Division Algorithm", formula: "To find HCF:\nStep 1: a = bq₁ + r₁\nStep 2: b = r₁q₂ + r₂\nContinue until remainder = 0\nLast divisor = HCF", explanation: "Method to find HCF (Highest Common Factor) of two numbers." },
    { id: "f3", title: "Fundamental Theorem of Arithmetic", formula: "Every composite number = Product of primes (unique)", explanation: "Every number greater than 1 can be written as product of prime numbers in only one way." },
    { id: "f4", title: "HCF × LCM Relation", formula: "HCF(a,b) × LCM(a,b) = a × b", explanation: "Product of two numbers equals product of their HCF and LCM." },
    { id: "f5", title: "HCF by Prime Factorization", formula: "HCF = Product of smallest powers of common primes", explanation: "Find prime factors, take common ones with lowest power." },
    { id: "f6", title: "LCM by Prime Factorization", formula: "LCM = Product of highest powers of all primes", explanation: "Find prime factors, take all with highest power." },
    { id: "f7", title: "Terminating Decimal", formula: "p/q terminates if q = 2ᵐ × 5ⁿ only", explanation: "Fraction gives terminating decimal only if denominator has 2 and 5 as only prime factors." },
    { id: "f8", title: "Non-Terminating Repeating", formula: "If q has prime factors other than 2 and 5\n→ Decimal is non-terminating repeating\nExample: 1/3 = 0.333...", explanation: "Rational numbers with other prime factors in denominator give repeating decimals." },
    { id: "f9", title: "Irrationality Proof", formula: "To prove √p is irrational (p is prime):\nAssume √p = a/b (lowest terms)\n→ p divides both a and b\n→ Contradiction!", explanation: "Proof by contradiction method for irrational numbers." },
  ],
  
  // Polynomials Class 10
  "alg10-2": [
    { id: "f1", title: "Zeros of Polynomial", formula: "If P(k) = 0, then k is a zero of P(x)", explanation: "Values of x where the polynomial equals zero." },
    { id: "f2", title: "Sum of Zeros (Quadratic)", formula: "α + β = -b/a", explanation: "For ax² + bx + c = 0, sum of roots = -(coefficient of x)/(coefficient of x²)" },
    { id: "f3", title: "Product of Zeros (Quadratic)", formula: "αβ = c/a", explanation: "For ax² + bx + c = 0, product of roots = constant/(coefficient of x²)" },
    { id: "f4", title: "Quadratic from Zeros", formula: "P(x) = x² - (sum)x + (product)\n= x² - (α+β)x + αβ", explanation: "Form quadratic equation when roots are known." },
    { id: "f5", title: "Cubic Polynomial Relations", formula: "For ax³ + bx² + cx + d:\nα + β + γ = -b/a\nαβ + βγ + γα = c/a\nαβγ = -d/a", explanation: "Relations between zeros and coefficients of cubic polynomial." },
    { id: "f6", title: "Division Algorithm", formula: "Dividend = Divisor × Quotient + Remainder\nP(x) = g(x) × q(x) + r(x)", explanation: "When dividing polynomials, this relationship always holds." },
  ],
  
  // Pair of Linear Equations Class 10
  "alg10-3": [
    { id: "f1", title: "General Form", formula: "a₁x + b₁y + c₁ = 0\na₂x + b₂y + c₂ = 0", explanation: "Two linear equations in same two variables form a pair." },
    { id: "f2", title: "Unique Solution (Intersecting)", formula: "a₁/a₂ ≠ b₁/b₂", explanation: "Lines intersect at exactly one point. System is consistent." },
    { id: "f3", title: "Infinite Solutions (Coincident)", formula: "a₁/a₂ = b₁/b₂ = c₁/c₂", explanation: "Lines are same (overlap completely). System is dependent." },
    { id: "f4", title: "No Solution (Parallel)", formula: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂", explanation: "Lines are parallel (never meet). System is inconsistent." },
    { id: "f5", title: "Substitution Method", formula: "1. Express one variable from one equation\n2. Substitute in other equation\n3. Solve and back-substitute", explanation: "Replace one variable to get equation in single variable." },
    { id: "f6", title: "Elimination Method", formula: "1. Make coefficients of one variable equal\n2. Add or subtract equations\n3. Solve for remaining variable", explanation: "Eliminate one variable by adding/subtracting equations." },
    { id: "f7", title: "Cross Multiplication", formula: "x/(b₁c₂-b₂c₁) = y/(c₁a₂-c₂a₁) = 1/(a₁b₂-a₂b₁)", explanation: "Direct formula to find solution of linear equations." },
  ],
  
  // Quadratic Equations Class 10
  "alg10-4": [
    { id: "f1", title: "Standard Form", formula: "ax² + bx + c = 0, where a ≠ 0", explanation: "Equation where highest power of variable is 2." },
    { id: "f2", title: "Quadratic Formula", formula: "x = (-b ± √(b²-4ac))/2a", explanation: "Formula to find roots of any quadratic equation. Called Shridharacharya's formula." },
    { id: "f3", title: "Discriminant", formula: "D = b² - 4ac", explanation: "The value under square root that determines nature of roots." },
    { id: "f4", title: "Nature of Roots", formula: "D > 0 → Two distinct real roots\nD = 0 → Two equal real roots\nD < 0 → No real roots", explanation: "Discriminant tells us what type of roots we'll get." },
    { id: "f5", title: "Sum of Roots", formula: "α + β = -b/a", explanation: "Sum of solutions of quadratic equation." },
    { id: "f6", title: "Product of Roots", formula: "αβ = c/a", explanation: "Product of solutions of quadratic equation." },
    { id: "f7", title: "Equation from Roots", formula: "x² - (sum)x + (product) = 0\nx² - (α+β)x + αβ = 0", explanation: "Form quadratic equation when roots are known." },
    { id: "f8", title: "Completing the Square", formula: "ax² + bx + c = 0\n→ x² + (b/a)x = -c/a\n→ (x + b/2a)² = (b²-4ac)/4a²", explanation: "Method to derive quadratic formula by making perfect square." },
    { id: "f9", title: "Difference of Roots", formula: "α - β = √D/a = √(b²-4ac)/a", explanation: "Difference between two roots using discriminant." },
  ],
  
  // Arithmetic Progressions Class 10
  "alg10-5": [
    { id: "f1", title: "AP Definition", formula: "a, a+d, a+2d, a+3d, ...\na = first term, d = common difference", explanation: "A sequence where each term differs from previous by same amount (common difference)." },
    { id: "f2", title: "Common Difference", formula: "d = aₙ - aₙ₋₁", explanation: "The constant difference between any two consecutive terms." },
    { id: "f3", title: "nth Term Formula", formula: "aₙ = a + (n-1)d", explanation: "Find any term of AP. a = first term, n = position, d = common difference." },
    { id: "f4", title: "Sum of n Terms", formula: "Sₙ = n/2 [2a + (n-1)d]\nOR Sₙ = n/2 [a + l]", explanation: "Sum formula. Second form uses l = last term." },
    { id: "f5", title: "Sum of Natural Numbers", formula: "1 + 2 + 3 + ... + n = n(n+1)/2", explanation: "Special AP with a = 1, d = 1." },
    { id: "f6", title: "Sum of First n Odd Numbers", formula: "1 + 3 + 5 + ... + (2n-1) = n²", explanation: "Special AP with a = 1, d = 2." },
    { id: "f7", title: "nth Term from Sum", formula: "aₙ = Sₙ - Sₙ₋₁", explanation: "Find any term using sum formula." },
    { id: "f8", title: "Sum of Even Numbers", formula: "2 + 4 + 6 + ... + 2n = n(n+1)", explanation: "AP with a = 2, d = 2." },
    { id: "f9", title: "Check if AP", formula: "2b = a + c\n(middle term = average of neighbors)", explanation: "For three numbers a, b, c to be in AP." },
    { id: "f10", title: "nth Term from End", formula: "aₙ from end = l - (n-1)d\nwhere l = last term", explanation: "Count terms from last instead of first." },
    { id: "f11", title: "Three Terms in AP", formula: "Take as: a-d, a, a+d\nSum = 3a (d cancels out)", explanation: "Simplifies calculations when three numbers are in AP." },
  ],
  
  // Statistics Class 10
  "alg10-6": [
    { id: "f1", title: "Grouped Data", formula: "Data organized in class intervals\nExample: 0-10, 10-20, 20-30...", explanation: "Definition: Data presented in groups/ranges instead of individual values." },
    { id: "f2", title: "Mean (Direct Method)", formula: "x̄ = Σfᵢxᵢ / Σfᵢ", explanation: "f = frequency, x = class mark. Multiply each value by its frequency." },
    { id: "f3", title: "Mean (Assumed Mean)", formula: "x̄ = a + (Σfᵢdᵢ / Σfᵢ)\ndᵢ = xᵢ - a", explanation: "a = assumed mean, d = deviation from assumed mean. Simplifies calculation." },
    { id: "f4", title: "Mean (Step Deviation)", formula: "x̄ = a + (Σfᵢuᵢ / Σfᵢ) × h\nuᵢ = (xᵢ - a)/h", explanation: "h = class size. Most efficient method when class sizes are equal." },
    { id: "f5", title: "Median (Grouped Data)", formula: "Median = l + ((n/2 - cf)/f) × h", explanation: "l = lower limit of median class, cf = cumulative frequency before median class, f = frequency of median class, h = class size." },
    { id: "f6", title: "Finding Median Class", formula: "Calculate n/2\nFind class where cumulative frequency ≥ n/2", explanation: "The class containing the middle observation is median class." },
    { id: "f7", title: "Mode (Grouped Data)", formula: "Mode = l + ((f₁ - f₀)/(2f₁ - f₀ - f₂)) × h", explanation: "l = lower limit of modal class, f₁ = frequency of modal class, f₀ = frequency before, f₂ = frequency after." },
    { id: "f8", title: "Modal Class", formula: "Class with highest frequency", explanation: "Definition: The class interval that appears most often in grouped data." },
    { id: "f9", title: "Empirical Relation", formula: "Mode = 3(Median) - 2(Mean)", explanation: "Approximate relationship between the three measures of central tendency." },
    { id: "f10", title: "Cumulative Frequency", formula: "cf = Sum of all frequencies up to that class", explanation: "Running total of frequencies, used for median and ogive." },
    { id: "f11", title: "Ogive (Cumulative Graph)", formula: "Less than ogive: Plot upper limits vs cf\nMore than ogive: Plot lower limits vs cf", explanation: "Graph showing cumulative frequency. Intersection gives median." },
  ],
  
  // Probability Class 10
  "alg10-7": [
    { id: "f1", title: "Sample Space", formula: "S = Set of all possible outcomes\nFor coin: S = {H, T}\nFor die: S = {1,2,3,4,5,6}", explanation: "Definition: The complete set of all possible outcomes of an experiment." },
    { id: "f2", title: "Theoretical Probability", formula: "P(E) = n(E) / n(S)", explanation: "n(E) = favorable outcomes, n(S) = total outcomes in sample space." },
    { id: "f3", title: "Complementary Events", formula: "P(E) + P(Ē) = 1\nP(not E) = 1 - P(E)", explanation: "Probability of event not happening = 1 minus probability of happening." },
    { id: "f4", title: "Coin Toss Probability", formula: "P(Head) = P(Tail) = 1/2\nTwo coins: 4 outcomes (HH, HT, TH, TT)\nThree coins: 8 outcomes", explanation: "For fair coin, both outcomes are equally likely." },
    { id: "f5", title: "Dice Probability", formula: "P(any number) = 1/6\nTwo dice: 36 outcomes\nP(sum = 7) = 6/36 = 1/6", explanation: "For fair die, all six faces are equally likely." },
    { id: "f6", title: "Playing Cards Basics", formula: "Total = 52 cards\n4 suits × 13 cards each\nFace cards = 12 (J,Q,K × 4)\nAces = 4", explanation: "Hearts, Diamonds (red); Clubs, Spades (black). Each suit has A,2-10,J,Q,K." },
    { id: "f7", title: "Sum of Probabilities", formula: "P(E₁) + P(E₂) + ... = 1", explanation: "Sum of probabilities of all possible outcomes equals 1." },
    { id: "f8", title: "Card Probabilities", formula: "P(red card) = 26/52 = 1/2\nP(face card) = 12/52 = 3/13\nP(ace) = 4/52 = 1/13\nP(king of hearts) = 1/52", explanation: "Common card probability values to remember." },
    { id: "f9", title: "Dice Sum Probabilities", formula: "P(sum = 2) = 1/36\nP(sum = 7) = 6/36 = 1/6 (most likely)\nP(sum = 12) = 1/36", explanation: "For two dice, sum = 7 has most combinations." },
    { id: "f10", title: "Equally Likely Events", formula: "Events with same probability\nFor fair die: P(1) = P(2) = ... = P(6) = 1/6", explanation: "Definition: Events that have equal chance of occurring." },
    { id: "f11", title: "Advanced: Or Probability", formula: "P(A or B) = P(A) + P(B) - P(A and B)\nFor mutually exclusive: P(A or B) = P(A) + P(B)", explanation: "Finding probability of either event happening." },
  ],
  
  // ============ TRIGONOMETRY CLASS 9 ============
  
  // Introduction to Trigonometry
  "trig9-1": [
    { id: "f1", title: "What is Trigonometry?", formula: "Study of relationships between angles and sides of triangles", explanation: "Definition: Branch of mathematics dealing with angles, triangles, and trigonometric functions." },
    { id: "f2", title: "Right Triangle Basics", formula: "One angle = 90°\nHypotenuse = longest side (opposite to 90°)\nBase = adjacent side\nPerpendicular = opposite side", explanation: "Basic triangle used in trigonometry. Hypotenuse is always opposite to right angle." },
    { id: "f3", title: "Sine Ratio", formula: "sin θ = Opposite/Hypotenuse = P/H", explanation: "Ratio of side opposite to angle and hypotenuse." },
    { id: "f4", title: "Cosine Ratio", formula: "cos θ = Adjacent/Hypotenuse = B/H", explanation: "Ratio of side adjacent to angle and hypotenuse." },
    { id: "f5", title: "Tangent Ratio", formula: "tan θ = Opposite/Adjacent = P/B", explanation: "Ratio of opposite side to adjacent side." },
    { id: "f6", title: "SOH-CAH-TOA Memory Trick", formula: "Sin = Opposite/Hypotenuse\nCos = Adjacent/Hypotenuse\nTan = Opposite/Adjacent", explanation: "Memory trick: SOH-CAH-TOA helps remember all three ratios." },
    { id: "f7", title: "Relation Between Ratios", formula: "tan θ = sin θ / cos θ", explanation: "Tangent equals sine divided by cosine." },
    { id: "f8", title: "Pythagoras in Trigonometry", formula: "H² = P² + B²\nUsed to find missing side first", explanation: "Always find all sides before calculating ratios." },
  ],
  
  // Trigonometric Ratios Class 9
  "trig9-2": [
    { id: "f1", title: "Reciprocal Ratios", formula: "cosec θ = 1/sin θ = H/P\nsec θ = 1/cos θ = H/B\ncot θ = 1/tan θ = B/P", explanation: "Definition: Cosecant, Secant, and Cotangent are reciprocals of basic ratios." },
    { id: "f2", title: "Relation: tan and cot", formula: "tan θ = sin θ/cos θ\ncot θ = cos θ/sin θ", explanation: "Tangent and cotangent can be expressed using sine and cosine." },
    { id: "f3", title: "Values at 0°", formula: "sin 0° = 0\ncos 0° = 1\ntan 0° = 0", explanation: "At 0°, perpendicular is zero, base equals hypotenuse." },
    { id: "f4", title: "Values at 30°", formula: "sin 30° = 1/2\ncos 30° = √3/2\ntan 30° = 1/√3", explanation: "Derived from 30-60-90 triangle." },
    { id: "f5", title: "Values at 45°", formula: "sin 45° = 1/√2\ncos 45° = 1/√2\ntan 45° = 1", explanation: "In isosceles right triangle, two sides are equal." },
    { id: "f6", title: "Values at 60°", formula: "sin 60° = √3/2\ncos 60° = 1/2\ntan 60° = √3", explanation: "Derived from 30-60-90 triangle." },
    { id: "f7", title: "Values at 90°", formula: "sin 90° = 1\ncos 90° = 0\ntan 90° = undefined (∞)", explanation: "At 90°, base is zero, perpendicular equals hypotenuse." },
    { id: "f8", title: "Basic Identity", formula: "sin²θ + cos²θ = 1", explanation: "Fundamental identity derived from Pythagoras theorem." },
    { id: "f9", title: "Memory Trick for Values", formula: "For sin: √0/2, √1/2, √2/2, √3/2, √4/2\n= 0, 1/2, 1/√2, √3/2, 1", explanation: "Write 0,1,2,3,4 → take square root → divide by 2." },
  ],
  
  // ============ TRIGONOMETRY CLASS 10 ============
  
  // Trigonometric Ratios Class 10
  "trig10-1": [
    { id: "f1", title: "Basic Ratios", formula: "sin θ = P/H (Perpendicular/Hypotenuse)\ncos θ = B/H (Base/Hypotenuse)\ntan θ = P/B (Perpendicular/Base)", explanation: "The three fundamental trigonometric ratios in a right triangle." },
    { id: "f2", title: "Reciprocal Ratios", formula: "cosec θ = H/P = 1/sin θ\nsec θ = H/B = 1/cos θ\ncot θ = B/P = 1/tan θ", explanation: "Cosecant, Secant, Cotangent are reciprocals of sin, cos, tan respectively." },
    { id: "f3", title: "Quotient Relations", formula: "tan θ = sin θ/cos θ\ncot θ = cos θ/sin θ", explanation: "Tangent and cotangent expressed as quotients of sin and cos." },
  ],
  
  // Trigonometric Identities Class 10
  "trig10-2": [
    { id: "f1", title: "What is an Identity?", formula: "Equation true for ALL values of the variable", explanation: "Definition: Unlike equations, identities hold for every possible angle." },
    { id: "f2", title: "Pythagorean Identity 1", formula: "sin²θ + cos²θ = 1\nsin²θ = 1 - cos²θ\ncos²θ = 1 - sin²θ", explanation: "Fundamental identity derived from Pythagoras theorem." },
    { id: "f3", title: "Pythagorean Identity 2", formula: "1 + tan²θ = sec²θ\ntan²θ = sec²θ - 1\nsec²θ - tan²θ = 1", explanation: "Derived by dividing first identity by cos²θ." },
    { id: "f4", title: "Pythagorean Identity 3", formula: "1 + cot²θ = cosec²θ\ncot²θ = cosec²θ - 1\ncosec²θ - cot²θ = 1", explanation: "Derived by dividing first identity by sin²θ." },
    { id: "f5", title: "Complementary Angles", formula: "sin(90°-θ) = cos θ\ncos(90°-θ) = sin θ\ntan(90°-θ) = cot θ", explanation: "Angles that add up to 90°. sin and cos swap, tan and cot swap." },
    { id: "f6", title: "More Complementary Relations", formula: "cot(90°-θ) = tan θ\nsec(90°-θ) = cosec θ\ncosec(90°-θ) = sec θ", explanation: "Complete set of complementary angle relationships." },
    { id: "f7", title: "Proof Strategy", formula: "1. Start with LHS or RHS\n2. Convert all to sin and cos\n3. Simplify step by step\n4. Show LHS = RHS", explanation: "Standard method for proving trigonometric identities." },
    { id: "f8", title: "Useful Factorizations", formula: "(secθ - tanθ)(secθ + tanθ) = 1\n(cosecθ - cotθ)(cosecθ + cotθ) = 1", explanation: "Useful forms for identity proofs." },
  ],
  
  // Trigonometric Values Class 10
  "trig10-3": [
    { id: "f1", title: "Values at 0°", formula: "sin 0° = 0\ncos 0° = 1\ntan 0° = 0", explanation: "At 0°, perpendicular = 0, base = hypotenuse." },
    { id: "f2", title: "Values at 30°", formula: "sin 30° = 1/2\ncos 30° = √3/2\ntan 30° = 1/√3", explanation: "From 30-60-90 triangle with sides 1, √3, 2." },
    { id: "f3", title: "Values at 45°", formula: "sin 45° = 1/√2\ncos 45° = 1/√2\ntan 45° = 1", explanation: "From 45-45-90 isosceles right triangle." },
    { id: "f4", title: "Values at 60°", formula: "sin 60° = √3/2\ncos 60° = 1/2\ntan 60° = √3", explanation: "From 30-60-90 triangle with sides 1, √3, 2." },
    { id: "f5", title: "Values at 90°", formula: "sin 90° = 1\ncos 90° = 0\ntan 90° = undefined", explanation: "At 90°, perpendicular = hypotenuse, base = 0." },
    { id: "f6", title: "Complete Table", formula: "     0°    30°    45°    60°    90°\nsin   0    1/2   1/√2   √3/2    1\ncos   1   √3/2   1/√2    1/2    0\ntan   0   1/√3    1      √3    ∞", explanation: "Memorize this table for quick reference." },
    { id: "f7", title: "Memory Trick", formula: "For sin: √0/2, √1/2, √2/2, √3/2, √4/2\nFor cos: reverse order", explanation: "Write 0,1,2,3,4 → take square root → divide by 2." },
    { id: "f8", title: "Cosec, Sec, Cot Values", formula: "cosec θ = 1/sin θ (reverse sin values)\nsec θ = 1/cos θ (reverse cos values)\ncot θ = 1/tan θ (reverse tan values)", explanation: "Reciprocal ratios - flip the basic ratio values." },
    { id: "f9", title: "Important Products", formula: "sin 30° × cos 60° = 1/4\nsin 45° × cos 45° = 1/2\nsin 60° × cos 30° = 3/4", explanation: "Common products asked in exams." },
  ],
  
  // Heights and Distances Class 10
  "trig10-4": [
    { id: "f1", title: "What is Angle of Elevation?", formula: "Angle from horizontal to object ABOVE eye level", explanation: "Definition: When you look UP at something, angle between horizontal line and line of sight." },
    { id: "f2", title: "What is Angle of Depression?", formula: "Angle from horizontal to object BELOW eye level", explanation: "Definition: When you look DOWN at something, angle between horizontal line and line of sight." },
    { id: "f3", title: "Key Relation", formula: "Angle of elevation from A to B = Angle of depression from B to A", explanation: "Alternate angles are equal when horizontal lines are parallel." },
    { id: "f4", title: "Height Formula", formula: "Height = Distance × tan(angle)\nh = d × tan θ", explanation: "Finding height when distance and angle are known." },
    { id: "f5", title: "Distance Formula", formula: "Distance = Height / tan(angle)\nd = h / tan θ = h × cot θ", explanation: "Finding horizontal distance when height and angle are known." },
    { id: "f6", title: "Two Angle Problem", formula: "For two angles θ₁ and θ₂ from same point:\nForm two equations using tan\nSolve simultaneously", explanation: "Common problem type where object is observed from two positions." },
    { id: "f7", title: "Problem Solving Steps", formula: "1. Draw a neat diagram\n2. Mark all known values\n3. Identify right triangles\n4. Apply tan or other ratios\n5. Solve equations", explanation: "Follow these steps for every heights and distances problem." },
    { id: "f8", title: "Shadow Problems", formula: "tan(sun's elevation) = Height/Shadow length\nShadow = Height × cot(angle)", explanation: "Common application: Finding height from shadow length." },
    { id: "f9", title: "Moving Observer", formula: "When moving toward object:\nheight stays same, angles change\nUse: h = d₁tan θ₁ = d₂tan θ₂", explanation: "Observer moves, forms two triangles with same height." },
  ],
  
  // ============ GEOMETRY CLASS 9 ============
  
  // Coordinate Geometry Class 9
  "geo9-1": [
    { id: "f1", title: "What is Cartesian Plane?", formula: "Horizontal line → X-axis\nVertical line → Y-axis\nIntersection → Origin (0, 0)", explanation: "Definition: A plane with two perpendicular number lines for locating points." },
    { id: "f2", title: "Coordinates", formula: "P = (x, y)\nx = abscissa (horizontal)\ny = ordinate (vertical)", explanation: "Ordered pair of numbers that locate a point on the plane." },
    { id: "f3", title: "Four Quadrants", formula: "I: (+, +)   II: (-, +)\nIII: (-, -)   IV: (+, -)", explanation: "Four regions of coordinate plane with different sign combinations." },
    { id: "f4", title: "Points on Axes", formula: "On x-axis: (x, 0)\nOn y-axis: (0, y)\nAt origin: (0, 0)", explanation: "Points on axes have one coordinate as zero." },
    { id: "f5", title: "Distance Formula", formula: "d = √[(x₂-x₁)² + (y₂-y₁)²]", explanation: "Distance between two points using Pythagoras theorem." },
    { id: "f6", title: "Distance from Origin", formula: "d = √(x² + y²)", explanation: "Special case when one point is origin (0,0)." },
    { id: "f7", title: "Plotting Points", formula: "Move right/left for x-value\nMove up/down for y-value", explanation: "How to locate a point on the coordinate plane." },
  ],
  
  // Lines and Angles Class 9
  "geo9-2": [
    { id: "f1", title: "Types of Angles", formula: "Acute: 0° < θ < 90°\nRight: θ = 90°\nObtuse: 90° < θ < 180°\nStraight: θ = 180°\nReflex: 180° < θ < 360°", explanation: "Classification of angles based on their measure." },
    { id: "f2", title: "What are Complementary Angles?", formula: "∠A + ∠B = 90°\nExample: 30° + 60° = 90°", explanation: "Definition: Two angles whose sum is 90° (right angle)." },
    { id: "f3", title: "What are Supplementary Angles?", formula: "∠A + ∠B = 180°\nExample: 110° + 70° = 180°", explanation: "Definition: Two angles whose sum is 180° (straight angle)." },
    { id: "f4", title: "Linear Pair", formula: "Adjacent angles on a line\n∠1 + ∠2 = 180°", explanation: "Two adjacent angles that form a straight line." },
    { id: "f5", title: "Vertically Opposite Angles", formula: "When two lines intersect:\n∠1 = ∠3 and ∠2 = ∠4", explanation: "Opposite angles are always equal when two lines cross." },
    { id: "f6", title: "Parallel Lines + Transversal", formula: "Corresponding angles equal\nAlternate angles equal\nCo-interior angles = 180°", explanation: "Properties when a line cuts two parallel lines." },
    { id: "f7", title: "Angle Sum of Triangle", formula: "∠A + ∠B + ∠C = 180°", explanation: "Sum of interior angles of any triangle is always 180°." },
    { id: "f8", title: "Exterior Angle Theorem", formula: "Exterior angle = Sum of two interior opposite angles\n∠ACD = ∠A + ∠B", explanation: "Angle formed by extending one side equals sum of non-adjacent interior angles." },
    { id: "f9", title: "Adjacent Angles", formula: "Angles sharing a common vertex and side", explanation: "Definition: Angles next to each other with a shared arm." },
  ],
  
  // Triangles Class 9
  "geo9-3": [
    { id: "f1", title: "Congruent Triangles", formula: "Same shape AND same size\nAll corresponding sides and angles equal", explanation: "Triangles that are exactly identical in every way." },
    { id: "f2", title: "SSS Rule", formula: "Three sides equal → Triangles congruent\nAB=PQ, BC=QR, CA=RP", explanation: "Side-Side-Side: If all three sides match, triangles are congruent." },
    { id: "f3", title: "SAS Rule", formula: "Two sides and included angle equal → Congruent\nThe angle must be between the two sides", explanation: "Side-Angle-Side: Two sides and the angle between them." },
    { id: "f4", title: "ASA Rule", formula: "Two angles and included side equal → Congruent\nThe side must be between the two angles", explanation: "Angle-Side-Angle: Two angles and the side between them." },
    { id: "f5", title: "AAS Rule", formula: "Two angles and one side equal → Congruent", explanation: "Angle-Angle-Side: Two angles and any corresponding side." },
    { id: "f6", title: "RHS Rule", formula: "Right angle, Hypotenuse, Side equal → Congruent\nFor right-angled triangles only", explanation: "For right triangles: if hypotenuse and one side match." },
    { id: "f7", title: "Isosceles Triangle", formula: "Two equal sides → Two equal angles\nTwo equal angles → Two equal sides\nAB = AC means ∠B = ∠C", explanation: "Property: Sides opposite to equal angles are equal and vice versa." },
    { id: "f8", title: "Triangle Inequality", formula: "Sum of any two sides > Third side\na + b > c\nb + c > a\nc + a > b", explanation: "Three lengths can form triangle only if this condition is satisfied." },
  ],
  
  // Quadrilaterals Class 9
  "geo9-4": [
    { id: "f1", title: "Angle Sum Property", formula: "∠A + ∠B + ∠C + ∠D = 360°", explanation: "Sum of all interior angles of any quadrilateral is 360°." },
    { id: "f2", title: "Parallelogram Properties", formula: "• Opposite sides parallel: AB∥DC, AD∥BC\n• Opposite sides equal: AB=DC, AD=BC\n• Diagonals bisect each other\n• Adjacent angles supplementary", explanation: "Quadrilateral with both pairs of opposite sides parallel." },
    { id: "f3", title: "Rectangle Properties", formula: "• All angles = 90°\n• Opposite sides equal\n• Diagonals equal and bisect each other\nAC = BD", explanation: "Parallelogram with all right angles." },
    { id: "f4", title: "Rhombus Properties", formula: "• All sides equal: AB=BC=CD=DA\n• Opposite angles equal\n• Diagonals bisect at 90°", explanation: "Parallelogram with all sides equal." },
    { id: "f5", title: "Square Properties", formula: "• All sides equal, all angles 90°\n• Diagonals equal and bisect at 90°", explanation: "Rectangle with all sides equal (or Rhombus with right angles)." },
    { id: "f6", title: "Mid-Point Theorem", formula: "Line joining mid-points of two sides is parallel to third side and half its length\nEF ∥ BC and EF = BC/2", explanation: "Important property used in many geometry problems." },
  ],
  
  // Areas of Parallelograms Class 9
  "geo9-5": [
    { id: "f1", title: "Area of Parallelogram", formula: "Area = base × height\nA = b × h", explanation: "Height is perpendicular distance between parallel sides." },
    { id: "f2", title: "Area of Triangle", formula: "Area = ½ × base × height\nA = ½ × b × h", explanation: "Half the area of parallelogram with same base and height." },
    { id: "f3", title: "Equal Areas Theorem", formula: "Parallelograms on same base and between same parallels have equal area", explanation: "Area depends only on base and perpendicular distance." },
    { id: "f4", title: "Triangles Equal Area", formula: "Triangles on same base and between same parallels have equal area", explanation: "Same principle applies to triangles." },
    { id: "f5", title: "Median Property", formula: "Median divides triangle into two equal areas", explanation: "Each part has half the area of original triangle." },
  ],
  
  // Circles Class 9
  "geo9-6": [
    { id: "f1", title: "Circle Definition", formula: "Set of all points equidistant from center\nRadius = distance from center to any point on circle", explanation: "A closed curve where every point is same distance from center." },
    { id: "f2", title: "Chord and Diameter", formula: "Chord: Line joining two points on circle\nDiameter: Longest chord = 2 × radius", explanation: "Diameter passes through center and is the longest chord." },
    { id: "f3", title: "Equal Chords Property", formula: "Equal chords are equidistant from center\nIf AB = CD, then distance from O to AB = distance from O to CD", explanation: "If two chords are equal, their perpendicular distances from center are equal." },
    { id: "f4", title: "Perpendicular from Center", formula: "Perpendicular from center to chord bisects the chord\nAM = MB", explanation: "The perpendicular divides the chord into two equal parts." },
    { id: "f5", title: "Angle at Center", formula: "Angle at center = 2 × Angle at circumference\n∠AOB = 2 × ∠APB", explanation: "For same arc, central angle is double the inscribed angle." },
    { id: "f6", title: "Angles in Same Segment", formula: "Angles in same segment are equal\n∠APB = ∠AQB for same arc AB", explanation: "All angles subtended by same arc on same side are equal." },
    { id: "f7", title: "Angle in Semicircle", formula: "Angle in semicircle = 90°\n∠APB = 90° (where AB is diameter)", explanation: "Angle subtended by diameter at any point on circle is 90°." },
    { id: "f8", title: "Cyclic Quadrilateral", formula: "Opposite angles sum to 180°\n∠A + ∠C = 180°\n∠B + ∠D = 180°", explanation: "Quadrilateral with all vertices on a circle." },
  ],
  
  // Constructions Class 9
  "geo9-7": [
    { id: "f1", title: "Basic Tools", formula: "Compass and Straightedge only\nNo measurements allowed", explanation: "Classical geometric constructions use only these two tools." },
    { id: "f2", title: "Perpendicular Bisector", formula: "Draw arcs from endpoints with radius > half segment\nJoin intersection points", explanation: "Creates line perpendicular to segment at its midpoint." },
    { id: "f3", title: "Angle Bisector", formula: "Draw arc from vertex\nFrom arc points, draw equal arcs\nJoin vertex to intersection", explanation: "Divides angle into two equal parts." },
    { id: "f4", title: "60° Angle", formula: "Draw arc from point\nWith same radius, mark on arc\nJoin to form 60°", explanation: "Based on equilateral triangle property." },
    { id: "f5", title: "90° Angle", formula: "Bisect a 180° angle\nOr construct perpendicular", explanation: "Right angle construction." },
    { id: "f6", title: "Triangle (SSS)", formula: "Draw base, then arcs with side lengths\nJoin intersection to base points", explanation: "Construct triangle when three sides are given." },
  ],
  
  // Heron's Formula Class 9
  "geo9-8": [
    { id: "f1", title: "What is Heron's Formula?", formula: "A formula to find area of triangle using only its sides\nNo need to find height!", explanation: "Definition: Named after Greek mathematician Hero of Alexandria." },
    { id: "f2", title: "Semi-Perimeter", formula: "s = (a + b + c)/2", explanation: "Half the perimeter of triangle. First step in using Heron's formula." },
    { id: "f3", title: "Heron's Formula", formula: "Area = √[s(s-a)(s-b)(s-c)]", explanation: "Find area of triangle using only three sides - no height needed." },
    { id: "f4", title: "Equilateral Triangle", formula: "Area = (√3/4) × a²\nwhere a = side length", explanation: "Derived from Heron's formula when all sides equal a." },
    { id: "f5", title: "Isosceles Triangle", formula: "Area = (b/4)√(4a² - b²)\na = equal sides, b = base", explanation: "Special case where two sides are equal." },
    { id: "f6", title: "Quadrilateral Area", formula: "Divide into triangles\nAdd their areas", explanation: "Use Heron's formula for each triangle in the quadrilateral." },
    { id: "f7", title: "When to Use Heron's", formula: "Use when:\n• Three sides are given\n• Height is not known\n• Cannot find height easily", explanation: "Choose Heron's formula when you have all three sides." },
  ],
  
  // Surface Areas and Volumes Class 9
  "geo9-9": [
    { id: "f1", title: "Cuboid", formula: "LSA = 2h(l + b)\nTSA = 2(lb + bh + hl)\nVolume = l × b × h", explanation: "3D shape with 6 rectangular faces. l = length, b = breadth, h = height." },
    { id: "f2", title: "Cube", formula: "LSA = 4a²\nTSA = 6a²\nVolume = a³", explanation: "Special cuboid with all sides equal. a = side." },
    { id: "f3", title: "Cylinder", formula: "CSA = 2πrh\nTSA = 2πr(r + h)\nVolume = πr²h", explanation: "Circular base with uniform height. r = radius, h = height." },
    { id: "f4", title: "Cone", formula: "CSA = πrl\nTSA = πr(r + l)\nVolume = (1/3)πr²h\nl = √(r² + h²)", explanation: "Circular base tapering to a point. l = slant height." },
    { id: "f5", title: "Sphere", formula: "Surface Area = 4πr²\nVolume = (4/3)πr³", explanation: "Perfectly round 3D shape. r = radius." },
    { id: "f6", title: "Hemisphere", formula: "CSA = 2πr²\nTSA = 3πr²\nVolume = (2/3)πr³", explanation: "Half of a sphere." },
  ],
  
  // ============ GEOMETRY CLASS 10 ============
  
  // Triangles Similarity Class 10
  "geo10-1": [
    { id: "f1", title: "Similar Triangles", formula: "Same shape, may differ in size\nCorresponding angles equal\nCorresponding sides proportional\n△ABC ~ △PQR", explanation: "Triangles with same shape but possibly different sizes." },
    { id: "f2", title: "AA Similarity", formula: "Two angles equal → Triangles similar\n∠A = ∠P and ∠B = ∠Q ⟹ △ABC ~ △PQR", explanation: "If two angles match, third automatically matches (sum = 180°)." },
    { id: "f3", title: "SSS Similarity", formula: "All corresponding sides proportional → Similar\nAB/PQ = BC/QR = CA/RP", explanation: "Ratio of corresponding sides must be equal." },
    { id: "f4", title: "SAS Similarity", formula: "Two sides proportional + Included angle equal → Similar\nAB/PQ = AC/PR and ∠A = ∠P", explanation: "Ratio of two sides equal and angle between them equal." },
    { id: "f5", title: "BPT (Thales Theorem)", formula: "Line parallel to one side divides other two proportionally\nDE ∥ BC ⟹ AD/DB = AE/EC", explanation: "Basic Proportionality Theorem - fundamental in similarity." },
    { id: "f6", title: "Area Ratio", formula: "Area ratio = (Side ratio)²\nIf AB/PQ = k\nThen Area(△ABC)/Area(△PQR) = k²", explanation: "If sides are in ratio k, areas are in ratio k²." },
    { id: "f7", title: "Pythagoras Theorem", formula: "c² = a² + b²\nHypotenuse² = Base² + Perpendicular²\n(In right triangle where c is hypotenuse)", explanation: "In right triangle, square of hypotenuse equals sum of squares of other sides." },
    { id: "f8", title: "Converse of Pythagoras", formula: "If c² = a² + b², triangle is right-angled\nExample: 3² + 4² = 9 + 16 = 25 = 5²\nSo 3,4,5 forms right triangle", explanation: "Test whether a triangle is right-angled." },
    { id: "f9", title: "Pythagorean Triplets", formula: "Common triplets:\n3, 4, 5 | 5, 12, 13 | 8, 15, 17\n7, 24, 25 | 9, 40, 41", explanation: "Memorize these - they save calculation time!" },
    { id: "f10", title: "Altitude on Hypotenuse", formula: "In right △ABC with altitude BD on AC:\nBD² = AD × DC\nAB² = AD × AC\nBC² = DC × AC", explanation: "Important results when altitude is drawn to hypotenuse." },
  ],
  
  // Coordinate Geometry Class 10
  "geo10-2": [
    { id: "f1", title: "Distance Formula", formula: "d = √[(x₂-x₁)² + (y₂-y₁)²]", explanation: "Distance between points (x₁,y₁) and (x₂,y₂)." },
    { id: "f2", title: "Section Formula (Internal)", formula: "P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))", explanation: "Point dividing line segment internally in ratio m:n." },
    { id: "f3", title: "Mid-Point Formula", formula: "M = ((x₁+x₂)/2, (y₁+y₂)/2)", explanation: "Special case of section formula when m = n = 1." },
    { id: "f4", title: "Area of Triangle", formula: "Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|", explanation: "Area using coordinates of three vertices." },
    { id: "f5", title: "Collinearity", formula: "Three points collinear if area = 0", explanation: "Points are on same line if triangle area is zero." },
    { id: "f6", title: "Centroid", formula: "G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)", explanation: "Point where all three medians meet." },
  ],
  
  // Circles Class 10
  "geo10-3": [
    { id: "f1", title: "What is a Tangent?", formula: "Line touching circle at exactly one point\nT = point of contact", explanation: "Definition: A line that just touches the circle without crossing it." },
    { id: "f2", title: "Tangent ⊥ Radius", formula: "Tangent is perpendicular to radius at point of contact\nOT ⊥ Tangent line", explanation: "The tangent makes 90° with the radius at that point." },
    { id: "f3", title: "Equal Tangents", formula: "Tangents from external point are equal\nPA = PB\n(P is external point, A and B are contact points)", explanation: "Two tangents drawn from same external point have equal length." },
    { id: "f4", title: "Tangent Length Formula", formula: "Length = √(d² - r²)\nd = distance from center to external point\nPT² = PO² - OT²", explanation: "Using Pythagoras theorem in the tangent-radius-distance triangle." },
    { id: "f5", title: "Angle Between Tangents", formula: "∠APB = 180° - ∠AOB\n(P = external point, A,B = contact points, O = center)", explanation: "Angle between tangents from P, where A,B are points of contact, O is center." },
    { id: "f6", title: "What is a Secant?", formula: "Line that cuts circle at TWO points", explanation: "Definition: A line passing through two points on a circle." },
    { id: "f7", title: "Common Tangents", formula: "Two circles can have:\n4 (separate), 3 (external touch)\n2 (intersecting), 1 (internal touch)\n0 (one inside other)", explanation: "Number of common tangents depends on positions of circles." },
  ],
  
  // Constructions Class 10
  "geo10-4": [
    { id: "f1", title: "Divide Line in Ratio", formula: "Draw ray at acute angle\nMark m+n equal parts\nUse parallel lines to divide", explanation: "To divide segment AB in ratio m:n." },
    { id: "f2", title: "Similar Triangle Construction", formula: "Draw ray at acute angle to base\nMark points for scale factor\nUse parallel lines", explanation: "Construct triangle similar to given triangle with different size." },
    { id: "f3", title: "Tangent from External Point", formula: "Join O to P\nFind midpoint M of OP\nDraw circle with M as center, MO as radius", explanation: "The circle through O and P intersects given circle at tangent points." },
    { id: "f4", title: "Tangent at Point on Circle", formula: "Draw radius to the point\nConstruct perpendicular at that point", explanation: "The perpendicular to radius at any point is the tangent." },
  ],
  
  // Areas Related to Circles Class 10
  "geo10-5": [
    { id: "f1", title: "Circumference", formula: "C = 2πr = πd", explanation: "Perimeter or boundary length of circle. d = diameter." },
    { id: "f2", title: "Area of Circle", formula: "A = πr²", explanation: "Space enclosed by circle." },
    { id: "f3", title: "Arc Length", formula: "Arc = (θ/360°) × 2πr", explanation: "Length of arc that subtends angle θ at center." },
    { id: "f4", title: "Area of Sector", formula: "Sector = (θ/360°) × πr²", explanation: "'Pizza slice' shaped region. θ is central angle." },
    { id: "f5", title: "Area of Segment", formula: "Segment = Sector - Triangle\n= (θ/360°)πr² - ½r²sinθ", explanation: "Region between chord and arc." },
    { id: "f6", title: "Perimeter of Sector", formula: "P = Arc length + 2r", explanation: "Boundary of sector = arc + two radii." },
    { id: "f7", title: "Area of Ring", formula: "Ring = π(R² - r²)", explanation: "Area between two concentric circles. R = outer, r = inner radius." },
  ],
  
  // Surface Areas and Volumes Class 10
  "geo10-6": [
    { id: "f1", title: "Combination of Solids", formula: "Add/subtract volumes and surface areas based on combination", explanation: "For composite shapes, calculate each part separately." },
    { id: "f2", title: "Frustum CSA", formula: "CSA = π(r₁ + r₂)l\nl = √[h² + (r₁-r₂)²]", explanation: "Cone with top cut off parallel to base." },
    { id: "f3", title: "Frustum TSA", formula: "TSA = π(r₁ + r₂)l + πr₁² + πr₂²", explanation: "Curved surface + both circular ends." },
    { id: "f4", title: "Frustum Volume", formula: "V = (1/3)πh(r₁² + r₂² + r₁r₂)", explanation: "r₁, r₂ = radii of two ends, h = height." },
    { id: "f5", title: "Conversion of Solids", formula: "Volume before = Volume after", explanation: "When reshaping (melting/recasting), total volume stays same." },
    { id: "f6", title: "Hemisphere Formulas", formula: "CSA = 2πr²\nTSA = 3πr²\nVolume = (2/3)πr³", explanation: "Half of sphere - used in many combination problems." },
  ],
};

// Get chapters for a subject and class
export function getChaptersForSubjectAndClass(subject: Subject, classLevel: 9 | 10): Chapter[] {
  let allChapters: Chapter[];
  
  switch (subject) {
    case "algebra":
      allChapters = algebraChapters;
      break;
    case "trigonometry":
      allChapters = trigonometryChapters;
      break;
    case "geometry":
      allChapters = geometryChapters;
      break;
    default:
      allChapters = [];
  }
  
  return allChapters.filter(ch => ch.classLevel === classLevel);
}

// Get formulas for a chapter
export function getFormulasForChapter(chapterId: string): Formula[] {
  return formulaData[chapterId] || [];
}
