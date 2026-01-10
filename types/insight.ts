export interface InsightType {
  packageVersion: PackageVersion;
  insight: Insight;
}

export interface PackageVersion {
  package: Package;
  version: string;
}

export interface Package {
  ecosystem: string;
  name: string;
}

export interface Insight {
  dependencies: Dependency[];
  vulnerabilities: Vulnerability[];
  projectInsights: ProjectInsight[];
  licenses: Licenses;
  packagePublishedAt: string;
  registries: string[];
  availableVersions: AvailableVersion[];
  dependencyGraph: DependencyGraph;
}

export interface Dependency {
  package: Package2;
  version: string;
}

export interface Package2 {
  ecosystem: string;
  name: string;
}

export type RiskLevel =
  | "RISK_LOW"
  | "RISK_MEDIUM"
  | "RISK_HIGH"
  | "RISK_CRITICAL";

export interface Vulnerability {
  id: Id;
  summary: string;
  aliases: Alias[];
  related: Related[];
  severities: Severity[];
  publishedAt: string;
  modifiedAt: string;
}

export interface Id {
  type: string;
  value: string;
}

export interface Alias {
  type: string;
  value: string;
}

export interface Related {
  value: string;
}

export interface Severity {
  type: string;
  score: string;
  risk?: RiskLevel;
}

export interface ProjectInsight {
  project: Project;
  stars: string;
  forks: string;
  issues: Issues;
  scorecard: Scorecard;
}

export interface Project {
  type: string;
  name: string;
  url: string;
}

export interface Issues {
  open: string;
}

export interface Scorecard {
  date: string;
  score: number;
  repo: Repo;
  checks: Check[];
}

export interface Repo {
  name: string;
  commit: string;
}

export interface Check {
  name: string;
  score?: number;
  reason: string;
  documentation: Documentation;
}

export interface Documentation {
  url: string;
  description: string;
}

export interface Licenses {
  licenses: License[];
}

export interface License {
  licenseId: string;
  licenseName?: string;
  referenceUrl?: string;
}

export interface AvailableVersion {
  version: string;
  publishedAt: string;
  defaultVersion?: boolean;
}

export interface DependencyGraph {
  dependencies: Dependency2[];
  dependencyRelations: DependencyRelation[];
}

export interface Dependency2 {
  packageVersion: PackageVersion2;
  relation: string;
}

export interface PackageVersion2 {
  package: Package3;
  version: string;
}

export interface Package3 {
  ecosystem: string;
  name: string;
}

export interface DependencyRelation {
  to: number;
  requirement: string;
  from?: number;
}
