import { InsightType } from "@/types/insight";
import { Malysis } from "@/types/malysis";
import Overview from "./Overview";
import DataView from "./DataView";

interface PackageReportsProps {
  insight: InsightType;
  malysis: Malysis;
}

const PackageReports = ({ insight, malysis }: PackageReportsProps) => {
  const getEcosystem = (s: string) => {
    return s.split("_")[1].toLocaleUpperCase();
  };

  return (
    <div className="border border-[#E2E8F0] rounded">
      <Overview
        name={malysis.report.packageVersion.package.name}
        version={malysis.report.packageVersion.version}
        analyzedAt={malysis.report.analyzedAt}
        source={malysis.report.target.origin}
        confidence={
          malysis.report.target.confidence ??
          malysis.report.inference.confidence
        }
        sha={malysis.report.target.sha256}
        packageInfo={{
          version: insight.packageVersion.version,
          vulnerabilities: insight.insight.vulnerabilities.length ?? 0,
          scorecard: insight.insight.projectInsights[0].scorecard.score,
          license: insight.insight.licenses.licenses[0].licenseId,
          ecosystem: getEcosystem(insight.packageVersion.package.ecosystem),
        }}
      />

      <DataView insight={insight} malysis={malysis} />
    </div>
  );
};

export default PackageReports;
