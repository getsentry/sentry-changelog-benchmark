import type { ArchiveChangelog } from "@/server/actions/archive";
import Link from "next/link";
import React from "react";
import { CategoryTag } from "../tag";

interface ArchiveListProps {
  changelogs: ArchiveChangelog[];
  year: number;
  month: number;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function ArchiveList({ changelogs, year, month }: ArchiveListProps) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {MONTH_NAMES[month - 1]} {year}
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          {changelogs.length} changelog{changelogs.length !== 1 ? "s" : ""}
        </p>
      </div>

      {changelogs.length > 0 ? (
        <div className="space-y-4">
          {changelogs.map((changelog) => (
            <Link
              key={changelog.id}
              href={`/changelog/${changelog.slug}`}
              className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600">
                  {changelog.title}
                </h3>
                {changelog.publishedAt && (
                  <time className="text-sm text-gray-500">
                    {new Date(changelog.publishedAt).toLocaleDateString()}
                  </time>
                )}
              </div>

              {changelog.summary && (
                <p className="mt-2 line-clamp-2 text-gray-600">
                  {changelog.summary}
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {changelog.categories.map((category) => (
                  <CategoryTag key={category.id} text={category.name} />
                ))}
                {changelog.author && (
                  <span className="text-sm text-gray-500">
                    by {changelog.author.name || changelog.author.email}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500">No changelogs published this month.</p>
        </div>
      )}
    </div>
  );
}
