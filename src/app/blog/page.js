"use client"

import React, { useEffect, useState } from "react";
import CityCard from "./BlogCards";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { getBlog } from "../../helpers/util.mjs"

const page = () => {
  const router = useRouter();
  const [tab, setTab] = useState("led-billboards");
  const [blogData, setBlogData] = useState([])
  
  useEffect(()=>{
    async function init(){
      const blog = await getBlog(tab);
      setBlogData(blog)
    }
    init();
  }, [tab])


  function handleDetails(item) {
    const imageSrc = encodeURIComponent(item.image.src);
    const title = encodeURIComponent(item.title);
    const description = encodeURIComponent(item.description);
    return `/blog/content?title=${title}&image=${imageSrc}&description=${description}`;
  }


  return (
    <div className=" bg-[#e4e4e4]  border-t-[1px]">
      <div className="bg-[#fff] px-4 py-2 flex gap-[10px] flex-wrap">
        <button className={tab === "led-billboards" ? "px-4 py-2 rounded-full border-[1px] border-[#e4e4e4]  font-inter text-[16px] bg-[#FF80FD] text-[#fff]" : "px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]"} onClick={() => setTab("led-billboards")}>
          LED Billboards
        </button>
        <button className={tab === "drone-advertising" ? "px-4 py-2 rounded-full border-[1px] border-[#e4e4e4]  font-inter text-[16px] bg-[#FF80FD] text-[#fff]" : "px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]"} onClick={() => setTab("drone-advertising")}>
          Drone Advertising

        </button>
        <button className={tab === "backpack" ? "px-4 py-2 rounded-full border-[1px] border-[#e4e4e4]  font-inter text-[16px] bg-[#FF80FD] text-[#fff]" : "px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]"} onClick={() => setTab("backpack")}>
          Digital Backpacks

        </button>
        <button className={tab === "pedicabs" ? "px-4 py-2 rounded-full border-[1px] border-[#e4e4e4]  font-inter text-[16px] bg-[#FF80FD] text-[#fff]" : "px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]"} onClick={() => setTab("pedicabs")}>
          Pedicabs
        </button>

      </div>
      <div className="flex lg:flex-row flex-col flex-wrap gap-[10px] w-[100%] p-4 m-auto w-[100%] max-w-[1280px]">
        {blogData.map((item, index) => (
          <div
            className="lg:w-[24%] w-[100%] m-auto cursor-pointer"
          >
            <Link href={handleDetails(item)}>
              <CityCard
                title={item.title}
                image={item.image}
                description={item.description}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
