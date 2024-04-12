'use client'
import { LeftOutlined } from '@ant-design/icons'
import React, { useState, useEffect} from "react";
import Image from 'next/image';
import companyImage1 from "@/Assests/companyImage13.png";
import companyImage2 from "@/Assests/companyImage2.jpeg";
import companyImage3 from "@/Assests/companyImage3.jpeg";
import companyImage4 from "@/Assests/companyImage4.jpeg";
import companyImage5 from "@/Assests/companyImage5.jpeg";
import companyImage7 from "@/Assests/companyImage7.jpeg";
import companyImage6 from "@/Assests/companyImage6.jpeg";
import companyImage8 from "@/Assests/companyImage8.jpeg";
import companyImage9 from "@/Assests/companyImage9.jpeg";
import companyImage10 from "@/Assests/companyImage10.jpeg";
import companyImage11 from "@/Assests/companyImage11.jpeg";
import companyImage12 from "@/Assests/companyImage12.jpeg";
import companyImage13 from "@/Assests/companyImage13.png";
import companyImage14 from "@/Assests/companyImage14.jpeg";
import companyImage15 from "@/Assests/companyImage15.jpeg";
import companyImage16 from "@/Assests/companyImage16.jpeg";
import facebook from "@/Assests/facebook-blog.svg";
import linkedin from "@/Assests/linkedin-blog.svg";
import twitter from "@/Assests/twitter-blog.svg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation'
import { getBlog } from "../../../helpers/util.mjs"
import sanityClient from "../../../helpers/client.mjs"
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}


const BlogContent = ({ id }) => {
  const router = useRouter();
  const [title, setTitle] = useState([]);
  const [publication_time, setPublicationTime] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    async function init() {
      
      const blog = await getBlog('');
    
    
    
      setTitle(blog[id - 1].title);
      setPublicationTime(blog[id - 1].publication_time);
      const image_ = blog[id - 1].image.asset;
      image_ ? setImageUrl(urlFor(image_).url()) : '';
      setText(blog[id - 1].text);
    }
    init();
  }, [])

  return (
    <div className="max-w-[1280px] w-[100%] m-auto">
      <div className='text-[#FF80FD] font-inter cursor-pointer px-4 flex gap-[10px] items-center'>
        <LeftOutlined /> Blog
      </div>
      <div className="my-[40px] ">
        <h2 className="font-[500] lg:text-[28px] text-[18px] lg:leading-[32px] tracking-[-0.8px] font-inter lg:w-[60%] m-auto w-[100%] lg:px-[0px] px-4">{title}</h2>
        <p className="font-inter font-[400] text-[12px] leading-[16px] text-[#b6b6b9] lg:w-[60%] m-auto w-[100%] lg:px-[0px] px-4">{publication_time}</p>
        <div>
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="my-[50px]"
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="flex  justify-between w-[100%]">
                <img src={imageUrl} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:w-[60%] w-[100%] px-4 lg:px-[0px] m-auto flex flex-col gap-[10px] lg:text-[16px] text-[14px] font-inter font-[400] leading-[20px] tracking-[-0.5px]">
          {text}
          <div className="flex justify-between items-center py-4" style={{ borderTop: "1px solid #b6b6b9" }}>
            <div className='text-[#b6b6b9] font-inter text-[12px] font-[400] leading-[16px] tracking-[0.05px]'>
              Share this article
            </div>
            <div className="flex gap-[10px] items-center">
              <Image src={facebook} />
              <Image src={linkedin} />
              <Image src={twitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent