"use client";

import { useGetSchedule } from "@/hooks/useGetSchedule";
import ScheduleTable from "./components/ScheduleTable";

export default function Schedule() {
  const { data: schedule, isLoading, isError } = useGetSchedule();

  if (!schedule || isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>error! Status:{schedule.familystatus}</h1>;

  return (
    <div>
      <ScheduleTable schedule={schedule.availabilitydatalist} />
    </div>
  );
}
