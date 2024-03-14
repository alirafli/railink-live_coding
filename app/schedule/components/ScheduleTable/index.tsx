"use client";

import React from "react";
import { AvailabilityData } from "@/types/schedule";

type ScheduleTableProps = {
  schedule: AvailabilityData[];
};

function ScheduleTable({ schedule }: ScheduleTableProps) {
  return (
    <div>
      <button onClick={() => console.log(schedule)}>onCLick</button>
    </div>
  );
}

export default ScheduleTable;
