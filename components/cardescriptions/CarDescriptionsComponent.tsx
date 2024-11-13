import React from "react";

const CarDescriptionsComponent = () => {
  return (
    <>
      <div className="rounded-[24px] border-[1px] border-[#E5E7EB] w-[61.8%] p-[32px] flex flex-col gap-[24px]">
        <h1 className="text-2xl font-semibold text-primarytext-color">
          Car descriptions
        </h1>
        <div className="flex flex-col gap-[24px]">
          <div>
            <p className="text-base font-normal text-[#4B5563]">
              Until the all-new TUCSON hits the dealer showrooms you can check
              it out in our Showroom Walkaround video. Watch the video and join
              our product specialist as he gives you an up-close look of our
              latest SUV
            </p>
          </div>
          <div>
            <p className="text-base font-normal text-[#4B5563]">
              Questions are at the heart of making things great. Watch our
              celebrity-filled TV ad and you’ll see that when we say
              “everything,” we mean everything.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDescriptionsComponent;
