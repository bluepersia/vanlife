import { fetchData } from "../../api/api";

async function getVans() {
  const data = await fetchData("/api/vans");

  return data.vans;
}

export { getVans };
