"use client";

import React, { useState } from "react";

interface Category {
  id: string;
  name: string;
  _count: {
    changelogs: number;
  };
}

interface CategoryListProps {
  categories: Category[];
  onDelete: (id: string) => Promise<void>;
  onEdit: (id: string, newName: string) => Promise<void>;
  onMerge: (sourceId: string, targetId: string) => Promise<void>;
}

export function CategoryList({
  categories,
  onDelete,
  onEdit,
  onMerge,
}: CategoryListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [mergingId, setMergingId] = useState<string | null>(null);
  const [mergeTargetId, setMergeTargetId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEditStart = (category: Category) => {
    setEditingId(category.id);
    setEditName(category.name);
  };

  const handleEditSave = async (id: string) => {
    if (!editName.trim()) return;
    setLoading(true);
    try {
      await onEdit(id, editName.trim());
      setEditingId(null);
      setEditName("");
    } catch (error) {
      console.error("Edit error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    setLoading(true);
    try {
      await onDelete(id);
    } catch (error) {
      console.error("Delete error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMergeStart = (categoryId: string) => {
    setMergingId(categoryId);
    setMergeTargetId("");
  };

  const handleMergeSubmit = async () => {
    if (!mergingId || !mergeTargetId) return;
    if (
      !confirm(
        "Are you sure you want to merge these categories? This cannot be undone.",
      )
    )
      return;

    setLoading(true);
    try {
      await onMerge(mergingId, mergeTargetId);
      setMergingId(null);
      setMergeTargetId("");
    } catch (error) {
      console.error("Merge error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
        >
          <div className="flex-1">
            {editingId === category.id ? (
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                disabled={loading}
              />
            ) : (
              <div>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">
                  {category._count.changelogs} changelog
                  {category._count.changelogs !== 1 ? "s" : ""}
                </p>
              </div>
            )}

            {mergingId === category.id && (
              <div className="mt-2 flex items-center gap-2">
                <select
                  value={mergeTargetId}
                  onChange={(e) => setMergeTargetId(e.target.value)}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  disabled={loading}
                >
                  <option value="">Select target category...</option>
                  {categories
                    .filter((c) => c.id !== category.id)
                    .map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                </select>
                <button
                  type="button"
                  onClick={handleMergeSubmit}
                  disabled={!mergeTargetId || loading}
                  className="rounded-md bg-purple-600 px-3 py-1 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50"
                >
                  Merge
                </button>
                <button
                  type="button"
                  onClick={() => setMergingId(null)}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="ml-4 flex items-center space-x-2">
            {editingId === category.id ? (
              <>
                <button
                  type="button"
                  onClick={() => handleEditSave(category.id)}
                  className="rounded-md bg-purple-600 px-3 py-1 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50"
                  disabled={loading}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  disabled={loading}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => handleEditStart(category)}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  disabled={loading || mergingId === category.id}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleMergeStart(category.id)}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  disabled={loading || mergingId !== null}
                >
                  Merge
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(category.id)}
                  className="rounded-md border border-red-300 px-3 py-1 text-sm font-medium text-red-700 hover:bg-red-50"
                  disabled={loading}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}

      {categories.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
          <p className="text-gray-500">No categories found.</p>
        </div>
      )}
    </div>
  );
}
