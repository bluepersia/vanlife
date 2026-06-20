import type { Van } from "../../../types/Van";

export async function getHostVans(): Promise<Van[]> {
  const res = await fetch("/api/host/vans");
  const json = await res.json();

  return json.vans;
}
