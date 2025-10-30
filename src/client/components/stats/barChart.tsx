"use client";

import React from "react";

interface BarChartProps {
  data: Array<{ label: string; value: number }>;
  title: string;
  valueLabel?: string;
}

export function BarChart({ data, title, valueLabel = "Count" }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.value} className="flex items-center">
            <div className="w-32 truncate text-sm text-gray-600">
              {item.label}
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <div className="mr-2 h-6 flex-1 rounded bg-gray-100">
                  <div
                    className="h-full rounded bg-purple-600 transition-all duration-300"
                    style={{
                      width: `${(item.value / maxValue) * 100}%`,
                    }}
                  />
                </div>
                <span className="w-12 text-right text-sm font-medium text-gray-900">
                  {item.value}
                </span>
              </div>
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <p className="py-4 text-center text-sm text-gray-500">
            No data available
          </p>
        )}
      </div>
    </div>
  );
}
