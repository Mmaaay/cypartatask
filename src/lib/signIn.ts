"use server";
import { redirect } from "next/navigation";
import axiosInstance from "./utils/axiosInstance";
import axios from "axios";
import { cookies } from "next/headers";

export const signIn = async (payload: { email: string; password: string }) => {
  const data = await axios.post(
    "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
    payload
  );

  if (!data) {
    throw new Error("Error occurred");
  }
  const { access, refresh } = await data.data;
  try {
    cookies().set("access", `${access}`);
    cookies().set("refresh", `${refresh};`);
  } catch (err) {
    console.log(err);
  }
  console.log(access);
};
