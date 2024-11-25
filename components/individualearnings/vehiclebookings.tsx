import React from "react";
import Image from "next/image";
import CarImage from "../../public/individualearnings/carImage.png";
const vehiclebookings = () => {
  return (
    <div className="container">
      <div className="container max-w-[80%] px-2 py-[15px] mx-auto mt-[60px] ">
        <h1 className="mb-6 text-[20px] leading-[24px] font-semibold">
          Vehicle Bookings
        </h1>
        <div className="rounded-[24px] border-[1px] border-[#E5E7EB] p-[32px] flex flex-col gap-3">
          <div className="flex gap-3">
            <button className="pt-[8px] pr-[15px] pb-[8px] pl-[15px] bg-[#E71C3A] rounded-[30px] text-white">
              Current
            </button>
            <button className="pt-[8px] pr-[15px] pb-[8px] pl-[15px] bg-[#E71C3A] rounded-[30px] text-white">
              Upcoming
            </button>
            <button className="pt-[8px] pr-[15px] pb-[8px] pl-[15px] bg-[#E71C3A] rounded-[30px] text-white">
              Past
            </button>
          </div>
          <hr className="w-[8%] h-[1px] bg-[#E5E7EB] border-none" />
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                className="rounded-[10px] border-[1px] border-[#E5E7EB] flex flex-col p-2 gap-2"
                key={index}
              >
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Image
                      src={CarImage}
                      width={80}
                      height={80}
                      alt="carimage"
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[18px] text-[#1F2937] leading-[18px]">
                        Kona Electric
                      </h1>
                      <p className="text-xs font-normal	color-[#6B7280]">
                        12/03/2024 - 17/03/2024
                      </p>
                      <p className="text-xs font-normal	">5 days</p>
                    </div>
                  </div>
                  <p>
                    <span className="text-base font-bold text-[#14B8A6]">
                      $99
                    </span>
                    <span className="text-sm leading-[14px] text-[#9CA3AF]">
                      /day
                    </span>
                  </p>
                </div>
                <hr className="w-[%] h-[0.5px] bg-[#E5E7EB] border-none" />
                <span className="text-base font-bold text-[#14B8A6]">
                  +$495
                </span>
              </div>
            ))}
          <div className="flex justify-center">
            <button className=" w-[20%] pt-[13px] pr-[25px] pb-[13px] pl-[23px] text-nowrap border-[#D1D5DB] rounded-[56px] border-2 text-base font-medium text-[#374151] ">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vehiclebookings;
