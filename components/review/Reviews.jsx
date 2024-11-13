import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Flex, Rate } from "antd";
import { useState } from "react";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Reviews = () => {
  const [value, setValue] = useState(4);

  return (
    <>
      <div className="p-[32px] flex flex-col gap-[32px]">
        <h1 className="font-semibold text-2xl text-[#111827]">
          Reviews (23 reviews)
        </h1>
        <div className="flex flex-col gap-9">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <Avatar size="large" icon={<UserOutlined />} />
                    <span>
                      <h3 className="font-medium text-sm text-[#111827]">
                        Cody Fisher{" "}
                      </h3>
                      <h3 className="font-normal text-xs text-[#6B7280]">
                        May 20, 2021
                      </h3>
                    </span>
                  </div>
                  <div>
                    <Flex gap="middle" vertical>
                      <Rate tooltips={desc} onChange={setValue} value={value} />
                      {/* {value ? <span>{desc[value - 1]}</span> : null} */}
                    </Flex>
                  </div>
                </div>
                <div className="justify-center items-center flex  w-[95%]">
                  <span className="text-base font-normal text-[#6B7280]">
                    Great car, not a single problem during our rental! Plenty of
                    space for our <br /> entire families bags.
                  </span>
                </div>
              </div>
            ))}
        </div>
        <button className=" w-[30%] pt-[13px] pr-[25px] pb-[13px] pl-[23px] text-nowrap border-[#D1D5DB] rounded-[56px] border-2 text-base font-medium text-[#374151] ">
          View more 20 review
        </button>
      </div>
    </>
  );
};

export default Reviews;
