import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import { GetCurrentUser } from "@/lib/getCurrentUser";
import { redirect } from "next/navigation";
import Image from "next/image";
import Notifacation from "@/components/Notifacation";
import { use } from "react";
import { useRouter } from "next/navigation";
import ModalProvider from "@/components/providers/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main page",
  description: "Site main page,add metadata",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await GetCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <div className="grid grid-cols-[30%_70%] px-4 pb-3 h-screen">
            <div className="top-10 right-10 absolute flex justify-center items-center mb-10 px-14">
              <div className="relative w-full h-full">
                {profile ? <Notifacation user={profile} /> : "Please sign in"}
              </div>
            </div>
            <div className="relative shadow-md border rounded-2xl w-full h-[80%]]">
              {profile ? (
                <Navbar />
              ) : (
                <div className="flex justify-center items-center h-full">
                  <a
                    href="/login"
                    className="bg-blue-500 px-4 py-2 rounded-md text-white"
                  >
                    Sign in
                  </a>
                </div>
              )}
            </div>
            <div>{children}</div>
          </div>
          <ModalProvider />
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
