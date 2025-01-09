export default function NightTemp({ nightTemp }) {
  return (
    <div className="ml-[48px]">
      <div>
        <p className="font-Manrope text-[104px] font-[800] leading-normal text-[#F9FAFB] bg-cool-gray-gradient ">
          {nightTemp}°
        </p>
      </div>
      <div>
        <p className="text-[24px] font-[800] leading-normal text-[#777CCE]">
          Clear
        </p>
      </div>
    </div>
  );
}
