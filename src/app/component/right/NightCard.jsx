import NightCity from "@/app/component/right/NightCardCity";
import NightTemp from "@/app/component/right/NightCardTemp";
import CardFooterIcon from "@/app/component/right/NightCardFooter";

export default function NightCard({
  selectedCity,
  nightTemp,
  nightCondition,
  date,
  renderNightIcon,
}) {
  return (
    <div className="z-10 w-[414px] h-[828px]  backdrop-blur-[12px] bg-[rgba(17,24,39,0.75)] bg-opacity-75 rounded-[48px] pt-[56px] ">
      <NightCity selectedCity={selectedCity} date={date} />
      <div className="w-[262px] h-[262px] mt-[49px] m-auto">
        {renderNightIcon()}
      </div>
      <NightTemp nightTemp={nightTemp} nightCondition={nightCondition} />
      <CardFooterIcon />
      <div></div>
    </div>
  );
}
