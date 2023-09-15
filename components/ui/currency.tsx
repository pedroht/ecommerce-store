"use client";

import { useMounted } from "@/hooks/use-mounted";
import { formatPrice } from "@/lib/utils";

interface CurrencyProps {
  value: string | number;
}

export function Currency({ value }: CurrencyProps) {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatPrice(Number(value))}</div>;
}
