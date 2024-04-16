import React from 'react'
import sanityClient from "../../helpers/client.mjs"
import imageUrlBuilder from '@sanity/image-url';
import FixedSizeImage from './FixedSizeImage';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const truncateText = (text, maxLength) => {
  // Check if text is null or undefined before attempting to access its length
  if (text == null) return ''; // Returns an empty string if text is null or undefined
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const CityCard = (props) => {
  const maxTitleLength = 50; // Adjust as needed
  const maxDescriptionLength = 80; // Adjust as needed
  const imageUrl = props.image?.asset ? urlFor(props.image.asset).url() : '';
  return (
    <div className="rounded-lg bg-[#fff] overflow-hidden" >
      <FixedSizeImage imageUrl={imageUrl} altText="A descriptive alt text" />
      <div className="p-4">
        <h4 className="font-inter font-[500] text-[18px] uppercase leading-[28px] tracking-[-0.55px]"
          style={{
            width: '265px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '28px' // ensure the title is exactly one line; adjust line height as needed
          }}>
          {props.title}
        </h4>
        <p className="font-inter font-[400] text-[14px] leading-[20px] tracking-[-0.5px]"
          style={{
            width: '265px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '20px' // ensure the description is exactly one line; adjust line height as needed
          }}>
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default CityCard
