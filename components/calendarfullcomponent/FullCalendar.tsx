"use client";
import React, { useRef, useState } from "react";
import CalendarComponent from "../calendar/CalendarComponent";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

type CalendarComponentRef = {
  sendMonthAndYear: () => void;
};

type calendarData = {
  month: string;
  year: string;
};

const FullCalendar = () => {
  const [dataFromChild, setDataFromChild] = useState<calendarData>();
  const handleMonthAndYear = (data: calendarData) => {
    setDataFromChild(data);
  };

  const childRef = useRef<CalendarComponentRef>(null);
  return (
    <div className="rounded-[24px] border-[1px] border-[#E5E7EB]  p-[32px] flex flex-col gap-6 ">
      <div>
        <h1 className="text-2xl font-semibold text-primarytext-color">
          Set your vehicle availability
        </h1>
      </div>
      <div className="flex justify-between items-center gap-[20px] ">
        <button
          onClick={() => {
            childRef.current.handlePrevMonth();
          }}
        >
          <LeftOutlined
            style={{
              color: "#E71C3A",
              fontSize: "22px",
            }}
          />
        </button>
        <p className="text-[#000000] font-extrabold text-[25.36px] leading-[35.96px]">
          {dataFromChild?.month}
          {dataFromChild?.year}
        </p>
        <button
          onClick={() => {
            childRef.current.handleNextMonth();
          }}
        >
          <RightOutlined
            style={{
              color: "#E71C3A",
              fontSize: "22px",
            }}
          />
        </button>
      </div>
      <div className="flex justify-center">
        <CalendarComponent
          ref={childRef}
          setMonthAndYear={handleMonthAndYear}
        />
      </div>
      <hr />
      <div className="flex justify-end ">
        <button className=" w-[30%] pt-[9px] pr-[17px] pb-[9px] pl-[17px] text-nowrap border-[#6B7280] rounded-[17.11px] border-2 text-base font-bold text-[#4B5563]">
          Clear
        </button>
      </div>
    </div>
  );
};

export default FullCalendar;
