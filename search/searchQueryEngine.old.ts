// src/search/searchQueryEngine.ts
// --------------------------------------------------
// SEARCH QUERY ENGINE
//
// Purpose:
// Runs user queries against the global search index
// and returns ranked results.
//
// Supports:
// • partial words
// • NCERT numbering (3.2 / 5.1)
// • chapter names
// • voice transcription input
// • fuzzy contains matching
//
// Used by:
// - SearchProvider
// - Header Search Bar
// --------------------------------------------------

import { SearchIndexItem } from "./searchIndexBuilder";

/* --------------------------------------------------
   TYPES
-------------------------------------------------- */

export interface SearchResult extends SearchIndexItem {
  score: number;
}

/* --------------------------------------------------
   NORMALIZATION
-------------------------------------------------- */

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s.]/g, "")
    .trim();
}

/* --------------------------------------------------
   QUERY MATCHING
-------------------------------------------------- */

function scoreMatch(query: string, item: SearchIndexItem): number {
  let score = 0;

  const q = normalize(query);
  const tokens = q.split(" ");

  const label = normalize(item.label);
  const keywords = item.keywords.map(normalize);

  // Exact label match
  if (label === q) score += 100;

  // Label contains
  if (label.includes(q)) score += 60;

  // Token matches
  tokens.forEach((t) => {
    if (label.includes(t)) score += 20;
    if (keywords.includes(t)) score += 15;

    if (item.exerciseNumber === t) score += 50;
  });

  return score;
}

/* --------------------------------------------------
   MAIN QUERY FUNCTION
-------------------------------------------------- */

export function runSearchQuery(
  query: string,
  index: SearchIndexItem[],
  limit = 25
): SearchResult[] {
  if (!query.trim()) return [];

  const results: SearchResult[] = [];

  index.forEach((item) => {
    const score = scoreMatch(query, item);

    if (score > 0) {
      results.push({
        ...item,
        score,
      });
    }
  });

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
