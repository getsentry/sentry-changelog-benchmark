"use server";

import { prismaClient } from "../prisma-client";

export interface AuthorProfile {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  changelogCount: number;
  changelogs: Array<{
    id: string;
    title: string;
    slug: string;
    publishedAt: Date | null;
    summary: string | null;
    categories: Array<{
      id: string;
      name: string;
    }>;
  }>;
  firstPublishedAt: Date | null;
  latestPublishedAt: Date | null;
}

export async function getAuthorProfile(
  userId: string,
): Promise<AuthorProfile | null> {
  const user = await prismaClient.user.findUnique({
    where: { id: userId },
    include: {
      changelogs: {
        where: {
          published: true,
          deleted: false,
        },
        include: {
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
      },
    },
  });

  if (!user) {
    return null;
  }

  const publishedDates = user.changelogs
    .map((c) => c.publishedAt)
    .filter((d): d is Date => d !== null)
    .sort((a, b) => a.getTime() - b.getTime());

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    changelogCount: user.changelogs.length,
    changelogs: user.changelogs,
    firstPublishedAt: publishedDates[0] || null,
    latestPublishedAt: publishedDates[publishedDates.length - 1] || null,
  };
}

export async function getAllAuthorsWithStats() {
  const users = await prismaClient.user.findMany({
    include: {
      _count: {
        select: {
          changelogs: {
            where: {
              published: true,
              deleted: false,
            },
          },
        },
      },
      changelogs: {
        where: {
          published: true,
          deleted: false,
        },
        select: {
          publishedAt: true,
        },
        orderBy: {
          publishedAt: "desc",
        },
        take: 1,
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    changelogCount: user._count.changelogs,
    latestPublishedAt: user.changelogs[0]?.publishedAt || null,
  }));
}

export async function getAuthorBySlug(slug: string) {
  // In a real app, you might have a slug field on User
  // For now, we'll search by name or email
  const user = await prismaClient.user.findFirst({
    where: {
      OR: [
        { email: { contains: slug, mode: "insensitive" } },
        { name: { contains: slug, mode: "insensitive" } },
      ],
    },
  });

  return user;
}
