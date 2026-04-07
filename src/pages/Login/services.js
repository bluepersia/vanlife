import { fetchData } from "../../api/api";

export function login(loginData) {
  return fetchData(`/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
}
