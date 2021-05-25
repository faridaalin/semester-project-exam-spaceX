import { client } from "../utils/client";

export const fetchData = async (key: string, query: any) => {
  const result = await client.query({ query: query });
  if (result.errors) throw new Error(`HTTP error! status: ${result.errors}`);

  if (key) sessionStorage.setItem(key, JSON.stringify(result.data));
  return result;
};
