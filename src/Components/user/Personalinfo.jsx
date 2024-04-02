"use client";
import React, { useState } from "react";
import {
  UserOutlined,
  ClockCircleOutlined,
  LockOutlined,
  CheckCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CopyOutlined,
  CheckOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "./invoice.module.css";

import { Checkbox, Divider, Select } from "antd";
import Calendar from "react-calendar";

const Personalinfo = ({onNextClick,onPreviousClick}) => {
  const [selectedRange, setSelectedRange] = useState([]);

  const nextClick =()=>{
    onNextClick();
  } 
  const handleDateChange = (date) => {
    setSelectedRange(date);
  };
 
    return (
      <div>
        <div className="text-center">Select a period</div>
       <div className="bg-[#fff] lg:w-[20%] w-[80%] m-auto rounded-lg my-[50px]">
              <div className="font-inter font-[500] text-[18px] leading-[28px] tracking-[-0.55px] p-3">
                Calculate the cost of rent
              </div>
              <Calendar
                className="text-center p-3"
                onChange={handleDateChange}
                value={selectedRange}
                selectRange
                formatShortWeekday={(locale, date) => ""}
              />
              <div className="flex justify-between bg-[#f9ff8a] px-3 py-2">
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px]">
                  Price for 9 days
                </div>
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px]">
                  {selectedRange.length === 0 ? "Select Date" : "$173088.99"}
                </div>
              </div>
              <div className="flex justify-between  px-3 py-2">
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px] text-[#3C3C43]">
                  Savings
                </div>
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px] text-[#3C3C43]">
                {selectedRange.length === 0 ? "Select Date" : "$2044.99"}
                </div>
              </div>
            </div>
            <div className="flex justify-center p-4  w-full text-center next-btn  mt-5 m-auto">
        <div>
        {selectedRange.length === 0 ? <p className="text-center m-auto font-inter tex-[24px]">To continue, Select Period of interset</p> : ""}
        <button className={selectedRange.length === 0 ? "rounded-md bg-[#f7f7f7] px-3 py-2 text-sm font-semibold text-[#d5d5d7] shadow-sm cursor-not-allowed ml-auto mt-[10px]" :  "rounded-md bg-[#80FFAB] px-3 py-2 text-sm font-semibold text-[#000] shadow-sm hover:text-indigo-500 ml-auto mt-[10px]" } onClick={nextClick}>
          Next <ArrowRightOutlined className="pt-[3px] pl-2" />
        </button>
        </div>
      </div>
      </div>
    );
  };
  export default Personalinfo