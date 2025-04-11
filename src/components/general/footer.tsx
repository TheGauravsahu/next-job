import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-around py-8 pb-18 h-[35vh] border-t">
      <div className="w-1/3">
        <h1 className="font-semibold text-xl mb-2">NextJob</h1>
        <p className="text-muted-foreground w-xs">
          NextJob helps you to connect with job opportunities tailored to your
          skills, reference and personal preferences.
        </p>
      </div>

      <div>
        <h1 className="font-semibold text-xl mb-4">Technology</h1>
        <div className="flex flex-col space-y-0.5 *:text-muted-foreground *:hover:text-foreground">
          <Link href="/">Search for Jobs</Link>
          <Link href="/">Browse Jobs</Link>
          <Link href="/">Browse Companies</Link>
          <Link href="/">Career Advice</Link>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-xl mb-4">Employer</h1>
        <div className="flex  flex-col space-y-0.5 *:text-muted-foreground *:hover:text-foreground">
          <Link href="/">Post Jobs</Link>
          <Link href="/">Source Talent</Link>
          <Link href="/">Employer and Advertising</Link>
          <Link href="/">Hiring Events</Link>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-xl mb-4">Resources</h1>
        <div className="flex flex-col space-y-0.5 *:text-muted-foreground *:hover:text-foreground">
          <Link href="/">Help Center</Link>
          <Link href="/">Contact Support</Link>
          <Link href="/">Community Forums</Link>
          <Link href="/">Accessibility</Link>
        </div>
      </div>
    </div>
  );
}
