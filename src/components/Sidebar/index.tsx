import Image from "next/image";
import calendar from "@/assets/calendar.svg";
import home from "@/assets/home.svg";
import meeting_hub from "@/assets/meeting_hub.svg";
import notice from "@/assets/notice.svg";
import personal_group from "@/assets/personal_group.svg";
import webinar from "@/assets/webinar.svg";

import { Settings } from "lucide-react";

const Sidebar = () => {
  return (
    // pt 줘야함 헤더 크기에 맞춰서
    <div className="flex w-[64px] h-[900px] px-[8px] py-[10px] flex-col justify-between items-center flex-shrink-0 border-r border-[rgba(194,196,200,0.52)] bg-[#F7F7F8] justify-between">
      <div className="flex flex-col gap-[8px]">
        <Image
          src={home}
          alt="home"
          className="w-[48px] h-[48px]"
          draggable={false}
        />
        <Image
          src={calendar}
          alt="calendar"
          className="w-[48px] h-[48px]"
          draggable={false}
        />
        <Image
          src={notice}
          alt="notice"
          className="w-[48px] h-[48px]"
          draggable={false}
        />
        <Image
          src={personal_group}
          alt="personal_group"
          className="w-[48px] h-[48px]"
          draggable={false}
        />
        <Image
          src={meeting_hub}
          alt="meeting_hub"
          className="w-[48px] h-[48px]"
          draggable={false}
        />
        <Image
          src={webinar}
          alt="webinar"
          className="w-[48px] h-[48px]"
          draggable={false}
        />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
};

export default Sidebar;
