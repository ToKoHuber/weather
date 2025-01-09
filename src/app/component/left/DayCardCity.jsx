export default function SunnyDayCity({ selectedCity, date }) {
  return (
    <div className="w-[100%] h-[91px] flex justify-between items-center px-[40px] pt-[56px]">
      <div>
        <p className="text-[#6B7280] font-Manrope text-[18px] font-[500] leading-normal">
          {date}
        </p>
        <h2 className="text-[#111827] font-Manrope text-[48px] leading-normal font-[800]">
          {selectedCity}
        </h2>
      </div>
      <div>
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
            stroke="#4B5563"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx={16}
            cy={13}
            r={2}
            stroke="#4B5563"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
