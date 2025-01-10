import SunnyDayCity from "@/app/component/left/DayCardCity";
import DayTemp from "@/app/component/left/DayCardTemp";
import CardFooterIcon from "@/app/component/left/DayCardFooter";

export default function SunnyDayCard({
  selectedCity,
  dayTemp,
  dayCondition,
  date,
  renderIcon,
}) {
  return (
    <div className="z-10 w-[414px] h-[828px]  backdrop-blur-[12px] bg-white bg-opacity-75 rounded-[48px] pt-[56px] ">
      <SunnyDayCity selectedCity={selectedCity} date={date} />
      <div className="w-[262px] h-[262px] mt-[49px] m-auto">{renderIcon()}</div>
      <DayTemp dayTemp={dayTemp} dayCondition={dayCondition} />
      <CardFooterIcon />
    </div>
  );
}
