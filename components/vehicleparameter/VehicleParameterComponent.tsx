import React from "react";
import fuelDispenserIcon from "../icons/Frame.svg";
import fuelGauageIcon from "../icons/Frame (1).svg";
import forwardCollisionIcon from "../icons/Frame (2).svg";
import proximityKeyIcon from "../icons/Frame (3).svg";
import touchScreenIcon from "../icons/Frame (4).svg";
import smartCruiseIcon from "../icons/Frame (5).svg";
import ledDisplayIcon from "../icons/Frame (6).svg";
import blindSportIcon from "../icons/Frame (7).svg";
import EditIcon from "../icons/Pencil.svg";
import checkCricleIcon from "../icons/Check circle.svg";
import Image from "next/image";
import Link from "next/link";
import FullCalendar from "../calendarfullcomponent/FullCalendar";

const VehcileParameterComponent = () => {
  const vehcileParameterData = [
    { image: fuelDispenserIcon, sentences: "59 MPG Combined, 58 City/60 Hwy" },
    {
      image: forwardCollisionIcon,
      sentences:
        "Forward Collision-Avoidance Assist with Pedestrian Detection (FCA-Ped)",
    },
    { image: fuelGauageIcon, sentences: "139-hp gas/electric combined" },
    {
      image: proximityKeyIcon,
      sentences: "Proximity Key with push button start",
    },
    {
      image: touchScreenIcon,
      sentences: "8-inch color touchscreen display audio",
    },
    {
      image: smartCruiseIcon,
      sentences: "Smart Cruise Control with Stop & Go (SCC)",
    },
    { image: ledDisplayIcon, sentences: "LED Daytime Running Lights (DRL)" },
    { image: blindSportIcon, sentences: "Blind-Spot Collision Warning (BCW)" },
  ];

  const includedData = [
    {
      image: checkCricleIcon,
      sentences: "Free cancellation up to 48 hours before pick-up",
    },
    {
      image: checkCricleIcon,
      sentences: "Collision Damage Waiver with €214 deductible",
    },
    {
      image: checkCricleIcon,
      sentences: "Theft Protection with ₫1,552,329 excess",
    },
    { image: checkCricleIcon, sentences: "Unlimited mileage" },
    {
      image: checkCricleIcon,
      sentences:
        "Car interiors and exteriors cleaned with disinfectant before pick-up",
    },
  ];
  return (
    <>
      <div className="container ">
        <div className="max-w-[80%] px-0 py-[51px] mx-auto mt-[60px] ">
          <div className="grid  grid-cols-[2.2fr,1.2fr] gap-[45px] p-3">
            <div className="flex flex-col gap-[44px] p-1 ">
              <div className="rounded-[24px] border-[1px] border-[#E5E7EB] p-[32px] ">
                <div className="flex flex-col gap-[32px]">
                  <div>
                    <h1 className="text-2xl font-semibold text-primarytext-color">
                      Vehicle parameters & utilities
                    </h1>
                    <h3 className="text-base font-medium text-Tertiarytext-color">
                      Questions are at the heart of making things great.
                    </h3>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-[20px]">
                      {vehcileParameterData.map((value, index) => (
                        <div
                          className="flex items-center gap-[20px]"
                          key={index}
                        >
                          <Image
                            src={value.image}
                            width={40}
                            height={40}
                            alt="fuelDispenserIcon"
                          />
                          <span className="font-normal text-sm text-Tertiarytext-color">
                            {value.sentences}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button className=" pt-[13px] pr-[25px] pb-[13px] pl-[25px] border-[#D1D5DB] rounded-[56px] border-2 text-base font-medium text-[#374151] ">
                      See all car utility
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[24px] border-[1px] border-[#E5E7EB]  p-[32px] flex flex-col gap-[24px]">
                <h1 className="text-2xl font-semibold text-primarytext-color">
                  Car descriptions
                </h1>
                <Link href="/">
                  <span className="flex gap-2 underline underline-offset-2">
                    Edit
                    <Image
                      src={EditIcon}
                      width={20}
                      height={20}
                      alt="fuelDispenserIcon"
                    />
                  </span>
                </Link>

                <div className="flex flex-col gap-[24px]">
                  <div>
                    <p className="text-base font-normal text-[#4B5563]">
                      Until the all-new TUCSON hits the dealer showrooms you can
                      check it out in our Showroom Walkaround video. Watch the
                      video and join our product specialist as he gives you an
                      up-close look of our latest SUV
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-normal text-[#4B5563]">
                      Questions are at the heart of making things great. Watch
                      our celebrity-filled TV ad and you’ll see that when we say
                      “everything,” we mean everything.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[24px] border-[1px] border-[#E5E7EB] flex flex-col p-[32px]  gap-[32px]">
                <div className="">
                  <h1 className="text-2xl font-semibold text-primarytext-color">
                    Included
                  </h1>
                  <h3 className="text-base font-medium text-Tertiarytext-color">
                    Included in the price
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-[20px]">
                  {includedData.map((value, index) => (
                    <div className="flex items-center gap-[20px]" key={index}>
                      <Image
                        src={value.image}
                        width={24}
                        height={24}
                        alt="fuelDispenserIcon"
                      />
                      <span className="font-normal text-sm text-Tertiarytext-color">
                        {value.sentences}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <FullCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default VehcileParameterComponent;
