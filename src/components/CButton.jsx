import React from 'react'
import Arrow from './svg/Arrow'

export default function CButton({ text, className }) {

  return (
    <button className={"rounded-full px-[32px] py-[20px] shadow-[inset_0_3px_4px_0_#A8A2FF40,inset_0_3px_4px_0_#A8A2FF66,inset_0_-3px_4px_0_#A8A2FF40,inset_0_-3px_4px_0_#857CFF66] backdrop-blur-[34px] flex items-center justify-center w-full sm:w-auto " + className}>
      <span className="text[18px] mr-[14px] sm:text[20px]">{ text }</span>
      <Arrow className="w-[18px] sm:w-[24px]" />
    </button>
  );
}
