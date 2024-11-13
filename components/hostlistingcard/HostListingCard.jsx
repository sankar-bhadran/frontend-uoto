import React from "react";

const HostListingCard = () => {
  return (
    <>
      <div className="rounded-[24px] border-[1px] border-[#E5E7EB] p-6 bg-[#F9FAFB] flex flex-col gap-6">
        <h2 className="text-2xl font-bold">My listings</h2>
        <hr className="w-[8%] h-[1px] bg-[#E5E7EB] border-none" />
        <div className="grid grid-cols-2 gap-6 items-center  ">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div key={index}>
                <div className="w-[90%] h-[250px] rounded-lg bg-[#D1D5DB]"></div>
                <div className="p-2">
                  <h2 className="text-xl font-semibold text-[#1F2937]">
                    KONA Electric
                  </h2>
                  <h5 className="font-semibold">
                    $101{" "}
                    <span className="text-xs font-medium text-[#6B7280]">
                      /day
                    </span>
                  </h5>
                </div>
              </div>
            ))}
        </div>
        <h1 className="text-center text-base font-medium text-[#374151]">
          Show me more
        </h1>
      </div>
    </>
  );
};

export default HostListingCard;
