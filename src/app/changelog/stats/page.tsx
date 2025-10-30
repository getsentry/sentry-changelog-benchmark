import { ActivityFeed } from "@/client/components/stats/activityFeed";
import { BarChart } from "@/client/components/stats/barChart";
import { StatsCard } from "@/client/components/stats/statsCard";
import { getChangelogStats } from "@/server/actions/stats";
import { authOptions } from "@/server/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Statistics - Sentry Changelog",
  description: "View statistics and analytics for the Sentry Changelog",
};

export default async function StatsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const stats = await getChangelogStats();

  if (!stats) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500">
          Unable to load statistics. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Changelog Statistics
        </h1>
        <p className="mt-2 text-gray-600">
          Overview of your changelog performance and activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Changelogs"
          value={stats.totalChangelogs}
          subtitle="All changelogs"
        />
        <StatsCard
          title="Published"
          value={stats.publishedChangelogs}
          subtitle="Live on site"
        />
        <StatsCard
          title="Drafts"
          value={stats.draftChangelogs}
          subtitle="Unpublished"
        />
        <StatsCard
          title="Categories"
          value={stats.totalCategories}
          subtitle="Active categories"
        />
      </div>

      {/* Charts Section */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <BarChart
          title="Changelogs by Month"
          data={stats.changelogsByMonth.map((item) => ({
            label: item.month,
            value: item.count,
          }))}
        />
        <BarChart
          title="Changelogs by Category"
          data={stats.changelogsByCategory.map((item) => ({
            label: item.category,
            value: item.count,
          }))}
        />
      </div>

      {/* Activity and Top Authors */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ActivityFeed activities={stats.recentActivity} />

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Top Authors
          </h3>
          <div className="space-y-3">
            {stats.topAuthors.map((author, index) => (
              <div
                key={author.email || index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {author.name}
                    </p>
                    <p className="text-xs text-gray-500">{author.email}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {author.count} post{author.count !== 1 ? "s" : ""}
                </span>
              </div>
            ))}
            {stats.topAuthors.length === 0 && (
              <p className="py-4 text-center text-sm text-gray-500">
                No authors found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
