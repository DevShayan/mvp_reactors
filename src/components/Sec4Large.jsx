import Marquee from 'react-fast-marquee';
import Card3 from './Card3';
import Card4 from './Card4';

export default function Sec4Large() {
  return (
    <div className="w-full flex flex-col items-center mt-[180px]">
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
    </div>
  );
}
