"use client";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { ShoppingBag } from "lucide-react";

export function NavbarActions() {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
}
