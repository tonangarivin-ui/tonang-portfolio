import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createSessionToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password || !verifyPassword(password)) {
      return NextResponse.json({ error: "Invalid password." }, { status: 401 });
    }

    const token = createSessionToken();
    const response = NextResponse.json({ success: true, message: "Authenticated." });

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Server error during authentication." }, { status: 500 });
  }
}
