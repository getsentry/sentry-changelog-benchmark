"use server";

import { getServerSession } from "next-auth/next";
import { revalidateTag } from "next/cache";
import { authOptions } from "../authOptions";
import { prismaClient } from "../prisma-client";
import type { ServerActionPayloadInterface } from "./serverActionPayload.interface";

const unauthorizedPayload: ServerActionPayloadInterface = {
  success: false,
  message: "Unauthorized",
};

export async function createCategory(
  _currentState: ServerActionPayloadInterface,
  formData: FormData,
): Promise<ServerActionPayloadInterface> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return unauthorizedPayload;
  }

  const name = formData.get("name") as string;

  if (!name || name.trim().length === 0) {
    return {
      success: false,
      message: "Category name is required",
    };
  }

  try {
    await prismaClient.category.create({
      data: {
        name: name.trim(),
      },
    });

    revalidateTag("categories", {});
    return { success: true };
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        success: false,
        message: "A category with this name already exists",
      };
    }
    return {
      success: false,
      message: "Failed to create category",
    };
  }
}

export async function updateCategory(
  _currentState: ServerActionPayloadInterface,
  formData: FormData,
): Promise<ServerActionPayloadInterface> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return unauthorizedPayload;
  }

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;

  if (!name || name.trim().length === 0) {
    return {
      success: false,
      message: "Category name is required",
    };
  }

  try {
    await prismaClient.category.update({
      where: { id },
      data: {
        name: name.trim(),
      },
    });

    revalidateTag("categories", {});
    return { success: true };
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        success: false,
        message: "A category with this name already exists",
      };
    }
    return {
      success: false,
      message: "Failed to update category",
    };
  }
}

export async function deleteCategory(
  _currentState: ServerActionPayloadInterface,
  formData: FormData,
): Promise<ServerActionPayloadInterface> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return unauthorizedPayload;
  }

  const id = formData.get("id") as string;

  try {
    await prismaClient.category.update({
      where: { id },
      data: {
        deleted: true,
      },
    });

    revalidateTag("categories", {});
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete category",
    };
  }
}

export async function mergeCategories(
  _currentState: ServerActionPayloadInterface,
  formData: FormData,
): Promise<ServerActionPayloadInterface> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return unauthorizedPayload;
  }

  const sourceId = formData.get("sourceId") as string;
  const targetId = formData.get("targetId") as string;

  if (sourceId === targetId) {
    return {
      success: false,
      message: "Cannot merge a category into itself",
    };
  }

  try {
    // Get all changelogs from source category
    const sourceCategory = await prismaClient.category.findUnique({
      where: { id: sourceId },
      include: {
        changelogs: true,
      },
    });

    if (!sourceCategory) {
      return {
        success: false,
        message: "Source category not found",
      };
    }

    // Move all changelogs to target category
    await prismaClient.category.update({
      where: { id: targetId },
      data: {
        changelogs: {
          connect: sourceCategory.changelogs.map((c) => ({ id: c.id })),
        },
      },
    });

    // Delete source category
    await prismaClient.category.update({
      where: { id: sourceId },
      data: {
        deleted: true,
        changelogs: {
          set: [],
        },
      },
    });

    revalidateTag("categories", {});
    revalidateTag("changelogs", {});
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: "Failed to merge categories",
    };
  }
}

export async function getAllCategoriesWithCounts() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const categories = await prismaClient.category.findMany({
    where: {
      deleted: false,
    },
    include: {
      _count: {
        select: {
          changelogs: {
            where: {
              published: true,
            },
          },
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return categories;
}
