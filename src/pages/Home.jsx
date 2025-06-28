import CButton from "../components/CButton";
import Logo from "../components/svg/Logo";
import Card2 from "../components/Card2";

import bg1 from "../assets/images/bg1.jpg";
import TextImg from "../assets/images/text.png";
import TextImgSmall from "../assets/images/text-sm.png";
import ring from "../assets/images/ring.png";
import cylinder1 from "../assets/images/cylinder1.png";
import cylinder2 from "../assets/images/cylinder2.png";
import shape from "../assets/images/shape.png";
import knot from "../assets/images/knot.png";
import spring from "../assets/images/spring.png";
import CDropdown from "../components/CDropdown";
import Card3 from "../components/Card3";
import Marquee from "react-fast-marquee";
import Card4 from "../components/Card4";
import { useMediaQuery } from "../hooks/MediaHook";
import Sec2Small from "../components/Sec2Small";
import Sec2Large from "../components/Sec2Large";

export default function Home() {
  const isSmall = useMediaQuery("(max-width: 639px)");
  const isSmallForAbsCards = useMediaQuery("(max-width: 1189px)");

  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Section 1 */}
      <div className="fixed bg-cover bg-top bg-fixed h-screen w-full bg-repeat-x animate-slide-x -z-1" style={{background: `url(${bg1})`}} />
      {/* <img src={ bg1 } alt="background" /> */}
      <div className="w-full pt-[64px] px-[24px] sm:pt-[48px]">
        <div className="max-w-[1360px] m-auto flex flex-col items-center">
          <div className="relative mr-[70px]">
            <Logo className="w-[57px] h-[25px] sm:w-[98px] sm:h-[43px]" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/5 -translate-y-1/5 mt-[5px] ml-[32px] text-[12px] font-[800] leading-[100%] sm:text-[21px] sm:mt-[9px] sm:ml-[52px]">reactors.com</span>
          </div>
          <p className="mt-[40px] text-[16px] leading-[100%] sm:mt-[112px] sm:text-[24px]">Welcome to MVP Reactors.com</p>
          <h1 className="text-[32px] font-[800] leading-[130%] mt-[24px] text-center sm:text-[64px] sm:leading-[100%] sm:mt-[32px]">From Idea to MVP in Just 3 Days 😜</h1>
          <p className="text-[18px] leading-[100%] mt-[24px] mb-[32px] sm:text-[32px] sm:mt-[32px] text-center">Powered by AI and build for bold Founders</p>
          <CButton text="Book a free discovery call" />
          {
            isSmall
              ? <img className="mt-[-50px] mb-[400px]" src={ TextImgSmall } />
              : <img className="mt-[50px] mb-[200px]" src={ TextImg } />
          }
        </div>
      </div>
      {/* Section 2 */}
      { isSmallForAbsCards ? <Sec2Small /> : <Sec2Large /> }
      {/* Section 3 */}
      <div className="flex flex-col items-center mt-[380px] sm:mt-[610px] mt-card mx-[24px] max-w-[1360px]">
        <h1 className="text-[32px] font-[800] leading-[100%] mb-[32px] sm:text-[48px] sm:mb-[48px]">What we Offer</h1>
        <div className="flex flex-wrap gap-[40px] justify-center mb-[80px] sm:gap-[80px]">
          <Card2
            src={ spring }
            heading="Login, dashboard, and your key feature pages"
            text="We define your MVP's must-haves on a quick call." />
          <Card2
            src={ shape }
            heading="Signup, login, logout — secure and fast"
            text="We define your MVP's must-haves on a quick call." />
          <Card2
            src={ cylinder1 }
            heading="Stripe, OpenAI, or your must-have API"
            text="We define your MVP's must-haves on a quick call." />
          <Card2
            src={ knot }
            heading="We build while you focus on launch strategy"
            text="We define your MVP's must-haves on a quick call." />
          <Card2
            src={ cylinder2 }
            heading="Free setup on Vercel or custom server — ready by Day 3"
            text="We define your MVP's must-haves on a quick call." />
          <Card2
            src={ ring }
            heading="Full access to code, docs, and roadmap"
            text="We define your MVP's must-haves on a quick call." />
        </div>
        <CButton text="Book a free discovery call" />
      </div>
      {/* Section 4 */}
      <div className="w-full flex flex-col items-center mt-[80px] sm:mt-[180px]">
        <h1 className="text-[32px] font-[800] leading-[130%] mb-[80px] text-center sm:text-[48px] sm:leading-[100%]">Real Results from Real Founders</h1>
        <Marquee autoFill={ true } className="mb-[32px]">
          <Card3
            subtitle="Sarah B., Healthtech Founder"
            heading="Raised $50K angel investment within 10 days."
            text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”" />
        </Marquee>
        <Marquee direction="right" autoFill={ true }>
          <Card4
            subtitle="Sarah B., Healthtech Founder"
            heading="Raised $50K angel investment within 10 days."
            text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”" />
        </Marquee>
        {
          isSmall && <Marquee autoFill={ true } className="mt-[32px]">
            <Card4
              subtitle="Sarah B., Healthtech Founder"
              heading="Raised $50K angel investment within 10 days."
              text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”" />
          </Marquee>
        }
      </div>
      {/* Section 5 */}
      <div className="max-w-[1360px] w-full flex flex-col items-center mt-[80px] sm:mt-[180px]">
        <h1 className="text-[32px] font-[800] leading-[130%] mb-[6px] sm:mb-[80px] sm:text-[48px] sm:leading-[100%] text-center">Frequently Asked Questions</h1>
        <CDropdown
          text="How can you build an MVP in just 3 days?"
          innerText="We use cutting-edge AI development tools, pre-built design systems, and a highly optimized build process. We focus only on core functionality — no fluff." />
        <CDropdown
          text="How can you build an MVP in just 3 days?"
          innerText="We use cutting-edge AI development tools, pre-built design systems, and a highly optimized build process. We focus only on core functionality — no fluff." />
        <CDropdown
          text="How can you build an MVP in just 3 days?"
          innerText="We use cutting-edge AI development tools, pre-built design systems, and a highly optimized build process. We focus only on core functionality — no fluff." />
        <CDropdown
          text="How can you build an MVP in just 3 days?"
          innerText="We use cutting-edge AI development tools, pre-built design systems, and a highly optimized build process. We focus only on core functionality — no fluff." />
      </div>
      {/* Section 6 */}
      <div className="max-w-[1360px] flex flex-col items-center gap-[16px] sm:gap-[32px] mt-[80px] sm:mt-[180px] mx-[24px]">
        <p className="text-[14px] sm:text-[24px] leading-[100%]">Our Pricing</p>
        <h1 className="text-[32px] sm:text-[64px] font-[800] leading-[130%] sm:leading-[100%] text-center">😜</h1>
        <h1 className="text-[32px] sm:text-[64px] font-[800] leading-[130%] sm:leading-[100%] text-center">Love at first click? Great. Until then, it's on us.</h1>
        <p className="text-[16px] sm:text-[24px] leading-[150%] text-center">We charge <span className="font-[800]">4500 USD</span> per project—but only if you're <span className="font-[800]">smiling</span> at the end. Don't like what we built? <span className="font-[800]">\Full refund. No drama, no awkward silence,</span> just good vibes.<br /><br /><span className="font-[800]">Our secret sauce?</span> A mix of AI magic (yes, we let it do the vibe coding) and our in-house design + dev team who make sure everything not only looks great but actually works. We don't just hand over code—we shape it, polish it, and make it dance.<br /><br /><span className="font-[800]">You only pay when it does exactly what you imagined.</span><br />Simple. Easy. Understood!<br /><br />Now go on—<span className="font-[800]">book a discovery call</span>. We're not just ready... we're desperately waiting for you.</p>
        <div className="rounded-[32px] bg-[#FFFFFF03] backdrop-blur-[17px] p-[32px] border border-[#FFFFFF33] overflow-hidden">
          <input type="text" placeholder="Email" className="bg-[#FFFFFF0A] placeholder-slate-300 py-[20px] px-[32px] rounded-[16px] border border-[#FFFFFF33] w-full mb-[16px] backdrop-blur-[17px]" />
          <textarea rows={4} type="text" placeholder="Message" className="bg-[#FFFFFF0A] placeholder-slate-300 py-[20px] px-[32px] rounded-[16px] border border-[#FFFFFF33] w-full mb-[32px] sm:mb-[73px] resize-none" />
          <CButton text="Submit" toRight={true} />
          <div className="absolute size-[115px] top-[30px] left-[-30px] bg-[#857CFF] blur-[82px]" />
          <div class="absolute w-[907.1px] h-[18.14px] left-[72px] top-[-24px] bg-[#857CFF] blur-[32px]" />
          <div className="absolute w-[1106px] h-[65px] bottom-[-40px] left-[50%] -translate-x-1/2 bg-[#857cff50] blur-[82px]" />
        </div>
      </div>
      {/* footer */}
      <div className="w-full flex justify-center mt-[180px] py-[32px] border-t border-t-[#FFFFFF1A] relative">
        <div className="max-w-[1360px] w-full flex flex-col-reverse sm:flex-row items-center justify-between mx-[24px]">
          <p className="text-center">2020 The Good Company. All Rights Reserved</p>
          <ul className="flex flex-col sm:flex-row gap-[24px] sm:gap-[32px] text-center mb-[48px] sm:mb-[0]">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Security</li>
          </ul>
        </div>
        <div class="absolute w-full h-full left-1/2 top-0 -translate-x-1/2 bg-[#857cff99] blur-[82px] sm:rounded-t-full" />
      </div>
    </div>
  );
}
//1190px w bp