import SunnyDayCard from "./left/DayCard";
import SearchField from "./left/SearchField";
import SunIcon from "@/app/component/left/SunIcon";

export default function LightLeft() {
  return (
    <div className="w-[50%] h-[100%] bg-[#F3F4F6] relative flex items-center justify-center">
      <SunnyDayCard />
      <SunIcon />
      <SearchField />
    </div>
  );
}
