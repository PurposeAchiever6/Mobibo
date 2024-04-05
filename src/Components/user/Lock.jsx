"use client ";
import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "./invoice.module.css";
import responsiveTruck from "@/Assests/responsiveTruck.png";
import truckArch from "@/Assests/truck-archi.png";
import Image from "next/image";

import { Checkbox, Divider, Select } from "antd";

const Lock = ({ onNextClick, onPreviousClick }) => {
  const [selectedImageModal, setSelectedImageModal] = useState(null); 
  const [imageNameModal, setImageNameModal] = useState("");
  const [truckSide ,setTruckSide] = useState("side");
  const [viewType ,setViewType] = useState("2d");

  const handleFileChangeModal = (event) => {
    const file = event.target.files[0]; 
    setSelectedImageModal(file);
    setImageNameModal(file.name);
  };

  const nextClick = () => {
    onNextClick();
  };



  return (
    <>
      <div className="text-center">Upload your creatives</div>
      <div className="bg-[#e4e4e4] lg:my-[40px] my-[20px]">
        <div className=" w-[100%] max-w-[1280px] m-auto">
          <div className="flex lg:flex-row flex-col w-[100%] gap-[30px]  lg:justify-between lg:h-[385px] h-[62vh]">
            <div className="lg:w-[30%] w-[90%] ml-4">
              <div className="bg-[#f9ff8a] rounded-full flex w-[100%] p-[2px]">
                <button className={truckSide === "side" ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]" : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"} onClick={() => setTruckSide("side")}>
                  Side
                </button>
                <button className={truckSide === "back" ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]" : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"} onClick={() => setTruckSide("back")}>
                  Back
                </button>
              </div>
              <div className="bg-[#f9ff8a] rounded-full flex w-[100%] p-[2px] mt-[10px]">
                <button className={viewType === "2d" ?  "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]" : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"} onClick={() => setViewType("2d")}>
                  2D
                </button>
                <button className={viewType === "3d" ?  "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]" : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"} onClick={() => setViewType("3d")}>
                  3D
                </button>
              </div>
              <div className="bg-[#fff] rounded-lg p-4 mt-[10px]">
                <p>{imageNameModal ? imageNameModal : "Uploaded image will show here"}</p> {/* Display selected image name */}
              </div>
              <div className="w-[100%] mt-[10px] flex justify-center">
                <input
                  type="file"
                  id="uploadfileModal"
                  accept=".jpg, .jpeg, .png, .pdf"
                  style={{ display: "none" }} // Hide the default file input
                  onChange={handleFileChangeModal} // Call handleFileChange on file selection
                />
                <label
                  htmlFor="uploadfileModal"
                  className="w-[100%] py-[10px] px-4 text-[#fff] text-center font-inter bg-[#ff80fd] rounded-lg cursor-pointer"
                >
                  Upload
                </label>
              </div>
            </div>
            {truckSide === "side" ?
            <div className="lg:w-[70%] w-[100%]  modal-bg-side p-4 lg:px-[55px] px-[25px] lg:h-auto h-[176px]">
              {selectedImageModal && ( // Display image preview if an image is selected
                <img
                  src={URL.createObjectURL(selectedImageModal)}
                  alt="Selected"
                  width={300}
                  height={100}
                  className="lg:h-[260px] h-[114px] lg:w-[462px] w-[200px] mt-[-10px] lg:mt-[0px]"
                  style={{borderTopRightRadius:"13px"}}
                />
              )}
            </div>:
            <div className="lg:w-[70%] w-[100%]  modal-bg-back p-4  lg:pl-[271px] pl-[77px] h-[293px] lg:h-auto">
            {selectedImageModal && ( 
              <img
                src={URL.createObjectURL(selectedImageModal)}
                alt="Selected"
                width={300}
                height={100}
                className="lg:h-[260px] h-[192px] lg:w-[282px] w-[206px]"
              />
            )}
          </div>}
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4  w-full text-center next-btn  mt-5 m-auto">
        <div>
          <p className="lg:w-[53%] w-[80%] text-center m-auto font-inter tex-[24px]">
            You can skip this step and hand over the creatives after payment. To
            send us the creatives now - upload them for each side of the truck.
          </p>
          <div className=" ">
            <button className="rounded-md bg-[#f7f7f7] px-3 py-2 text-sm font-semibold text-[#000] shadow-sm  ml-auto mt-[10px]" onClick={nextClick}>
              Skip <ArrowLeftOutlined className="pt-[3px] pl-2" />
            </button>
            <button
              className="rounded-md bg-[#80FFAB] ml-[20px] px-3 py-2 text-sm font-semibold text-[#000] shadow-sm hover:text-indigo-500  mt-[10px]"
              onClick={nextClick}
            >
              Next <ArrowRightOutlined className="pt-[3px] pl-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lock;
