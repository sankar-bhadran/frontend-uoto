import { CalendarOutlined } from "@ant-design/icons";
import React from "react";

const TotalCardComponent = () => {
  return (
    <div className="rounded-[24px] border-[1px] border-[#E5E7EB] p-[32px] flex flex-col gap-3">
      <h1 className="text-3xl font-semibold text-primarytext-color">
        €150{" "}
        <span className="text-2xl font-medium text-Tertiarytext-color">
          /day
        </span>
      </h1>
      <div className="flex gap-3 rounded-[24px] border-[1px] border-[#E5E7EB] p-5">
        <CalendarOutlined />
        <span>
          <p className="text-[14px] leading-[14px] font-normal text-[#9CA3AF] mb-1">
            Date
          </p>
          <h1 className="text-[18px] leading-[18px] font-semibold">
            Aug 12-16
          </h1>
        </span>
      </div>
      <div className="flex flex-col p-4 gap-3">
        <span className="flex justify-between">
          <p className="text-base font-normal text-[#4B5563]">€150 x 4 days</p>
          <p className="text-base font-normal text-[#4B5563]">€600</p>
        </span>
        <span className="flex justify-between">
          <p className="text-base font-normal text-[#4B5563]">Service charge</p>
          <p className="text-base font-normal text-[#4B5563]">€0</p>
        </span>
        <hr />
        <span className="flex justify-between">
          <p className="text-base font-semibold">Total</p>
          <p className="text-base font-semibold">€622</p>
        </span>
      </div>
    </div>
  );
};

export default TotalCardComponent;
