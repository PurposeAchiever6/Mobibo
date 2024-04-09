"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import React, { useState, Suspense } from "react";
import Image from "next/image";
import ledTruck from "@/Assests/Led-Truck.png";
import brightIcon from "@/Assests/bright-icon.svg";
import gameIcon from "@/Assests/gamecontroller-icon.svg";
import CompanyCard from "../CompanyCard/companyCard";
import Calendar from "react-calendar";
import dreamTruck from "@/Assests/dream-truck.png";
import truckArch from "@/Assests/truck-archi.png";
import companyImage1 from "@/Assests/companyImage.jpeg";
import companyImage2 from "@/Assests/companyImage2.jpeg";
import companyImage3 from "@/Assests/companyImage3.jpeg";
import companyImage4 from "@/Assests/companyImage4.jpeg";
import companyImage5 from "@/Assests/companyImage5.jpeg";
import companyImage7 from "@/Assests/companyImage7.png";
import companyImage6 from "@/Assests/companyImage6.jpeg";
import companyImage8 from "@/Assests/companyImage8.jpg";
import companyImage9 from "@/Assests/companyImage9.jpeg";
import companyImage10 from "@/Assests/companyImage10.jpeg";
import companyImage11 from "@/Assests/companyImage11.jpeg";
import companyImage12 from "@/Assests/companyImage12.jpeg";
import companyImage13 from "@/Assests/companyImage13.jpeg";
import companyImage14 from "@/Assests/companyImage14.jpeg";
import companyImage15 from "@/Assests/companyImage15.jpeg";
import companyImage16 from "@/Assests/companyImage16.jpeg";
import orderProcess from "@/Assests/order-process.svg";
import Routesimage from "@/Assests/Routesimage.svg";
import AdCampain from "@/Components/AdCampain/AdCampain";
import AllCompainRoutes from "@/Components/AllCompainRoutes/AllCompainRoutes";
import responsiveTruck from "@/Assests/responsiveTruck.png";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { orderJson } from "@/app/api/utils/json.mjs";
import dotenv from "dotenv";
import Invoice from "../user/UserMain";
import { Modal } from "antd";
import ThreeScene from "../ThreeScene/ThreeScene";
import CityIcon from "@/Assests/CitiesIcon.svg";
import { Select } from "antd";

dotenv.config();

