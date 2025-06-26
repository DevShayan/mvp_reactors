import bg1 from "../assets/images/bg1.jpg";
import CButton from "../components/CButton";
import Logo from "../components/svg/Logo";
import TextImg from "../assets/images/text.png";
import line from "../assets/images/line.png";
import Card1 from "../components/Card1";
import { Circle, Ellipse } from "../components/svg/Shapes";

export default function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="bg-cover w-full px[280px] pt-[48px] px-[50px]" style={{backgroundImage: `url(${bg1})`}}>
        <div className="max-w-[1360px] m-auto flex flex-col items-center ">
          <div className="relative mr-[70px]">
            <Logo className="w-[99px] h-[43px] inlinebg-green-400" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/5 -translate-y-1/5 ml-[46px] mt-[9px]">reactors.com</span>
          </div>
          <p className="mt-[112px] text-[24px] font-[400] leading-[100%]">Welcome to MVP Reactors.com</p>
          <h1 className="text-[64px] font-[800] leading-[100%] mt-[32px] text-center">From Idea to MVP in Just 3 Days 😜</h1>
          <p className="text-[32px] font-[400] leading-[100%] mt-[32px] mb-[32px]">Powered by AI and build for bold Founders</p>
          <CButton text="Book a free discovery call" />
          <img className="mt-[50px] mb-[200px]" src={ TextImg } alt="" />
        </div>
      </div>
      {/* Section 2 */}
      <div className="relative max-w-[1360px] w-full h-[600px] left-1/2 -translate-y-[100px] -translate-x-[calc(50%_+_50px)] mx-[50px] overflow-ellipsis">
        <Card1
          subHeading="Day - 0"
          heading="Book & Scope"
          text="We define your MVP's must-haves on a quick call."
          rotation="-15deg"
          top="8%"
          left="2%">
            <Circle className="absolute top-0 left-0 size-[115px]" />
            <Circle className="absolute top-[54%] left-[73%] w-[433px] h-[115px] bg-[#ff151527] rotate-[180deg]" />
        </Card1>
        <Card1
          subHeading="Day 1 - 2"
          heading="Build & Review"
          text="Our team builds while you relax. On Day 2, we show you a live demo."
          rotation="12.37deg"
          top="45%"
          left="35%" >
        </Card1>
        <Card1
          subHeading="Day - 3"
          heading="Launch & Handoff"
          text="our MVP goes live. You get everything — code & clarity."
          rotation="15deg"
          top="8%"
          right="2%" />
        <img className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[30%]" src={ line } alt="" />
      </div>
    </div>
  );
}
