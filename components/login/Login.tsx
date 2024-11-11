import Link from "next/link";
import React from "react";
import Image from "next/image";
import faceBookSecongIcon from "../icons/Facebook.svg";
import googleIcon from "../icons/Google.svg";
import twitterIcon from "../icons/Twitter.svg";
import { Form, Input } from "antd";
const Login = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="container max-w-[800px] px-0 py-[51px]  mx-auto mt-[60px] rounded-2xl flex flex-col justify-center items-center gap-[64px] p-[64px] shadow-custom-shadow background-color">
          <div className="text-center">
            <h1>Login</h1>
            <span>Welcome to Uoto</span>
          </div>
          <div className="  flex flex-col gap-[24px] w-[483px]">
            <div className=" flex flex-col gap-[10px] items-center">
              <Link
                href=""
                className="flex justify-evenly items-center w-[100%] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[109px]"
              >
                <Image
                  src={faceBookSecongIcon}
                  width={17.64}
                  height={16.06}
                  alt="menuIcon"
                />
                Continue with Facebook
                <div></div>
              </Link>
              <Link
                href=""
                className="flex justify-evenly items-center w-[100%] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[109px]"
              >
                <Image
                  src={googleIcon}
                  width={17.64}
                  height={16.06}
                  alt="menuIcon"
                />
                Continue with Google
                <div></div>
              </Link>
              <Link
                href=""
                className="flex justify-evenly items-center w-[100%] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[109px]"
              >
                <Image
                  src={twitterIcon}
                  width={17.64}
                  height={16.06}
                  alt="menuIcon"
                />
                Continue with Twitter
                <div></div>
              </Link>
            </div>
            <div className="text-center">OR</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
