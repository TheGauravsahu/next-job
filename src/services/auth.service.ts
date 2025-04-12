import { LoginFormValues } from "@/components/auth/LoginForm";
import { RegisterFormValues } from "@/components/auth/RegisterForm";
import api from "@/lib/axios";

export const registerUser = async (data: RegisterFormValues) => {
  const response = await api.post("/users/register", data);
  return response.data;
};

export const loginUser = async (data: LoginFormValues) => {
  const response = await api.post("/users/login", data);
  return response.data;
};

export const sendOtp = async (email: string) => {
  const res = await api.post(`/users/send-otp/${email}`);
  return res.data;
};

export const verifyOtp = async ({ email, otp }: { email: string; otp: string }) => {
  const res = await api.post(`/users/verify-otp/${email}/${otp}`);
  return res.data;
};
