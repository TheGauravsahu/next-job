import React from "react";
import { Button } from "../ui/button";
import {Loader2} from "lucide-react"

interface LoadingButtonProps {
  children: React.ReactNode;
  loadingText: string;
  isLoading: boolean;
  onClick?: () => void;
  type: "submit"|"button"
}

export default function LoadingButton({
  children,
  loadingText,
  onClick,
  isLoading,
  type
}: LoadingButtonProps) {
  return (
    <Button type={type} onClick={onClick} disabled={isLoading} className="cursor-pointer">
      {isLoading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}
      {isLoading ? loadingText : children}
    </Button>
  );
}
