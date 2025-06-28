import { useState } from 'react';
import Plus from './svg/Plus';
import Minus from './svg/Minus';

export default function CDropdown({ text, innerText }) {
  const [isExpanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!isExpanded);
  }

  return (
    <div className="py-[26px] border-b [border-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_45.76%,rgba(255,255,255,0)_100%)_1] w-[calc(100%_-_48px)] flex justify-between items-center">
      <div>
        <p className="text-[20px] font-[800] leading-[120%] sm:text-[32px]">{ text }</p>
        { isExpanded && <p className="text-[14px] sm:text-[24px] leading-[150%] mt-[16px] text-[#CBD5E1]">{ innerText }</p> }
      </div>
      <div onClick={ toggleExpanded } className="size-[40px] sm:size-[80px] flex justify-center items-center shadow-[inset_0px_-3px_4px_rgba(168,162,255,0.5),inset_0px_3px_4px_rgba(168,162,255,0.5)] backdrop-blur-[127px] rounded-full cursor-pointer ml-[16px] shrink-0">
        { isExpanded
          ? <Minus className="w-[10px] sm:w-[22px]" />
          : <Plus className="w-[10px] sm:w-[22px]" /> }
      </div>
    </div>
  );
}
