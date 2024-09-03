import { Button } from "@/components/ui/button";
import { GetCurrentUser } from "@/lib/getCurrentUser";
import { BriefcaseBusiness, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/user");
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen"></main>
  );
}
