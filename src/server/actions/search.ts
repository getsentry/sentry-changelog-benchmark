"use server";

import { prismaClient } from "../prisma-client";

export interface SearchFilters {
  query?: string;
  categories?: string[];
  authors?: string[];
  dateFrom?: string;
  dateTo?: string;
  publishedOnly?: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  publishedAt: Date | null;
  author: {
    name: string | null;
    email: string | null;
  } | null;
  categories: Array<{
    id: string;
    name: string;
  }>;
}

export async function searchChangelogs(
  filters: SearchFilters,
): Promise<SearchResult[]> {
  const {
    query,
    categories,
    authors,
    dateFrom,
    dateTo,
    publishedOnly = true,
  } = filters;

  const whereClause: any = {
    deleted: false,
  };

  if (publishedOnly) {
    whereClause.published = true;
  }

  // Full-text search on title, summary, and content
  if (query && query.trim().length > 0) {
    whereClause.OR = [
      { title: { contains: query, mode: "insensitive" } },
      { summary: { contains: query, mode: "insensitive" } },
      { content: { contains: query, mode: "insensitive" } },
    ];
  }

  // Filter by categories
  if (categories && categories.length > 0) {
    whereClause.categories = {
      some: {
        name: {
          in: categories,
        },
      },
    };
  }

  // Filter by authors
  if (authors && authors.length > 0) {
    whereClause.authorId = {
      in: authors,
    };
  }

  // Filter by date range
  if (dateFrom || dateTo) {
    whereClause.publishedAt = {};
    if (dateFrom) {
      whereClause.publishedAt.gte = new Date(dateFrom);
    }
    if (dateTo) {
      whereClause.publishedAt.lte = new Date(dateTo);
    }
  }

  const results = await prismaClient.changelog.findMany({
    where: whereClause,
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      categories: {
        select: {
          id: true,
          name: true,
        },
        where: {
          deleted: false,
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 50,
  });

  return results;
}

export async function getSearchSuggestions(query: string): Promise<string[]> {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const changelogs = await prismaClient.changelog.findMany({
    where: {
      published: true,
      deleted: false,
      title: {
        contains: query,
        mode: "insensitive",
      },
    },
    select: {
      title: true,
    },
    take: 5,
  });

  return changelogs.map((c) => c.title);
}

export async function getAllCategories() {
  const categories = await prismaClient.category.findMany({
    where: {
      deleted: false,
    },
    orderBy: {
      name: "asc",
    },
  });

  return categories;
}

export async function getAllAuthors() {
  const authors = await prismaClient.user.findMany({
    where: {
      changelogs: {
        some: {
          published: true,
        },
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return authors;
}
