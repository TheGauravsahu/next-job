import React from "react";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useAuth";

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
import { LayoutDashboardIcon, LogOut, User } from "lucide-react";
import Link from "next/link";

export default function ProfileDropdown() {
  const { token, user } = useAuthStore();

  // console.log(pathname);

  const { mutate: logout } = useLogout();

  return (
    <div>
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
            <Link href="/profile">
              <DropdownMenuItem>
                <User />
                Profile
              </DropdownMenuItem>
            </Link>
            <Link href="/dashboard">
              <DropdownMenuItem>
                <LayoutDashboardIcon />
                Dashboard
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={() => logout()}>
              <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center gap-1">
          <Link prefetch href="/login">
            <Button variant="ghost">Login</Button>
          </Link>

          <Link prefetch href="/register">
            <Button variant="gradient">Signup</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
