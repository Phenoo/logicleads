import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      message: "Meta Conversions API Gateway auto-configuration active",
    },
    { status: 200 }
  );
}

export async function POST() {
  return NextResponse.json(
    {
      status: "ok",
      message: "Meta Conversions API Gateway configuration received",
    },
    { status: 200 }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
