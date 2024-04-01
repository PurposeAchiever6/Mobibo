"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import mobiboLogo from "@/Assests/mobibo-logo.svg"
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (value) =>{
    if (value === "Feature") {
      window.scrollTo({ behavior: 'smooth', top: 800 });
    }
    else if(value=== "Experience"){
      window.scrollTo({ behavior: 'smooth', top: 1670 });
    }
    else if(value=== "Pricing"){
      window.scrollTo({ behavior: 'smooth', top: 3540 });
    }
    else if(value=== "Trucks"){
      window.scrollTo({ behavior: 'smooth', top: 4040 });
    }
    else if(value=== "AdsSettings"){
      window.scrollTo({ behavior: 'smooth', top: 5315 });
    }
    else if(value=== "Coverage"){
      window.scrollTo({ behavior: 'smooth', top: 8115 });
    }
    else if(value=== "OrderProcess"){
      window.scrollTo({ behavior: 'smooth', top: 10615 });
    }
  }

  return (
    <div>
     <div className="flex justify-between items-center navbar">
        <div className="flex justify-between items-center gap-[20px]">
          <div className="">
            <Image
             src={mobiboLogo}
             alt='mobibo-log'
            />
          </div>

          {isOpen && (
            <div className="mobile-menu">
            <div className="tab-buttons-mobile">
            <div className="tab-btn-mobile"><button className=''>Presentation</button></div>
            <div className="border-tabs-mobile"></div>
            <div className="tab-btn-mobile"><button className=''>City</button></div>
            <div className="border-tabs-mobile"></div>
            <div className="tab-btn-mobile"><button className=''>Blog</button></div>
          </div>
          <div className="navlinks-mobile">
          <li className='' value="Feature" onClick={()=>handleScroll("Feature")}>Features</li> 
          <li className='' value="Experience" onClick={()=>handleScroll("Experience")}>Experience</li>
          <li className='' value="Pricing" onClick={()=>handleScroll("Pricing")}>Pricing</li>
          <li className='' value="Trucks" onClick={()=>handleScroll("Trucks")}>Trucks</li>
          <li className='' value="AdsSettings" onClick={()=>handleScroll("AdsSettings")}>Ads Settings</li>
          <li className='' value="Coverage" onClick={()=>handleScroll("Coverage")}>Coverage</li>
          <li className='' value="OrderProcess" onClick={()=>handleScroll("OrderProcess")}>Order Process</li>
          </div>
            </div>
          )}
          <div className="tab-buttons">
            <div className="tab-btn"><button className=''>Presentation</button></div>
            <div className="border-tabs"></div>
            <div className="tab-btn"><button className=''>City</button></div>
            <div className="border-tabs"></div>
            <div className="tab-btn"><button className=''>Blog</button></div>
          </div>
          <div className="navlinks">
          <li className='' value="Feature" onClick={()=>handleScroll("Feature")}>Features</li> 
          <li className='' value="Experience" onClick={()=>handleScroll("Experience")}>Experience</li>
          <li className='' value="Pricing" onClick={()=>handleScroll("Pricing")}>Pricing</li>
          <li className='' value="Trucks" onClick={()=>handleScroll("Trucks")}>Trucks</li>
          <li className='' value="AdsSettings" onClick={()=>handleScroll("AdsSettings")}>Ads Settings</li>
          <li className='' value="Coverage" onClick={()=>handleScroll("Coverage")}>Coverage</li>
          <li className='' value="OrderProcess" onClick={()=>handleScroll("OrderProcess")}>Order Process</li>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <button className=' order-button'>Order</button>
          <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
            {isOpen? <CloseOutlined/> : <MenuOutlined/>}
          </button>
        </div>
     </div>      
    </div>
  )
}

export default Header
