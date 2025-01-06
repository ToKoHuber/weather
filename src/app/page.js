"use client";
import LightLeft from "@/app/component/LightLeft";
import DarkRight from "@/app/component/DarkRight";

export default function Home() {
  return (
    <div className="flex">
      <LightLeft />
      <DarkRight />
    </div>
  );
}
