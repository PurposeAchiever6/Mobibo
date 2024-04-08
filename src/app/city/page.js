"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import React, { useState, Suspense } from "react";
import Image from "next/image";
import ledTruck from "@/Assests/Led-Truck.png";
import brightIcon from "@/Assests/bright-icon.svg";
import gameIcon from "@/Assests/gamecontroller-icon.svg";
import CompanyCard from "@/Components/CompanyCard/companyCard.jsx";
import Calendar from "react-calendar";
import dreamTruck from "@/Assests/dream-truck.png";
import truckArch from "@/Assests/truck-archi.png";
import companyImage1 from "@/Assests/companyImage.png";
import companyImage2 from "@/Assests/companyImage2.png";
import companyImage3 from "@/Assests/companyImage3.png";
import companyImage4 from "@/Assests/companyImage4.png";
import companyImage5 from "@/Assests/companyImage5.png";
import companyImage6 from "@/Assests/companyImage6.png";
import companyImage8 from "@/Assests/companyImage8.png";
import companyImage9 from "@/Assests/companyImage9.png";
import companyImage10 from "@/Assests/companyImage10.png";
import companyImage11 from "@/Assests/companyImage11.png";
import companyImage12 from "@/Assests/companyImage12.png";
import companyImage13 from "@/Assests/companyImage13.png";
import companyImage14 from "@/Assests/companyImage14.png";
import companyImage15 from "@/Assests/companyImage15.png";
import companyImage16 from "@/Assests/companyImage16.png";
import companyImage17 from "@/Assests/companyImage17.png";
import orderProcess from "@/Assests/order-process.svg";
import populationicon from "@/Assests/population-icon.svg";
import AdCampain from "@/Components/AdCampain/AdCampain";
import AllCompainRoutes from "@/Components/AllCompainRoutes/AllCompainRoutes";
import responsiveTruck from "@/Assests/responsiveTruck.png";
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { orderJson } from "@/app/api/utils/json.mjs"
import dotenv from "dotenv";
import Invoice from "@/Components/user/UserMain.jsx";
import { Modal } from "antd";
import Demography from "./Demography";

dotenv.config()

