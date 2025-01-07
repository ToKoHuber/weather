"use client";
import LightLeft from "@/app/component/LightLeft";
import DarkRight from "@/app/component/DarkRight";

export default function Home() {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <LightLeft />
      <DarkRight />
    </div>
  );
}
