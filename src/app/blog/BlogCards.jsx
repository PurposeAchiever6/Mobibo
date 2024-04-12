import React from 'react'
import sanityClient from "../../helpers/client.mjs"
import imageUrlBuilder from '@sanity/image-url';
import FixedSizeImage from './FixedSizeImage';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const CityCard = (props) => {
  const imageUrl = props.image.asset ? urlFor(props.image.asset).url() : '';
  return (
    <div className="rounded-lg bg-[#fff] overflow-hidden" >
      <FixedSizeImage imageUrl={imageUrl} altText="A descriptive alt text"/>
      <div className="p-4">
        <h4 className="font-inter font-[500] text-[18px] uppercase leading-[28px] tracking-[-0.55px]">{props.title}</h4>
        <p className="font-inter font-[400] text-[14px] leading-[20px] tracking-[-0.5px]">{props.description}</p>
      </div>
    </div>
  )
}

export default CityCard
