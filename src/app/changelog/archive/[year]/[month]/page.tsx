import { ArchiveList } from "@/client/components/archive/archiveList";
import {
  getArchiveMonths,
  getChangelogsByMonth,
} from "@/server/actions/archive";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface ArchiveMonthPageProps {
  params: {
    year: string;
    month: string;
  };
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

export async function generateMetadata({
  params,
}: ArchiveMonthPageProps): Promise<Metadata> {
  const year = Number.parseInt(params.year, 10);
  const month = Number.parseInt(params.month, 10);

  if (Number.isNaN(year) || Number.isNaN(month) || month < 1 || month > 12) {
    return {
      title: "Archive Not Found",
    };
  }

  return {
    title: `${MONTH_NAMES[month - 1]} ${year} - Changelog Archive`,
    description: `Sentry Changelogs from ${MONTH_NAMES[month - 1]} ${year}`,
  };
}

export default async function ArchiveMonthPage({
  params,
}: ArchiveMonthPageProps) {
  const year = Number.parseInt(params.year, 10);
  const month = Number.parseInt(params.month, 10);

  if (Number.isNaN(year) || Number.isNaN(month) || month < 1 || month > 12) {
    notFound();
  }

  const [changelogs, allMonths] = await Promise.all([
    getChangelogsByMonth(year, month),
    getArchiveMonths(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center space-x-2 text-sm text-gray-600">
        <Link href="/changelog/archive" className="hover:text-purple-600">
          Archive
        </Link>
        <span>/</span>
        <span className="text-gray-900">{year}</span>
        <span>/</span>
        <span className="text-gray-900">{MONTH_NAMES[month - 1]}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <ArchiveList changelogs={changelogs} year={year} month={month} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Other Months
            </h3>
            <div className="space-y-2">
              {allMonths.slice(0, 12).map((m) => {
                const isActive = m.year === year && m.month === month;
                return (
                  <Link
                    key={`${m.year}-${m.month}`}
                    href={`/changelog/archive/${m.year}/${m.month}`}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-purple-50 font-medium text-purple-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {MONTH_NAMES[m.month - 1]} {m.year}
                    <span className="ml-2 text-gray-500">({m.count})</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
