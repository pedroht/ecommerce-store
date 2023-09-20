"use client";

import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { Gallery } from "./gallery";
import { Info } from "./info";
import { Modal } from "./modal";

interface PreviewModalProps {
  data: Product;
}

export function PreviewModal({ data }: PreviewModalProps) {
  const router = useRouter();

  function handleClose() {
    router.back();
  }

  return (
    <Modal open={true} onClose={handleClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={data.images} />
        </div>

        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={data} />
        </div>
      </div>
    </Modal>
  );
}
