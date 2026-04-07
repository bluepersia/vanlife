import { fetchData } from "/src/api/api";

async function getHostVans() {
  const data = await fetchData("/api/host/vans");

  return data.vans;
}

export { getHostVans };
