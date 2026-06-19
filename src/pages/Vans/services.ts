import type { Van } from "../../types/Van";

export async function getVans(): Promise<Van[]> {
  const res = await fetch(`/api/vans`);

  const json = await res.json();

  return json.vans as Van[];
}
