import React from "react";

const AdCampain = () => {
  return (
    <div className="adCampain-container">
      <div className="adCampain-wrap">
        <h4 className="adCampain-heading">
          {" "}
          Ad campaign settings
        </h4>
        <div className="adCampain-sec">
          <h3 className="text-[20px] font-[400] font-inter">Before</h3>
          <p className="text-[14px] font-[400] font-inter">
            We’ll present you with a proposed route based on our own analysis, and give you the option to request specific locations to target as well
          </p>
        </div>
        <div className="adCampain-sec">
          <h3 className="text-[20px] font-[400]">During</h3>
          <p className="text-[14px] font-[400]">
            You’ll receive updates and optimizations suggestions from our team
          </p>
        </div>
        <div className="adCampain-sec">
          <h3 className="text-[20px] font-[400]">After</h3>
          <p className="text-[14px] font-[400]">
            Post-campaign, a detailed report with route coverage and pictures from the campaign will be provided
          </p>
        </div>
      </div>
      <div className="main-h-adCampain">
        <h2 className="heading-campain">
           
         Maximize visibility <br />
         in high traffic areas <br /> your target <br />
         audience congregates
        </h2>
      </div>
    </div>
  );
};

export default AdCampain;
