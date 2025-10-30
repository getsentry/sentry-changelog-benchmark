import { MonthCalendar } from "@/client/components/archive/monthCalendar";
import { getArchiveMonths } from "@/server/actions/archive";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive - Sentry Changelog",
  description: "Browse Sentry Changelog archives by date",
};

export default async function ArchivePage() {
  const months = await getArchiveMonths();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Changelog Archive</h1>
        <p className="mt-2 text-gray-600">
          Browse all changelogs organized by date
        </p>
      </div>

      <MonthCalendar months={months} />
    </div>
  );
}
