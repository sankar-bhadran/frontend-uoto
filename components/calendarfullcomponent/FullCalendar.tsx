"use client";
import React, { useRef } from "react";
import CalendarComponent from "../calendar/CalendarComponent";
const FullCalendar = () => {
  //   const [];
  const childRef = useRef();
  return (
    <div className="rounded-[24px] border-[1px] border-[#E5E7EB]  p-[32px] flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-primarytext-color">
          Set your vehicle availability
        </h1>
      </div>
      <div className="flex gap-[20px]">
        <button
          className="pt-[9px] pr-[17px] pb-[9px] pl-[17px] text-nowrap border-[#D1D5DB] rounded-[16px] border-2 text-base font-medium text-[#374151]"
          onClick={() => {
            childRef.current.handlePrevMonth();
          }}
        >
          Prev month
        </button>
        <button className="pt-[9px] pr-[17px] pb-[9px] pl-[17px] text-nowrap border-[#D1D5DB] rounded-[16px] border-2 text-base font-medium text-[#374151]">
          January 2024
        </button>
        <button
          className="pt-[9px] pr-[17px] pb-[9px] pl-[17px] text-nowrap border-[#D1D5DB] rounded-[16px] border-2 text-base font-medium text-[#374151]"
          onClick={() => {
            childRef.current.handleNextMonth();
          }}
        >
          Next month
        </button>
      </div>
      <div className="flex justify-center">
        <CalendarComponent ref={childRef} />
      </div>
    </div>
  );
};

export default FullCalendar;
