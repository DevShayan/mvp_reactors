import React from 'react'
import Arrow from './svg/Arrow'

export default function CButton({ text }) {
  return (
    <button className={"rounded-full px-[32px] py-[20px] shadow-[inset_0_3px_4px_0_#A8A2FF40,inset_0_3px_4px_0_#A8A2FF66,inset_0_-3px_4px_0_#A8A2FF40,inset_0_-3px_4px_0_#857CFF66] backdrop-blur-[34px] flex items-center"}>
      <span className="text[24px] font-[700] leading-[150%] mr-[14px]">{ text }</span>
      <Arrow className="w-[24px]" />
    </button>
  )
}
