import { fetchData } from "../../api/api";

async function getVan(id) {
  const data = await fetchData(`/api/vans/${id}`);

  return data.vans;
}

export { getVan };
