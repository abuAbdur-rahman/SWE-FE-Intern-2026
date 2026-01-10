import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SafeDep",
  description: "SafeDep is a tool for analyzing the dependencies of a package.",
};

export default function Page() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <p className="text-2xl font-bold">Public Package Scan Report</p>
    </main>
  );
}
