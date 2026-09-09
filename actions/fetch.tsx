// import InsightData from "@/sample/insights-sample.json";
// import Malysis from "@/sample/malysis-sample.json";

export const fetchInsight = async (
  ecosystem: string,
  name: string,
  version: string,
) => {
  // console.log(ecosystem, name, version);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const url = `${baseUrl}/api/insights?ecosystem=${ecosystem}&name=${name}&version=${version}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(res.status);

  if (res.status === 404) {
    return { data: null, error: "NOT_FOUND" };
  }

  if (res.status === 400) {
    return { data: null, error: "UNSUPPORTED" };
  }

  if (!res.ok) {
    return { data: null, error: "FAILED" };
  }

  return { data: await res.json(), error: null };
};

export const fetchMalysis = async (
  ecosystem: string,
  name: string,
  version: string,
) => {
  // console.log(ecosystem, name, version);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const url = `${baseUrl}/api/malysis?ecosystem=${ecosystem}&name=${name}&version=${version}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(res.status);

  if (res.status === 404) {
    return { data: null, error: "NOT_FOUND" };
  }

  if (res.status === 400) {
    return { data: null, error: "UNSUPPORTED" };
  }

  if (!res.ok) {
    return { data: null, error: "FAILED" };
  }

  return { data: await res.json(), error: null };
};
