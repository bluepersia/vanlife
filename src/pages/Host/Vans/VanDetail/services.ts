import type { Van } from "../../../../types/Van";

export async function getHostVan(id: string): Promise<Van> {
  const res = await fetch(`/api/host/vans/${id}`);

  const json = await res.json();

  return json.vans;
}
