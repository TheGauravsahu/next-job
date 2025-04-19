import React from "react";

interface JobLayoutProps {
  children: React.ReactNode;
}
export default function JobLayout({ children }: JobLayoutProps) {
  return <div className="h-full w-full py-22 px-8 md:px-16">{children}</div>;
}
