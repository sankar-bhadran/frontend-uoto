import { ConfigProvider, Select } from "antd";
import React, { useState } from "react";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";
// import dayjs from "dayjs";
const { RangePicker } = DatePicker;

type handleDateChange = (
  date: [Dayjs, Dayjs] | null,
  dateString: [string, string]
) => void;

const Earnings = () => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);
  const [formattedRange, setFormattedRange] = useState<string>("");

  const handleDateChange: handleDateChange = (date) => {
    if (date) {
      const formattedStartDate = date[0].format("MMM D, YYYY");
      const formattedEndDate = date[1].format("MMM D");
      setFormattedRange(`${formattedStartDate} - ${formattedEndDate}`);
      setDates(date);
    } else {
      setFormattedRange("");
      setDates(null);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setDatePickerOpen(open);
  };

  const options = [
    { value: "jack", label: "Today" },
    { value: "lucy", label: "Last 7 days" },
    { value: "last4weeks", label: "Last 4 Weeks" },
    { value: "last3months", label: "All Last 3 months" },
    { value: "last12months", label: "Last 12 months" },
    { value: "monthToDate", label: "Month to date" },
    { value: "quarterToDate", label: "Quarter to date" },
    { value: "yearToDate", label: "Year to date" },
    { value: "allTime", label: "All Time" },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="flex flex-col  p-[32px] gap-[14px]">
        <h1 className="font-semibold text-3xl text-center">Earnings</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 divide-x rounded-[6px] border-[2px] border-[#E5E7EB] divide-[#E5E7EB] ">
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    activeBorderColor: "#E71 ",
                    hoverBorderColor: "#ffff",
                    optionSelectedColor: "#E71C3A",
                  },
                },
                token: {
                  fontSizeIcon: 16,
                },
              }}
            >
              <Select
                className="no-scroll-dropdown"
                defaultValue="All Time"
                style={{ width: "auto" }}
                onChange={handleChange}
                listHeight={500}
                options={options}
              />
            </ConfigProvider>

            <span className="p-1 font-semibold text-base flex items-center justify-center space-x-2 col-span-2">
              <div>
                <ConfigProvider>
                  <RangePicker
                    open={datePickerOpen}
                    onOpenChange={handleOpenChange}
                    onChange={handleDateChange}
                    format="MMM D,YYYY"
                    className="cursor-pointer"
                  />
                </ConfigProvider>
              </div>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-[28px]">
          <h2 className="text-[17px] leading-[24px] font-semibold">
            Total Earnings
          </h2>
          <h1 className="text-4xl font-semibold"> $12,345</h1>
          <p className="text-xs font-medium">+5%</p>
        </div>
        <div className="flex justify-center">
          <button className=" w-[30%] pt-[13px] pr-[25px] pb-[13px] pl-[23px] text-nowrap border-[#D1D5DB] rounded-[56px] border-2 text-base font-medium text-[#374151]">
            See more
          </button>
        </div>
      </div>
    </>
  );
};

export default Earnings;
