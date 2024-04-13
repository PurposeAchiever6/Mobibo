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

const User = ({ onNextClick }) => {
  const RoutesTravel = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Philadelphia",
    "Dallas",
    "Fort Worth",
    "Atlanta",
    "Houston",
    "Washington, D.C.",
    "Hagerstown",
    "Boston",
    "Manchester",
    "San Francisco",
    "Oakland",
    "San Jose",
    "Phoenix",
    "Prescott",
    "Seattle",
    "Tacoma",
    "Tampa",
    "St. Petersburg",
    "Sarasota",
    "Detroit",
    "Minneapolis",
    "St. Paul",
    "Denver",
    "Orlando",
    "Daytona Beach",
    "Melbourne",
    "Miami",
    "Fort Lauderdale",
    "Cleveland",
    "Akron",
    "Canton",
    "Sacramento",
    "Stockton",
    "Modesto",
    "Charlotte",
    "Raleigh-Durham",
    "Portland",
    "St. Louis",
    "Indianapolis",
    "Nashville",
    "Salt Lake City",
    "Pittsburgh",
    "Baltimore",
    "San Diego",
    "San Antonio",
    "Austin",
    "Las Vegas"
  ];
  // handle input change
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const handleSearch = value => {
    console.log('search:', value);
  };

  // Filter `option.children` match the user type `input`
  const filterOption = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;


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

  const handleInputChange = (value) => {
    const name = "mobile";

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
  console.log("formData", formData)
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
      newErrors.mobile = "City is needed.";
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
          <div className="flex items-center justify-center sm:my-[14.7%]  my-[70%]">
            <div className="lg:w-[40%] w-[80%]">
              <div className="mt-2">
                <Select
                  showSearch
                  placeholder="What city do you want to advertise in?"
                  optionFilterProp="children"
                  onChange={handleInputChange}
                  onSearch={handleSearch}
                  filterOption={filterOption}
                  style={{ width: '100%' }}
                >
                  {RoutesTravel.map((city, index) => (
                    <Option key={index} value={city}>{city}</Option>
                  ))}
                </Select>

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
          <button className={formData.mobile.trim() ? "rounded-md bg-[#80FFAB] px-3 py-2 text-base font-semibold text-[#000] shadow-sm hover:text-indigo-500 ml-auto mt-[10px]" : "rounded-md bg-[#f7f7f7] px-3 py-2 text-sm font-semibold text-[#d5d5d7] shadow-sm cursor-not-allowed ml-auto mt-[10px]"} onClick={handleSubmit}>
            Next <ArrowRightOutlined className="pt-[3px] pl-2" />
          </button>
          <br /><br />
          <p className="text-center m-auto font-inter text-sm">
            Don’t see your city?&nbsp;
            <strong>
              <a href="mailto:joe@heymobibo.com" className="text-base">Contact us</a>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};
export default User;
