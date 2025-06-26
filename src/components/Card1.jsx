import React from 'react'

export default function Card1({ children, subHeading, heading, text, rotation, top, left, right }) {
  return (
    <div
      className="absolute flex flex-col gap-[16px] rounded-[32px] p-[40px] border border-[#FFFFFF33] bg-[#FFFFFF03] backdrop-blur-[34px] max-w-[418px]"
      style={{rotate: rotation, top: top, left: left, right: right}}>
      <h2 className="text-[24px] leading-[100%] text-center">{ subHeading }</h2>
      <h1 className="text-[32px] leading-[120%] font-[800] text-center">{ heading }</h1>
      <p className="text-[24px] leading-[150%] text-center">{ text }</p>
      { children }
    </div>
  );
}
