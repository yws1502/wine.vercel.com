import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { WINE_API_ENDPOINT } from "../constants";

export const useWineData = (paths: string) => {
  return useSWR(`${WINE_API_ENDPOINT}${paths}`, fetcher);
}

// const { data, error } = useSWR("https://api.sampleapis.com/wines/reds", fetcher);