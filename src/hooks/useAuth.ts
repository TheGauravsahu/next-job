import { LoginFormValues } from "@/components/auth/LoginForm";
import { RegisterFormValues } from "@/components/auth/RegisterForm";
import { loginUser, registerUser } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {  APIError } from "@/types/auth.types"; 

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterFormValues) => registerUser(data),
    onSuccess: () => {
      toast.success("Account created successfully.");
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

export const useLogin = () => {
  const router = useRouter();
  const { setToken, setUser } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginFormValues) => loginUser(data),
    onSuccess: (data) => {
      toast.success("Logged in successfully.");

      // console.log(data);
      setToken(data.token);
      setUser(data.user);

      router.push("/");
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(
        error?.response?.data?.errorMessage || "Something went wrong."
      );
    },
  });
};
