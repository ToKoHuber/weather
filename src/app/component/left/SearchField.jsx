export default function SearchField({
  searchHandler,
  searched,
  handlerSelect,
}) {
  return (
    <div className="z-20 absolute top-[0px] left-[40px]">
      <div className="flex gap-[16px] w-[567px] py-[16px] px-[24px] rounded-[48px] bg-white overflow-hidden">
        <svg
          className="w-[48px] h-[48px] opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input
          className="w-[455px] h-[44px] text-[#000] text-[32px] font-bold leading-normal border-none focus:border-none"
          type="text"
          placeholder="Search"
          onChange={searchHandler}
        />
      </div>
      <div className="w-567px rounded-[24px] py-[16px]">
        {searched.length > 0 &&
          searched.map((city, index) => {
            return (
              <div
                key={index}
                className="flex w-[567px] h-[56px] px-[24px] gap-[16px] bg-white"
              >
                <div className="w-[40px] h-[40px]">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity={0.2}>
                      <path
                        d="M20 3.33334C13.55 3.33334 8.33331 8.55001 8.33331 15C8.33331 23.75 20 36.6667 20 36.6667C20 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.45 3.33334 20 3.33334ZM11.6666 15C11.6666 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3333 10.4 28.3333 15C28.3333 19.8 23.5333 26.9833 20 31.4667C16.5333 27.0167 11.6666 19.75 11.6666 15Z"
                        fill="black"
                      />
                      <path
                        d="M20 19.1667C22.3012 19.1667 24.1666 17.3012 24.1666 15C24.1666 12.6988 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6988 15.8333 15C15.8333 17.3012 17.6988 19.1667 20 19.1667Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  onClick={() => {
                    handlerSelect(city);
                  }}
                  className="text-black w-[463px] h-[38px] text-[28px] font-[700] leading-normal"
                >
                  <p>{city}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
