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

const Personalinfo = ({ onNextClick, onPreviousClick }) => {
  const [selectedRange, setSelectedRange] = useState([]);
  const [totalCost, setTotalCost] = useState(null)
  const [totalDays, setTotalDays] = useState(null)
  const [totalSaving, setTotalSaving] = useState(null)
  const [isHovered, setIsHovered] = useState(false); // State to manage hover status
  const nextClick = () => {
    onNextClick();
  }
  const handleClickDay = (date) => {
    setTotalDays(1)
    setTotalCost(1 * 1750);
    setTotalSaving(1 * 650);
  }
  const handleDateChange = (date) => {
    setSelectedRange(date);

    if (date.length === 2) {
      const startDate = new Date(date[0]);
      const endDate = new Date(date[1]);
      const diffInTime = endDate.getTime() - startDate.getTime();
      const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
      const selectedDays = diffInDays;
      setTotalDays(selectedDays)
      setTotalCost(selectedDays * 1750);
      setTotalSaving(selectedDays * 650);
    }
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
          onClickDay={handleClickDay}
          onChange={handleDateChange}
          value={selectedRange}
          selectRange
          formatShortWeekday={(locale, date) => ""}
        />
        <div className="flex justify-between bg-[#f9ff8a] px-3 py-2">
          <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px]">
            Price for {totalDays ? totalDays : "1"} days
          </div>
          <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px]">
            {totalCost ? ("$" + new Intl.NumberFormat('en-US').format(totalCost)) : "$1,750"}
          </div>
        </div>
        <div className="flex justify-between  px-3 py-2">
          <div
            className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px] text-[#3C3C43]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Savings
            {
              isHovered && (
                <div className="font-[400] text-[10px]">
                  *Based on a market rate of $2400
                </div>
              )
            }
          </div>
          <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px] text-[#3C3C43]">
            {totalSaving ? ("$" + new Intl.NumberFormat('en-US').format(totalSaving)) : "$650"}
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4  w-full text-center next-btn  mt-5 m-auto">
        <div>
          {selectedRange.length === 0 ? <p className="text-center m-auto font-inter tex-[24px]">To continue, Select Period of interset</p> : ""}
          <button className={selectedRange.length === 0 ? "rounded-md bg-[#f7f7f7] px-3 py-2 text-sm font-semibold text-[#d5d5d7] shadow-sm cursor-not-allowed ml-auto mt-[10px]" : "rounded-md bg-[#80FFAB] px-3 py-2 text-sm font-semibold text-[#000] shadow-sm hover:text-indigo-500 ml-auto mt-[10px]"} onClick={nextClick}>
            Next <ArrowRightOutlined className="pt-[3px] pl-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Personalinfo