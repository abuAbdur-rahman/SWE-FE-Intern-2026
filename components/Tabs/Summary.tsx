import { Card, CardContent } from "@/components/ui/card";
import { Inference } from "@/types/malysis";

export default function AnalysisSummary({
  inference,
}: {
  inference: Inference;
}) {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <Card className="border-l-4 border-teal-500">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-lg font-semibold">Summary</h3>
          <p className="text-sm text-muted-foreground">
            This analysis was performed using <strong>vet</strong> and SafeDep
            Cloud Malicious Package Analysis. Integrate with GitHub using
            vet-action GitHub Action.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This report is updated by a verification
            record
          </p>
          <p className="text-sm">
            {inference?.summary || "No summary available"}
          </p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-gray-300">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-lg font-semibold">Verification Record</h3>
          <p className="text-sm">
            Manual analysis confirmed that the package is clean.
          </p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-gray-300">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-lg font-semibold">Details</h3>
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This report is updated by a verification
            record
          </p>
          <p className="text-sm text-muted-foreground">
            {inference?.details || "No details available"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
