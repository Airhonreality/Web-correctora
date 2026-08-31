import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { portfolioItems } from "@/lib/db/schema";
import { ItemForm } from "../../item-form";
import { updatePortfolioItemAction } from "../../actions";

export default async function EditPortfolioItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const itemId = Number(id);
  const [item] = await db
    .select()
    .from(portfolioItems)
    .where(eq(portfolioItems.id, itemId))
    .limit(1);

  if (!item) notFound();

  const updateWithId = updatePortfolioItemAction.bind(null, itemId);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl italic">Editar libro</h1>
      <ItemForm action={updateWithId} initialValues={item} />
    </div>
  );
}
