"use client";
import React, { useEffect, useState } from "react";
import uotoLog from "../../public/uotolog/0 2@2x.png";
import Image from "next/image";
import personIcon from "../../components/icons/Group 8625.svg";
import menuIcon from "../../components/icons/menu.svg";
import { Divider } from "antd";

const listItems = [
  { text: "Log in" },
  { text: "Sign up" },
  { text: "Become a host" },
  { text: <Divider className="dropdown-divider" /> },
  { text: "How Uoto works" },
  { text: "Contact support" },
  { text: "Legal" },
  { text: "Insurance & protection" },
];

const Navbar = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    console.log("ScrollY:", window.scrollY);
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  console.log(isDropdownVisible);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleItemClick = () => {
    setDropdownVisible(false);
  };
  return (
    <>
      <div
        className={`cotianer w-full h-[80px] flex justify-between items-center shadow-custom-shadow fixed top-0 p-6  ${
          header ? "bg-[#FFFFFF] border-b-2 border-[#E71C3A]" : "bg-opacity-75"
        }`}
      >
        <div className="m-6">
          <Image src={uotoLog} width={97.63} height={32} alt="uotolog" />
        </div>
        <div className="flex justify-center items-center h-[50px] gap-[54px] m-6">
          <div className="w-[68px] h-[20px]  flex justify-center items-center">
            <p className="font-[500] text-[14px] leading-[20px] underline text-red-fontcolor">
              Rent a car
            </p>
          </div>

          <div className="flex justify-center items-center gap-3 no-scroll-dropdown relative">
            <div
              onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
            >
              <Image src={menuIcon} width={24} height={24} alt="menuIcon" />
              {isDropdownVisible && (
                <div
                  className="absolute top-full mt-8 right-0 text-black w-[328px] shadow-dropdown-shadow p-2 rounded-lg bg-white overflow-hidden
                    "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul>
                    {listItems.map((item, index) => (
                      <li
                        key={index}
                        className="p-1 hover:font-bold text-[18px] font-normal leading-7 text-[#656565]"
                        onClick={() => handleItemClick(item)}
                      >
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a>
              <Image
                src={personIcon}
                width={34}
                height={34}
                alt="personicon"
                className="relative cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
