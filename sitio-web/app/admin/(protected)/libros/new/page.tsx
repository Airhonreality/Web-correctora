import { BookForm } from "../book-form";
import { createBookAction } from "../actions";

export default function NewBookPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl italic">Añadir nuevo libro (Autora)</h1>
      <BookForm action={createBookAction} />
    </div>
  );
}
