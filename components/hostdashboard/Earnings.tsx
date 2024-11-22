import { ConfigProvider, Select } from "antd";
import React, { useState } from "react";
import calendarIcon from "../icons/calendaricon.svg";
import Image from "next/image";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

const Earnings = () => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [dates, setDates] = useState<[Dayjs, Dayjs]>([dayjs(), dayjs()]);
  const [startDate, setStartDate] = useState(dayjs().format("DD-MM-YYYY"));
  const [endDate, setEndDate] = useState(dayjs().format("DD-MM-YYYY"));

  const handleDateChange = (
    date: [Dayjs, Dayjs] | null,
    dateString: [string, string]
  ) => {
    if (date) {
      setStartDate(date[0].format("DD-MM-YYYY"));
      setEndDate(date[1].format("DD-MM-YYYY"));
      setDates(date);
    } else {
      setStartDate("");
      setEndDate("");
    }
  };

  console.log(dates);
  console.log(startDate);
  console.log(endDate);

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
          <div
            className="grid grid-cols-2 divide-x rounded-[6px] border-[2px] border-[#E5E7EB] divide-[#E5E7EB]"
            // style={{ display: "inline-block", width: "auto" }}
          >
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
                style={{ width: 150 }}
                onChange={handleChange}
                listHeight={500}
                options={options}
              />
            </ConfigProvider>

            <span className="p-1 font-semibold text-base flex items-center justify-center space-x-2">
              <div>
                <button
                  className="cursor-pointer"
                  onClick={() => setDatePickerOpen(!datePickerOpen)}
                >
                  <Image
                    src={calendarIcon}
                    width={17.25}
                    height={17.25}
                    alt="menuIcon"
                  />
                </button>
                <ConfigProvider>
                  <RangePicker
                    className="datePicker"
                    open={datePickerOpen}
                    onOpenChange={handleOpenChange}
                    value={dates}
                    onChange={handleDateChange}
                    format="DD-MM-YYYY"
                  />
                </ConfigProvider>
                {/* <DatePicker.RangePicker /> */}
              </div>

              {/* <span className="pr-1">{selectedDate}</span> */}
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
