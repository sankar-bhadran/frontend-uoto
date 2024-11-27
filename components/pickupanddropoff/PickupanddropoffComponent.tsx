import React from "react";
import Image from "next/image";
import Fromandtopic from "../../public/Fromtopic.png";

const PickupanddropoffComponent = () => {
  const places = [
    {
      TimeAndDate: "Monday, August 2 · 10:00",
      Place: "Dublin Airport, Ireland",
    },
    {
      TimeAndDate: "Tuesday, July 27 · 10:00",
      Place: "Dublin Airport, Ireland",
    },
  ];
  return (
    <div className="rounded-[24px] border-[1px] border-[#E5E7EB] flex flex-col p-[32px] gap-7">
      <div>
        <h1 className="text-3xl font-semibold">Pick up and drop off</h1>
      </div>
      <div className="flex gap-4">
        <Image src={Fromandtopic} width={20} height={14} alt="carimage" />
        <div className="flex flex-col gap-16  ">
          {places.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-[#4B5563] text-sm font-normal">
                {item.TimeAndDate}
              </p>
              <p className="text-sm font-semibold"> {item.Place}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PickupanddropoffComponent;
