"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ThemeToggler from "../ThemeToggler";
import { useAuthStore } from "@/store/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { useLogout } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";

export default function Header() {
  const { token, user } = useAuthStore();
  const pathname = usePathname();

  // console.log(pathname);

  const { mutate: logout } = useLogout();

  return (
    <header
      className={`flex items-center justify-between mb-4 fixed top-0 right-0 left-0 h-16 z-50 px-12  bg-white ${
        pathname === "/" ? "dark:bg-black" : "dark:bg-background"
      }`}
    >
      <Link href="/" prefetch>
        <h1 className="font-bold text-xl bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
          NextJob
        </h1>
      </Link>

      <nav className="hidden md:flex gap-4 items-center justify-center">
        <Link href="/jobs">Find a Job</Link>
        <Link href="/">Companies</Link>
        <Link href="/">How it works</Link>
        <Link href="/">Contact</Link>
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggler />

        {user && token ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer">
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="*:cursor-pointer">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => logout()}>
                <LogOut /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
