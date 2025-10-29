import { prismaClient } from "@/server/prisma-client";

import { CreateChangelogForm } from "@/client/components/forms/createChangelogForm";
import { authOptions } from "@/server/authOptions";
import { getServerSession } from "next-auth/next";
import { notFound } from "next/navigation";

// Import dummy components for sourcemap testing (remaining components)
import {
  DummyComponent041,
  DummyComponent042,
  DummyComponent043,
  DummyComponent044,
  DummyComponent045,
  DummyComponent046,
  DummyComponent047,
  DummyComponent048,
  DummyComponent049,
  DummyComponent050,
} from "@/dummy/components";
import {
  DummyService009,
  DummyService010,
  DummyService011,
  DummyService012,
  DummyService013,
  DummyService014,
  DummyService015,
  DummyService016,
  DummyService017,
  DummyService018,
  DummyService019,
  DummyService020,
} from "@/dummy/services";
import {
  DummyUtil015,
  DummyUtil016,
  DummyUtil017,
  DummyUtil018,
  DummyUtil019,
  DummyUtil020,
  DummyUtil021,
  DummyUtil022,
  DummyUtil023,
  DummyUtil024,
  DummyUtil025,
  DummyUtil026,
  DummyUtil027,
  DummyUtil028,
  DummyUtil029,
  DummyUtil030,
} from "@/dummy/utils";

// Reference them to prevent tree-shaking
const dummyRefs = [
  DummyComponent041,
  DummyComponent042,
  DummyComponent043,
  DummyComponent044,
  DummyComponent045,
  DummyComponent046,
  DummyComponent047,
  DummyComponent048,
  DummyComponent049,
  DummyComponent050,
  DummyUtil015,
  DummyUtil016,
  DummyUtil017,
  DummyUtil018,
  DummyUtil019,
  DummyUtil020,
  DummyUtil021,
  DummyUtil022,
  DummyUtil023,
  DummyUtil024,
  DummyUtil025,
  DummyUtil026,
  DummyUtil027,
  DummyUtil028,
  DummyUtil029,
  DummyUtil030,
  DummyService009,
  DummyService010,
  DummyService011,
  DummyService012,
  DummyService013,
  DummyService014,
  DummyService015,
  DummyService016,
  DummyService017,
  DummyService018,
  DummyService019,
  DummyService020,
];

export default async function ChangelogCreatePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return notFound();
  }

  const categories = await prismaClient.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <section className="overflow-x-auto col-start-3 col-span-8">
      <CreateChangelogForm categories={categories} />
    </section>
  );
}
