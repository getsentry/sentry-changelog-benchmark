"use client";

import { SearchFilters } from "@/client/components/search/searchFilters";
import { SearchResults } from "@/client/components/search/searchResults";
import {
  type SearchResult,
  getAllAuthors,
  getAllCategories,
  searchChangelogs,
} from "@/server/actions/search";
import { useSearchParams } from "next/navigation";
import type React from "react";
import { useCallback, useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<
    Array<{ id: string; name: string }>
  >([]);
  const [authors, setAuthors] = useState<
    Array<{ id: string; name: string | null; email: string | null }>
  >([]);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    authors: [] as string[],
    dateFrom: "",
    dateTo: "",
  });

  // Load categories and authors on mount
  useEffect(() => {
    const loadFilters = async () => {
      const [cats, auths] = await Promise.all([
        getAllCategories(),
        getAllAuthors(),
      ]);
      setCategories(cats);
      setAuthors(auths);
    };
    loadFilters();
  }, []);

  // Perform search
  const performSearch = useCallback(async () => {
    setLoading(true);
    try {
      const searchResults = await searchChangelogs({
        query: query || undefined,
        categories:
          filters.categories.length > 0 ? filters.categories : undefined,
        authors: filters.authors.length > 0 ? filters.authors : undefined,
        dateFrom: filters.dateFrom || undefined,
        dateTo: filters.dateTo || undefined,
        publishedOnly: true,
      });
      setResults(searchResults);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [query, filters]);

  // Search on initial load if query exists
  // biome-ignore lint/correctness/useExhaustiveDependencies: performSearch is memoized and shouldn't trigger re-renders
  useEffect(() => {
    if (initialQuery) {
      performSearch();
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Search Changelogs</h1>
        <p className="mt-2 text-gray-600">
          Search through all published changelogs
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search changelogs..."
            className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-base focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-purple-600 px-6 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {/* Filters and Results */}
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <SearchFilters
            categories={categories}
            authors={authors}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="rounded-lg border border-gray-200 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />
              <p className="mt-4 text-gray-600">Searching...</p>
            </div>
          ) : (
            <SearchResults results={results} query={query} />
          )}
        </div>
      </div>
    </div>
  );
}
