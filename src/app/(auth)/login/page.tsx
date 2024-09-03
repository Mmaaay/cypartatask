import SignInForm from "@/components/SignInForm";
import Image from "next/image";
import { FC } from "react";
import companyLogo from "/public/assets/company_logo.png";
interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen">
      <div>
        <Image src={companyLogo} alt="company logo" height={102} width={225} />
      </div>
      <div className="border rounded-md w-[38.5rem] h-[30.5625rem]">
        <SignInForm />
      </div>
    </div>
  );
};

export default page;
