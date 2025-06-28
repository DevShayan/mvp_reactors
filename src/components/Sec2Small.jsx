import Card1 from "../components/Card1";

export default function Sec2Small() {
  return (
    <div className="relative w-[calc(100%_-_48px)]">
      <div className="w-full flex flex-col items-center gap-[24px] absolute top-[-400px]" >
        <Card1
          subHeading="Day - 0"
          heading="Book & Scope"
          text="We define your MVP's must-haves on a quick call."
          className="top-[-8%] left-[2%]" >
            <div className="absolute size-[115px] top-[-25%] left-[-8%] bg-[#857CFF] blur-[82px]" />
            <div className="absolute w-[907px] h-[18px] top-[-4%] left-[-4%] rotate-[2deg] bg-[#857CFF] blur-[32px]" />
            <div className="absolute w-[433px] h-[115px] bottom-[-60%] left-[80%] bg-[#857CFF] blur-[82px]" />
        </Card1>
        <Card1
          subHeading="Day 1 - 2"
          heading="Build & Review"
          text="Our team builds while you relax. On Day 2, we show you a live demo."
          className="top-[45%] left-[35%]" >
            <div className="absolute size-[115px] top-[16%] left-[-17%] bg-[#857CFF] blur-[82px]" />
            <div className="absolute w-[907px] h-[18px] top-[-130px] left-[-18%] rotate-[-30deg] bg-[#857CFF] blur-[32px]" />
            <div className="absolute w-[433px] h-[115px] bottom-[-10px] left-[94%] bg-[#857CFF] blur-[82px]" />
        </Card1>
        <Card1
          subHeading="Day - 3"
          heading="Launch & Handoff"
          text="our MVP goes live. You get everything — code & clarity."
          className="top-[8%] right-[2%]" >
            <div className="absolute size-[115px] top-[16%] left-[-17%] bg-[#857CFF] blur-[82px]" />
            <div className="absolute w-[907px] h-[18px] top-[-130px] left-[-18%] rotate-[-30deg] bg-[#857CFF] blur-[32px]" />
            <div className="absolute w-[433px] h-[115px] bottom-[-10px] left-[94%] bg-[#857CFF] blur-[82px]" />
        </Card1>
      </div>
    </div>
  );
}
