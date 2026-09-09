import { NextResponse } from "next/server";
import { createMalysisClient, Ecosystem } from "@/lib/safedep/malysis";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const ecosystemParam = searchParams.get("ecosystem");
    const name = searchParams.get("name");
    const version = searchParams.get("version");

    if (!ecosystemParam || !name || !version) {
      return NextResponse.json(
        { error: "ecosystem, name, and version are required" },
        { status: 400 },
      );
    }

    let ecosystem: Ecosystem;

    switch (ecosystemParam.toLowerCase()) {
      case "npm":
        ecosystem = Ecosystem.NPM;
        break;
      case "pypi":
        ecosystem = Ecosystem.PYPI;
        break;
      case "maven":
        ecosystem = Ecosystem.MAVEN;
        break;
      case "go":
        ecosystem = Ecosystem.GO;
        break;
      case "rubygems":
        ecosystem = Ecosystem.RUBYGEMS;
        break;
      case "nuget":
        ecosystem = Ecosystem.NUGET;
        break;
      case "cargo":
        ecosystem = Ecosystem.CARGO;
        break;
      case "packagist":
        ecosystem = Ecosystem.PACKAGIST;
        break;
      case "github-actions":
        ecosystem = Ecosystem.GITHUB_ACTIONS;
        break;
      default:
        return NextResponse.json(
          { error: "Unsupported ecosystem" },
          { status: 400 },
        );
    }

    const client = await createMalysisClient();

    const res = await client.queryPackageAnalysis({
      target: {
        packageVersion: {
          package: {
            ecosystem,
            name,
          },
          version,
        },
      },
    });

    if (!res) {
      return NextResponse.json(
        { error: "Package version not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(res.toJson(), { status: 200 });
  } catch (error) {
    console.error("SafeDep Insights API error:", error);

    // If SafeDep explicitly says "not found"
    if ((error as Error)?.message?.includes("not found")) {
      return NextResponse.json(
        { error: "Package version not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { error: "Upstream SafeDep service failed" },
      { status: 502 },
    );
  }
}
