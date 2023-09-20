import { getProduct } from "@/actions/get-product";
import { PreviewModal } from "@/components/preview-modal";

interface PageTestProps {
  params: {
    productId: string;
  };
}

export default async function PageTest({ params }: PageTestProps) {
  const product = await getProduct(params.productId);

  return (
    <div>
      <PreviewModal data={product} />
    </div>
  );
}
