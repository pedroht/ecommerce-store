import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/products-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("695bf495-11dc-4df0-b6cd-35e99b8615e1");

  const products = await getProducts({
    isFeatured: true,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
}
