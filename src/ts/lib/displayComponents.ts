import { fetchData } from "../utils/fetchData";

const displayComponents = (key: string, callback: Function, query: any) => {
  const dataFromSessionStorage: string | null = sessionStorage.getItem(key);

  if (!dataFromSessionStorage) {
    (async () => {
      try {
        const { data } = await fetchData(key, query);
        callback(data);
      } catch (err) {
        console.log("ERROR🔥", err);
      }
    })();
  } else {
    callback(JSON.parse(dataFromSessionStorage));
  }
};

export default displayComponents;
