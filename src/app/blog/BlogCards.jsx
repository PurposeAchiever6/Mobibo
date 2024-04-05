import React from 'react'
import Image from "next/image";

const CityCard = (props) => {
  return (
    <div className="rounded-lg bg-[#fff] overflow-hidden" >
      <Image src={props.image.src} alt="" width={300} height={300} className="lg:block hidden"/>
      <Image src={props.image.src} alt="" width={500} height={500} className="lg:hidden block"/>
      <div className="p-4">
        <h4 className="font-inter font-[500] text-[18px] uppercase leading-[28px] tracking-[-0.55px]">{props.heading}</h4>
        <p className="font-inter font-[400] text-[14px] leading-[20px] tracking-[-0.5px]">{props.description}</p>
      </div>
    </div>
  )
}

export default CityCard
