import { ScheduleData } from "@/types/schedule";
import { formatTime } from "@/utils/timeToClock";
import React from "react";

type RenderScheduleProps = {
  schedule: ScheduleData[];
};
function RenderSchedule({ schedule }: RenderScheduleProps) {
  const renderTitleContent = (title: string, value: string | number) => {
    return (
      <div className="mb-2">
        <p className="font-semibold">{title}</p>
        <p>{value}</p>
      </div>
    );
  };
  return (
    <div>
      {schedule.map((data) => (
        <div key={`id-${data.noka}`}>
          {renderTitleContent("Nama Kereta: ", data.trainname)}
          {renderTitleContent("Nomor KAI:", data.noka)}
          {renderTitleContent("Kedatangan:", formatTime(data.stoparrival))}
          {renderTitleContent(
            "Keberangkatan: ",
            formatTime(data.stopdeparture)
          )}

          {data.allocationDatas.map((data) => (
            <div key={data.id}>
              {renderTitleContent("kode kelas: ", data.subclasscode)}
              {renderTitleContent("Kursi Tersedia: ", data.seatavailable)}
              {renderTitleContent("Jumlah Penumpang VIP ", data.isVip)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RenderSchedule;
