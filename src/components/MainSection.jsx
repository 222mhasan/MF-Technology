import React from "react";
import CircularSection from "./CircularSection";
import CoreSection from "./CoreSection";
import ImportantSection from "./ImportantSection";
import CircularSection2 from "./CircularSection2";

const MainSection = () => {
  return (
    <div className="mt-6 mx-auto container">
      <div className="grid grid-cols-1 md:grid-cols-5  gap-2 ">
        <div className=" ">
          {/* <CircularSection /> */}
          <CircularSection2/>
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
