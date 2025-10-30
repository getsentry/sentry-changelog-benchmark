"use client";

import { CategoryForm } from "@/client/components/admin/categoryForm";
import { CategoryList } from "@/client/components/admin/categoryList";
import {
  createCategory,
  deleteCategory,
  getAllCategoriesWithCounts,
  mergeCategories,
  updateCategory,
} from "@/server/actions/category";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface Category {
  id: string;
  name: string;
  _count: {
    changelogs: number;
  };
}

export default function CategoriesAdminPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    try {
      const data = await getAllCategoriesWithCounts();
      if (data === null) {
        router.push("/api/auth/signin");
        return;
      }
      setCategories(data);
    } catch (err) {
      setError("Failed to load categories");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (name: string) => {
    const formData = new FormData();
    formData.append("name", name);

    const result = await createCategory({ success: false }, formData);
    if (!result.success) {
      throw new Error(result.message || "Failed to create category");
    }

    await loadCategories();
  };

  const handleEdit = async (id: string, newName: string) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", newName);

    const result = await updateCategory({ success: false }, formData);
    if (!result.success) {
      throw new Error(result.message || "Failed to update category");
    }

    await loadCategories();
  };

  const handleDelete = async (id: string) => {
    const formData = new FormData();
    formData.append("id", id);

    const result = await deleteCategory({ success: false }, formData);
    if (!result.success) {
      throw new Error(result.message || "Failed to delete category");
    }

    await loadCategories();
  };

  const handleMerge = async (sourceId: string, targetId: string) => {
    const formData = new FormData();
    formData.append("sourceId", sourceId);
    formData.append("targetId", targetId);

    const result = await mergeCategories({ success: false }, formData);
    if (!result.success) {
      throw new Error(result.message || "Failed to merge categories");
    }

    await loadCategories();
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-12">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Categories</h1>
        <p className="mt-2 text-gray-600">
          Create, edit, merge, and delete changelog categories
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-md bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Create Form */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Create Category
            </h2>
            <CategoryForm onSubmit={handleCreate} submitLabel="Create" />
          </div>
        </div>

        {/* Category List */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              All Categories ({categories.length})
            </h2>
            <CategoryList
              categories={categories}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onMerge={handleMerge}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
