import { Loader2 } from "lucide-react";
import React from "react";

export default function Loader() {
  return (
    <div>
      <Loader2 className="w-8 h-8  animate-spin text-blue-700" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
