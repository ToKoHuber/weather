import NightCity from "@/app/component/right/NightCardCity";
import NightTemp from "@/app/component/right/NightCardTemp";
import CardFooterIcon from "@/app/component/right/NightCardFooter";

export default function NightCard() {
  return (
    <div className="z-10 w-[414px] h-[828px]  backdrop-blur-[12px] bg-[rgba(17,24,39,0.75)] bg-opacity-75 rounded-[48px] pt-[56px] ">
      <NightCity />
      <div className="w-[262px] h-[262px] mt-[49px] m-auto">
        <img
          src="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilshppMFSARTdI1JWeQOlhakbR1JVeDnbcra4a6UILH9hOqrOoCAtl1W4QCfJBX8QN8jBc0aBR2laFKsYYbX3DIVpT7gp0OQ5OJ0YcM~wtgba2vJbMijNX75QG5qEkqEwBMCKUbJ1Sh2zXf10p47EdFvLuCjNqjlQQbOPGqZfayGYgkORpy06dIoegj-ZsLR26hq8uC4Z4BFUGfViQs7gsJDOuTYydKGOnIJ9lV7oUp8MkUm4GoDtziY4Zr~CxiAzjBqlTLi~MEdcm0FW4pxSOaZVi4xmsibabFOHqIO5-PSKt5ZOJ1aBVv066oao3IBoMM6X~V-Iqvhb-O8aHIi9A__"
          alt=""
        />
      </div>
      <NightTemp />
      <CardFooterIcon />
      <div></div>
    </div>
  );
}
