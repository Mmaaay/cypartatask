import UserProfile from "@/components/UserProfile.tsx";
import { GetCurrentUser } from "@/lib/getCurrentUser";
import { redirect } from "next/navigation";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const profile = await GetCurrentUser();
  if (!profile) {
    redirect("/login");
  }
  return (
    <div>
      <UserProfile user={profile} />
    </div>
  );
};

export default page;
