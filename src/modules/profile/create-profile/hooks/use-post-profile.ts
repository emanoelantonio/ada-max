import { MutateOptions, useMutation } from "@tanstack/react-query";

import { postProfile } from "../../../../services";
import { ProfileType } from "../../../../types";
import { ProfileBodyType } from "../../types";

export const usePostProfile = (
  options?: MutateOptions<ProfileType, unknown, ProfileBodyType>
) => {
  return useMutation<ProfileType, unknown, ProfileBodyType>({
    mutationFn: async (params) => {
      const { data } = await postProfile({
        ...params,
        avatarId: Number(params.avatarId),
      });
      return data;
    },
    ...options,
  });
};
