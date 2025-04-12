"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ThemeToggler from "../ThemeToggler";
import { useAuthStore } from "@/store/auth";

export default function Header() {
  const { user } = useAuthStore();

  return (
    <header className="flex items-center justify-between mb-4 fixed top-0 right-0 left-0 h-16 z-50 bg-white dark:bg-black px-12">
      <div>
        <h1 className="font-bold text-xl bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
          NextJob
        </h1>
      </div>

      <nav className="flex gap-4 items-center justify-center">
        <Link href="/">Find a Job</Link>
        <Link href="/">Companies</Link>
        <Link href="/">How it works</Link>
        <Link href="/">Contact</Link>
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggler />

        {user ? (
          <span className="text-muted-foreground">{user.name}</span>
        ) : (
          <>
            <Link prefetch href="/login">
              <Button variant="ghost">Login</Button>
            </Link>

            <Link prefetch href="/register">
              <Button variant="gradient">Signup</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
