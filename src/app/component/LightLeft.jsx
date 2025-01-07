import SunnyDayCard from "./sunnyday/SunnyDayCard";
import SearchField from "./sunnyday/SearchField";
import BackgroundSun from "@/app/component/sunnyday/Backgroundsun";

export default function LightLeft() {
  return (
    <div className="w-[50%] h-[100%] bg-[#F3F4F6] relative flex items-center justify-center">
      <SunnyDayCard />
      <BackgroundSun />
      <SearchField />
    </div>
  );
}
