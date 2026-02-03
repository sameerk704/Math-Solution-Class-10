
// src/search/searchEngine.ts
// --------------------------------------------------
// SEARCH ENGINE CORE
//
// Purpose:
// Performs fast querying on the offline
// search index created by searchIndexBuilder.
//
// Responsibilities:
// - Normalize queries
// - Tokenize words
// - Score matches
// - Rank results
// - Return best hits
//
// This is UI-agnostic and reusable everywhere.
//
// --------------------------------------------------

import {
  SearchIndexItem,
  SearchItemType,
} from "@/search/searchIndexBuilder";

/* --------------------------------------------------
   CONFIG
-------------------------------------------------- */

const MAX_RESULTS = 50;

/* --------------------------------------------------
   HELPERS
-------------------------------------------------- */

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9.() ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text).split(" ");
}

/* --------------------------------------------------
   SCORING LOGIC
-------------------------------------------------- */

function scoreItem(
  item: SearchIndexItem,
  tokens: string[]
): number {
  let score = 0;

  const haystack = item.searchText;

  for (const token of tokens) {
    if (!token) continue;

    // strong full-word match
    if (haystack.includes(token)) {
      score += 10;
    }

    // prefix match
    if (
      haystack
        .split(" ")
        .some((word) => word.startsWith(token))
    ) {
      score += 5;
    }
  }

  // boost more specific types
  if (item.type === "question-part") score += 8;
  if (item.type === "question") score += 6;
  if (item.type === "exercise") score += 4;

  return score;
}

/* --------------------------------------------------
   PUBLIC SEARCH API
-------------------------------------------------- */

export interface SearchQueryOptions {
  limit?: number;
  types?: SearchItemType[];
}

export function runSearch(
  query: string,
  index: SearchIndexItem[],
  options: SearchQueryOptions = {}
): SearchIndexItem[] {
  if (!query.trim()) return [];

  const tokens = tokenize(query);

  const scored = index
    .map((item) => ({
      item,
      score: scoreItem(item, tokens),
    }))
    .filter((row) => row.score > 0);

  scored.sort((a, b) => b.score - a.score);

  const limit = options.limit ?? MAX_RESULTS;

  let results = scored.slice(0, limit).map((r) => r.item);

  if (options.types?.length) {
    results = results.filter((r) =>
      options.types!.includes(r.type)
    );
  }

  return results;
}
