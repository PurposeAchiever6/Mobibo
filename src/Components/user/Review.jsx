"use client";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'

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
import { useRouter } from 'next/navigation';

const Review = ({onPreviousClick}) => {
  const router = useRouter(); 
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
      notes:"",
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
    
    

    const handleSubmit = () => {
      const newErrors = {};
  
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
        
      }
  
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }  
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = "Invalid email format";
      }
  
      if (!formData.mobile.trim()) {
        newErrors.mobile = "Phone Number is required";
      }
      if (!formData.address.trim()) {
        newErrors.address = "Please Give your Company name ";
      }
      if (!formData.notes.trim()) {
        newErrors.notes = "Please enter the Driver Notes";
      }
      
      if (Object.keys(newErrors).length === 0) {
        console.log("No validation errors, calling onNextClick");
        // Swal.fire({
        //   title: 'Form Submitted!',
        //   text: 'Your form has been Submitted!',
        //   icon: 'success',
        //   showCancelButton: false, 
        //   confirmButtonColor: '#3085d6',
        //   confirmButtonText: 'OK',
        //   allowOutsideClick: false,
        //   }).then((result) => {
        //   if (result.isConfirmed) {
        //     router.push('/thankyou');
        //   }
        // });
        router.push('/thankyou');
      }  
       else {
        console.log("Validation errors found, not calling onNextClick");
        setErrors(newErrors);
        Swal.fire(
          'Empty fields Found!',
          'Please fill the required fields!',
          'error'
        )
      }
    };
  
    const isValidEmail = (email) => {
     
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    return (
      <>
          <div className="text-center">Upload Your Creatives</div>

         <div className="lg:w-[40.33%] w-[100%] m-auto bg-[#fff] p-4 rounded-lg my-[50px]">
            <form>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">
                  Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter Name"
                  onChange={handleInputChange} // Corrected onChange handler
                  className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]"
                />
                {errors.firstName && (
                  <p className="text-sm text-[red] mt-1">{errors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  onChange={handleInputChange} // Corrected onChange handler
                  className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]"
                />
                {errors.lastName && (
                  <p className="text-sm text-[red] mt-1">{errors.lastName}</p>
                )}
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">
                  Email
                </label>
                <input
                  type="Email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={handleInputChange} // Corrected onChange handler
                  className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]"
                />
                {errors.email && (
                  <p className="text-sm text-[red] mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">
                  Phone
                </label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Phone Number"
                  onChange={handleInputChange} // Corrected onChange handler
                  className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]"
                />
                {errors.mobile && (
                  <p className="text-sm text-[red] mt-1">{errors.mobile}</p>
                )}
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">
                  Company
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Company Name"
                  onChange={handleInputChange} // Corrected onChange handler
                  className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]"
                />
                {errors.address && (
                  <p className="text-sm text-[red] mt-1">{errors.address}</p>
                )}
              </div>
              <div className="flex flex-col gap-[10px] mb-[10px]">
                <label className="font-inter text-[16px] leading-[20px] tracking-[-0.5px] font-[500]">
                  Driver Notes
                </label>
                <input
                  type="text"
                  name="notes"
                  id="notes"
                  placeholder="Enter Driver Notes"
                  onChange={handleInputChange} // Corrected onChange handler
                  className="bg-[#f8f8f8] text-[#8e8e91] rounded-lg placeholder:text-[#8e8e91] px-4 py-2 focus:outline-none border-[1px] border-[#e5e5ea]"
                />
                {errors.notes && (
                  <p className="text-sm text-[red] mt-1">{errors.notes}</p>
                )}
              </div>
            </form>
          </div>        
          <div className="flex justify-center p-4  w-full text-center next-btn  mt-5 m-auto">
        <div>
        <p className="text-center m-auto font-inter tex-[24px]">To submit an application, please fill in all fields correctly</p>
        <button className="rounded-md bg-[#80FFAB] px-3 py-2 text-sm font-semibold text-[#000] shadow-sm hover:text-indigo-500 ml-auto mt-[10px]" onClick={handleSubmit}>
          Submit <ArrowRightOutlined className="pt-[3px] pl-2" />
        </button>
        </div>
        </div>
      </>
    );
  };
export default Review