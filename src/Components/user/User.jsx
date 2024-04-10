"use client";
import React, { useState, useRef, useEffect } from "react";
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

const User = ({onNextClick}) => {
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");

  const { Option } = Select;

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const [formData, setFormData] = useState({
    mobile: "",
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
  console.log("formData",formData)
  const handleSubmit = () => {
    const newErrors = {};

    // if (!formData.firstName.trim()) {
    //   newErrors.firstName = "First name is required";
      
    // }

    // if (!formData.lastName.trim()) {
    //   newErrors.lastName = "Last name is required";
    // }

    // if (!formData.password.trim()) {
    //   newErrors.password = "Password is required";
    // }

    // if (formData.password !== formData.verifyPassword) {
    //   newErrors.verifyPassword = "Passwords do not match";
    // }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required";
    // } else if (!isValidEmail(formData.email)) {
    //   newErrors.email = "Invalid email format";
    // }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please Fill that";
    }
    // if (!formData.address.trim()) {
    //   newErrors.address = "Address is required";
    // }
    // if (!formData.city.trim()) {
    //   newErrors.city = "Please enter the city";
    // }
    // if (!selectedCountry) {
    //   newErrors.country = "Country is required"; // Set the error message for the country
    // }
    // if (!formData.postCode.trim()) {
    //   newErrors.postCode = "Please enter the postcode";
    // }
    
    if (Object.keys(newErrors).length === 0) {
      console.log("No validation errors, calling onNextClick");
      onNextClick();
    } else {
      console.log("Validation errors found, not calling onNextClick");
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  return (
    <>
      <div>
        <div className=" pb-12">
          <div className="flex items-center justify-center lg:my-[14.7%] my-[80.5%]">
            <div className="lg:w-[40%] w-[80%]">
              <div className="mt-2">
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="What city do you want to advertise in?"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                />
                {errors.mobile && (
                  <p className="text-sm text-[red] mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-4  w-full text-center next-btn  mt-5 m-auto">
        <div>
        <p className="text-center m-auto font-inter tex-[24px]">To continue, enter your city</p>
        <button className={formData.mobile.trim() ? "rounded-md bg-[#80FFAB] px-3 py-2 text-sm font-semibold text-[#000] shadow-sm hover:text-indigo-500 ml-auto mt-[10px]" : "rounded-md bg-[#f7f7f7] px-3 py-2 text-sm font-semibold text-[#d5d5d7] shadow-sm cursor-not-allowed ml-auto mt-[10px]"} onClick={handleSubmit}>
          Next <ArrowRightOutlined className="pt-[3px] pl-2" />
        </button>
        </div>
      </div>
    </>
  );
};
export default User;
