import React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loadingText: string;
  isLoading: boolean;
  onClick?: () => void;
}

export default function LoadingButton({
  children,
  loadingText,
  onClick,
  isLoading,
  className,
  disabled,
}: LoadingButtonProps) {
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={isLoading || disabled}
      className={cn("w-full mt-2", className)}
      size="lg"
      variant="gradient"
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
}
