import { httpClient } from "@/lib/api/httpClient";
import { ApiResponse } from "@/types/schedule";

export const getSchedule = async () => {
  const { data } = await httpClient.get<ApiResponse>(
    `v1/1b1d4306-8b5e-46b0-b0b2-c7d2a7e23e1d`
  );
  return { data: data.response };
};
