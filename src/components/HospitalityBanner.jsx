
export default function CareersBanner({ currentImage, currentPageName }) {
  return (
    <div className="relative  w-full h-full">
      <img
        src={`/assets/images/hospitalitybanner-${currentImage}.png`}
        alt="banner"
        className="w-full"
      />

      <div className=" absolute w-full h-full bg-[#0038FD] top-0 opacity-10"></div>

      <div className="  absolute top-[30%] left-[14%]">
        <h2 className="text-white text-[32px]  md:text-[64px] font-bold m-0">Hospitality</h2>
        <h3 className="text-white text-xl md:text-2xl leading-[31.2px] font-semibold">
          Hostipality/
          <span className=" text-lg text-blue-500">{currentPageName}</span>
        </h3>
      </div>
    </div>
  );
}
