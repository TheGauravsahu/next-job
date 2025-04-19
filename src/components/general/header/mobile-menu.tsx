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
          className={`absolute top-17 left-4 right-4  w-[90%] bg-black shadow-md border rounded-lg p-8 flex flex-col gap-2 z-50 transition duration-200 ${
            isMenuOpen ? "h-[15rem]" : "h-0"
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
            href="/about"
            className="hover:underline"
          >
            About
          </Link>
          <Link
            onClick={toggleMenuBar}
            href="/contact"
            className="hover:underline"
          >
            Contact
          </Link>
          <span onClick={toggleTheme}>Switch Theme</span>
        </div>
      )}
    </div>
  );
}
