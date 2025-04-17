"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { UserType } from "@/types/user.type";

type AuthResponse = {
  user: UserType | null;
};

export async function auth(): Promise<AuthResponse> {
  const token = (await cookies()).get("token")?.value;

  if (!token) return { user: null };

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { user: res.data };
  } catch (err) {
    console.log(err);
    return { user: null };
  }
}
