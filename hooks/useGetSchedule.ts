import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "@/services/schedule";

export function useGetSchedule() {
  const queryKey = ["getSchedule"];

  const queryFn = async () => {
    return await getSchedule().then((result) => result.data);
  };

  return useQuery({ queryKey, queryFn });
}

export default useGetSchedule;
