import SunnyDayCard from "./sunnyday/DayCard";
import SearchField from "./sunnyday/SearchField";
import SunIcon from "@/app/component/sunnyday/SunIcon";

export default function LightLeft() {
  return (
    <div className="w-[50%] h-[100%] bg-[#F3F4F6] relative flex items-center justify-center">
      <SunnyDayCard />
      <SunIcon />
      <SearchField />
    </div>
  );
}
