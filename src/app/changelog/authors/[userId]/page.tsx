import { AuthorCard } from "@/client/components/authors/authorCard";
import { ChangelogListItem } from "@/client/components/authors/changelogListItem";
import { getAuthorProfile } from "@/server/actions/user";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface AuthorPageProps {
  params: {
    userId: string;
  };
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const profile = await getAuthorProfile(params.userId);

  if (!profile) {
    return {
      title: "Author Not Found",
    };
  }

  return {
    title: `${profile.name || "Unknown Author"} - Sentry Changelog`,
    description: `Changelogs by ${
      profile.name || "this author"
    } on Sentry Changelog`,
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const profile = await getAuthorProfile(params.userId);

  if (!profile) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <AuthorCard
        name={profile.name}
        email={profile.email}
        image={profile.image}
        changelogCount={profile.changelogCount}
        firstPublishedAt={profile.firstPublishedAt}
        latestPublishedAt={profile.latestPublishedAt}
      />

      <div className="mt-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Changelogs by {profile.name || "this author"}
        </h2>

        {profile.changelogs.length > 0 ? (
          <div className="space-y-4">
            {profile.changelogs.map((changelog) => (
              <ChangelogListItem
                key={changelog.id}
                title={changelog.title}
                slug={changelog.slug}
                publishedAt={changelog.publishedAt}
                summary={changelog.summary}
                categories={changelog.categories}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
            <p className="text-gray-500">No published changelogs yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
