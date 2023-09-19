import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
}
