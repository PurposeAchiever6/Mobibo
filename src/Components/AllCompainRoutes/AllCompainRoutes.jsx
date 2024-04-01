import React from 'react';
import Image from 'next/image';
import GoogleMapReact from 'google-map-react';
import imageR1 from "@/Assests/ImageR1.svg";
import imageR2 from "@/Assests/ImageR2.svg";
import imageR3 from "@/Assests/ImageR3.svg";
import imageR4 from "@/Assests/ImageR4.svg";
import mapImage from "@/Assests/AdsSettings-2.png";

const AllCompainRoutes = () => {

    return (
        <div className="allCompain-container">
            <div className='routes-wrap'>
                <div className='routes-left'>
                    <div className='flex gap-[10px]'>
                        <Image src={imageR1} style={{ width: '320px' }} />
                        <Image src={imageR2} style={{ width: '320px' }} />
                    </div>
                    <div className=' flex gap-[10px] mt-[10px]'>
                        <Image src={imageR3} style={{ width: '320px' }} />
                        <Image src={imageR4} style={{ width: '320px' }} />
                    </div>
                </div>
                <div className='routes-right'>
                    <h3 className='text-[28px]'>All campaign routes are fully customizable</h3>
                    <div>
                       <p>
                        Date <br/>
                        Time <br/>
                        Place <br/>
                        Duration <br/>
                       </p> 
                    </div>
                    {/* <div>
                     <Image src={mapImage} width="900px" height="700px"/>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AllCompainRoutes;
