import type { Van } from "../../types/Van";

export async function getVan(id: string): Promise<Van> {
  const res = await fetch(`/api/vans/${id}`);

  const json = await res.json();

  return json.vans;
}
