import { getAllAuthorsWithStats } from "@/server/actions/user";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authors - Sentry Changelog",
  description: "Browse all authors who contribute to the Sentry Changelog",
};

export default async function AuthorsPage() {
  const authors = await getAllAuthorsWithStats();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Authors</h1>
        <p className="mt-2 text-gray-600">
          Meet the team behind the Sentry Changelog
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/changelog/authors/${author.id}`}
            className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {author.image ? (
                  <img
                    src={author.image}
                    alt={author.name || "Author"}
                    className="h-16 w-16 rounded-full"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-xl font-bold text-purple-600">
                    {(author.name || author.email || "?")
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="truncate text-lg font-semibold text-gray-900">
                  {author.name || "Unknown"}
                </h3>
                {author.email && (
                  <p className="truncate text-sm text-gray-600">
                    {author.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <div>
                <p className="text-sm text-gray-500">Changelogs</p>
                <p className="text-xl font-semibold text-gray-900">
                  {author.changelogCount}
                </p>
              </div>
              {author.latestPublishedAt && (
                <div className="text-right">
                  <p className="text-sm text-gray-500">Latest</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(author.latestPublishedAt).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </Link>
        ))}

        {authors.length === 0 && (
          <div className="col-span-full rounded-lg border border-gray-200 bg-white p-12 text-center">
            <p className="text-gray-500">No authors found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
