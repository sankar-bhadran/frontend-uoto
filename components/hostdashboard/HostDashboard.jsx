import React from "react";
import ProfileCard from "../../components/profilecard/ProfileCard";

const HostDashboard = () => {
  return (
    <>
      <div className="container ">
        <div className="container max-w-[80%] px-0 py-[51px] mx-auto mt-[60px]">
          <div className="grid  grid-cols-[1fr,2fr] gap-[50px]">
            <div className="">
              <ProfileCard />
              <div className="bg-red-400">
                <h1>sdfsf</h1>
              </div>
            </div>
            <div className="p-6 ">
              <h2>My listings</h2>
              <div className="grid grid-cols-2 gap-6 items-center p-7">
                <div>
                  <div className="w-[90%] h-[250px] rounded-lg bg-[#D1D5DB]"></div>
                  <div className="p-2">
                    <h2>KONA Electric</h2>
                    <h5>$101 /day</h5>
                  </div>
                </div>
                <div>
                  <div className="w-[90%] h-[250px] rounded-lg bg-[#D1D5DB]"></div>
                  <div className="p-2">
                    <h2>KONA Electric</h2>
                    <h5>$101 /day</h5>
                  </div>
                </div>
                <div>
                  <div className="w-[90%] h-[250px] rounded-lg bg-[#D1D5DB]"></div>
                  <div className="p-2">
                    <h2>KONA Electric</h2>
                    <h5>$101 /day</h5>
                  </div>
                </div>
                <div>
                  <div className="w-[90%] h-[250px] rounded-lg bg-[#D1D5DB]"></div>
                  <div className="p-2">
                    <h2>KONA Electric</h2>
                    <h5>$101 /day</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostDashboard;
