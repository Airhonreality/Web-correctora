import { ItemForm } from "../item-form";
import { createPortfolioItemAction } from "../actions";

export default function NewPortfolioItemPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl italic">Nuevo libro corregido</h1>
      <ItemForm action={createPortfolioItemAction} />
    </div>
  );
}
