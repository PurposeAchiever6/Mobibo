"use client ";
import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "./invoice.module.css";
import ModalTruckShow from "./ModalTruckShow.jsx";
import responsiveTruck from "@/Assests/responsiveTruck.png";
import truckArch from "@/Assests/truck-archi.png";
import Image from "next/image";

import { Checkbox, Divider, Select } from "antd";

const Lock = ({ onNextClick, onPreviousClick }) => {
  const [truckModalSide ,setTruckModalSide] = useState("side");
  const [viewModalType ,setViewModalType] = useState("2d");
  const [selectedImageModalSide, setSelectedImageModalSide] = useState(null);
  const [selectedImageModalBack, setSelectedImageModalBack] = useState(null);
  const [fileSpecsModalSide , setFileSpecsModalSide] = useState();
  const [fileSpecsModalBack , setFileSpecsModalBack] = useState();
  const [fileTypeModalSide , setFileTypeModalSide] = useState();
  const [fileTypeModalBack , setFileTypeModalBack] = useState();

  const handleFileChangeModalSide = (event) => {
    const file = event.target.files[0]; 
    setSelectedImageModalSide(file);
    setFileSpecsModalSide(convertBytesToMB(file.size));
    setFileTypeModalSide(file.type)
  };

const convertBytesToMB = (bytes) => {
    return (bytes / (1024 * 1024)).toFixed(2); // Convert bytes to megabytes with 2 decimal places
};

  const handleFileChangeModalBack = (event) => {
      const file = event.target.files[0];
      setSelectedImageModalBack(file);
      setFileSpecsModalBack(convertBytesToMB(file.size));
      setFileTypeModalBack(file.type)

    };
  

  const nextClick = () => {
    onNextClick();
  };



  return (
    <>
      <div className="text-center">Upload your creatives</div>
      <div className="bg-[#e4e4e4] lg:my-[40px] my-[20px]">
        <ModalTruckShow/>
        </div>
      <div className="flex justify-center p-4  w-full text-center next-btn  md:mt-5 m-auto">
        <div>
          <p className="lg:w-[53%] w-[80%] text-center m-auto font-inter tex-[24px]">
            You can skip this step and hand over the creatives after payment. To
            send us the creatives now - upload them for each side of the truck.
          </p>
          <div className=" ">
            <button className="rounded-md bg-[#f7f7f7] px-3 py-2 text-sm font-semibold text-[#000] shadow-sm  ml-auto mt-[10px]" onClick={nextClick}>
              Skip
              {/* <ArrowLeftOutlined className="pt-[3px] pl-2" /> */}
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
