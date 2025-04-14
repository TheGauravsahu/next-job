import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center h-screen w-full">
        <Card className="md:w-[35rem] w-[90%] md:p-4 py-8">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center md:text-3xl text-xl font-bold">
                Welcome to{" "}
                <Link href="/">
                  <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
                    Next Job
                  </span>
                </Link>
              </h1>
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Register your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
          <CardFooter>
            Already have an account ?
            <Link href="/login" className="font-semibold ml-1 hover:underline">
              Login
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="fixed -bottom-[16rem] -z-[20] size-[24rem] overflow-hidden rounded-full bg-gradient-to-t from-blue-400 to-blue-700 blur-[16em]"></div>
    </div>
  );
}
