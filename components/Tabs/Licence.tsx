import { Licenses } from "@/types/insight";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const License = ({ licenses }: { licenses: Licenses }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-muted-foreground">
          <TableHead>License ID</TableHead>
          <TableHead>License Name</TableHead>
          <TableHead>Reference Url</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {licenses.licenses.map((l) => (
          <TableRow key={l.licenseId}>
            <TableCell>{l.licenseId}</TableCell>
            <TableCell>{l.licenseName ?? "not found"}</TableCell>
            <TableCell>{l.referenceUrl ?? "not found"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default License;