const Presentation = () => {
  const [selectedRange, setSelectedRange] = useState([new Date(), new Date()]);
  const [selectedImageSide, setSelectedImageSide] = useState(null);
  const [selectedImageBack, setSelectedImageBack] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [driverNotes, setDriverNotes] = useState("");
  const [truckSide, setTruckSide] = useState("side");
  const [viewType, setViewType] = useState("2d");
  const [fileSpecsSide, setFileSpecsSide] = useState();
  const [fileSpecsBack, setFileSpecsBack] = useState();
  const [fileTypeSide, setFileTypeSide] = useState();
  const [fileTypeBack, setFileTypeBack] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCost, setTotalCost] = useState(null);
  const [totalDays, setTotalDays] = useState(null);
  const [totalSaving, setTotalSaving] = useState(null);

  const [formData, setFormData] = useState({
    location: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (value, option) => {
    const name = option.key;
     console.log(option)
    setFormData({
      ...formData,
      [name]: value,
    });
    if (value.trim() === "") {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: undefined,
      });
  
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors({
            ...errors,
            [name]: "Invalid email format",
          });
        }
      }
    }
  };

  const handlelocationSubmit = () => {
    const newErrors = {};
  
    if (!formData.location.trim()) {
      newErrors.location = "Please enter the location";
    }
    if (Object.keys(newErrors).length === 0) {
      console.log("No validation errors, calling onNextClick");
      showModal();
    } else {
      console.log("Validation errors found, not calling onNextClick");
      setErrors(newErrors);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    var templateParams = await orderJson(
      firstName,
      lastName,
      email,
      phone,
      company,
      driverNotes
    );
    axios.post(
      "/api/order",
      await orderJson(firstName, lastName, email, phone, company, driverNotes)
    );
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Email sending SUCCESS!");
        },
        (error) => {
          console.log("Email sending FAILED...", error);
        }
      );
  }
  const companyData = [
    {
      companyName: "Airbnb",
      companyImage: companyImage1,
    },
    {
      companyName: "Deep Instinct",
      companyImage: companyImage2,
    },
    {
      companyName: "Hello Kitty",
      companyImage: companyImage4,
    },
    {
      companyName: "Growler",
      companyImage: companyImage3,
    },
    {
      companyName: "LAN",
      companyImage: companyImage5,
    },
    {
      companyName: "Miami Dolphins",
      companyImage: companyImage6,
    },
    {
      companyName: "Mr Kelvin",
      companyImage: companyImage8,
    },
    {
      companyName: "OOH Insider",
      companyImage: companyImage9,
    },
    {
      companyName: "Red Bike",
      companyImage: companyImage10,
    },
    {
      companyName: "Round Table",
      companyImage: companyImage11,
    },
    {
      companyName: "Royal Racer",
      companyImage: companyImage12,
    },
    {
      companyName: "Scott Sherman",
      companyImage: companyImage13,
    },
    {
      companyName: "Monster",
      companyImage: companyImage14,
    },
    {
      companyName: "T-mobile",
      companyImage: companyImage15,
    },
    {
      companyName: "Villain Arts",
      companyImage: companyImage16,
    },
    {
      companyName: "Shiba",
      companyImage: companyImage7,
    },
  ];
  const RoutesTravel = [
    { Route: "New York" },
    { Route: "Houston" },
    { Route: "Phoenix (Prescott)" },
    { Route: "Orlando-Daytona Beach-Melbourne" },
    { Route: "Charlotte" },
    { Route: "Nashville" },
    { Route: "San Antonio" },
    { Route: "Greenville-Spartanburg-Asheville-Anderson" },
    { Route: "Jacksonville" },
    { Route: "Birmingham (Anniston and Tuscaloosa)" },
    { Route: "Los Angeles" },
    { Route: "Atlanta" },
    { Route: "Tampa-St. Petersburg (Sarasota)" },
    { Route: "Denver" },
    { Route: "Raleigh-Durham (Fayettville)" },
    { Route: "Salt Lake City" },
    { Route: "Hartford & New Haven" },
    { Route: "Cincinatti" },
    { Route: "Grand Rapids-Kalamazoo-Battle Creek" },
    { Route: "Oklahoma City" },
    { Route: "Chicago" },
    { Route: "Boston (Manchester)" },
    { Route: "Seattle-Tacoma" },
    { Route: "Miami-Fort Lauderdale" },
    { Route: "Portland, OR" },
  ];
  const handleDateChange = (date) => {
    setSelectedRange(date);

    if (date.length === 2) {
      const startDate = new Date(date[0]);
      const endDate = new Date(date[1]);
      const diffInTime = endDate.getTime() - startDate.getTime();
      const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
      const selectedDays = diffInDays;
      setTotalDays(selectedDays);
      setTotalCost(selectedDays * 1750);
      setTotalSaving(selectedDays * 2400);
    }
  };

  const handleImageUploadSide = (event) => {
    const file = event.target.files[0];
    setSelectedImageSide(file);
    setImageList(file.name);
    setFileSpecsSide(convertBytesToMB(file.size));
    setFileTypeSide(file.type);
  };

  const convertBytesToMB = (bytes) => {
    return (bytes / (1024 * 1024)).toFixed(2); // Convert bytes to megabytes with 2 decimal places
  };

  const handleImageUploadBack = (event) => {
    const file = event.target.files[0];
    setSelectedImageBack(file);
    setImageList(file.name);
    setFileSpecsBack(convertBytesToMB(file.size));
    setFileTypeBack(file.type);
  };

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Philadelphia",
    "Dallas-Fort Worth",
    "Atlanta",
    "Houston",
    "Washington-Hagerstown",
    "Boston-Manchester",
    "San Francisco-Oakland-San Jose",
    "Phoenix-Prescott",
    "Seattle-Tacoma",
    "Tampa-St Petersburg-Sarasota",
    "Detroit",
    "Minneapolis-Saint Paul",
    "Denver",
    "Orlando-Daytona Beach-Melbourne",
    "Miami-Fort Lauderdale",
    "Cleveland-Akron-Canton",
    "Sacramento-Stockton-Modesto",
    "Charlotte",
    "Portland, OR",
    "Raleigh-Durham-Fayetteville",
    "Saint Louis",
    "Indianapolis",
    "Pittsburgh",
    "Nashville",
    "Baltimore",
    "Salt Lake City",
    "San Diego",
    "San Antonio",
    "Columbus, OH",
    "Kansas City",
    "Hartford-New Haven",
    "Austin",
    "Cincinnati",
    "Greenville-Spartanburg-Asheville-Anderson",
    "Milwaukee",
    "West Palm Beach-Fort Pierce",
    "Las Vegas",
    "Jacksonville",
    "Grand Rapids-Kalamazoo-Battle Creek",
    "Harrisburg-Lancaster-Lebanon-York",
    "Norfolk-Portsmouth-Newport News",
    "Birmingham-Anniston-Tuscaloosa",
    "Oklahoma City",
    "Greensboro-High Point-Winston Salem",
    "Louisville",
    "Albuquerque-Santa Fe",
    "New Orleans",
  ];

  return (
    <>
      <div className="overflow-hidden">
        <div style={{ position: "relative" }}>
          <video
            src="/video.mp4"
            className=""
            autoPlay
            muted
            loop
            type="video/mp4"
            style={{ width: "100%" }}
          ></video>
          <div
            className="lg:text-[100px] text-[30px] font-inter lg:leading-[96px] leading-[30px] lg:tracking-[-10px] tracking-[0px] text-[#fff] font-[700] uppercase w-[100%] max-w-[1280px] m-auto"
            style={{ position: "absolute", top: "10px", left: "10px" }}
          >
            <div className="w-[100%] max-w-[1280px] m-auto">
              LED Truck <br />
              Advertising
            </div>
          </div>
        </div>
        <div className="lg:flex block justify-between items-center p-4 w-[100%] max-w-[1280px] m-auto">
          <div>
            <div className="font-inter text-[#e4e4e6] lg:text-[100px] lg:tracking-[-11px] tracking-[0px] lg:leading-[96px] leading-[0px] font-[700]">
              LED TRACK
            </div>
            <p className="lg:p-2 p-0 py-2 font-inter">
              Is a truck equipped <br />
              with high-resolution LED screens
            </p>
          </div>
          <div className="flex justify-between items-center gap-[30px] pr-[10px]">
            <div className="flex flex-col justify-center items-center">
              <svg
                width="169"
                height="120"
                viewBox="0 0 169 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.7609 109.52H137.311C146.959 109.52 151.995 104.642 151.995 94.8348V33.6574C151.995 23.8499 146.959 18.9727 137.311 18.9727H31.7609C22.1124 18.9727 17.0762 23.8499 17.0762 33.6574V94.8348C17.0762 104.642 22.1124 109.52 31.7609 109.52ZM32.4501 99.2349C28.9512 99.2349 27.3608 97.8036 27.3608 94.1987V34.2935C27.3608 30.6886 28.9512 29.2573 32.4501 29.2573H136.621C140.12 29.2573 141.711 30.6886 141.711 34.2935V94.1987C141.711 97.8036 140.12 99.2349 136.621 99.2349H32.4501ZM71.839 88.3672C73.1643 88.3672 74.2776 87.9431 75.5499 87.2539L106.351 69.1233C108.577 67.798 109.744 66.2076 109.744 64.1931C109.744 62.2316 108.63 60.6942 106.351 59.3689L75.5499 41.2383C74.2776 40.5491 73.1643 40.125 71.839 40.125C69.1883 40.125 67.0148 42.0865 67.0148 45.6914V82.7478C67.0148 86.3527 69.2413 88.3672 71.839 88.3672ZM57.4194 128.074H111.652C114.303 128.074 116.476 125.901 116.476 123.25C116.476 120.599 114.303 118.373 111.652 118.373H57.4194C54.7687 118.373 52.5951 120.599 52.5951 123.25C52.5951 125.901 54.7687 128.074 57.4194 128.074Z"
                  fill="#787880"
                  fill-opacity="0.2"
                />
              </svg>
              <p>Vedio</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <svg
                width="79"
                height="104"
                viewBox="0 0 79 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.355469 15.2994V88.8977C0.355469 98.6913 5.4481 103.833 15.1437 103.833H63.5237C73.2193 103.833 78.3119 98.6913 78.3119 88.8977V15.2994C78.3119 5.45689 73.2683 0.364258 63.5237 0.364258H15.1437C5.4481 0.364258 0.355469 5.45689 0.355469 15.2994ZM10.1 15.887C10.1 12.0675 12.0587 10.1088 15.9272 10.1088H62.7402C66.6576 10.1088 68.5674 12.0675 68.5674 15.887V88.2612C68.5674 92.0806 66.6087 94.0393 62.7402 94.0393H15.9272C12.0587 94.0393 10.1 92.0806 10.1 88.2612V15.887ZM39.3337 40.028C45.6016 40.028 50.7432 34.9844 50.6942 28.7165C50.5963 22.3997 45.6016 17.454 39.3337 17.405C33.0658 17.356 28.0222 22.3997 28.0222 28.7165C28.0222 35.0333 33.0658 40.028 39.3337 40.028ZM39.3337 33.9071C36.4446 33.9071 34.1431 31.5566 34.1431 28.7165C34.1431 25.6805 36.4446 23.477 39.3337 23.477C42.1738 23.477 44.5243 25.8274 44.5243 28.7165C44.5243 31.5566 42.2228 33.9071 39.3337 33.9071ZM39.3337 86.6942C50.3025 86.6942 59.1166 77.929 59.1166 66.9113C59.1166 55.8936 50.3025 47.2263 39.3337 47.1773C28.4139 47.1283 19.5998 55.8936 19.5998 66.9113C19.5998 77.929 28.4139 86.6942 39.3337 86.6942ZM39.3337 74.7951C35.0246 74.7951 31.4989 71.2694 31.4989 66.9113C31.4989 62.4063 34.9266 59.0275 39.3337 59.0275C43.7408 59.0275 47.2175 62.4063 47.2175 66.9113C47.2175 71.2694 43.7408 74.7951 39.3337 74.7951Z"
                  fill="#787880"
                  fill-opacity="0.2"
                />
              </svg>
              <p className="mt-[20px]">Audio</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] w-[100%] m-auto my-[30px] w-[100%] max-w-[1280px]">
          <Image src={ledTruck} alt="truck image" className="m-auto" />
        </div>
        <div className="flex lg:w-[26%] w-[100%] m-auto gap-[20px] mt-[100px] mb-[20px] w-[100%] max-w-[1280px]">
          <div>
            <Image src={brightIcon} alt="bright-icon" width={60} />
          </div>
          <div>
            <div className="font-inter font-[500] text-[24px] leading-[28px] tracking-[-0.55px]">
              Bright LED technology
            </div>
            <div className="w-[60%] font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.5px] text-[#3C3C43] my-[20px]">
              Ensuring visibility under any lighting conditions, including
              bright sunlight
            </div>
          </div>
        </div>
        <div className="gaming-console p-4 w-[100%] max-w-[1280px] m-auto">
          <div className="flex lg:flex-row flex-col w-[100%] ">
            <div className="lg:w-[50%] w-[80%] font-inter leading-[32px] tracking-[-0.8px] lg:text-[24px] text-[22px] lg:text-[#EBEBF5] text-[#000]">
              You can use the LED truсk as
            </div>
            <div className="lg:w-[50%] w-[80%] leading-[44px] lg:mt-[0px] mt-[40px]">
              <ul className="leading-[24px]">
                <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">
                  Gaming consoles
                </li>
                <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px] flex items-center gap-[10px]">
                  Interactive games{" "}
                  <span className="text-[10px] tracking-[1px]">
                    (eg. roulette)
                  </span>
                </li>
                <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">
                  Live streaming
                </li>
                <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">
                  Live drone feed
                </li>
                <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">
                  Go Pro camera
                </li>
                <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">
                  iPhone screen mirror
                </li>
                <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">
                  Social media stream
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:mt-[36%] mt-[80%] text-[#fff]">
            <div>
              <Image src={gameIcon} alt="game icon" />
            </div>
            <div className="mt-[30px] font-inter leading-[20px] tracking-[0px] lg:text-[16px] text-[14px] text-[#8d939d] ">
              In the picture
            </div>
            <div className="mt-[10px] lg:w-[20%] w-[70%] font-inter leading-[20px] lg:text-[16px] text-[14px]">
              Customers have connected a game console and play directly on our
              LED truck
            </div>
          </div>
        </div>
        <div className="p-4 flex w-[100%] w-[100%] max-w-[1280px] m-auto">
          <div className="w-[70%]">
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] lg:w-[10%] w-[27%]">
              We work with
            </div>
            <div className="font-inter lg:text-[100px] text-[50px] leading-[40px] lg:leading-[96px] tracking-[0px] lg:tracking-[-9px] font-[500] mt-[20px] mb-[50px] w-[40%]">
              different companies
            </div>
            <div className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px]">
              Have done advertising campaigns for industries such as:
            </div>
            <div className="my-[20px]">
              <ul>
                <li className="font-inter font-[500] text-[20px] leading-[24px] tracking-[-0.55px]">
                  Cannabis
                </li>
                <li className="font-inter font-[500] text-[20px] leading-[24px] tracking-[-0.55px]">
                  Crypto & NFT
                </li>
                <li className="font-inter font-[500] text-[20px] leading-[24px] tracking-[-0.55px]">
                  Political
                </li>
                <li className="font-inter font-[500] text-[20px] leading-[24px] tracking-[-0.55px]">
                  Sports
                </li>
              </ul>
            </div>
            <div className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px]">
              and many others
            </div>
          </div>
          <div className="w-[30%] flex flex-col justify-between">
            <div>
              <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
                Since
              </div>
              <div className="font-inter font-[500] text-[28px] leading-[32px] tracking-[-0.8px]">
                2004
              </div>
            </div>
            <div>
              <div>
                <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
                  Orders executed
                </div>
                <div className="font-inter font-[500] lg:text-[28px] text-[20px] leading-[32px] tracking-[-0.8px]">
                  1,450+
                </div>
              </div>
              <div className="mt-[20px]">
                <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
                  Reorders
                </div>
                <div className="font-inter font-[500] lg:text-[28px] text-[20px] leading-[32px] tracking-[-0.8px]">
                  350+
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col flex-wrap gap-[10px] w-[100%] p-4 m-auto w-[100%] max-w-[1280px]">
          {companyData.map((item) => (
            <div className="lg:w-[24%] w-[100%] m-auto">
              <CompanyCard
                companyName={item.companyName}
                image={item.companyImage}
              />
            </div>
          ))}
        </div>
        <div className="bg-[#e4e4e4] mt-[10px]">
          <div className="m-auto w-[100%] max-w-[1280px]">
            <div className="font-inter font-[500] lg:text-[44px] text-[25px] leading-[44px] tracking-[-2.65px] p-4">
              $1750
            </div>
            <div className="bg-[#fff] lg:w-[20%] w-[80%] m-auto rounded-lg ">
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
                  Price for {totalDays ? totalDays : "0"} days
                </div>
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px]">
                  {totalCost
                    ? "$" + new Intl.NumberFormat("en-US").format(totalCost)
                    : "$0"}
                </div>
              </div>
              <div className="flex justify-between  px-3 py-2">
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px] text-[#3C3C43]">
                  Savings
                </div>
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px] text-[#3C3C43]">
                  {totalSaving
                    ? "$" + new Intl.NumberFormat("en-US").format(totalSaving)
                    : "$0"}
                </div>
              </div>
            </div>
            <div className="lg:w-[20%] w-[80%] m-auto rounded-lg my-[10px]">
              <button
                className="bg-[#80ffab] w-[100%] py-2 rounded-lg cursor-pointer"
                onClick={showModal}
              >
                Order
              </button>
            </div>
            <div className="lg:w-[20%] w-[80%] m-auto my-[10px] py-[50px] text-center">
              <div className="font-inter font-[400] text-[14px] leading-[20px] tracking-[-0.5px]">
                We also offer wholesale pricing on 30-60 day campaigns which
                starts at
              </div>
              <div className="font-inter font-[500] text-[22px] leading-[28px] tracking-[-0.55px] my-[5px]">
                $1250
              </div>
              <div className="font-inter font-[400] text-[14px] leading-[20px] tracking-[-0.5px]">
                per day
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[-12px] mb-[20px] ">
          <Image
            src={dreamTruck}
            alt="dreamtruck"
            className="w-[100%] max-w-[1280px] m-auto"
          />
          <div className="bg-[#e4e4e4]">
            <div className=" w-[100%] max-w-[1280px] m-auto">
              <div className="font-inter font-[500] lg:text-[44px] text-[25px] leading-[44px] lg:tracking-[-2.65px] tracking-[0px] lg:py-[150px] py-[40px] text-center">
                Test your ideas
              </div>
              {isModalOpen ? (
                ""
              ) : (
                <div className="flex lg:flex-row flex-col w-[100%] gap-[40px] pb-[100px] justify-between">
                  <div className="lg:w-[30%] w-[90%] ml-4">
                    <div className="bg-[#f9ff8a] rounded-full flex w-[100%] p-[2px]">
                      <button
                        className={
                          truckSide === "side"
                            ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                            : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                        }
                        onClick={() => setTruckSide("side")}
                      >
                        Side
                      </button>
                      <button
                        className={
                          truckSide === "back"
                            ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                            : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                        }
                        onClick={() => setTruckSide("back")}
                      >
                        Back
                      </button>
                    </div>
                    <div className="bg-[#f9ff8a] rounded-full flex w-[100%] p-[2px] mt-[10px]">
                      <button
                        className={
                          viewType === "2d"
                            ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                            : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                        }
                        onClick={() => setViewType("2d")}
                      >
                        2D
                      </button>
                      <button
                        className={
                          viewType === "3d"
                            ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                            : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                        }
                        onClick={() => setViewType("3d")}
                      >
                        3D
                      </button>
                    </div>
                    {truckSide === "side" ? (
                      <div className="bg-[#fff] rounded-lg p-4 mt-[10px] ">
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            Advertising size
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            11.5x6.5’
                          </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            Available for
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            Vedio/Image
                          </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            File Formats
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            {fileTypeSide ? fileTypeSide : "MP4/MOV/JPEG"}
                          </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            Min Resolution
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            1280x720px
                          </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            Max File Size
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            {fileSpecsSide ? fileSpecsSide + "mb" : "50mb"}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#fff] rounded-lg p-4 mt-[10px] ">
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            Advertising size
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            11.5x6.5’
                          </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            Available for
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            Vedio/Image
                          </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            File Formats
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            {fileTypeBack ? fileTypeBack : "MP4/MOV/JPEG"}
                          </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            Min Resolution
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            1280x720px
                          </div>
                        </div>
                        <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">
                            Max File Size
                          </div>
                          <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">
                            {fileSpecsBack ? fileSpecsBack + "mb" : "50mb"}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="w-[100%] mt-[10px] flex justify-center">
                      {truckSide === "side" ? (
                        <input
                          type="file"
                          id="uploadfile"
                          accept=".jpg, .jpeg, .png, .pdf"
                          onChange={handleImageUploadSide}
                          multiple
                          style={{ display: "none" }} // Hide the default file input
                        />
                      ) : (
                        <input
                          type="file"
                          id="uploadfile"
                          accept=".jpg, .jpeg, .png, .pdf"
                          onChange={handleImageUploadBack}
                          multiple
                          style={{ display: "none" }} // Hide the default file input
                        />
                      )}
                      <label
                        htmlFor="uploadfile"
                        className="w-[100%] py-[10px] px-4 text-[#fff] text-center font-inter bg-[#ff80fd] rounded-lg cursor-pointer"
                      >
                        Upload
                      </label>
                    </div>

                    <div className="w-[100%] mt-[10px]">
                      <button
                        className="w-[100%] py-[10px] text-[#000] font-inter bg-[#80ffab] rounded-lg"
                        onClick={showModal}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                  {viewType === "2d" ? (
                    truckSide === "side" ? (
                      <div className="lg:w-[70%] w-[100%]  modal-bg-side p-4 lg:px-[55px] px-[25px] lg:h-[412px] h-[198px] ">
                        {selectedImageSide && ( // Display image preview if an image is selected
                          <img
                            src={URL.createObjectURL(selectedImageSide)}
                            alt="Selected"
                            width={300}
                            height={100}
                            className="lg:h-[268px] h-[124px] lg:w-[477px] w-[222px] mt-[-10px] lg:mt-[2px] lg:ml-[6px]"
                            style={{ borderTopRightRadius: "13px" }}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="lg:w-[70%] w-[100%]  modal-bg-back p-4  lg:pl-[284px] pl-[70px] h-[293px] lg:h-[400px]">
                        {selectedImageBack && (
                          <img
                            src={URL.createObjectURL(selectedImageBack)}
                            alt="Selected"
                            width={300}
                            height={100}
                            className="lg:h-[271px] h-[192px] lg:w-[294px] w-[206px] ml-[24px] lg:ml-[0px]"
                          />
                        )}
                      </div>
                    )
                  ) : (
                    <div className="lg:w-[70%] w-[100%]">Under Process!</div>
                  )}
                </div>
              )}
              <div className="flex w-[30%] justify-center gap-[30px] m-auto pb-[80px]">
                <div>
                  <p className="font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.5px] text-[#7f7f83]">
                    All of our trucks are
                  </p>
                </div>
                <div>
                  <p className="font-inter font-[500] text-[15px] leading-[16px] tracking-[-0.5px] text-[#000]">
                    black
                  </p>
                  <p className="font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.5px] text-[#7f7f83]">
                    and
                  </p>
                  <p className="font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.5px] text-[#7f7f83]">
                    unbranded{" "}
                  </p>
                  <p className="font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.5px] text-[#7f7f83]">
                    to give you <br />
                    maximum transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdCampain />
        <div>
          <AllCompainRoutes />
        </div>
        <div className="flex items-center my-[60px] w-[100%] p-4 lg:flex-row flex-col gap-[20px] lg:gap-[0px] m-auto w-[100%] max-w-[1280px] p-4">
          <div className="lg:w-[50%] w-[100%] relative flex items-center justify-center">
            <Image src={Routesimage} />
            <div className="absolute">
              <Image src={CityIcon} />
            </div>
          </div>

          <div className="lg:w-[50%] w-[100%] ">
            {RoutesTravel.map((item) => (
              <div className="flex  w-[100%]">
                <li className="font-inter font-[400] w-[50%] text-[12px] leading-[16px] tracking-[0.05px] text-[#adadb0] ">
                  {item.Route}
                </li>
                <li className="font-inter font-[400] w-[50%] text-[12px] leading-[16px] tracking-[0.05px] text-[#adadb0] ">
                  {item.Route}
                </li>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[30px] bg-[#e4e4e4]">
          <div className="m-auto w-[100%] max-w-[1280px] p-4">
            <div className="font-inter font-[500] text-[#fff] lg:text-[100px] text-[50px] lg:leading-[96px] leading-[45px] lg:tracking-[-9.65px] tracking-[0px] lg:w-[44%] w-[80%]">
              If you have not found the city you are interested in
            </div>
            <div className="mt-[100px] mb-[50px] w-[50%] m-auto flex flex-col justify-center items-center">
              <Select
                id="location"
                name="location"
                placeholder="Offer your location"
                width={300}
                onChange={handleInputChange}
                bordered={false}
                className="placeholder:text-[#e4e4e4] placeholder:text-[14px] text-[14px] font-inter placeholder:font-inter bg-[#fff] border-none px-4 py-1 focus:outline-none rounded-lg"
              >
                {locations.map((location, index) => (
                  <Select.Option value={location} key="location">
                    {location}
                  </Select.Option>
                ))}
              </Select>
              {errors.location && (
                <p className="text-sm text-[red] mt-1">{errors.location}</p>
              )}
              <div className="lg:w-[50%] w-[100%] font-inter font-[400] text-center text-[#3C3C43] my-[20px] text-[14px] leading-[16px] tracking-[-0.5px]">
                and we will try to organize an advertising campaign for you
                there
              </div>
              <div>
                <button
                  className="bg-[#FF80FD] rounded-lg text-[#fff] font-inter p-3 cursor-pointer hover:bg-[#e4e4e4] hover:text-[#FF80FD] hover:border-[1px] hover:border-[#FF80FD]"
                  onClick={handlelocationSubmit}
                >
                  Offer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto w-[100%] max-w-[1280px] p-4 flex lg:flex-row flex-col w-[100%] my-[50px] gap-[30px] lg:gap-[0px]">
          <div className="lg:w-[33.33%] w-[100%]">
            <Image src={orderProcess} />
          </div>
          <div className="lg:w-[33.33%] w-[100%]">
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              1. &nbsp;Application for advertising placement
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] my-[100px]">
              <p>
                2. &nbsp;Coordinating all points with our advertising strategist
              </p>{" "}
              <span className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">
                Who will contact you.
              </span>
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              3. &nbsp;Payment
            </div>
          </div>
          <div className="lg:w-[33.33%] w-[100%]">
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              Specify the city
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              Specify the dates
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              Attach your advertising materials
            </div>
            <div className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C4399] text-right">
              сan be skipped and sent after payment
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              Provide personal information
            </div>
            <div className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C4399] text-right">
              <p>First Name</p>
              <p>Last name</p>
              <p>Email</p>
              <p>Phone</p>
              <p>Company name</p>
              <p>Notes to LED truck driver</p>
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              Creatives
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              Route optimization
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              Measurement
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#3C3C4399]">
              Etc
            </div>
          </div>
        </div>
        <div className="m-auto w-[100%] max-w-[1280px] p-4 flex justify-center">
          <button className="bg-[#80FFAB] px-4 py-2 cursor-pointer rounded-lg font-inter font-[500] hover:border-[1px] hover:bg-[#fff] hover:border-[#80FFAB] hover:text-[#80FFAB]">
            Run Ads
          </button>
        </div>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width="100vw" // Change width to 100vw
          footer={null}
          centered={true}
          style={{
            maxWidth: "1280px",
            height: "100vh",
            width: "100wh",
            backgroundColor: "#e4e4e4",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            paddingBottom: "0px",
            margin: "0px",
            "@media (minWidth: 600px)": {
              width: "80%", // or whatever width you want above 600px viewport width
            },
            "@media (minWidth: 900px)": {
              width: "100%", // or whatever width you want above 900px viewport width
            },
          }}
        >
          <Invoice />
        </Modal>
      </div>
    </>
  );
};

export default Presentation;
