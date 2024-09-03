import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { UserProfileData } from "@/lib/types/userDataTypes";
import Image from "next/image";

interface NotifacationProps {
  user: UserProfileData;
}

const Notifacation: FC<NotifacationProps> = ({ user }) => {
  return (
    <div className="top-0 right-5 absolute flex justify-center items-center mr-10">
      <div className="flex justify-center items-center mr-10">
        {/* Dropdown menu component */}
        <DropdownMenu>
          {/* Dropdown menu trigger */}
          <DropdownMenuTrigger>
            <Bell />
          </DropdownMenuTrigger>
          {/* Dropdown menu content */}
          <DropdownMenuContent>
            {/* Dropdown menu label */}
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            {/* Dropdown menu separator */}
            <DropdownMenuSeparator />
            {/* Dropdown menu items */}
            <DropdownMenuItem>Notification 1</DropdownMenuItem>
            <DropdownMenuItem>Notification 2</DropdownMenuItem>
            <DropdownMenuItem>Notification 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* User profile picture */}
      <Image
        src={user.image}
        className="space-x-4 space-y-4 mr-10 rounded-full"
        width={50}
        height={50}
        alt="profile picture"
      />
    </div>
  );
};

export default Notifacation;
