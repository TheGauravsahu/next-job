"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSendOtp, useVerifyOtp } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/auth";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect } from "react";
import LoadingButton from "../general/loading-button";

const formSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export type OtpFormValues = z.infer<typeof formSchema>;

export default function OtpForm() {
  const { user } = useAuthStore();
  const sendOtpMutation = useSendOtp();
  const verifyOtpMutation = useVerifyOtp();


  useEffect(() => {
    if (user?.email) {
      sendOtpMutation.mutate(user.email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(values: OtpFormValues) {
    verifyOtpMutation.mutate({ email: user?.email as string, otp: values.pin });
  }

  return (
    <Card
      className={`md:w-[35vw] w-[90%] md:p-4 py-8 transition-all duration-300 ${
        sendOtpMutation.isPending ? "5vh" : "45vh"
      }`}
    >
      <CardHeader>
        <CardTitle>
          <h1 className="text-center md:text-3xl text-xl font-bold">
            Verify your{" "}
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Account
            </span>
          </h1>
        </CardTitle>
        <CardDescription className="text-center text-sm">
          Email sent to {user?.email}.{" "}
          <span className=" hover:text-white cursor-pointer">Resend</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {sendOtpMutation.isPending ? (
          <p className="text-center  py-2 cursor-pointer">
            Sending OTP to your email...{" "}
            <span className="text-muted-foreground ml-1">
              Don&apos;t refresh the page.
            </span>
          </p>
        ) : (
          <div className="flex items-center justify-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OTP</FormLabel>
                      <FormControl>
                        <InputOTP
                          maxLength={6}
                          {...field}
                          pattern={REGEXP_ONLY_DIGITS}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <LoadingButton
                  isLoading={verifyOtpMutation.isPending}
                  loadingText="Verifying"
                >
                  Verify
                </LoadingButton>
              </form>
            </Form>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
