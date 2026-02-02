// src/search/searchQueryEngine.ts
// --------------------------------------------------
// SEARCH QUERY ENGINE
//
// Purpose:
// Executes user queries against the global
// search index produced by searchIndexBuilder.
//
// Features:
// - Partial matching
// - Tokenization
// - Ranking by relevance
// - Offline operation
// - Optimized for mobile
//
// Used by:
// - Header search bar
// - Voice search
// --------------------------------------------------

import { SearchIndexItem } from "./searchIndexBuilder";

/* --------------------------------------------------
   HELPERS
-------------------------------------------------- */

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(/[\s,.-]+/)
    .filter(Boolean);
}

/* --------------------------------------------------
   SCORING ENGINE
-------------------------------------------------- */

function scoreItem(item: SearchIndexItem, tokens: string[]): number {
  let score = 0;

  tokens.forEach((token) => {
    if (item.title.toLowerCase().includes(token)) score += 5;
    if (item.subtitle?.toLowerCase().includes(token)) score += 3;

    item.keywords.forEach((kw) => {
      if (kw.includes(token)) score += 4;
    });

    if (item.exerciseNumber?.includes(token)) score += 2;
    if (item.questionNumber?.includes(token)) score += 2;
  });

  return score;
}

/* --------------------------------------------------
   MAIN QUERY FUNCTION
-------------------------------------------------- */

export function runSearchQuery(
  query: string,
  index: SearchIndexItem[],
  limit = 40
): SearchIndexItem[] {
  if (!query.trim()) return [];

  const tokens = tokenize(query);

  const scored = index
    .map((item) => ({
      item,
      score: scoreItem(item, tokens),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.item);

  return scored;
}
