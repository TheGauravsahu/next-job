import { LoginFormValues } from "@/components/auth/LoginForm";
import { RegisterFormValues } from "@/components/auth/RegisterForm";
import {
  loginUser,
  logoutUser,
  registerUser,
  sendOtp,
  verifyOtp,
} from "@/services/auth.service";
import { useAuthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { APIError } from "@/types/auth.types";

export const useRegister = () => {
  const router = useRouter();
  const { setUser } = useAuthStore();

  return useMutation({
    mutationFn: (data: RegisterFormValues) => registerUser(data),
    onSuccess: (data) => {
      toast.success("Account created successfully.");

      // console.log(data);
      setUser(data);

      router.push("/verify-email");
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(
        error?.response?.data?.errorMessage || "Something went wrong."
      );
    },
  });
};

export const useLogin = (redirectTo: string) => {
  const router = useRouter();
  const { setToken, setUser } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginFormValues) => loginUser(data),
    onSuccess: async (data) => {
      toast.success("Logged in successfully.");

      // console.log(data);
      setToken(data.token);
      setUser(data.user);

      router.push(redirectTo || "/");
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(
        error?.response?.data?.errorMessage || "Something went wrong."
      );
    },
  });
};

export const useSendOtp = () => {
  return useMutation({
    mutationFn: (email: string) => sendOtp(email),
    onSuccess: (data) => {
      toast.success(data.message);
      console.log(data);
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(
        error?.response?.data?.errorMessage || "Something went wrong."
      );
    },
  });
};

export const useVerifyOtp = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/login");
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(
        error?.response?.data?.errorMessage || "Something went wrong."
      );
    },
  });
};

export const useLogout = () => {
  const { logout } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: async (data) => {
      logout();
      router.refresh();
      toast.success(data.message);
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(
        error?.response?.data?.errorMessage || "Something went wrong."
      );
    },
  });
};
