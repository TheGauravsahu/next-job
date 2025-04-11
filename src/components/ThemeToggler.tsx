"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      className="group rounded-lg border-none bg-transparent shadow-none hover:bg-blue-600/5"
    >
      <Moon className="absolute size-4 rotate-90 scale-0 transition-all group-hover:text-blue-500 dark:rotate-0 dark:scale-100 dark:text-white" />
      <Sun className="size-4 rotate-0 scale-100 text-black transition-all group-hover:text-blue-500 dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
