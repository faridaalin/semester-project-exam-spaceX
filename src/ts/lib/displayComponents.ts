import { fetchData } from "../utils/fetchData";

const displayComponents = (key: any, fc: any, query: any) => {
  const dataFromSessionStorage: string | null = sessionStorage.getItem(key);

  if (!dataFromSessionStorage) {
    (async () => {
      try {
        const { data } = await fetchData(key, query);
        fc(data);
      } catch (err) {
        console.log("ERROR🔥", err);
      }
    })();
  } else {
    fc(JSON.parse(dataFromSessionStorage));
  }
};

export default displayComponents;
