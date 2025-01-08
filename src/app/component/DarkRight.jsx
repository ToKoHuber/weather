import SunnyDayCard from "./sunnyday/DayCard";
import SearchField from "./sunnyday/SearchField";
import SunIcon from "@/app/component/sunnyday/SunIcon";

export default function DarkRight() {
  return (
    <div className="w-[50%] h-[100%] relative flex items-center justify-center bg-[#0F141E]">
      <SunnyDayCard />
      <SunIcon />
    </div>
  );
}
