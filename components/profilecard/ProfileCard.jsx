import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Image from "next/image";
import HomeIcon from "../icons/Icon.svg";
import LanuageIcon from "../icons/Icon (1).svg";
import CalendarIcon from "../icons/Icon (2).svg";
import EditIcon from "../icons/Pencil.svg";

const ProfileCard = () => {
  return (
    <>
      <div className="container p-6 flex flex-col gap-7">
        <div className="flex flex-col justify-center items-center gap-[9px]">
          <Avatar size={80} icon={<UserOutlined />} />
          <h1>Frist Lastname</h1>
          <span>4.9 (122 reviews)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <Image src={HomeIcon} width={18} height={18} alt="menuIcon" />
            <h2 className="text-center">Dublin, Ireland</h2>
          </div>
          <div className="flex  items-center gap-3">
            <Image src={LanuageIcon} width={18} height={18} alt="menuIcon" />
            <h2 className="text-center">Speaks English</h2>
          </div>
          <div className="flex items-center gap-3 ml-12">
            <Image src={CalendarIcon} width={18} height={18} alt="menuIcon" />
            <h2 className="text-center">Joined in March 2016</h2>
          </div>
        </div>
        <div>
          <h2 className="flex gap-2 justify-center">
            Edit
            <Image src={EditIcon} width={18} height={18} alt="menuIcon" />
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-4 items-center">
          <button className=" w-[40%] pt-[13px] pr-[25px] pb-[13px] pl-[23px] text-nowrap border-[#D1D5DB] rounded-[56px] border-2">
            Edit listings
          </button>
          <button className=" w-[40%] pt-[13px] pr-[25px] pb-[13px] pl-[23px] text-nowrap  rounded-[56px]  bg-[#E71C3A] text-[#FFFFFF]">
            New listing
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
