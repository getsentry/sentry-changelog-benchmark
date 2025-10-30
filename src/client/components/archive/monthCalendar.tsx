import Link from "next/link";
import React from "react";

interface MonthCalendarProps {
  months: Array<{ year: number; month: number; count: number }>;
  currentYear?: number;
  currentMonth?: number;
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

export function MonthCalendar({
  months,
  currentYear,
  currentMonth,
}: MonthCalendarProps) {
  // Group months by year
  const byYear: Record<number, typeof months> = {};
  for (const month of months) {
    if (!byYear[month.year]) {
      byYear[month.year] = [];
    }
    byYear[month.year].push(month);
  }

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="space-y-8">
      {years.map((year) => (
        <div
          key={year}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900">{year}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {byYear[year].map((month) => {
              const isActive =
                currentYear === month.year && currentMonth === month.month;
              return (
                <Link
                  key={`${month.year}-${month.month}`}
                  href={`/changelog/archive/${month.year}/${month.month}`}
                  className={`rounded-lg border p-4 text-center transition-all ${
                    isActive
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50"
                  }`}
                >
                  <div
                    className={`text-sm font-medium ${
                      isActive ? "text-purple-900" : "text-gray-900"
                    }`}
                  >
                    {MONTH_NAMES[month.month - 1]}
                  </div>
                  <div
                    className={`mt-1 text-2xl font-bold ${
                      isActive ? "text-purple-600" : "text-gray-600"
                    }`}
                  >
                    {month.count}
                  </div>
                  <div
                    className={`text-xs ${
                      isActive ? "text-purple-700" : "text-gray-500"
                    }`}
                  >
                    post{month.count !== 1 ? "s" : ""}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {years.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500">No archived changelogs found.</p>
        </div>
      )}
    </div>
  );
}
