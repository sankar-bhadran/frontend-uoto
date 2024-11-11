import React from "react";
import uotoLog from "../../public/uotolog/0 2@2x.png";
import Image from "next/image";
import faceBookIcon from "../icons/.svg";
import instaGramIcon from "../icons/.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="contianer h-[505px] w-[100%]">
        <div className="contianer h-[113px]  w-[100%]   pt-[112px] flex justify-center ">
          <div className="contianer h-[392px] w-[1280px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[40px] pt-[112px] pb-[112px] ">
              <div className="w-[224px] flex flex-col gap-[16px]">
                <Image src={uotoLog} width={97.63} height={32} alt="uotolog" />
                <Link href="" className="flex items-center gap-[8px]">
                  <Image
                    src={faceBookIcon}
                    width={24}
                    height={24}
                    alt="menuIcon"
                  />
                  Facebook
                </Link>
                <Link href="" className="flex items-center gap-[8px]">
                  <Image
                    src={instaGramIcon}
                    width={24}
                    height={24}
                    alt="menuIcon"
                  />
                  Instagram
                </Link>
              </div>
              <div className="w-[224px] flex flex-col gap-[20px]">
                <h2 className="text-sm font-bold text-footer-heading">Info</h2>
                <Link href="" className="footer-font">
                  Insurance Details
                </Link>
                <Link href="" className="footer-font">
                  Alliances & Partners
                </Link>
                <Link href="" className="footer-font">
                  Locations
                </Link>
                <Link href="" className="footer-font">
                  Safety Information
                </Link>
              </div>
              <div className="w-[224px] flex flex-col gap-[20px]">
                <h2 className="text-sm font-bold text-footer-heading">
                  Help Centre
                </h2>
                <Link href="" className="footer-font">
                  FAQ
                </Link>
                <Link href="" className="footer-font">
                  Prices & Fees
                </Link>
                <Link href="" className="footer-font">
                  Report an Issue
                </Link>
              </div>
              <div className="w-[224px] flex flex-col gap-[20px]">
                <h2 className="text-sm font-bold text-footer-heading">
                  About us
                </h2>
                <Link href="" className="footer-font">
                  About Uoto
                </Link>
                <Link href="" className="footer-font">
                  The Team
                </Link>
              </div>
              <div className="w-[224px] flex flex-col gap-[20px]">
                <h2 className="text-sm font-bold text-footer-heading">News</h2>
                <Link href="" className="footer-font">
                  News letter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
