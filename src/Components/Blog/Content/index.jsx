'use client'
import { LeftOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation'
import { getBlog } from "../../../helpers/util.mjs"
import sanityClient from "../../../helpers/client.mjs"
import imageUrlBuilder from '@sanity/image-url';
import SanityBlockContent from '@sanity/block-content-to-react';

import facebook from "@/Assests/facebook-blog.svg";
import linkedin from "@/Assests/linkedin-blog.svg";
import twitter from "@/Assests/twitter-blog.svg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}


const BlogContent = ({ id }) => {
  const router = useRouter();
  const [title, setTitle] = useState([]);
  const [publication_time, setPublicationTime] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [blockContent, setBlockContent] = useState(undefined);

  useEffect(() => {
    async function init() {

      const blog = await getBlog('');



      setTitle(blog[id - 1].title);
      setPublicationTime(blog[id - 1].publication_time);
      const image_ = blog[id - 1].image.asset;
      image_ ? setImageUrl(urlFor(image_).url()) : '';
      setBlockContent(blog[id - 1].blockContent);
    }
    init();
  }, [])

  // Serializer for customizing how different types of blocks are rendered
  const serializers = {
    types: {
      block: (props) => {
        console.log("props.node.style: ", props.node.style)
        // console.log("props.children: ", props.children)
        // Customizing how normal blocks are rendered based on style
        switch (props.node.style) {
          case 'h1':
            console.log("H1 Tag found with content:", props.children);
            return <h1>{props.children}</h1>;
          case 'h2':
            return <h2>{props.children}</h2>;
          case 'h3':
            return <h3>{props.children}</h3>;
          case 'h4':
            return <h4>{props.children}</h4>;
          case 'blockquote':
            return <blockquote>{props.children}</blockquote>;
          default:
            return <p>{props.children}</p>;
        }
      },
      // Add other custom serializers for types like 'image', 'list', 'listItem' etc. if needed
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ mark, children }) => {
        const { url, openInNewTab = false } = mark;
        return (
          <a href={url} target={openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer">
            {children}
          </a>
        );
      },
    },
  };

  const RenderBlockContent = ({ blockContent }) => (
    <SanityBlockContent
      blocks={blockContent}
      serializers={serializers}
      projectId={sanityClient.config().projectId}
      dataset={sanityClient.config().dataset}
    />
  );

  return (
    <div className="max-w-[1280px] w-[100%] m-auto">
      <div className='text-[#FF80FD] font-inter cursor-pointer px-4 flex gap-[10px] items-center'>
        <LeftOutlined /> Blog
      </div>
      <div className="my-[40px] ">
        <h2 className="font-[500] lg:text-[28px] text-[18px] lg:leading-[32px] tracking-[-0.8px] font-inter lg:w-[60%] m-auto w-[100%] lg:px-[0px] px-4">{title}</h2>
        <p className="font-inter font-[400] text-[12px] leading-  [16px] text-[#b6b6b9] lg:w-[60%] m-auto w-[100%] lg:px-[0px] px-4">{publication_time}</p>
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
              <div className="flex justify-center w-full"> {/* Good practice to use full instead of 100% for width */}
                {/* Adjust the image size by setting width (w-1/3) */}
                <img src={imageUrl} alt="Doesn't have image" className="w-1/3" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:w-[60%] w-[100%] px-4 lg:px-[0px] m-auto flex flex-col gap-[10px] lg:text-[16px] text-[14px] font-inter font-[400] leading-[20px] tracking-[-0.5px]">
          <div className="block-content-container">
            <RenderBlockContent blockContent={blockContent} />
          </div>
          <div className="flex justify-between items-center py-4" style={{ borderTop: "1px solid #b6b6b9" }}>
            <div className='text-[#b6b6b9] font-inter text-[12px] font-[400] leading-[16px] tracking-[0.05px]'>
              Share this article
            </div>
            <div className="flex gap-[10px] items-center">
              {/* Assuming you have the image paths set correctly for Image src */}
              <Image src={facebook} alt="Facebook" />
              <Image src={linkedin} alt="LinkedIn" />
              <Image src={twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent