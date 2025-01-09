export default function DayTemp({ dayTemp }) {
  return (
    <div className="ml-[48px]">
      <div>
        <p className="font-Manrope text-[104px] font-[800] leading-normal text-black bg-cool-gray-gradient ">
          {dayTemp}°
        </p>
      </div>
      <div>
        <p className="text-[24px] font-[800] leading-normal text-[#FF8E27]">
          Bright
        </p>
      </div>
    </div>
  );
}
