"use client"; // To make this a client-side component because Next.js is server-side rendering

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true); // Make sure component mounted before it uses the theme or changes the theme
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:right-0 focus-visible:ring-offset-0 cursor-pointer"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Apperance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
