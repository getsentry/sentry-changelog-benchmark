import Image from "next/image";
import React from "react";

interface AuthorCardProps {
  name: string | null;
  email: string | null;
  image: string | null;
  changelogCount: number;
  firstPublishedAt: Date | null;
  latestPublishedAt: Date | null;
}

export function AuthorCard({
  name,
  email,
  image,
  changelogCount,
  firstPublishedAt,
  latestPublishedAt,
}: AuthorCardProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {image ? (
            <Image
              src={image}
              alt={name || "Author"}
              width={80}
              height={80}
              className="rounded-full"
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-2xl font-bold text-purple-600">
              {(name || email || "?").charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">
            {name || "Unknown Author"}
          </h2>
          {email && <p className="mt-1 text-sm text-gray-600">{email}</p>}

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Changelogs</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">
                {changelogCount}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">First Published</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {formatDate(firstPublishedAt)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Latest Published</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {formatDate(latestPublishedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
