"use client";
import CalendarComponent from "../calendar/CalendarComponent";

const FullCalendar = () => {
  // const [dataFromChild, setDataFromChild] = useState<CalendarData>();
  // const handleMonthAndYear = (data: CalendarData) => {
  //   setDataFromChild(data);
  // };

  return (
    <div className="rounded-[24px] border-[1px] border-[#E5E7EB]  p-[32px] flex flex-col gap-6 ">
      <div>
        <h1 className="text-2xl font-semibold text-primarytext-color">
          Set your vehicle availability
        </h1>
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
