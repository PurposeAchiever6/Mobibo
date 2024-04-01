'use client';

import React from 'react'
import Image from "next/image"
import FooterLogo from "@/Assests/mobibo-footer.png"
import linkedin from "@/Assests/linkiden-icon.svg"
import facebook from "@/Assests/facebook.svg"
import Instagram from "@/Assests/Intsagram.svg"
import pinterest from "@/Assests/Pinterest.svg"



const Footer = () => {
  return (
    <div className='p-4' style={{backgroundColor:"#2c2c2e" ,padding:"1rem"}}>
      <div className='footer-wrap'>
      <div className="footer-container">
        <div className="footer-logo">
          <Image src={FooterLogo}/>
        </div>
        <div className="footer-links">
          <li className='footer-navigation'>About Us</li>
          <li className='footer-navigation'>Features</li>
          <li className='footer-navigation'>Experience</li>
          <li className='footer-navigation'>Vedio</li>
          <li className='footer-navigation'>Trucks</li>
          <li className='footer-navigation'>Pricing</li>
          <li className='footer-navigation'>Ads Settings</li>
          <li className='footer-navigation'>Customizable</li>
          <li className='footer-navigation'>Coverage</li>
          <li className='footer-navigation'>Map</li>
          <li className='footer-navigation'>Order Process</li>
        </div>
        <div className="footer-links">
          <li className='footer-navigation'>Blog</li>
          <li className='footer-navigation'>SiteMap</li>
        </div>
        <div className="Address-main">
          <div className="footer-address">New York</div>
          <div className="footer-address">418 Broadway</div>
          <div className="footer-address">STE 4725 Albany, NY 12207</div>
          <div className="footer-address" style={{lineHeight:"25px", margin:"10px 0px"}}>(718) 635–1316</div>
          <div className="footer-address" style={{lineHeight:"25px"}}>victoria@heymobibo.com</div>
          <div className="footer-address" style={{lineHeight:"25px"}}><button className='footer-callbtn'>Call</button></div>
        </div>
        <div className="know-sec">
          <div className="needtoknow">Everything you need to know 
             before ordering advertising</div>
           <div className="footer-address"><button className='adsBlog-btn'>Ads blog</button></div>

        </div>
      </div>
      <div className="copyright-sec">
        <div className="" style={{width:"64%" ,display: 'flex'}}><p className="footer-navigation">Privacy Policy</p><span className='ml-[20px] footer-navigation'>Terms of Service</span></div>
        <div className="flex gap-[15px]">
          <Image src={linkedin} className="cursor-pointer social-icon"/>
          <Image src={facebook} className="cursor-pointer social-icon"/>
          <Image src={Instagram} className="cursor-pointer social-icon"/>
          <Image src={pinterest} className="cursor-pointer social-icon"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
