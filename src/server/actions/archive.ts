"use server";

import { prismaClient } from "../prisma-client";

export interface ArchiveMonth {
  year: number;
  month: number;
  count: number;
}

export interface ArchiveChangelog {
  id: string;
  title: string;
  slug: string;
  publishedAt: Date | null;
  summary: string | null;
  author: {
    name: string | null;
    email: string | null;
  } | null;
  categories: Array<{
    id: string;
    name: string;
  }>;
}

export async function getArchiveMonths(): Promise<ArchiveMonth[]> {
  const result = await prismaClient.$queryRaw<
    Array<{ year: number; month: number; count: bigint }>
  >`
    SELECT 
      EXTRACT(YEAR FROM "publishedAt")::int as year,
      EXTRACT(MONTH FROM "publishedAt")::int as month,
      COUNT(*)::int as count
    FROM "Changelog"
    WHERE "published" = true 
      AND "deleted" = false
      AND "publishedAt" IS NOT NULL
    GROUP BY year, month
    ORDER BY year DESC, month DESC
  `;

  return result.map((row) => ({
    year: row.year,
    month: row.month,
    count: Number(row.count),
  }));
}

export async function getChangelogsByMonth(
  year: number,
  month: number,
): Promise<ArchiveChangelog[]> {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59, 999);

  const changelogs = await prismaClient.changelog.findMany({
    where: {
      published: true,
      deleted: false,
      publishedAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      categories: {
        where: {
          deleted: false,
        },
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  return changelogs;
}

export async function getArchiveYears(): Promise<number[]> {
  const result = await prismaClient.$queryRaw<Array<{ year: number }>>`
    SELECT DISTINCT 
      EXTRACT(YEAR FROM "publishedAt")::int as year
    FROM "Changelog"
    WHERE "published" = true 
      AND "deleted" = false
      AND "publishedAt" IS NOT NULL
    ORDER BY year DESC
  `;

  return result.map((row) => row.year);
}

export async function getChangelogsByYear(
  year: number,
): Promise<Record<number, ArchiveChangelog[]>> {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31, 23, 59, 59, 999);

  const changelogs = await prismaClient.changelog.findMany({
    where: {
      published: true,
      deleted: false,
      publishedAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      categories: {
        where: {
          deleted: false,
        },
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  // Group by month
  const byMonth: Record<number, ArchiveChangelog[]> = {};
  for (const changelog of changelogs) {
    if (!changelog.publishedAt) continue;
    const month = changelog.publishedAt.getMonth() + 1;
    if (!byMonth[month]) {
      byMonth[month] = [];
    }
    byMonth[month].push(changelog);
  }

  return byMonth;
}
