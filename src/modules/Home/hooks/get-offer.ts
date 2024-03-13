import { useQuery } from "@tanstack/react-query";
import { getOffer } from "../../../services";

const CACHE_KEY = "offer";

export const useGetOffer = (id: number, startLoading: boolean) => {
  return useQuery({
    queryKey: [CACHE_KEY, id],
    queryFn: async () => {
      const { data } = await getOffer(id);
      return data;
    },
    enabled: startLoading,
  });
};
