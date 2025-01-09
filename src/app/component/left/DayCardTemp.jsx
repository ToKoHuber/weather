export default function DayTemp({ dayTemp, dayCondition }) {
  return (
    <div className="ml-[48px]">
      <div>
        <p className="font-Manrope text-[104px] font-[800] leading-normal bg-gradient-to-r from-gray-400 via-gray-700 to-gray-500 inline-block text-transparent bg-clip-text">
          {dayTemp}°
        </p>
      </div>
      <div>
        <p className="text-[24px] font-[800] leading-normal text-[#FF8E27]">
          {dayCondition}
        </p>
      </div>
    </div>
  );
}
