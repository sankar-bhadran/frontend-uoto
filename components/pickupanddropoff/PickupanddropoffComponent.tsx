import React from "react";
import { Steps, ConfigProvider } from "antd";

const PickupanddropoffComponent = () => {
  return (
    <div className="rounded-[24px] border-[1px] border-[#E5E7EB] flex flex-col p-[32px] gap-7">
      <div>
        <h1 className="text-3xl font-semibold">Pick up and drop off</h1>
      </div>
      <div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#6B7280",
            },
            components: {
              Steps: {
                dotSize: 15,
              },
            },
          }}
        >
          <Steps
            progressDot
            current={2}
            direction="vertical"
            size="small"
            items={[
              {
                title: "Monday, August 2· 10:00",
                description: "Dublin Airport, Ireland",
              },
              {
                title: "Tuesday, July 27 · 10:00",
                description: "Dublin Airport, Ireland",
              },
            ]}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default PickupanddropoffComponent;
