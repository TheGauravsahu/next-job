import { ThumbsUp } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen w-full  flex flex-col gap-4 items-center justify-center">
      <div
        className="absolute w-full right-0 left-0 -z-50 inset-0
          [background-size:40px_40px]
          [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
          dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      />

      <div className="flex flex-col gap-4 items-center">
        <div className="inline-flex cursor-pointer items-center px-3 py-1 border border-blue-500 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition">
          <ThumbsUp className="w-4 h-4 mr-1.5" />
          <span>#1 Top greatest on Product Hunt</span>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <div className="w-3xl mx-auto *:text-center items-center justify-center">
          <h1 className="text-6xl font-bold leading-16.5">
            Supporting
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
              {" "}
              Job Seekers{" "}
            </span>
            Every Step of the Way
          </h1>
          <p className="mt-6 text-muted-foreground text-xl max-w-2xl mx-auto">
            Unlock true potential and discover a world of opportunities that
            align with your skills, interest and aspirations
          </p>
        </div>
      </div>
    </div>
  );
}
