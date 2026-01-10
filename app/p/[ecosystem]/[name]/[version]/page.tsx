import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PackageReports from "@/components/PackageReport";
import type { Metadata } from "next";
import { fetchInsight, fetchMalysis } from "@/actions/fetch";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Board",
  description: "Package Analyser",
};

interface SafeDepPageProps {
  params: Promise<{ ecosystem: string; name: string; version: string }>;
}

const SafeDepPage = async ({ params }: SafeDepPageProps) => {
  const { ecosystem, name, version } = await params;

  const insightRes = await fetchInsight(ecosystem, name, version);
  const malysisRes = await fetchMalysis(ecosystem, name, version);

  console.log(insightRes.error);

  // 404 Page
  if (insightRes.error === "NOT_FOUND") {
    notFound();
  }

  if (insightRes.error === "UNSUPPORTED") {
    return (
      <div className="container mx-auto py-10 space-y-8">
        <Header />
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">
          <h2 className="text-lg font-semibold">
            The Provided Ecosysytem is Not supported
          </h2>
          <p className="my-2 text-lg">Supported Ecosysytem:</p>
          <ul className="">
            {[
              "npm",
              "pypi",
              "maven",
              "go",
              "rubygems",
              "nuget",
              "cargo",
              "packagist",
              "github-actions",
              "terraform",
              "terraform-module",
              "terraform-provider",
            ].map((e, i) => (
              <li
                key={e}
                className="font-semibold text-primary"
              >{`${i + 1}. ${e}`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Any other failure
  if (insightRes.error || malysisRes.error) {
    return (
      <div className="container mx-auto py-10 space-y-8">
        <Header />
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">
          <h2 className="text-lg font-semibold">
            Unable to load package insights And Malysis
          </h2>
          <p className="mt-2 text-sm">
            This may be due to a temporary SafeDep service issue or an invalid
            package version. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <Header />
      <Suspense
        fallback={
          <div className="w-full p-4 flex items-center justify-center gap-4">
            <Loader2 size={32} className="animate-spin" />
            <p>Loading Insight and Malysis Data</p>
          </div>
        }
      >
        <PackageReports insight={insightRes.data} malysis={malysisRes.data} />
      </Suspense>
    </div>
  );
};

export default SafeDepPage;
