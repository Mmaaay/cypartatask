// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GetCurrentUser } from "@/lib/getCurrentUser"; // Make sure the import path is correct

export async function middleware(request: NextRequest) {
  const user = await GetCurrentUser(); // Adjust this function if it doesn't work server-side

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Specify the routes you want the middleware to run on
export const config = {
  matcher: "/:path*",
};
