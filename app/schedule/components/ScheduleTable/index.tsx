"use client";

import React from "react";
import { AvailabilityData, ScheduleData } from "@/types/schedule";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RenderSchedule from "./RenderSchedule";
import { readableDate } from "@/utils/DateFormatter";

type ScheduleTableProps = {
  schedule: AvailabilityData[];
};

function ScheduleTable({ schedule }: ScheduleTableProps) {
  const columns: ColumnDef<AvailabilityData>[] = [
    {
      accessorKey: "tripdate",
      header: "Tanggal Keberangkatan",
      cell: ({ getValue }) => {
        return readableDate(getValue() as string);
      },
    },
    {
      accessorKey: "stasiunnamedesdisplay",
      header: "Stasiun Keberangkatan",
    },
    {
      accessorKey: "stasiunnameorgdisplay",
      header: "Stasiun Tujuan",
    },
    {
      accessorKey: "scheduleDatas",
      header: "Detail",
      cell: ({ getValue }) => {
        return RenderSchedule({ schedule: getValue() as ScheduleData[] });
      },
    },
  ];

  const table = useReactTable({
    data: schedule,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ScheduleTable;
