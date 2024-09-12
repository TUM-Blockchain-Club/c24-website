export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "nodejs";
export const maxDuration = 5;

import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  if (!process.env.VERCEL_DEPLOYMENT_ID) {
    console.warn("Not using the intended Deployment ID!");
  }

  if (process.env.VERCEL_ENV !== "production" && process.env.VERSION_OVERRIDE) {
    return NextResponse.json({
      version: process.env.VERSION_OVERRIDE,
    });
  }

  const deploymentId =
    process.env.VERCEL_DEPLOYMENT_ID || Date.now().toString();
  const deploymentIdHash = createHash("sha256")
    .update(deploymentId)
    .digest("hex");

  return NextResponse.json({
    version: deploymentIdHash,
  });
};
