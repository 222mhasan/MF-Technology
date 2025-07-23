import React from "react";
import CircularSection from "./CircularSection";
import CoreSection from "./CoreSection";
import ImportantSection from "./ImportantSection";

const MainSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5  gap-2 ">
        <div className=" ">
          <CircularSection />
        </div>
        <div className="  col-span-3">
            <CoreSection/>
        </div>
        <div className="">
            <ImportantSection/>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
