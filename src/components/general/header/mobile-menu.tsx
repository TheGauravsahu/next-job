"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenuBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Button
        onClick={toggleMenuBar}
        variant="ghost"
        size="icon"
        className="md:hidden"
      >
        {!isMenuOpen ? <Menu /> : <X />}
      </Button>

      {isMenuOpen && (
        <div
          className={`absolute top-17 left-4 right-4  w-[90%] bg-white dark:bg-black shadow-md border rounded-lg p-8 flex flex-col gap-2 z-50  transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <Link onClick={toggleMenuBar} href="/" className="hover:underline">
            Home
          </Link>
          <Link
            onClick={toggleMenuBar}
            href="/jobs"
            className="hover:underline"
          >
            Jobs
          </Link>
          <Link
            onClick={toggleMenuBar}
            href="/how-it-works"
            className="hover:underline"
          >
            How it works
          </Link>
          <Link
            onClick={toggleMenuBar}
            href="/employer"
            className="hover:underline"
          >
            For employers
          </Link>
          <span onClick={toggleTheme}>Switch Theme</span>
        </div>
      )}
    </div>
  );
}
