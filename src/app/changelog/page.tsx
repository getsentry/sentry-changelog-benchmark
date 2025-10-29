import type { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { Fragment } from "react";

import { type ChangelogEntry, ChangelogList } from "@/client/components/list";
import { startSpan } from "@sentry/nextjs";
import type { Element } from "hast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { getChangelogs } from "../../server/utils";
import Header from "./header";

// Import dummy components for sourcemap testing (30% of components)
import {
  DummyComponent001,
  DummyComponent002,
  DummyComponent003,
  DummyComponent004,
  DummyComponent005,
  DummyComponent006,
  DummyComponent007,
  DummyComponent008,
  DummyComponent009,
  DummyComponent010,
  DummyComponent011,
  DummyComponent012,
  DummyComponent013,
  DummyComponent014,
  DummyComponent015,
} from "@/dummy/components";
import {
  DummyService001,
  DummyService002,
  DummyService003,
} from "@/dummy/services";
import {
  DummyUtil001,
  DummyUtil002,
  DummyUtil003,
  DummyUtil004,
  DummyUtil005,
} from "@/dummy/utils";

// Reference them to prevent tree-shaking
const dummyRefs = [
  DummyComponent001,
  DummyComponent002,
  DummyComponent003,
  DummyComponent004,
  DummyComponent005,
  DummyComponent006,
  DummyComponent007,
  DummyComponent008,
  DummyComponent009,
  DummyComponent010,
  DummyComponent011,
  DummyComponent012,
  DummyComponent013,
  DummyComponent014,
  DummyComponent015,
  DummyUtil001,
  DummyUtil002,
  DummyUtil003,
  DummyUtil004,
  DummyUtil005,
  DummyService001,
  DummyService002,
  DummyService003,
];

export const dynamic = "force-dynamic";

export default async function Page() {
  const changelogs = await getChangelogs();

  const changelogsWithPublishedAt = changelogs.filter((changelog) => {
    return changelog.publishedAt !== null;
  });

  const changelogsWithMdxSummaries = await startSpan(
    { name: "serialize changelog summaries" },
    () =>
      Promise.all(
        changelogsWithPublishedAt.map(
          async (changelog): Promise<ChangelogEntry> => {
            const mdxSummary = await serialize(
              changelog.summary || "",
              {
                mdxOptions: {
                  rehypePlugins: [
                    // Because we render the changelog entries as <a> tags, and it is not allowed to render <a> tags
                    // within other a tags, we need to strip away the <a> tags inside the previews here.
                    // @ts-ignore
                    stripLinks,
                  ],
                },
              },
              true,
            );
            return {
              id: changelog.id,
              title: changelog.title,
              slug: changelog.slug,
              // Because `getChangelogs` is cached, it sometimes returns its results serialized and sometimes not. Therefore we have to deserialize the string to be able to call toUTCString().
              publishedAt: new Date(changelog.publishedAt!).toUTCString(),
              categories: changelog.categories,
              mdxSummary,
            };
          },
        ),
      ),
  );

  return (
    <Fragment>
      <Header />
      <ChangelogList changelogs={changelogsWithMdxSummaries} />
    </Fragment>
  );
}

export function generateMetadata(): Metadata {
  return {
    description:
      "Stay up to date on everything big and small, from product updates to SDK changes with the Sentry Changelog.",
    alternates: {
      canonical: "https://sentry.io/changelog/",
    },
  };
}

const stripLinks: Plugin = () => {
  return (tree) => {
    return visit(tree, "element", (node: Element) => {
      if (node.tagName === "a") {
        node.tagName = "span";
        if (node.properties) {
          node.properties.href = undefined;
          node.properties.class = undefined;
        }
      }
    });
  };
};
