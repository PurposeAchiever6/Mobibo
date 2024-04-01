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
            We’ll present you with a proposed route based on our own analysis
            and you’ll also be able to request specific locations as well.
          </p>
        </div>
        <div className="adCampain-sec">
          <h3 className="text-[20px] font-[400]">During</h3>
          <p className="text-[14px] font-[400]">
            During the campaign, you’ll receive updates and optimization
            suggestions from a dedicated team.
          </p>
        </div>
        <div className="adCampain-sec">
          <h3 className="text-[20px] font-[400]">After</h3>
          <p className="text-[14px] font-[400]">
            Post-campaign, a detailed report with GPS data, a gallery, and raw
            data for retargeting on social media is provided.
          </p>
        </div>
      </div>
      <div className="main-h-adCampain">
        <h2 className="heading-campain">
          Pick a place <br />
          where your target audience <br /> congregates <br />
          and show them <br />
          the ads
        </h2>
      </div>
    </div>
  );
};

export default AdCampain;
