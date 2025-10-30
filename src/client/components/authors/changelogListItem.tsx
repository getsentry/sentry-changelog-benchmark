import Link from "next/link";
import React from "react";
import { CategoryTag } from "../tag";

interface ChangelogListItemProps {
  title: string;
  slug: string;
  publishedAt: Date | null;
  summary: string | null;
  categories: Array<{
    id: string;
    name: string;
  }>;
}

export function ChangelogListItem({
  title,
  slug,
  publishedAt,
  summary,
  categories,
}: ChangelogListItemProps) {
  return (
    <Link
      href={`/changelog/${slug}`}
      className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600">
          {title}
        </h3>
        {publishedAt && (
          <time className="text-sm text-gray-500">
            {new Date(publishedAt).toLocaleDateString()}
          </time>
        )}
      </div>

      {summary && <p className="mt-2 line-clamp-2 text-gray-600">{summary}</p>}

      {categories.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <CategoryTag key={category.id} text={category.name} />
          ))}
        </div>
      )}
    </Link>
  );
}
