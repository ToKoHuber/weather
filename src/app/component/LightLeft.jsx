export default function LightLeft() {
  return (
    <div className="w-[1600px] h-[1200px] bg-[#F3F4F6]">
      <div className="flex gap-[16px] w-[567px] py-[16px] px-[24px] rounded-[48px] bg-[#FFF] shadow-[0px 12px 24px 0px rgba(0, 0, 0, 0.06)] m-[40px]">
        <svg
          className="w-[48px] h-[48px] opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input
          className="w-[455px] h-[44px] text-[#000] text-[32px] font-bold leading-normal border-none"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
