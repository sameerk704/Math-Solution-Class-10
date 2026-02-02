// src/search/SearchProvider.tsx
// --------------------------------------------------
// GLOBAL SEARCH PROVIDER
//
// Purpose:
// - Builds the global offline search index once.
// - Stores it in memory.
// - Exposes search() function to entire app.
// - Used by StaticHeader search bar & voice.
//
// Powered by:
// - searchIndexBuilder.ts
// - searchQueryEngine.ts
//
// Wraps App root.
// --------------------------------------------------

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { buildSearchIndex, SearchIndexItem } from "./searchIndexBuilder";
import { runSearchQuery } from "./searchQueryEngine";

/* --------------------------------------------------
   TYPES
-------------------------------------------------- */

interface SearchContextValue {
  ready: boolean;
  search: (query: string) => SearchIndexItem[];
  index: SearchIndexItem[];
}

/* --------------------------------------------------
   CONTEXT
-------------------------------------------------- */

const SearchContext = createContext<SearchContextValue | null>(null);

/* --------------------------------------------------
   PROVIDER
-------------------------------------------------- */

export function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState<SearchIndexItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const build = async () => {
      const builtIndex = await buildSearchIndex();
      setIndex(builtIndex);
      setReady(true);
    };

    build();
  }, []);

  const search = useMemo(
    () => (query: string) => {
      return runSearchQuery(query, index);
    },
    [index]
  );

  const value: SearchContextValue = {
    ready,
    search,
    index,
  };

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
    throw new Error("useSearch must be used inside SearchProvider");
  }

  return ctx;
}
