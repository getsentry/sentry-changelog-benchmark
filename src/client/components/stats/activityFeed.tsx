import React from "react";

interface Activity {
  date: string;
  action: string;
  title: string;
  author: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`;
    }
    if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    }
    if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    }
    return date.toLocaleDateString();
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.date + activity.title}
            className="flex items-start space-x-3"
          >
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Document icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.author}</span>{" "}
                <span className="text-gray-600">{activity.action}</span>
              </p>
              <p className="mt-1 truncate text-sm font-medium text-gray-700">
                {activity.title}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {formatDate(activity.date)}
              </p>
            </div>
          </div>
        ))}
        {activities.length === 0 && (
          <p className="py-4 text-center text-sm text-gray-500">
            No recent activity
          </p>
        )}
      </div>
    </div>
  );
}
