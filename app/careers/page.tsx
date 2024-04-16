"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
import { useEffect, useMemo, useState } from "react";

interface JobPosition {
  job_title: string;
  department: string;
  location: string;
  description: string;
  link: string;
}

export const columns: ColumnDef<JobPosition>[] = [
  {
    accessorKey: "job_title",
    header: "Job Title",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "link",
    header: "Apply",
    cell: (cell) => (
      <Button
        className="bg-teal-800 hover:bg-teal-700 text-white rounded-xl"
        onClick={() => {
          // check if https:// is present in the link, if not, add it
          if(typeof cell.row.getValue("link") !== "string") return;
          if (!(cell.row.getValue("link") as string).includes("https://")) {
            window.location.href = `https://${cell.row.getValue("link")}`;
          } else {
            window.location.href = `${cell.row.getValue("link")}`;
          }
        }}
      >
        Apply
      </Button>
    ),
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-xl border text-xl">
      <Table className="rounded-xl bg-white">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="text-teal-800">
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
                className="hover:bg-teal-50 hover:text-teal-800 text-lg"
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

const useGetData = () => {
  const [data, setData] = useState<JobPosition[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://silence-classroom.pockethost.io/api/collections/open_positions/records"
      );
      const data = await response.json();
      setData(
        data.items.map((item: any) => {
          return {
            job_title: item.job_title,
            department: item.department,
            location: item.location,
            description: item.description,
            link: item.link,
          };
        })
      );
    };

    fetchData();
  }, []);

  return data;
};

const CareersHero = () => {
  return (
    <section className="flex flex-row gap-12 lg:gap-20 p-8 md:p-12 lg:p-24 xl:px-32 border-y">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-teal-800">
          Make a Difference in Healthcare: Join the Shrikosh Team
        </h1>
        <p className="lg:text-xl">
          We&apos;re revolutionizing access to medicine in India, and we&apos;re
          looking for passionate individuals to join our mission. Explore
          exciting career opportunities across various departments and be part
          of a company dedicated to improving healthcare for all.
        </p>
        <Button
          className="bg-teal-800 hover:bg-teal-700 text-white rounded-xl mt-auto"
          asChild
        >
          <Link href="/careers#open-positions">View Open Positions</Link>
        </Button>
      </div>

      <div className="hidden md:flex w-1/2">
        <img src="/team.jpg" alt="Careers Hero" className="rounded-xl" />
      </div>
    </section>
  );
};

const CareersOpenPositions = () => {
  const data = useGetData();

  return (
    <section
      id="open-positions"
      className="p-8 md:p-12 lg:p-24 xl:px-32 border-b flex flex-col gap-8 bg-teal-50"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:tex-5xl font-bold text-teal-800">
        Open Positions
      </h2>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default function Careers() {
  return (
    <main>
      <CareersHero />
      <CareersOpenPositions />
    </main>
  );
}
