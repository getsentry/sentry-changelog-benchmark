"use client";

import React, { useState } from "react";
import Select from "react-select";

interface Category {
  id: string;
  name: string;
}

interface Author {
  id: string;
  name: string | null;
  email: string | null;
}

interface SearchFiltersProps {
  categories: Category[];
  authors: Author[];
  onFilterChange: (filters: {
    categories: string[];
    authors: string[];
    dateFrom: string;
    dateTo: string;
  }) => void;
}

export function SearchFilters({
  categories,
  authors,
  onFilterChange,
}: SearchFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const categoryOptions = categories.map((cat) => ({
    value: cat.name,
    label: cat.name,
  }));

  const authorOptions = authors.map((author) => ({
    value: author.id,
    label: author.name || author.email || "Unknown",
  }));

  const handleApplyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      authors: selectedAuthors,
      dateFrom,
      dateTo,
    });
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedAuthors([]);
    setDateFrom("");
    setDateTo("");
    onFilterChange({
      categories: [],
      authors: [],
      dateFrom: "",
      dateTo: "",
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Filters</h3>

      <div className="space-y-4">
        {/* Categories */}
        <div>
          <label
            htmlFor="categories-select"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Categories
          </label>
          <Select
            inputId="categories-select"
            isMulti
            options={categoryOptions}
            value={categoryOptions.filter((opt) =>
              selectedCategories.includes(opt.value),
            )}
            onChange={(selected) => {
              setSelectedCategories(selected.map((s) => s.value));
            }}
            placeholder="Select categories..."
            className="text-sm"
          />
        </div>

        {/* Authors */}
        <div>
          <label
            htmlFor="authors-select"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Authors
          </label>
          <Select
            inputId="authors-select"
            isMulti
            options={authorOptions}
            value={authorOptions.filter((opt) =>
              selectedAuthors.includes(opt.value),
            )}
            onChange={(selected) => {
              setSelectedAuthors(selected.map((s) => s.value));
            }}
            placeholder="Select authors..."
            className="text-sm"
          />
        </div>

        {/* Date Range */}
        <div>
          <label
            htmlFor="date-from"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Date From
          </label>
          <input
            id="date-from"
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        <div>
          <label
            htmlFor="date-to"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Date To
          </label>
          <input
            id="date-to"
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <button
            type="button"
            onClick={handleApplyFilters}
            className="flex-1 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
