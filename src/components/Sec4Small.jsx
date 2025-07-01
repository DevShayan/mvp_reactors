import { useState } from 'react';
import Card3 from './Card3';
import Card4 from './Card4';

export default function Sec4Small() {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="w-full flex flex-col items-center mt-[80px]">
      <h1 className="text-[32px] font-[800] leading-[130%] mb-[80px] text-center sm:text-[48px] sm:leading-[100%]">Real Results from Real Founders</h1>
      <Card3
        subtitle="Sarah B., Healthtech Founder"
        heading="Raised $50K angel investment within 10 days."
        text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”"
        className="mb-[24px]" />
      <Card3
        subtitle="Sarah B., Healthtech Founder"
        heading="Raised $50K angel investment within 10 days."
        text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”"
        className="mb-[24px]" />
      <Card4
        subtitle="Sarah B., Healthtech Founder"
        heading="Raised $50K angel investment within 10 days."
        text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”" />
      {
        showMore === true ?
        <div>
        <Card3
          subtitle="Sarah B., Healthtech Founder"
          heading="Raised $50K angel investment within 10 days."
          text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”"
          className="my-[24px]" />
        <Card3
          subtitle="Sarah B., Healthtech Founder"
          heading="Raised $50K angel investment within 10 days."
          text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”"
          className="mb-[24px]" />
        <Card4
          subtitle="Sarah B., Healthtech Founder"
          heading="Raised $50K angel investment within 10 days."
          text="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed.”" />
        </div>
        : <div />
      }
      <span onClick={ toggleShowMore } className="mt-[50px] cursor-pointer">{ showMore ? "Show less" : "Show more" }</span>
    </div>
  );
}
