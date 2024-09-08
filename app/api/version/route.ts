import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  if (!process.env.VERCEL_DEPLOYMENT_ID) {
    console.warn("Not using the intended Deployment ID!");
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
