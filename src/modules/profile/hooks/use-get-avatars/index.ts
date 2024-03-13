import { useQuery } from "@tanstack/react-query";
import { getAvatars } from "../../../../services";

const CACHE_KEY = "avatars";

export const useGetAvatars = () => {
  return useQuery({
    queryKey: [CACHE_KEY],
    queryFn: async () => {
      const { data } = await getAvatars();
      return data;
    },
    enabled: true,
  });
};
