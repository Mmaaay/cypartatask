import { z } from "zod";

export const userProfileEditSchema = z.object({
  email: z.string().email(),
  phone: z.string(),

  first_name: z.string(),
  last_name: z.string(),

  bio: z.string(),
});

export type UserProfileEditValidator = z.infer<typeof userProfileEditSchema>;
