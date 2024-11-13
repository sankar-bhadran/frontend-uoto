"use client";
import ProfileCard from "../../components/profilecard/ProfileCard";
import HostListingCard from "../../components/hostlistingcard/HostListingCard";
import ReviewComponent from "../../components/review/Reviews";
import BookingHistoryComponent from "../../components/bookinghistory/BookingHistory";

const HostDashboard = () => {
  return (
    <>
      <div className="container ">
        <div className="container max-w-[80%] px-0 py-[51px] mx-auto mt-[60px]">
          <div className="grid  grid-cols-[1.2fr,2fr] gap-[50px]">
            <div className="flex flex-col gap-9">
              <div className="rounded-[24px] border-[1px] border-[#E5E7EB] ">
                <ProfileCard />
              </div>
              <div className="rounded-[24px] border-[1px] border-[#E5E7EB]">
                <BookingHistoryComponent />
              </div>
            </div>
            <div className=" flex flex-col gap-7">
              <div className="rounded-[24px] border-[1px] border-[#E5E7EB] p-6 bg-[#F9FAFB] ">
                <HostListingCard />
              </div>
              <div className="rounded-[24px] border-[1px] border-[#E5E7EB]">
                <ReviewComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostDashboard;
