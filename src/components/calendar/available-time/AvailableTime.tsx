import React, { Dispatch, MouseEventHandler, useState } from "react";
import add from "date-fns/add";
import { Button } from "@/components/ui/button";
import format from "date-fns/format";

type TimeProps = {
  date: Date;
};

export default function AvailableTime({ date }: TimeProps) {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const getTimes = () => {
    if (!date) return;

    const beginning = add(date, { hours: 9 });
    const end = add(date, { hours: 18 });
    const interval = 30; // in minutes

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  const handleTimeClick = (time: Date) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-wrap gap-5 w-[500px]">
      {times?.map((time, idx) => (
        <Button
          variant={"outline"}
          key={`time-${idx}`}
          onClick={() => handleTimeClick(time)}
        >
          {format(time, "kk:mm")}
        </Button>
      ))}
    </div>
  );
}
