import React, { MouseEventHandler } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export function IconButton({ onClick, icon, className }: IconButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-ull flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition text-gray-900",
        className
      )}
    >
      {icon}
    </Button>
  );
}