const page = () => {
  const [selectedRange, setSelectedRange] = useState([new Date(), new Date()]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [driverNotes, setDriverNotes] = useState('');
  const [truckSide, setTruckSide] = useState("side");
  const [viewType, setViewType] = useState("2d");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: undefined,
      });

      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors({
            ...errors,
            [name]: 'Invalid email format',
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
    }
    else {
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
    var templateParams = await orderJson(firstName, lastName, email, phone, company, driverNotes);
    axios.post('/api/order', await orderJson(firstName, lastName, email, phone, company, driverNotes));
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID)
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then(
        () => {
          console.log('Email sending SUCCESS!');
        },
        (error) => {
          console.log('Email sending FAILED...', error);
        },
      );
  }
  const companyData = [
    {
      companyName: "company Name1",
      companyImage: companyImage1,
    },
    {
      companyName: "company Name2",
      companyImage: companyImage2,
    },
    {
      companyName: "company Name3",
      companyImage: companyImage3,
    },
    {
      companyName: "company Name4",
      companyImage: companyImage4,
    },
    {
      companyName: "company Name5",
      companyImage: companyImage5,
    },
    {
      companyName: "company Name6",
      companyImage: companyImage6,
    },
    {
      companyName: "company Name8",
      companyImage: companyImage8,
    },
    {
      companyName: "company Name9",
      companyImage: companyImage9,
    },
    {
      companyName: "company Name10",
      companyImage: companyImage10,
    },
    {
      companyName: "company Name11",
      companyImage: companyImage11,
    },
    {
      companyName: "company Name12",
      companyImage: companyImage12,
    },
    {
      companyName: "company Name13",
      companyImage: companyImage13,
    },
    {
      companyName: "company Name14",
      companyImage: companyImage14,
    },
    {
      companyName: "company Name15",
      companyImage: companyImage15,
    },
    {
      companyName: "company Name16",
      companyImage: companyImage16,
    },
    {
      companyName: "company Name17",
      companyImage: companyImage17,
    },
  ];
  const RoutesTravel = [
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
    "New Orleans"
  ];
  const handleDateChange = (date) => {
    setSelectedRange(date);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImageList(file.name);
  };

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
              LED Truck<br />
              Advertising<br />
              in Boston <br />
            </div>
          </div>
        </div>
        <div className="bg-[#e4e4e4]">
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
                  Price for 9 days
                </div>
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px]">
                  $173088.99
                </div>
              </div>
              <div className="flex justify-between  px-3 py-2">
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px] text-[#3C3C43]">
                  Savings
                </div>
                <div className="font-inter font-[500] text-[14px] leading-[20px] leading-[-0.5px] text-[#3C3C43]">
                  $2400.99
                </div>
              </div>
            </div>
            <div className="lg:w-[20%] w-[80%] m-auto rounded-lg my-[10px]">
              <button className="bg-[#80ffab] w-[100%] py-2 rounded-lg cursor-pointer" onClick={showModal}>
                Order
              </button>
            </div>
            <div className="lg:w-[20%] w-[80%] m-auto my-[10px] py-[50px] text-center">
              <div className="font-inter font-[400] text-[14px] leading-[20px] tracking-[-0.5px]">
                We also offer wholesale pricing on 30-60 day campaigns which
                starts at
              </div>
              <div className="font-inter font-[500] text-[22px] leading-[28px] tracking-[-0.55px] my-[5px]">
                $1750
              </div>
              <div className="font-inter font-[400] text-[14px] leading-[20px] tracking-[-0.5px]">
                per day
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#f5f5f5] py-[60px] mt-[-10px]">
          <div className="flex w-[100%] max-w-[1280px] m-auto flex-col gap-[50px]">
            <div className="lg:w-[70%] w-[100%] px-4 lg:px-[0px] m-auto">
              <Demography heading="Household Income" />
            </div>
            <div className="lg:w-[70%] w-[100%] px-4 lg:px-[0px] m-auto">
              <Demography heading="Age distribution" />
            </div>
            <div className="lg:w-[70%] w-[100%] px-4 lg:px-[0px] m-auto">
              <Demography heading="Employment by industry sector" />
            </div>
            <div className="lg:w-[70%] w-[100%] px-4 lg:px-[0px] m-auto">
              <Demography heading="Educational attainment" />
            </div>
            <div className="lg:w-[70%] w-[100%] px-4 lg:px-[0px] m-auto">
              <Demography heading="Household composition" />
            </div>
            <div className="lg:w-[70%] w-[100%] px-4 lg:px-[0px] m-auto">
              <Demography heading="Ethnicity" />
            </div>
          </div>
          <div className="my-[40px] mt-[100px]">Boston Population</div>
          <div className="w-full h-full flex justify-center items-center gap-[5px] flex-col my-[60px]">
            <div><Image src={populationicon} /></div>
            <div className="font-inter font-[500] text-[44px] leading-[44px] tracking-[-2.65px]">650,706</div>
            <div className="font-inter font-[400] text-[20px] leading-[24px] tracking-[-0.55px]">people</div>
          </div>
        </div>
        <div className="p-4 flex w-[100%] w-[100%] max-w-[1280px] m-auto">
          <div className="w-[70%]">
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] lg:w-[10%] w-[27%]">
              We work with
            </div>
            <div className="font-inter lg:text-[100px] text-[50px] leading-[40px] lg:leading-[96px] tracking-[0px] lg:tracking-[-9px] font-[500] mt-[20px] mb-[50px] w-[40%]">
              premier brands
            </div>
            <div className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px]">
              We've done advertising campaigns for industries such as:
            </div>
            <div className="my-[20px]">
              <ul>
                <li className="font-inter font-[500] text-[20px] leading-[24px] tracking-[-0.55px]">
                  CPG
                </li>
                <li className="font-inter font-[500] text-[20px] leading-[24px] tracking-[-0.55px]">
                  Tech
                </li>
                <li className="font-inter font-[500] text-[20px] leading-[24px] tracking-[-0.55px]">
                  Politics
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
                2014
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

        <div className="m-auto w-[100%] max-w-[1280px] p-4 flex lg:flex-row flex-col w-[100%] my-[50px] gap-[30px] lg:gap-[0px]">
          <div className="lg:w-[33.33%] w-[100%]">
            <Image src={orderProcess} />
          </div>
          <div className="lg:w-[33.33%] w-[100%]">
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              1. &nbsp;Application for advertising placement
              <div>
                <p className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">Specify the city</p>
                <p className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">Specify the dates</p>
                <p className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">Attach your advertising materials</p>
                <p className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">Provide personal information</p>
                <div className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px] my-[10px] flex items-center gap-[5px]"><button type="button" className="cursor-pointer bg-[#FF80FD] text-[#fff] px-4 rounded-lg py-1 hover:border-[1px] hover:border-[#FF80FD] hover:bg-[#fff] hover:text-[#FF80FD]"> Can be Skipped for now </button></div>
              </div>
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] my-[100px]">
              <p>
                2. &nbsp;Coordinating all points with our advertising strategist
              </p>{" "}
              <span className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">
                Who will contact you.
              </span>
              <div>
                <p className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">Creatives</p>
                <p className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">Route optimization</p>
                <p className="font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px] text-[#3C3C43] ml-[20px]">Measurement</p>
              </div>
            </div>
            <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px]">
              3. &nbsp;Payment
            </div>
          </div>
          <div className="lg:w-[33.33%] w-[100%]">
            <form>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">Name</label>
                <input type="text" placeholder="Enter Name" className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]" />
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">Last Name</label>
                <input type="text" placeholder="Enter Last Name" className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]" />
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">Email</label>
                <input type="Email" placeholder="Enter Email" className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]" />
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">Phone</label>
                <input type="number" placeholder="Enter Phone Number" className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]" />
              </div >
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">Company</label>
                <input type="text" placeholder="Your Company Name" className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]" />
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">Driver Notes</label>
                <input type="text" placeholder="Enter Driver Notes" className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]" />
              </div>
            </form>
          </div>
        </div>
        <div className="m-auto w-[100%] max-w-[1280px] p-4 flex justify-center"><button className="bg-[#80FFAB] px-4 py-2 cursor-pointer rounded-lg font-inter font-[500] hover:border-[1px] hover:bg-[#fff] hover:border-[#80FFAB] hover:text-[#80FFAB]">Run Ads</button></div>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width="100%"
          footer={null}
          style={{
            maxWidth: "1280px",
            height: '100vh',
            backgroundColor: "#e4e4e4",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            paddingBottom: "0px",
            margin: "0px",
            "@media (min-width: 600px)": {
              width: "80%", // or whatever width you want above 600px viewport width
            },
            "@media (min-width: 900px)": {
              width: "50%", // or whatever width you want above 900px viewport width
            },
          }}
        >
          <Invoice />
        </Modal>
      </div>
    </>
  );
};

export default page;
