"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { Product } from "@/types";

interface InfoProps {
  data: Product;
}

export function Info({ data }: InfoProps) {
  return (
    <div>
      <h1 className="text-3xl text-gray-900">{data.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="space-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>

        <div className="mt-10 flex items-center gap-x-3">
          <Button className="flex items-center gap-x-2">
            Add To Card
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
}
