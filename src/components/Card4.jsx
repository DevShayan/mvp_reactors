import rating from "../assets/images/rating.png";

export default function Card4({ subtitle, heading, text }) {
  return (
    <div className="sm:max-w-[608px] flex flex-col gap-[16px] rounded-[32px] p-[32px] border border-[#FFFFFF33] bg-[#FFFFFF03] backdrop-blur-[17px] overflow-hidden mx-[16px]">
      <p className="text-[12px] leading-[150%]">{ subtitle }</p>
      <img className="w-[152px]" src={ rating } />
      <h1 className="text-[20px] leading-[120%] font-[800]">{ heading }</h1>
      <p className="leading-[150%] text-[#CBD5E1]">{ text }</p>
      {/* Absolute shapes */}
      <div class="absolute size-[115px] left-[-22px] top-[22px] bg-[#857CFF] blur-[82px]" />
      <div class="absolute w-[433px] h-[115px] left-[400px] top-[236px] bg-[#857CFF] blur-[82px] rounded-full" />
      <div class="absolute w-[907px] h-[18px] left-[292px] top-[284px] bg-[#857CFF] blur-[32px]  rounded-full" />
    </div>
  );
}
