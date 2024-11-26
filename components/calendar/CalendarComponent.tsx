"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar, ConfigProvider } from "antd";
import type { Dayjs } from "dayjs";
import dayLocaleData from "dayjs/plugin/localeData";
import updateLocale from "dayjs/plugin/updateLocale";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
dayjs.extend(dayLocaleData);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekStart: 1,
});
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

let itemsOne: MenuProps["items"] = [];
let items: MenuProps["items"] = [];

type DropdownClickHandler = (e: { key: string }) => void;

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const monthName = currentDate.format("MMMM");
  const year = currentDate.format("YYYY");
  const [datatosent, setDataToSent] = useState<{ month: string; year: string }>(
    {
      month: "",
      year: "",
    }
  );

  useEffect(() => {
    setDataToSent({ ...datatosent, month: monthName, year: year });
  }, [currentDate]);
  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    for (let i = 1; i < 8; i++) {
      const a = document.querySelector(
        `.my-calendar table thead tr > th:nth-child(${i})`
      );
      if (a) {
        a.textContent = day[i - 1];
      }
    }
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => prev.add(1, "month"));
  };

  const handleDropdownItemClickYear: DropdownClickHandler = (e) => {
    console.log(e.key);
    const newYear = currentDate.year(Number(e.key));
    setCurrentDate(newYear);
  };

  const handleDropdownItemClickMonth: DropdownClickHandler = (e) => {
    console.log(e.key);
    const newMonth = currentDate.month(Number(e.key));
    setCurrentDate(newMonth);
  };

  const wrapperStyle: React.CSSProperties = {
    width: "95%",
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-[20px] ">
          <button onClick={handlePrevMonth}>
            <LeftOutlined
              style={{
                color: "#E71C3A",
                fontSize: "22px",
              }}
            />
          </button>
          <p className="text-[#000000] font-extrabold text-[25.36px] leading-[35.96px] cursor-pointer calendar-dropdown">
            <Dropdown
              menu={{ items: itemsOne, onClick: handleDropdownItemClickMonth }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()} className=" ml-2">
                {monthName}
              </a>
            </Dropdown>
            <Dropdown
              menu={{ items, onClick: handleDropdownItemClickYear }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()} className=" ml-2">
                {year}
              </a>
            </Dropdown>
            {/* {monthName} {year} */}
            <RightOutlined
              style={{
                color: "#E71C3A",
                fontSize: "22px",
              }}
            />
          </p>
          <button onClick={handleNextMonth}>
            <RightOutlined
              style={{
                color: "#E71C3A",
                fontSize: "22px",
              }}
            />
          </button>
        </div>
        <div style={wrapperStyle}>
          <ConfigProvider
            theme={{
              token: {
                colorText: "#1F2937",
                fontSize: 15,
                fontWeightStrong: 700,
              },
            }}
          >
            <Calendar
              className="my-calendar"
              fullscreen={false}
              headerRender={({ value }) => {
                const start = 0;
                const end = 12;
                let current = value.clone();
                const localeData = value.localeData();
                const months = [];
                for (let i = 0; i < 12; i++) {
                  current = current.month(i);
                  months.push(localeData.months(current));
                }
                itemsOne = [];
                for (let i = start; i < end; i++) {
                  itemsOne.push({ label: months[i], key: i });
                }

                items = [];
                const year = value.year();
                for (let i = year - 5; i < year + 5; i += 1) {
                  items.push({ label: i, key: i });
                }
                return <div style={{ padding: 8 }}></div>;
              }}
              value={currentDate}
              onChange={(date) => setCurrentDate(date)}
            />
          </ConfigProvider>
        </div>
      </div>
    </>
  );
};

export default CalendarComponent;
