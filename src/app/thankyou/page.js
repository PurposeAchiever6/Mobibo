"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter(); 

  return (
    <div className="bg-[#e4e4e4] flex justify-center items-center ">
      <div className='tex-center m-auto my-[18%]'>
      <div className="text-center font-inter font-[500] text-[#fff] text-[100px] leading-[96px] tracking-[-9.65px]">
      Thank you for ordering
      </div>
      <div className="font-inter font-[400] text-[20px] m-auto mt-[35px] leading-[24px] tracking-[-0.55px] text-center w-[60%] text-[#3C3C43]">You will be contacted by our advertising strategist within 24 hours to coordinate all the details.</div>
      <div className="flex w-[100%] justify-center mt-[30px]">
        <button className="bg-[#fff] px-4 py-2 rounded-lg cursor-pointer" onClick={()=> router.push("/")}>Got It</button>
      </div>
      </div>
    </div>
  )
}

export default page
