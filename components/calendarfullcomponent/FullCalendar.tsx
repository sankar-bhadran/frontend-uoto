"use client";
import { ConfigProvider, Select } from "antd";
import CalendarComponent from "../calendar/CalendarComponent";

const FullCalendar = () => {
  // const [dataFromChild, setDataFromChild] = useState<CalendarData>();
  // const handleMonthAndYear = (data: CalendarData) => {
  //   setDataFromChild(data);
  // };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="rounded-[24px] border-[1px] border-[#E5E7EB]  p-[32px] flex flex-col gap-6 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-primarytext-color">
          Set your vehicle availability
        </h1>
        <p>Location</p>
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 16,
              colorBorder: "black",
            },
          }}
        >
          <Select
            placeholder="Select location"
            style={{ width: "100%" }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Dublin Airport" },
              { value: "lucy", label: "Dublin Airport" },
              { value: "yiminghe", label: "Dublin Airport" },
            ]}
          />
        </ConfigProvider>
      </div>

      <div className="flex justify-center">
        <CalendarComponent />
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
