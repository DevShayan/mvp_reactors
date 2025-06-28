import Card1 from "../components/Card1";
import line from "../assets/images/dotted-line.png";

export default function Sec2Large() {
  return (
    <div className="relative max-w-[1360px] w-full h-[600px] mx-[24px]" >
      <Card1
        subHeading="Day - 0"
        heading="Book & Scope"
        text="We define your MVP's must-haves on a quick call."
        className="absolute rotate-[-15deg] top-[8%] left-[2%]" >
          <div className="absolute size-[115px] top-[-25%] left-[-8%] rotate-[15deg] bg-[#857CFF] blur-[82px]" />
          <div className="absolute w-[907px] h-[18px] top-[-4%] left-[-4%] rotate-[2deg] bg-[#857CFF] blur-[32px]" />
          <div className="absolute w-[433px] h-[115px] bottom-[-60%] left-[80%] rotate-[15deg] bg-[#857CFF] blur-[82px]" />
      </Card1>
      <Card1
        subHeading="Day 1 - 2"
        heading="Build & Review"
        text="Our team builds while you relax. On Day 2, we show you a live demo."
        className="absolute rotate-[12deg] top-[45%] left-[35%]" >
          <div className="absolute size-[115px] top-[16%] left-[-17%] rotate-[-12deg] bg-[#857CFF] blur-[82px]" />
          <div className="absolute w-[907px] h-[18px] top-[-130px] left-[-18%] rotate-[-30deg] bg-[#857CFF] blur-[32px]" />
          <div className="absolute w-[433px] h-[115px] bottom-[10%] left-[94%] rotate-[-12deg] bg-[#857CFF] blur-[82px]" />
      </Card1>
      <Card1
        subHeading="Day - 3"
        heading="Launch & Handoff"
        text="our MVP goes live. You get everything — code & clarity."
        className="absolute rotate-[15deg] top-[8%] right-[2%]" >
          <div className="absolute size-[115px] top-[16%] left-[-17%] rotate-[-15deg] bg-[#857CFF] blur-[82px]" />
          <div className="absolute w-[907px] h-[18px] top-[-130px] left-[-18%] rotate-[-30deg] bg-[#857CFF] blur-[32px]" />
          <div className="absolute w-[433px] h-[115px] bottom-[20%] left-[94%] rotate-[-15deg] bg-[#857CFF] blur-[82px]" />
      </Card1>
      <img className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[30%]" src={ line } alt="" />
    </div>
  );
}
