"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import AvailableTime from "./available-time/AvailableTime";

export default function CalendarDate() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      {date ? (
        <AvailableTime />
      ) : (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      )}
    </>
  );
}
