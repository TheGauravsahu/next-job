import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditProfileForm from "@/components/pages/Profile/EditProfileForm";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center h-screen w-full">
        <Card className="md:w-[35rem] w-[90%] md:p-4 py-8">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center md:text-3xl text-xl font-bold">
                Your{" "}
                <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight">
                  Profile
                </span>
              </h1>
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Manage your personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EditProfileForm />
          </CardContent>
          <CardFooter className="text-sm text-center justify-center">
            Want to return?
            <Link href="/" className="ml-1 font-semibold hover:underline">
              Go to Home
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="fixed -bottom-[16rem] -z-[20] size-[24rem] overflow-hidden rounded-full bg-gradient-to-t from-blue-400 to-blue-700 blur-[16em]"></div>
    </div>
  );
}
