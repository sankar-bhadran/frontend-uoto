"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar, ConfigProvider } from "antd";
import type { Dayjs } from "dayjs";
import dayLocaleData from "dayjs/plugin/localeData";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(dayLocaleData);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekStart: 1,
});

const CalendarComponent = forwardRef((props, ref) => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  console.log(currentDate);

  useImperativeHandle(ref, () => ({
    handleNextMonth: () => {
      setCurrentDate((prev) => prev.add(1, "month"));
    },
    handlePrevMonth: () => {
      setCurrentDate((prev) => prev.subtract(1, "month"));
    },
  }));

  const day = ["M", "T", "W", "T", "F", "S", "S"];

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

  const wrapperStyle: React.CSSProperties = {
    width: "95%",
  };

  return (
    <div style={wrapperStyle}>
      <ConfigProvider
        theme={{
          token: {
            colorTextHeading: "red",
            colorText: "#1F2937",
            fontSize: 15,
            fontWeightStrong: 700,
          },
        }}
      >
        <Calendar
          className="my-calendar"
          fullscreen={false}
          headerRender={() => {
            return <div style={{ padding: 8 }}></div>;
          }}
          value={currentDate}
          onChange={(date) => setCurrentDate(date)}
        />
      </ConfigProvider>
    </div>
  );
});

CalendarComponent.displayName = "CalendarComponent";

export default CalendarComponent;
