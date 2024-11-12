import React from "react";
import uotoLog from "../../public/uotolog/0 2@2x.png";
import Image from "next/image";
import personIcon from "../../components/icons/Group 8625.svg";
import menuIcon from "../../components/icons/menu.svg";

const Navbar = () => {
  return (
    <>
      <div className="contianer flex justify-center items-center shadow-custom-shadow background-color">
        <div className="cotianer w-[1444px] h-[80px] mt-[-3px] flex justify-between items-center">
          <div>
            <Image src={uotoLog} width={97.63} height={32} alt="uotolog" />
          </div>
          <div className="flex justify-center items-center h-[50px] gap-[54px]">
            <div className="w-[68px] h-[20px]  flex justify-center items-center">
              <p className="font-[500] text-[14px] leading-[20px] underline text-red-fontcolor">
                Rent a car
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 ">
              <Image src={menuIcon} width={24} height={24} alt="menuIcon" />
              <Image src={personIcon} width={34} height={34} alt="personicon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
