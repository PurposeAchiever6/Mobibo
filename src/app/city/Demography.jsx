import React from 'react'

const Demography = (props) => {
  return (
    <div className='flex w-[100%]'>
      <div className='w-[50%]'>
        <h4 className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px]'>{props.heading}</h4>
        <p className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px] text-[#e4e4e4]'>Top 5</p>
      </div>
      <div className='w-[50%]'>
        <div style={{borderBottom:'1px solid #e4e4e4'}} className='py-2'>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px]'>Title</div>
            <div className='h-[5px] w-[80%] bg-[#FF80FD] rounded-full my-[5px]'></div>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px] text-[#e4e4e4]'>99%</div>
        </div>
        <div style={{borderBottom:'1px solid #e4e4e4'}} className='py-2'>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px]'>Title</div>
            <div className='h-[5px] w-[60%] bg-[#FF80FD] rounded-full my-[5px]'></div>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px] text-[#e4e4e4]'>99%</div>
        </div>
        <div style={{borderBottom:'1px solid #e4e4e4'}} className='py-2'>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px]'>Title</div>
            <div className='h-[5px] w-[40%] bg-[#FF80FD] rounded-full my-[5px]'></div>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px] text-[#e4e4e4]'>99%</div>
        </div>
        <div style={{borderBottom:'1px solid #e4e4e4'}} className='py-2'>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px]'>Title</div>
            <div className='h-[5px] w-[20%] bg-[#FF80FD] rounded-full my-[5px]'></div>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px] text-[#e4e4e4]'>99%</div>
        </div>
        <div style={{borderBottom:'1px solid #e4e4e4'}} className='py-2'>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px]'>Title</div>
            <div className='h-[5px] w-[10%] bg-[#FF80FD] rounded-full my-[5px]'></div>
            <div className='font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.4px] text-[#e4e4e4]'>99%</div>
        </div>
      </div>
    </div>
  )
}

export default Demography
