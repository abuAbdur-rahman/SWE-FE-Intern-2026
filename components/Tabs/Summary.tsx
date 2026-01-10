import { Card, CardContent } from "@/components/ui/card";

export default function AnalysisSummary() {
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
            Multiple files flagged for potential data exfiltration, XSS, and RCE
            vulnerabilities. High confidence of malicious intent due to combined
            factors.
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
            The package exhibits multiple concerning behaviors. Several files
            match the sys_sec_recon_ext YARA rule, suggesting potential system
            and network information exfiltration. Additionally, the code
            constructs javascript URLs and assigns them to formAction
            attributes, which can lead to XSS or RCE if user-controlled data is
            involved. Furthermore, dynamic code execution is possible via
            formatDynamicImportPath if the cacheHandlers configuration is
            compromised. These factors, combined, indicate malicious intent.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
