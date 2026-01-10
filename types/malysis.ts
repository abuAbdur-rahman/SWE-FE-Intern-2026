export interface Malysis {
  analysisId: string;
  status: string;
  report: Report;
}

export interface Report {
  packageVersion: PackageVersion;
  target: Target;
  fileSystem: FileSystem;
  analyzedAt: string;
  inference: Inference;
  reportId: string;
  packageMetrics: PackageMetrics;
  publishers: Publisher[];
}

export interface PackageVersion {
  package: Package;
  version: string;
}

export interface Package {
  ecosystem: string;
  name: string;
}

export interface Target {
  origin: string;
  sha256: string;
  confidence: string;
}

export interface FileSystem {
  files: File[];
}

export interface File {
  key: string;
  origin: string;
  sha256: string;
  derivedExtension: string;
  size: string;
}

export interface Inference {
  confidence: string;
  details: string;
  summary: string;
}

export interface PackageMetrics {
  downloads: Downloads;
  maintainersCount: string;
}

export interface Downloads {
  daily: string;
  weekly: string;
  monthly: string;
  total: string;
  updatedAt: string;
}

export interface Publisher {
  name: string;
  email: string;
}
