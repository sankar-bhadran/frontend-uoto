"use client";
import React, { useRef, useState } from "react";
import CalendarComponent from "../calendar/CalendarComponent";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message } from "antd";

type CalendarComponentRef = {
  sendMonthAndYear: () => void;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
};

type CalendarData = {
  month: string;
  year: string;
};

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const onClickOne: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const itemsOne: MenuProps["items"] = [
  { label: "January", key: "1" },
  { label: "February", key: "2" },
  { label: "March", key: "3" },
  { label: "April", key: "4" },
  { label: "May", key: "5" },
  { label: "June", key: "6" },
  { label: "July", key: "7" },
  { label: "August", key: "8" },
  { label: "September", key: "9" },
  { label: "October", key: "10" },
  { label: "November", key: "11" },
  { label: "December", key: "12" },
];
const items: MenuProps["items"] = [
  {
    label: "2023",
    key: "1",
  },
  {
    label: "2022",
    key: "2",
  },
  {
    label: "2021",
    key: "3",
  },
  {
    label: "2020",
    key: "1",
  },
  {
    label: "2019",
    key: "2",
  },
  {
    label: "2018",
    key: "3",
  },
];

const FullCalendar = () => {
  const [dataFromChild, setDataFromChild] = useState<CalendarData>();
  const handleMonthAndYear = (data: CalendarData) => {
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
            childRef.current?.handlePrevMonth();
          }}
        >
          <LeftOutlined
            style={{
              color: "#E71C3A",
              fontSize: "22px",
            }}
          />
        </button>
        <p className="text-[#000000] font-extrabold text-[25.36px] leading-[35.96px] cursor-pointer">
          <Dropdown
            menu={{ items: itemsOne, onClick: onClickOne }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()} className=" ml-2">
              {dataFromChild?.month}
            </a>
          </Dropdown>

          <Dropdown menu={{ items, onClick }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()} className=" ml-2">
              {dataFromChild?.year}
            </a>
          </Dropdown>
        </p>
        <button
          onClick={() => {
            childRef.current?.handleNextMonth();
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
