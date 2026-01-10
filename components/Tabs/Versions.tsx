"use client";

import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { AvailableVersion } from "@/types/insight";
import { formattedDate } from "@/lib/utils";
import Link from "next/link";

const PAGE_SIZE = 10;

const Versions = ({
  versions,
  isnpm,
}: {
  versions: AvailableVersion[];
  isnpm: boolean;
}) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(versions.length / PAGE_SIZE);

  const paginatedVersions = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return versions.slice(start, end);
  }, [page, versions]);

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-muted-foreground">Version</TableHead>
            <TableHead className="text-muted-foreground max-w-30">
              Published On
            </TableHead>
            <TableHead className="text-muted-foreground text-right maz-w-30">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedVersions.map((v) => (
            <TableRow
              key={v.version}
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="space-x-2">
                <span className="font-medium px-2 py-1 bg-gray-100">
                  {v.version}
                </span>
                {v.defaultVersion && (
                  <span className="rounded-sm bg-teal-100 px-2 py-1 text-xs text-teal-700">
                    Latest
                  </span>
                )}
              </TableCell>

              <TableCell className="text-sm text-muted-foreground">
                {formattedDate(v.publishedAt)}
              </TableCell>

              <TableCell className="text-right">
                <Button variant="link" className="px-0" asChild>
                  <Link
                    href={
                      isnpm
                        ? `https://www.npmjs.com/package/next/v/${v.version}`
                        : ""
                    }
                    target="_blank"
                  >
                    View Version
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {paginatedVersions.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={3}
                className="text-center text-muted-foreground"
              >
                No versions available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Page{" "}
            <input
              type="number"
              value={page}
              className="w-10"
              maxLength={totalPages}
              minLength={1}
              onChange={(e) =>
                setPage(() =>
                  parseInt(e.target.value) <= totalPages
                    ? parseInt(e.target.value)
                    : 1,
                )
              }
            />{" "}
            of {totalPages}
          </span>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Versions;
