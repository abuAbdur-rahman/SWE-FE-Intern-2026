import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-2xl font-bold">Package not found</h1>
      <p className="mt-2 text-gray-600">
        The Package or Version you requested does not exist in this ecosystem.
      </p>

      <div className="w-full flex flex-start items-start flex-col gap-2 mt-8">
        <p>Example:</p>
        <p>
          Ecosystem: <span className="font-semibold">npm</span>
        </p>
        <p>
          Package: <span className="font-semibold">next</span>
        </p>
        <p>
          Version: <span className="font-semibold">15.4.5</span>
        </p>
      </div>

      <Button asChild variant="link">
        <Link href="http://localhost:3000/p/npm/next/15.4.5">Try This Out</Link>
      </Button>
    </div>
  );
}
