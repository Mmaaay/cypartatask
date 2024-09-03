"use client";

import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Not a valid email").min(2).max(50),
  password: z.string().min(1, "Password is required"),
});

export type signInType = z.infer<typeof signInSchema>;
