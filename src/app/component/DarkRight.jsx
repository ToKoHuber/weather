import SunnyDayCard from "./left/DayCard";
import MoonIcon from "@/app/component/right/MoonIcon";
import NightCard from "@/app/component/right/NightCard";

export default function DarkRight() {
  return (
    <div className="w-[50%] h-[100%] relative flex items-center justify-center bg-[#0F141E]">
      <MoonIcon />
      <NightCard />
    </div>
  );
}
