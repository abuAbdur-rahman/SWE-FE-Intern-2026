import { RiskLevel, Vulnerability } from "@/types/insight";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import {
  ArrowDownCircle,
  Circle,
  CircleAlert,
  CircleFadingArrowUp,
} from "lucide-react";
import { PiCircleHalfDuotone } from "react-icons/pi";
import { formattedDate } from "@/lib/utils";

const Vulnerabilities = ({
  vulnerabilities,
}: {
  vulnerabilities: Vulnerability[];
}) => {
  const getBadge = (risk: RiskLevel | undefined) => {
    switch (risk) {
      case "RISK_HIGH":
        return (
          <Badge
            variant="secondary"
            className="flex items-center justify-center gap-2 text-pink-700 bg-pink-100 "
          >
            <CircleFadingArrowUp /> High
          </Badge>
        );
      case "RISK_LOW":
        return (
          <Badge
            variant="secondary"
            className="flex items-center justify-center gap-2 text-cyan-700 bg-cyan-50"
          >
            <ArrowDownCircle /> Low
          </Badge>
        );
      case "RISK_MEDIUM":
        return (
          <Badge
            variant="secondary"
            className="flex items-center justify-center gap-2 text-yellow-700 bg-yellow-100"
          >
            <PiCircleHalfDuotone /> Medium
          </Badge>
        );
      case "RISK_CRITICAL":
        return (
          <Badge
            variant="secondary"
            className="flex items-center justify-center gap-2 text-red-700 bg-red-100"
          >
            <CircleAlert /> Critical
          </Badge>
        );

      default:
        return (
          <Badge
            variant="secondary"
            className="flex items-center justify-center gap-2 text-neutral-700 bg-neutral-100"
          >
            <Circle /> Unspecified
          </Badge>
        );
    }
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-muted-foreground">
              Vulnerability ID
            </TableHead>
            <TableHead className="text-muted-foreground">Summary</TableHead>
            <TableHead className="max-w-30 text-muted-foreground">
              Risk
            </TableHead>
            <TableHead className="max-w-30 text-muted-foreground">
              Published
            </TableHead>
            <TableHead className="max-w-30 text-muted-foreground">
              Modified
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vulnerabilities.map((v) => (
            <TableRow key={v.id.value}>
              <TableCell>{v.id.value}</TableCell>
              <TableCell>{v.summary}</TableCell>
              <TableCell>{getBadge(v.severities[0].risk)}</TableCell>
              <TableCell>{formattedDate(v.publishedAt)}</TableCell>
              <TableCell>{formattedDate(v.modifiedAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Vulnerabilities;
