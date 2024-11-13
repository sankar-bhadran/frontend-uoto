import React from "react";

const HostListingCard = () => {
  return (
    <>
      <h2>My listings</h2>
      <div className="grid grid-cols-2 gap-6 items-center p-7">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index}>
              <div className="w-[90%] h-[250px] rounded-lg bg-[#D1D5DB]"></div>
              <div className="p-2">
                <h2>KONA Electric</h2>
                <h5>$101 /day</h5>
              </div>
            </div>
          ))}
      </div>
      <h1 className="text-center">Show me more</h1>
    </>
  );
};

export default HostListingCard;
