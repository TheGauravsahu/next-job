import { LoginFormValues } from "@/components/auth/LoginForm";
import { RegisterFormValues } from "@/components/auth/RegisterForm";
import api from "@/lib/axios";

export const registerUser = async (data: RegisterFormValues) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const loginUser = async (data: LoginFormValues) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const verifyOtp = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) => {
  const res = await api.post("/auth/verify-email", {
    email,
    otp,
  });
  return res.data;
};

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};
