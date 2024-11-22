import React from "react";
import { Flex, Rate } from "antd";
import { useState } from "react";
import Image from "next/image";
import ReviewsPic from "../../public/hostprofile/Mercedes G wagon.png";
import ReviewerPic from "../../public/hostprofile/Circular.png";
const desc = ["terrible", "bad"];

const Reviews = () => {
  const [value, setValue] = useState(4);

  return (
    <>
      <div className="p-[32px] flex flex-col gap-[32px]">
        <h1 className="font-semibold text-2xl text-[#111827]">
          Reviews (23 reviews)
        </h1>

        {Array(3)
          .fill()
          .map((_, index) => (
            <div className="flex justify-center gap-3" key={index}>
              <div>
                <Image
                  src={ReviewerPic}
                  width={40}
                  height={40}
                  alt="menuIcon"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-sm font-medium text-[#111827]">
                    Cody Fisher
                  </h2>
                  <p className="text-xs font-normal">May 20, 2021</p>
                </div>
                <div>
                  <h3 className="text-xs font-normal text-[#111827]">
                    KONA Electric
                  </h3>
                  <p className="text-base font-normal text-[#4B5563]">
                    Great car, not a single problem during our rental! Plenty of
                    space for our entire families bags.
                  </p>
                </div>
              </div>
              <Image
                src={ReviewsPic}
                width={96}
                alt="menuIcon"
                style={{
                  borderRadius: "10.67px",
                  height: "90px",
                  marginRight: "",
                }}
              />
              <Flex gap="middle" vertical>
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {/* {value ? <span>{desc[value - 1]}</span> : null} */}
              </Flex>
            </div>
          ))}

        <button className=" w-[20%] pt-[13px] pr-[25px] pb-[13px] pl-[23px] text-nowrap border-[#D1D5DB] rounded-[56px] border-2 text-base font-medium text-[#374151] ">
          View more
        </button>
      </div>
    </>
  );
};

export default Reviews;
