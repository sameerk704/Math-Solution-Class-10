// src/search/SearchProvider.tsx
// --------------------------------------------------
// GLOBAL SEARCH PROVIDER
//
// Purpose:
// - Builds offline search index once at app launch.
// - Stores index in React Context.
// - Exposes query API to entire app.
// - Used by header search bar, screens, voice search.
//
// Depends on:
// - searchIndexBuilder.ts
// - searchEngine.ts
//
// --------------------------------------------------

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import {
  buildSearchIndex,
  SearchIndexItem,
} from "@/search/searchIndexBuilder";

import {
  runSearch,
  SearchQueryOptions,
} from "@/search/searchEngine";

/* --------------------------------------------------
   TYPES
-------------------------------------------------- */

interface SearchContextValue {
  ready: boolean;
  index: SearchIndexItem[];
  search: (
    query: string,
    options?: SearchQueryOptions
  ) => SearchIndexItem[];
}

/* --------------------------------------------------
   CONTEXT
-------------------------------------------------- */

const SearchContext = createContext<SearchContextValue | null>(
  null
);

/* --------------------------------------------------
   PROVIDER
-------------------------------------------------- */

export function SearchProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [index, setIndex] = useState<SearchIndexItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const idx = buildSearchIndex();
    setIndex(idx);
    setReady(true);

    console.log("🔍 Search index ready:", idx.length);
  }, []);

  const value = useMemo<SearchContextValue>(
    () => ({
      ready,
      index,
      search: (query, options) =>
        runSearch(query, index, options),
    }),
    [ready, index]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

/* --------------------------------------------------
   HOOK
-------------------------------------------------- */

export function useSearch() {
  const ctx = useContext(SearchContext);

  if (!ctx) {
    throw new Error(
      "useSearch must be used inside SearchProvider"
    );
  }

  return ctx;
}
