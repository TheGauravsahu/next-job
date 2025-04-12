import React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps {
  children: React.ReactNode;
  loadingText: string;
  isLoading: boolean;
  onClick?: () => void;
}

export default function LoadingButton({
  children,
  loadingText,
  onClick,
  isLoading,
}: LoadingButtonProps) {
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={isLoading}
      className="w-full mt-2"
      size="lg"
      variant="gradient"
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
}
