import { fetchData } from "/src/api/api";

async function getVan(id) {
  const data = await fetchData(`/api/host/vans/${id}`);

  return data.vans;
}

export { getVan };
