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

type CalendarData = {
  month: string;
  year: string;
};

type Props = {
  setMonthAndYear: React.Dispatch<
    React.SetStateAction<CalendarData | undefined>
  >;
};
type CalendarComponent = {
  setMonthAndYear: () => void;
};

type Calendar = {
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
};

const CalendarComponent = forwardRef<Calendar, Props>((props, ref) => {
  const { setMonthAndYear } = props;
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
    setDataToSent({ month: monthName, year: year });
  }, [currentDate, monthName, year]);

  useEffect(() => {
    if (datatosent.month && datatosent.year) {
      sendMonthAndYear();
    }
  }, [datatosent]);

  const sendMonthAndYear = () => {
    setMonthAndYear(datatosent);
  };

  useImperativeHandle(ref, () => ({
    handleNextMonth: () => {
      setCurrentDate((prev) => prev.add(1, "month"));
    },
    handlePrevMonth: () => {
      setCurrentDate((prev) => prev.subtract(1, "month"));
    },
  }));

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

  const wrapperStyle: React.CSSProperties = {
    width: "95%",
  };

  return (
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
          headerRender={({ value, type, onChange, onTypeChange }) => {
            const start = 0;
            const end = 12;
            const monthOptions = [];
            let current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
              current = current.month(i);
              months.push(localeData.months(current));
            }

            return <div style={{ padding: 8 }}></div>;
          }}
          value={currentDate}
          onChange={(date) => setCurrentDate(date)}
        />
      </ConfigProvider>
      {/* <button onClick={sendMonthAndYear}>Click</button> */}
    </div>
  );
});

CalendarComponent.displayName = "CalendarComponent";

export default CalendarComponent;
