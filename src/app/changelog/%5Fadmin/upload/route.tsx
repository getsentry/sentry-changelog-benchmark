import crypto from "node:crypto";

import { authOptions } from "@/server/authOptions";
import { Storage } from "@google-cloud/storage";
import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  const file = searchParams.get("file");

  const storage = new Storage({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: `${process.env.GOOGLE_PRIVATE_KEY}`
        .split(String.raw`\n`)
        .join("\n"),
    },
  });
  const bucket = storage.bucket(`${process.env.GOOGLE_BUCKET_NAME}`);
  const randomFilename = `${crypto.randomBytes(5).toString("base64url")}-${file}`;
  const gcsFile = bucket.file(randomFilename as string);

  const options = {
    expires: Date.now() + 5 * 60 * 1000, //  5 minutes,
    fields: { "x-goog-meta-source": `${process.env.GOOGLE_PROJECT_ID}` },
    destination: randomFilename,
  };

  const [response] = await gcsFile.generateSignedPostPolicyV4(options);

  return Response.json({ response, options });
}
