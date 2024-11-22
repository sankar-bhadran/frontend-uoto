"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import faceBookSecongIcon from "../icons/Facebook.svg";
import googleIcon from "../icons/Google.svg";
import twitterIcon from "../icons/Twitter.svg";
import { Form, Input } from "antd";
const Signup = () => {
  const [form] = Form.useForm();
  return (
    <>
      <div className="container mx-auto ">
        <div className="max-w-[800px] w-[100%]  px-0 py-[51px]  mx-auto mt-[60px] rounded-2xl flex flex-col justify-center items-center gap-[64px] p-[64px] shadow-loginbox-shadow background-color">
          <div className="text-center flex flex-col gap-[20px]">
            <h1 className="text-5xl font-semibold">Sign up</h1>
            <span className="text-sm font-normal">Welcome to Uoto</span>
          </div>
          <div className="flex flex-col gap-[24px] w-[95%] sm:w-[70%]">
            <div className="flex flex-col gap-[10px] items-center">
              <Link
                href=""
                className="flex justify-start items-center w-[100%] pt-[12px] pr-[24px] pb-[12px] pl-[24px] sm:gap-[10px] gap-6 sm:justify-evenly"
              >
                <Image
                  src={faceBookSecongIcon}
                  width={17.64}
                  height={16.06}
                  alt="menuIcon"
                />
                <h2 className="text-base font-medium ">
                  Continue with Facebook
                </h2>
                <div className="hidden sm:block">
                  <h1></h1>
                </div>
              </Link>
              <Link
                href=""
                className="flex justify-start items-center w-[100%] pt-[12px] pr-[24px] pb-[12px] pl-[24px] sm:gap-[10px] gap-7 sm:justify-evenly "
              >
                <Image
                  src={googleIcon}
                  width={17.64}
                  height={16.06}
                  alt="menuIcon"
                />
                <h2 className="text-base font-medium"> Continue with Google</h2>
                <div className="hidden sm:block">
                  <h1></h1>
                </div>
              </Link>
              <Link
                href=""
                className="flex justify-start items-center w-[100%] pt-[12px] pr-[24px] pb-[12px] pl-[24px] sm:gap-[10px] gap-7 sm:justify-evenly"
              >
                <Image
                  src={twitterIcon}
                  width={17.64}
                  height={16.06}
                  alt="menuIcon"
                />
                <h2 className="text-base font-medium">Continue with Twitter</h2>
                <div className="hidden sm:block">
                  <h1></h1>
                </div>
              </Link>
            </div>
            <div className="text-center text-base font-medium ">
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-[#E5E7EB]"></div>
                <span className="flex-shrink mx-4 text-[#374151]">OR</span>
                <div className="flex-grow border-t border-[#E5E7EB]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4  mobileview:p-5">
              <Form form={form} name="signin" layout="vertical">
                <Form.Item
                  label="Email"
                  name="password"
                  rules={[
                    {
                      type: "email",
                      message: "please-enter-valid-email",
                    },
                  ]}
                >
                  <Input placeholder="you@example.com" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input placeholder="****" />
                </Form.Item>
                <Form.Item>
                  <button className="w-[100%] bg-[#E71C3A] rounded-[48px] h-[48px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-white	">
                    Continute
                  </button>
                </Form.Item>
              </Form>
              <span className="text-center flex justify-center gap-1 text-base">
                <h2 className="font-normal">New user?</h2>
                <Link href="/" className="font-medium ">
                  Create an account
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
