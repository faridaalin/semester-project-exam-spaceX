import { client } from "../utils/client";
import { query } from "../query";

export const fetchData = async (key: string) => {
  const result = await client.query({ query });
  if (result.errors) throw new Error(`HTTP error! status: ${result.errors}`);

  if (key) sessionStorage.setItem(key, JSON.stringify(result.data.launchNext));
  return result;
};
