import React from "react";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

export default function FooterCTA() {
  return (
    <div className="w-full h-[45vh]  md:h-[45vh] rounded-4xl p-8 bg-gradient-to-b from-blue-400 to-blue-700 text-white">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl">
          Transforming the Way you Find Jobs
        </h1>
        <p className="text-white/70  text-xl tracking-tight my-2">
          Stop searching, start discovering. Let the ideal job come to you.
        </p>
      </div>

      <div className="mt-1">
        <Button
          size={"lg"}
          variant={"secondary"}
          className="flex w-full items-center gap-2 md:w-fit"
        >
          <Sparkles /> Join now
        </Button>
      </div>
    </div>
  );
}
