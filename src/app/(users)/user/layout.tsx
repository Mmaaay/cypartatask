import UserInfo from "@/components/UserInfo";
import { GetCurrentUser } from "@/lib/getCurrentUser";
import { BriefcaseBusiness, Link, Mail } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = async ({ children }) => {
  const profile = await GetCurrentUser();
  const cookie = cookies().get("access")?.value;

  return (
    <div className="shadow-lg">
      {profile && <UserInfo user={profile} cookie={cookie || ""} />}

      <main className="pl-16">{children}</main>
    </div>
  );
};

export default layout;
