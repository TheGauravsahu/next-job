import LoginForm from "@/components/auth/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="h-full w-full">
      <div className="h-screen w-full flex items-center justify-center">
        <Card className="w-[90%] md:w-[35rem] md:p-4 py-8">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center md:text-3xl text-xl font-bold">
                Login to{" "}
                <Link href="/">
                  <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
                    Next Job
                  </span>
                </Link>
              </h1>
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Login to your account.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter>
            Don&apos;t have an account ?
            <Link
              href="/register"
              className="font-semibold ml-1 hover:underline"
            >
              Register
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="fixed -z-20 -bottom-[16rem] left-[1rem] overflow-hidden rounded-full size-[24rem] bg-gradient-to-t from-blue-400 to-blue-700  blur-[16rem]" />
    </div>
  );
}
