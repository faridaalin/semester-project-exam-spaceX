import { DocumentNode } from "graphql";
import { fetchData } from "../utils/fetchData";
import errorMessage from "../utils/errorMessage";

const displayComponents = (
  key: string,
  callback: Function,
  query: DocumentNode
) => {
  const dataFromSessionStorage: string | null = sessionStorage.getItem(key);

  if (!dataFromSessionStorage) {
    (async () => {
      try {
        const { data } = await fetchData(key, query);
        callback(data);
      } catch (err) {
        errorMessage(err);
        if (err) throw new Error(`HTTP error! ${err}`);
      }
    })();
  } else {
    callback(JSON.parse(dataFromSessionStorage));
  }
};

export default displayComponents;
