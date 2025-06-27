import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const sidebarMenu = [
  'Learning\nJoural\nSummary',
  'Calendar',
  '공지사항',
  'Personal\nGroup',
  'Metting\nHub',
  'Webinar',
  '관리',
];

const Sidebar = () => {
  return (
    // pt 줘야함 헤더 크기에 맞춰서
    <div className="fixed border border-black flex flex-col h-full w-[80px] p-[10px] z-[70] bg-[#123123] pt-[90px]">
      <div className="flex flex-col gap-[20px]">
        {sidebarMenu.map((item, idx) => (
          <Button className="w-[50px] h-[50px] bg-white"></Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
