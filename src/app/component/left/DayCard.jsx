import SunnyDayCity from "@/app/component/left/DayCardCity";
import DayTemp from "@/app/component/left/DayCardTemp";
import CardFooterIcon from "@/app/component/left/DayCardFooter";

export default function SunnyDayCard({
  selectedCity,
  dayTemp,
  dayCondition,
  date,
}) {
  return (
    <div className="z-10 w-[414px] h-[828px]  backdrop-blur-[12px] bg-white bg-opacity-75 rounded-[48px] pt-[56px] ">
      <SunnyDayCity selectedCity={selectedCity} date={date} />
      <div className="w-[262px] h-[262px] mt-[49px] m-auto">
        <img
          src="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pra0N4Cxxv-ewi0qhKIEJwVG-qSQezH7Q6S1fZm9xI5CbB4rFJvfCDeC0E8xxsaek9gkYMBfhocmMCEiHaXpnXaoMAmib~KnIUzRk97v1ljdZrQDtNb-10iL18XqBFdH-S0nPWiBZ4MRUVItu4ZDz7HLXsHPdNFM4YniGfm5wMKFIzIUxNEluKrLxvjqzRPaU1G2K1lgL~yYnISdOqpxgPTqMa31xhRyyuQlEJLrl1CYAcr4z0PjoeujFyuAM5LF3YsBVVMwoTNQmzqmttZsjNH3pNXDsRbuwxG9ThwApw1TvsuCs8oDJ2n0DwihR6EOmMBw6jpJgXxmKfM1lxmWsw__"
          alt=""
        />
      </div>
      <DayTemp dayTemp={dayTemp} dayCondition={dayCondition} />
      <CardFooterIcon />
      <div></div>
    </div>
  );
}
