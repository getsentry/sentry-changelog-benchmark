import { searchChangelogs } from "@/server/actions/search";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || undefined;
  const categories = searchParams.getAll("category");
  const authors = searchParams.getAll("author");
  const dateFrom = searchParams.get("dateFrom") || undefined;
  const dateTo = searchParams.get("dateTo") || undefined;

  try {
    const results = await searchChangelogs({
      query,
      categories: categories.length > 0 ? categories : undefined,
      authors: authors.length > 0 ? authors : undefined,
      dateFrom,
      dateTo,
      publishedOnly: true,
    });

    return NextResponse.json({
      results,
      count: results.length,
    });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
