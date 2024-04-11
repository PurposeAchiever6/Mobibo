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
              onClick={() => setIsOpen(false)} 
              className={
                currentRoute === "/"
                  ? activeStyles
                  :nonActiveStyles
              }
            >
                  Home
                </Link>

                <div className="border-tabs-mobile"></div>
                <Link
              href="/city"
              onClick={() => setIsOpen(false)} 
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
              onClick={() => setIsOpen(false)} 
              className={
                currentRoute === "/blog"
                  ? activeStyles
                  : nonActiveStyles
              }
            >
                  Blog
                </Link>
              </div>
              {currentRoute === "/" ?
          <div className="navlinks-mobile">
            <li
              className=""
              value="Feature"
            >
              <a href="#feature" onClick={() => setIsOpen(false)}>Features</a>
            </li>
            <li
              className=""
              value="Experience"
            >
              <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            </li>
            <li
              className=""
              value="Pricing"
            >
              <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            </li>
            <li
              className=""
              value="Trucks"
            >
              <a href="#trucks" onClick={() => setIsOpen(false)}>Trucks</a>
            </li>
            <li
              className=""
              value="AdsSettings"
            >
              <a href="#adssettings" onClick={() => setIsOpen(false)}>Ads Settings</a>
            </li>
            <li
              className=""
              value="Coverage"
            >
              <a href="#coverage" onClick={() => setIsOpen(false)}>Coverage</a>
            </li>
            <li
              className=""
              value="OrderProcess"
            >
              <a href="#orderprocess" onClick={() => setIsOpen(false)}>Order Process</a>
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
                  Home
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
                  Blog
                </Link>
          </div>
          {currentRoute === "/" ?
          <div className="navlinks">
            <li
              className=""
              value="Feature"
            >
              <a href="#feature">Features</a>
            </li>
            <li
              className=""
              value="Experience"
            >
              <a href="#experience">Experience</a>
            </li>
            <li
              className=""
              value="Pricing"
            >
              <a href="#pricing">Pricing</a>
            </li>
            <li
              className=""
              value="Trucks"
            >
              <a href="#trucks">Trucks</a>
            </li>
            <li
              className=""
              value="AdsSettings"
            >
              <a href="#adssettings">Ads Settings</a>
            </li>
            <li
              className=""
              value="Coverage"
            >
              <a href="#coverage">Coverage</a>
            </li>
            <li
              className=""
              value="OrderProcess"
            >
              <a href="#orderprocess">Order Process</a>
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
