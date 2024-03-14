import { httpClient } from "@/lib/api/httpClient";
import { ApiResponse } from "@/types/schedule";

export type UserLoginParams = {
  email: string;
  password: string;
};

export const userLogin = async (params: UserLoginParams) => {
  const { data } = await httpClient.post<ApiResponse>(
    `v1/a7a03454-2d97-49d1-9177-17183c184bff`,
    { email: params.email, password: params.password }
  );
  return { data: data.response };
};
