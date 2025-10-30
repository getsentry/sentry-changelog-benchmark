"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../authOptions";
import { prismaClient } from "../prisma-client";

export interface ChangelogStats {
  totalChangelogs: number;
  publishedChangelogs: number;
  draftChangelogs: number;
  totalCategories: number;
  totalAuthors: number;
  changelogsByMonth: Array<{ month: string; count: number }>;
  changelogsByCategory: Array<{ category: string; count: number }>;
  recentActivity: Array<{
    date: string;
    action: string;
    title: string;
    author: string;
  }>;
  topAuthors: Array<{ name: string; email: string; count: number }>;
}

export async function getChangelogStats(): Promise<ChangelogStats | null> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  // Get total counts
  const [totalChangelogs, publishedChangelogs, totalCategories, totalAuthors] =
    await Promise.all([
      prismaClient.changelog.count(),
      prismaClient.changelog.count({ where: { published: true } }),
      prismaClient.category.count({ where: { deleted: false } }),
      prismaClient.user.count(),
    ]);

  const draftChangelogs = totalChangelogs - publishedChangelogs;

  // Get changelogs by month (last 12 months)
  const twelveMonthsAgo = new Date();
  twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

  const changelogsByMonth = await prismaClient.$queryRaw<
    Array<{ month: string; count: bigint }>
  >`
    SELECT 
      TO_CHAR("publishedAt", 'YYYY-MM') as month,
      COUNT(*)::int as count
    FROM "Changelog"
    WHERE "publishedAt" >= ${twelveMonthsAgo}
      AND "published" = true
    GROUP BY TO_CHAR("publishedAt", 'YYYY-MM')
    ORDER BY month DESC
    LIMIT 12
  `;

  // Get changelogs by category
  const changelogsByCategory = await prismaClient.$queryRaw<
    Array<{ category: string; count: bigint }>
  >`
    SELECT 
      c.name as category,
      COUNT(*)::int as count
    FROM "Category" c
    INNER JOIN "_CategoryToChangelog" cc ON c.id = cc."A"
    INNER JOIN "Changelog" ch ON cc."B" = ch.id
    WHERE c.deleted = false 
      AND ch.published = true
    GROUP BY c.name
    ORDER BY count DESC
    LIMIT 10
  `;

  // Get recent activity
  const recentChangelogs = await prismaClient.changelog.findMany({
    take: 10,
    orderBy: { updatedAt: "desc" },
    include: {
      author: true,
    },
  });

  const recentActivity = recentChangelogs.map((changelog) => ({
    date: changelog.updatedAt.toISOString(),
    action: changelog.published ? "Published" : "Updated",
    title: changelog.title,
    author: changelog.author?.name || "Unknown",
  }));

  // Get top authors
  const topAuthors = await prismaClient.$queryRaw<
    Array<{ name: string; email: string; count: bigint }>
  >`
    SELECT 
      u.name,
      u.email,
      COUNT(*)::int as count
    FROM "User" u
    INNER JOIN "Changelog" c ON u.id = c."authorId"
    WHERE c.published = true
    GROUP BY u.id, u.name, u.email
    ORDER BY count DESC
    LIMIT 10
  `;

  return {
    totalChangelogs,
    publishedChangelogs,
    draftChangelogs,
    totalCategories,
    totalAuthors,
    changelogsByMonth: changelogsByMonth.map((row) => ({
      month: row.month,
      count: Number(row.count),
    })),
    changelogsByCategory: changelogsByCategory.map((row) => ({
      category: row.category,
      count: Number(row.count),
    })),
    recentActivity,
    topAuthors: topAuthors.map((row) => ({
      name: row.name || "Unknown",
      email: row.email || "",
      count: Number(row.count),
    })),
  };
}

export async function getCategoryStats(categoryName: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const category = await prismaClient.category.findUnique({
    where: { name: categoryName },
    include: {
      changelogs: {
        where: { published: true },
        orderBy: { publishedAt: "desc" },
        take: 5,
        include: {
          author: true,
        },
      },
    },
  });

  if (!category) {
    return null;
  }

  const totalChangelogs = await prismaClient.changelog.count({
    where: {
      published: true,
      categories: {
        some: {
          name: categoryName,
        },
      },
    },
  });

  return {
    category: category.name,
    totalChangelogs,
    recentChangelogs: category.changelogs,
  };
}
