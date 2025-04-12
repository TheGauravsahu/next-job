import OtpForm from "@/components/auth/OtpForm";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center h-screen w-full">
        <OtpForm />
      </div>

      <div className="fixed -bottom-[16rem] -z-[20] size-[24rem] overflow-hidden rounded-full bg-gradient-to-t from-blue-400 to-blue-700 blur-[16em]"></div>
    </div>
  );
}
