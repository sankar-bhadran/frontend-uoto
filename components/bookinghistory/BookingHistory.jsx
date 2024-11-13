import React from "react";
import Image from "next/image";
import bookingHistoryPicture from "../../public/hostprofile/Rectangle 127.png";
const BookingHistory = () => {
  return (
    <>
      <div className=" flex flex-col p-4">
        <div className="flex justify-center flex-col items-center gap-6 p-[32px] ">
          <h1 className="text-3xl font-semibold">Booking</h1>
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
        </div>
        {Array(5)
          .fill()
          .map((_, index) => (
            <div className="mb-5 " key={index}>
              <div className="flex justify-center items-center gap-3">
                <div>
                  <Image
                    src={bookingHistoryPicture}
                    width={80}
                    height={80}
                    alt="menuIcon"
                  />
                </div>
                <div className="flex justify-between gap-12">
                  <div>
                    <h1>Kona Electric</h1>
                    <p>12/03/2024 - 17/03/2024</p>
                    <p>5 days</p>
                  </div>
                  <div>
                    <p>$99 /day</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-center">
          <button className=" w-[30%] pt-[13px] pr-[25px] pb-[13px] pl-[23px] text-nowrap border-[#D1D5DB] rounded-[56px] border-2 ">
            See more
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingHistory;
