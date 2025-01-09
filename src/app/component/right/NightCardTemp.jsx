export default function NightTemp({ nightTemp, nightCondition }) {
  return (
    <div className="ml-[48px]">
      <div>
        <p className="font-Manrope text-[104px] font-[800] leading-normal bg-gradient-to-b from-[#F9FAFB] to-transparent text-transparent bg-clip-text">
          {nightTemp}°
        </p>
      </div>
      <div>
        <p className="text-[24px] font-[800] leading-normal text-[#777CCE]">
          {nightCondition}
        </p>
      </div>
    </div>
  );
}
