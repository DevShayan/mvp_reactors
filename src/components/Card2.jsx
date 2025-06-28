export default function Card2({ src, heading, text }) {
  return (
    <div className="flex flex-col gap-[12px] max-w-[400px] items-center md:items-start sm:gap-[24px]">
      <img className="w-[48px]" src={ src } />
      <h1 className="text-[20px] leading-[150%] font-[800] text-center md:text-left sm:text-[24px] sm:leading-[120%]">{ heading }</h1>
      <p className="text-[18px] leading-[150%] text-[#CBD5E1] text-center md:text-left sm:text-[20px]">{ text }</p>
    </div>
  );
}
