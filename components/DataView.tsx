import { InsightType } from "@/types/insight";
import { Malysis } from "@/types/malysis";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import AnalysisSummary from "./Tabs/Summary";
import License from "./Tabs/Licence";
import Vulnerabilities from "./Tabs/Vulnerabilities";
import Versions from "./Tabs/Versions";

const DataView = ({ insight }: { insight: InsightType; malysis: Malysis }) => {
  // console.log(insight.insight.availableVersions);
  return (
    <div>
      <Tabs defaultValue="overview" className="mt-2">
        <TabsList className="px-4">
          <TabsTrigger className="p-2" value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger className="p-2" value="vulnerabilities">
            Vulnerabilities
          </TabsTrigger>
          <TabsTrigger className="p-2" value="versions">
            Versions
          </TabsTrigger>
          <TabsTrigger className="p-2" value="lincense">
            Lincense
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="bg-white p-4">
          <AnalysisSummary />
        </TabsContent>
        <TabsContent value="vulnerabilities" className="bg-white p-4">
          <Vulnerabilities vulnerabilities={insight.insight.vulnerabilities} />
        </TabsContent>
        <TabsContent value="versions" className="bg-white p-4">
          <Versions
            versions={insight.insight.availableVersions}
            isnpm={
              insight.packageVersion.package.ecosystem
                .toLowerCase()
                .split("_")[1] === "npm"
            }
          />
        </TabsContent>
        <TabsContent value="lincense" className="bg-white p-4">
          <License licenses={insight.insight.licenses} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataView;
