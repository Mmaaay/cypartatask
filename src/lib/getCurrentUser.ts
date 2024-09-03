import axios from "axios";
import { error } from "console";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserProfileData } from "./types/userDataTypes";

export const GetCurrentUser = async () => {
  if (!cookies().get("access")) {
    return null;
  }
  try {
    const response = await axios.get<UserProfileData>(
      "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("access")?.value}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
