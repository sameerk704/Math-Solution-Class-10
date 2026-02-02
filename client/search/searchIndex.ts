// src/search/searchIndex.ts
// --------------------------------------------------
// GLOBAL SEARCH INDEX HOLDER
//
// Purpose:
// - Builds the search index once.
// - Stores it in memory.
// - Exposes getter for other systems.
//
// Used by:
// - SearchProvider
// - Debug tools
//
// Source:
// - searchIndexBuilder.ts
// --------------------------------------------------

import { buildSearchIndex, SearchIndexItem } from "./searchIndexBuilder";

/* --------------------------------------------------
   INTERNAL CACHE
-------------------------------------------------- */

let cachedIndex: SearchIndexItem[] | null = null;

/* --------------------------------------------------
   BUILD + GET
-------------------------------------------------- */

export async function loadSearchIndex(): Promise<SearchIndexItem[]> {
  if (!cachedIndex) {
    cachedIndex = buildSearchIndex();
  }

  return cachedIndex;
}

export function getSearchIndex(): SearchIndexItem[] {
  if (!cachedIndex) {
    throw new Error(
      "Search index not loaded yet. Call loadSearchIndex() first."
    );
  }

  return cachedIndex;
}
