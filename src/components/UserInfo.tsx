"use client";
import { UserProfileData } from "@/lib/types/userDataTypes";
import { BriefcaseBusiness, Mail } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useModal } from "@/lib/store/ModalStore";

interface UserInfoProps {
  user: UserProfileData;
  cookie: string;
}

const UserInfo: FC<UserInfoProps> = ({ user, cookie }) => {
  const { onOpen } = useModal();
  return (
    <div className="bg-white mx-auto mt-24 px-16 pt-16 pb-4 rounded-lg min-w-full">
      <div className="flex items-center">
        <Image
          src={user.image}
          alt="user"
          className="rounded-lg w-20 h-20"
          width={100}
          height={100}
        />
        <div className="ml-4">
          <h1 className="font-bold text-2xl">
            {user.first_name} {user.last_name}
          </h1>
          <div className="flex text-gray-600">
            <BriefcaseBusiness size={20} className="mr-4" />
            <p className="text-gray-600">{user.bio}</p>
          </div>
          <div className="flex text-gray-600">
            <Mail size={20} className="mr-4" />
            <p className="text-gray-600">{user.email}</p>
          </div>{" "}
        </div>

        {/* Button to open the EditProfile modal */}
        <Button
          onClick={() => {
            onOpen("EditProfile", { profile: user, cookie: cookie });
          }}
          className="bg-gray-800 hover:bg-gray-700 mt-16 ml-auto px-4 py-2 rounded-lg text-white"
        >
          Edit user
        </Button>
      </div>

      <div className="mt-8">
        <ul className="flex space-x-6 border-b-2">
          {/* Link to PersonalInformation page */}
          <li className="border-red-400 border-b-2 font-bold text-red-500">
            <a href={"/user/PersonalInformation"}>
              {" "}
              <button className="bg-transparent border-b-2">
                Personal Information{" "}
              </button>
            </a>
          </li>
          <li className="border-b-2 text-gray-500">Professional Information</li>
          <li className="border-b-2 text-gray-500">Documents</li>
          <li className="border-b-2 text-gray-500">Account Access</li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
