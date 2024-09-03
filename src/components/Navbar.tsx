"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "./ui/button";
import {
  BookmarkCheck,
  ChevronsUpDown,
  CircleDollarSign,
  LayoutDashboardIcon,
  Users,
  Wallet,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPathName = usePathname();
  /**
   * Style for the selected item, I added it only for the section for employees, but its dynamic based on the current page, where the rest of the dashboard will be added later on  based on requirements
   */
  const selectedStyle = "bg-red-500/30 rounded-2xl";
  return (
    <div className="flex flex-col h-full pl-10 items-center">
      {/* Company Logo */}
      <Image
        src="/assets/company_logo.png"
        alt="logo"
        width={247}
        height={158}
        className=""
      />
      <div className="  items-center justify-center gap-y-11 w-full mt-6">
        {/* Dashboard */}
        <div className=" h-14  grid grid-cols-[40%_60%] mb-5">
          <div className="flex items-center justify-center pl-4">
            <LayoutDashboardIcon className="w-6 h-6" />
          </div>
          <div className="justify-start items-center flex">
            <p className="font-semibold text-lg text-center">Dashboard</p>
          </div>
        </div>

        {/* Employees */}
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="col-span-2   w-full"
        >
          <div
            className={`${
              currentPathName === "/user" ? selectedStyle : ""
            } grid h-14 grid-cols-[40%_60%] items-center w-full`}
          >
            <div className="flex items-center justify-center  pl-4">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex   w-full justify-between items-center ">
              <div className="font-semibold text-lg">Employees</div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1 mr-2">
                  <ChevronsUpDown className="w-4 h-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>

            {/* Collapsible Content */}
            <CollapsibleContent className=" items-center col-span-2 pl-16  ">
              <div className="flex flex-col items-center mt-4">
                <p className="font-mono text-sm  py-1">Profile</p>
                <p className="font-mono text-sm py-1">Attendance</p>
                <p className="font-mono text-sm py-1">Tasks</p>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* Payrolls */}
        <div className="grid grid-cols-[40%_60%] h-14  my-6">
          <div className="flex items-center justify-center pl-4">
            <CircleDollarSign className="w-6 h-6" />
          </div>
          <div className="justify-start items-center flex">
            <p className="font-semibold text-lg text-center">Payroll</p>
          </div>
        </div>
        {/* Holidays */}
        <div className="grid h-14  grid-cols-[40%_60%] my-6">
          <div className="flex items-center justify-center pl-4">
            <BookmarkCheck className="w-6 h-6" />
          </div>
          <div className="justify-start items-center flex">
            <p className="font-semibold text-lg text-center">Holidays</p>
          </div>
        </div>
        {/* Advanced Payment */}
        <div className="grid h-14  grid-cols-[40%_60%] my-6">
          <div className="flex items-center justify-center pl-4">
            <Wallet className="w-6 h-6" />
          </div>
          <div className="justify-start items-center flex">
            <p className="font-semibold text-lg text-center">
              Advanced Payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
