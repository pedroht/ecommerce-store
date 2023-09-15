import { getBillboard } from "@/actions/get-billboard";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("695bf495-11dc-4df0-b6cd-35e99b8615e1");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
