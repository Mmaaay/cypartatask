"use client";
import { UserProfileData } from "@/lib/types/userDataTypes";
import { BriefcaseBusiness, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

interface UserProfileProps {
  user: UserProfileData;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const joinedAt = new Date(user.date_joined);
  const working_hours = 180;
  const sph = 300;
  const total_salary = working_hours * sph;

  return (
    <div>
      <div className="gap-4 grid grid-cols-2 w-full">
        {/* First Name */}
        <div className="border-b-2">
          <p className="text-gray-400">First Name</p>
          <p className="my-2">{user.first_name}</p>
        </div>
        {/* Last Name */}
        <div className="border-b-2">
          <p className="text-gray-400">Last Name</p>
          <p className="my-2">{user.last_name}</p>
        </div>
        {/* Mobile Number */}
        <div className="border-b-2">
          <p className="text-gray-400">Mobile Number</p>
          <p className="my-2">{user.phone}</p>
        </div>
        {/* Email Address */}
        <div className="border-b-2">
          <p className="text-gray-400">Email Address</p>
          <p className="my-2">{user.email}</p>
        </div>
        {/* Date of Birth */}
        <div className="border-b-2">
          <p className="text-gray-400">Date of Birth</p>
          <p className="my-2">{joinedAt.toDateString().split("Wed")}</p>
        </div>
        {/* Marital Status */}
        <div className="border-b-2">
          <p className="text-gray-400">Marital Status</p>
          <p className="my-2">Single</p>
        </div>
        {/* Gender */}
        <div className="border-b-2">
          <p className="text-gray-400">Gender</p>
          <p className="my-2">Female</p>
        </div>
        {/* Nationality */}
        <div className="border-b-2">
          <p className="text-gray-400">Nationality</p>
          <p className="my-2">Egyptian</p>
        </div>
        {/* Address */}
        <div className="border-b-2">
          <p className="text-gray-400">Address</p>
          <p className="my-2">Alexnadria</p>
        </div>
        {/* City */}
        <div className="border-b-2">
          <p className="text-gray-400">City</p>
          <p className="my-2">Alexandria</p>
        </div>
        {/* State */}
        <div>
          <p className="text-gray-400">State</p>
          <p className="my-2">Alexandria</p>
        </div>
        {/* Zip Code */}
        <div>
          <p className="text-gray-400">Zip Code</p>
          <p className="my-2">54421</p>
        </div>
        {/* Work Hours */}
        <div>
          <p className="text-gray-400">Work&apos; Hours</p>
          <p className="my-2">{working_hours}</p>
        </div>
        {/* Salary per Hour */}
        <div className="flex flex-row gap-24">
          <div>
            <p className="text-gray-400">Salary/Hours</p>
            <p className="my-2">{sph}</p>
          </div>
          {/* Total Salary */}
          <div>
            <p className="text-red-500">Total Salary</p>
            <p className="my-2">{total_salary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
