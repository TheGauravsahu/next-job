"use client";

import Link from "next/link";
import React from "react";
import ThemeToggler from "../../ThemeToggler";

import { usePathname } from "next/navigation";
import ProfileDropdown from "./profile-dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`flex items-center justify-between mb-4 fixed top-0 right-0 left-0 h-16 z-50 md:px-12 px-8  bg-white ${
        pathname === "/" ? "dark:bg-black" : "dark:bg-background border-b"
      }`}
    >
      <Link href="/" prefetch>
        <h1 className="font-bold text-xl bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
          NextJob
        </h1>
      </Link>

      <nav className="hidden md:flex gap-4 items-center justify-center">
        <Link href="/jobs">Find a Job</Link>
        <Link href="/employer">For Employers</Link>
        <Link href="/how-it-works">How it works</Link>
      </nav>

      <div className="flex items-center gap-1">
        <ThemeToggler />

        <ProfileDropdown />
        <MobileMenu />
      </div>
    </header>
  );
}
