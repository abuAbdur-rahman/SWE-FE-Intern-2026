import { FaGithub, FaGlobeAfrica } from "react-icons/fa";
import { Award, BookText, Bug, Globe, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

interface OverviewProps {
  name: string;
  version: string;
  analyzedAt: string;
  source: string;
  sha: string;
  confidence: string;
  packageInfo: {
    version: string;
    vulnerabilities: number;
    scorecard: number;
    license: string;
    ecosystem: string;
  };
}

const Overview = ({
  name,
  version,
  analyzedAt,
  source,
  sha,
  confidence,
  packageInfo,
}: OverviewProps) => {
  const AnalyzedAt = () => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
      .format(new Date(analyzedAt))
      .replace(",", "");
  };
  // const capitalized = (text: string) =>
  //   text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return (
    <div className="p-4 space-y-4 bg-slate-50">
      <div className="flex flex-col gap-1">
        <p className="flex items-center">
          <FaGithub className="mr-2" />
          {name}@{version}
        </p>
        <div>
          <span className="text-muted-foreground text-sm">Analysed at </span>
          <span className="text-sm font-semibold">{AnalyzedAt()}</span>
        </div>
        <div>
          <span className="text-muted-foreground text-sm"> Source </span>
          <span className="text-sm font-semibold">{source}</span>
        </div>
        <div>
          <span className="text-muted-foreground text-sm">SHA256 </span>
          <span className="text-sm font-semibold">{sha}</span>
        </div>
        <div>
          <span className="text-muted-foreground text-sm">Confidence </span>
          <span className="text-sm font-semibold">{confidence}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <PackageInfoCard name="Version" value={packageInfo.version} />
        <PackageInfoCard
          name="Vulnerabilities"
          value={packageInfo.vulnerabilities}
        />
        <PackageInfoCard
          name="OpenSSF ScoreCard"
          value={packageInfo.scorecard}
        />
        <PackageInfoCard name="License" value={packageInfo.license} />
        <PackageInfoCard name="Ecosystem" value={packageInfo.ecosystem} />
      </div>
    </div>
  );
};

const PackageInfoCard = ({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) => {
  const IconMap = {
    Version: <Info className="text-primary mr-2 h-4 w-4" />,
    Vulnerabilities: <Bug className="text-red-700 mr-2 h-4 w-4" />,
    "OpenSSF ScoreCard": <BookText className="text-primary mr-2 h-4 w-4" />,
    License: <Award className="text-primary mr-2 h-4 w-4" />,
    Ecosystem: <FaGlobeAfrica className="text-primary mr-2 h-4 w-4" />,
  };
  return (
    // <div className="bg-white w-full h-29 p-4 flex justify-between border border-gray-200 flex-col rounded-md">
    <Card className="h-29 p-4 rounded">
      <p className="text-muted-foreground flex items-center">
        {IconMap[name as keyof typeof IconMap]}
        {name}
      </p>
      <p
        className={cn(
          "font-semibold text-3xl",
          typeof value === "number" && "text-primary",
        )}
      >
        {name === "OpenSSF ScoreCard" && typeof value === "number"
          ? value.toFixed(2)
          : value}
      </p>
    </Card>
  );
};

export default Overview;
