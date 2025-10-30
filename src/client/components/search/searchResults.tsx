import type { SearchResult } from "@/server/actions/search";
import Link from "next/link";
import React from "react";
import { CategoryTag } from "../tag";

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

export function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-12 text-center shadow-sm">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Search icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          No results found
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {query
            ? `No changelogs match your search for "${query}"`
            : "Try adjusting your filters or search term"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-600">
        Found {results.length} result{results.length !== 1 ? "s" : ""}
        {query && ` for "${query}"`}
      </div>

      {results.map((result) => (
        <Link
          key={result.id}
          href={`/changelog/${result.slug}`}
          className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-semibold text-gray-900 hover:text-purple-600">
              {result.title}
            </h2>
            {result.publishedAt && (
              <time className="text-sm text-gray-500">
                {new Date(result.publishedAt).toLocaleDateString()}
              </time>
            )}
          </div>

          {result.summary && (
            <p className="mt-2 line-clamp-2 text-gray-600">{result.summary}</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {result.categories.map((category) => (
              <CategoryTag key={category.id} text={category.name} />
            ))}
            {result.author && (
              <span className="text-sm text-gray-500">
                by {result.author.name || result.author.email}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
