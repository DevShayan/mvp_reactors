export default function Card1({ children, subHeading, heading, text, rotation, top, left, right, className }) {
  return (
    <div
      className={"flex flex-col gap-[16px] rounded-[32px] p-[40px] border border-[#FFFFFF33] bg-[#FFFFFF03] backdrop-blur-[17px] max-w-[418px] overflow-hidden " + className}
      style={{rotate: rotation, top: top, left: left, right: right}}>
      <h2 className="leading-[100%] text-center sm:text-[24px]">{ subHeading }</h2>
      <h1 className="text-[20px] leading-[150%] font-[800] text-center sm:text-[32px] sm:leading-[120%]">{ heading }</h1>
      <p className="text-[18px] sm:text-[24px] leading-[150%] text-center text-[#CBD5E1]">{ text }</p>
      { children }
    </div>
  );
}
