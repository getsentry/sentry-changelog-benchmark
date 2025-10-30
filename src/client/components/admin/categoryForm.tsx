"use client";

import type React from "react";
import { useState } from "react";

interface CategoryFormProps {
  onSubmit: (name: string) => Promise<void>;
  initialName?: string;
  submitLabel: string;
}

export function CategoryForm({
  onSubmit,
  initialName = "",
  submitLabel,
}: CategoryFormProps) {
  const [name, setName] = useState(initialName);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Category name is required");
      return;
    }

    setLoading(true);
    try {
      await onSubmit(name.trim());
      setName("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="categoryName"
          className="block text-sm font-medium text-gray-700"
        >
          Category Name
        </label>
        <input
          type="text"
          id="categoryName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          placeholder="Enter category name"
          disabled={loading}
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {loading ? "Processing..." : submitLabel}
      </button>
    </form>
  );
}
