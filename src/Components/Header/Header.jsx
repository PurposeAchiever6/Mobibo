"use client";
import React, { useState } from "react";
import Image from "next/image";
import mobiboLogo from "@/Assests/mobibo-logo.svg";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import Invoice from "../user/UserMain";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentRoute = usePathname();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleScroll = (value) => {
    if (value === "Feature") {
      window.scrollTo({ behavior: "smooth", top: 800 });
    } else if (value === "Experience") {
      window.scrollTo({ behavior: "smooth", top: 1670 });
    } else if (value === "Pricing") {
      window.scrollTo({ behavior: "smooth", top: 2540 });
    } else if (value === "Trucks") {
      window.scrollTo({ behavior: "smooth", top: 3040 });
    } else if (value === "AdsSettings") {
      window.scrollTo({ behavior: "smooth", top: 4315 });
    } else if (value === "Coverage") {
      window.scrollTo({ behavior: "smooth", top: 7315 });
    } else if (value === "OrderProcess") {
      window.scrollTo({ behavior: "smooth", top: 9815 });
    }
  };

  const handleScrollResp = (value) => {
    if (value === "Feature") {
      window.scrollTo({ behavior: "smooth", top: 290 });
      setIsOpen(false);
    } else if (value === "Experience") {
      window.scrollTo({ behavior: "smooth", top: 1000 });
      setIsOpen(false);
    } else if (value === "Pricing") {
      window.scrollTo({ behavior: "smooth", top: 1800 });
      setIsOpen(false);
    } else if (value === "Trucks") {
      window.scrollTo({ behavior: "smooth", top: 2200 });
      setIsOpen(false);
    } else if (value === "AdsSettings") {
      window.scrollTo({ behavior: "smooth", top: 8065 });
      setIsOpen(false);
    } else if (value === "Coverage") {
      window.scrollTo({ behavior: "smooth", top: 10185 });
      setIsOpen(false);
    } else if (value === "OrderProcess") {
      window.scrollTo({ behavior: "smooth", top: 13400 });
      setIsOpen(false);
    }
  };
 
  const activeStyles = "rounded-full px-4 py-2 bg-[#A57BFF] font-inter text-[#fff] font-[600] text-[12px] cursor-pointer";
  const nonActiveStyles = " px-4 py-2 font-inter text-[#3C3C4399] font-[400] text-[12px] cursor-pointer";
  return (
    <div>
      <div className="flex justify-between items-center navbar">
        <div className="flex justify-between items-center gap-[20px]">
          <div className="">
            <Image src={mobiboLogo} alt="mobibo-log" />
          </div>

          {isOpen && (
            <div className="mobile-menu">
              <div className="tab-buttons-mobile">
              <Link
              href="/"
              className={
                currentRoute === "/"
                  ? activeStyles
                  :nonActiveStyles
              }
            >
                  Presentation
                </Link>

                <div className="border-tabs-mobile"></div>
                <Link
              href="/city"
              className={
                currentRoute === "/city"
                  ? activeStyles
                  :nonActiveStyles
              }
            >
                  City
                </Link>
                <div className="border-tabs-mobile"></div>
                <Link
              href="/blog"
              className={
                currentRoute === "/blog"
                  ? activeStyles
                  : nonActiveStyles
              }
            >
                  Blogs
                </Link>
              </div>
              {currentRoute === "/" ?
          <div className="navlinks-mobile">
            <li
              className=""
              value="Feature"
              onClick={() => handleScrollResp("Feature")}
            >
              Features
            </li>
            <li
              className=""
              value="Experience"
              onClick={() => handleScrollResp("Experience")}
            >
              Experience
            </li>
            <li
              className=""
              value="Pricing"
              onClick={() => handleScrollResp("Pricing")}
            >
              Pricing
            </li>
            <li
              className=""
              value="Trucks"
              onClick={() => handleScrollResp("Trucks")}
            >
              Trucks
            </li>
            <li
              className=""
              value="AdsSettings"
              onClick={() => handleScrollResp("AdsSettings")}
            >
              Ads Settings
            </li>
            <li
              className=""
              value="Coverage"
              onClick={() => handleScrollResp("Coverage")}
            >
              Coverage
            </li>
            <li
              className=""
              value="OrderProcess"
              onClick={() => handleScrollResp("OrderProcess")}
            >
              Order Process
            </li>
          </div> : '' }
            </div>
          )}
          <div className="tab-buttons">
          <Link
              href="/"
              className={
                currentRoute === "/"
                ? activeStyles
                :nonActiveStyles
              }
            >
                  Presentation
                </Link>
            <div className="border-tabs"></div>
            <Link
              href="/city"
              className={
                currentRoute === "/city"
                  ? activeStyles
                  :nonActiveStyles
              }
            >
                  City
                </Link>
            <div className="border-tabs"></div>
            <Link
              href="/blog"
              className={
                currentRoute === "/blog"
                  ? activeStyles
                  :nonActiveStyles
              }
            >
                  Blogs
                </Link>
          </div>
          {currentRoute === "/" ?
          <div className="navlinks">
            <li
              className=""
              value="Feature"
              onClick={() => handleScroll("Feature")}
            >
              Features
            </li>
            <li
              className=""
              value="Experience"
              onClick={() => handleScroll("Experience")}
            >
              Experience
            </li>
            <li
              className=""
              value="Pricing"
              onClick={() => handleScroll("Pricing")}
            >
              Pricing
            </li>
            <li
              className=""
              value="Trucks"
              onClick={() => handleScroll("Trucks")}
            >
              Trucks
            </li>
            <li
              className=""
              value="AdsSettings"
              onClick={() => handleScroll("AdsSettings")}
            >
              Ads Settings
            </li>
            <li
              className=""
              value="Coverage"
              onClick={() => handleScroll("Coverage")}
            >
              Coverage
            </li>
            <li
              className=""
              value="OrderProcess"
              onClick={() => handleScroll("OrderProcess")}
            >
              Order Process
            </li>
          </div> : '' }
        </div>
        <div className="flex gap-[20px]">
          <button className=" order-button" onClick={showModal}>
            Order
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
          <div className="">
            <Modal
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width="100%"
              footer={null}
              style={{
                maxWidth: "1280px",
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
        </div>
      </div>
    </div>
  );
};

export default Header;
