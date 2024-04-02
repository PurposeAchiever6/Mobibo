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
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: `${file.size / 1000} KB`,
    }));
    setImageList([...imageList, ...newImages]);
  };

  const nextClick = () => {
    onNextClick();
  };
  const previousClick = () => {
    onPreviousClick();
  };
  return (
    <>
    <div className="text-center">Upload your creatives</div>
      <div className="bg-[#e4e4e4] my-[40px]">
        <div className=" w-[100%] max-w-[1280px] m-auto">
          <div className="flex lg:flex-row flex-col w-[100%] gap-[10px] pb-[100px] justify-between">
            <div className="lg:w-[30%] w-[90%] ml-4">
              <div className="bg-[#f9ff8a] rounded-full flex w-[100%] p-[2px]">
                <button className="hover:bg-[#a57bff] hover:text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]">
                  Side
                </button>
                <button className="hover:bg-[#a57bff] hover:text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]">
                  Back
                </button>
              </div>
              <div className="bg-[#f9ff8a] rounded-full flex w-[100%] p-[2px] mt-[10px]">
                <button className="hover:bg-[#a57bff] hover:text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]">
                  2D
                </button>
                <button className="hover:bg-[#a57bff] hover:text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]">
                  3D
                </button>
              </div>
              <div className="bg-[#fff] rounded-lg p-4 mt-[10px]">
                {imageList.length === 0
                  ? "Uploaded Images show here!"
                  : imageList.map((image, index) => (
                      <div
                        key={index}
                        className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]"
                      >
                        <div
                          className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f] cursor-pointer"
                          onClick={() => setSelectedImage(image.url)}
                        >
                          {image.name}
                        </div>
                        <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                          {image.size}
                        </div>
                      </div>
                    ))}
              </div>
              <div className="w-[100%] mt-[10px] flex justify-center">
                <input
                  type="file"
                  id="uploadfile"
                  accept=".jpg, .jpeg, .png, .pdf"
                  onChange={handleImageUpload}
                  multiple
                  style={{ display: "none" }} // Hide the default file input
                />
                <label
                  htmlFor="uploadfile"
                  className="w-[100%] py-[10px] px-4 text-[#fff] text-center font-inter bg-[#ff80fd] rounded-lg cursor-pointer"
                >
                  Upload
                </label>
              </div>

            </div>
            <div className="lg:w-[70%] w-[100%] lg:block hidden">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={800}
                  height={800}
                />
              ) : (
                <Image src={truckArch} width={800} height={800} />
              )}
            </div>
            <div className="lg:w-[70%] w-[100%] lg:hidden block">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={500}
                  height={500}
                />
              ) : (
                <Image src={responsiveTruck} width={500} height={500} />
              )}
            </div>
          </div>

        </div>
      </div>
      <div className="flex justify-center p-4  w-full text-center next-btn  mt-5 m-auto">
        <div>
         <p className="w-[53%] text-center m-auto font-inter tex-[24px]">You can skip this step and hand over the creatives after payment.
To send us the creatives now - upload them for each side of the truck.</p>
<div className=" ">
        <button className="rounded-md bg-[#f7f7f7] px-3 py-2 text-sm font-semibold text-[#d5d5d7] shadow-sm  ml-auto mt-[10px]">
          Skip <ArrowLeftOutlined className="pt-[3px] pl-2" />
        </button>
        <button className="rounded-md bg-[#80FFAB] ml-[20px] px-3 py-2 text-sm font-semibold text-[#000] shadow-sm hover:text-indigo-500  mt-[10px]"  onClick={nextClick}>
          Next <ArrowRightOutlined className="pt-[3px] pl-2" />
        </button>
        </div>
        </div>
      </div>
    </>
  );
};
export default Lock;
