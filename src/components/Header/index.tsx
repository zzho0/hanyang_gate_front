import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false); // BI에 잠깐 넣어둠

  return (
    <div className="fixed border border-black flex justify-between items-center w-full p-[10px] z-[90] bg-white">
      <div className=" flex">
        <Button className="w-[150px]" onClick={() => setIsLogin(true)}>
          {'BI'}
        </Button>
        {isLogin ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex justify-between w-[180px]" variant="outline">
                <div>메뉴</div>
                <div>▼</div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[180px]">
              <DropdownMenuItem>프로필</DropdownMenuItem>
              <DropdownMenuItem>설정</DropdownMenuItem>
              <DropdownMenuItem>로그아웃</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <></>
        )}
      </div>
      {isLogin ? (
        <div className="flex">
          <Button className="flex justify-between w-[180px]" variant="outline">
            Alert
          </Button>
          <Button className="flex justify-between w-[180px]" variant="outline">
            My Profile
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
