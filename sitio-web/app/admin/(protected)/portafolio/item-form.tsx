import { CoverImagePicker } from "@/components/cover-image-picker";

type ItemFormValues = {
  bookTitle: string;
  authorName: string;
  genre: string;
  correctionSummary: string;
  coverImageUrl: string | null;
  authorized: boolean;
};

export function ItemForm({
  action,
  initialValues,
}: {
  action: (formData: FormData) => void;
  initialValues?: ItemFormValues;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Título del libro</span>
        <input
          type="text"
          name="bookTitle"
          required
          defaultValue={initialValues?.bookTitle}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Autor/a</span>
        <input
          type="text"
          name="authorName"
          required
          defaultValue={initialValues?.authorName}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Género</span>
        <input
          type="text"
          name="genre"
          required
          defaultValue={initialValues?.genre}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Qué se corrigió</span>
        <textarea
          name="correctionSummary"
          required
          rows={3}
          defaultValue={initialValues?.correctionSummary}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <CoverImagePicker name="cover" existingUrl={initialValues?.coverImageUrl} />
      <input
        type="hidden"
        name="existingCoverUrl"
        defaultValue={initialValues?.coverImageUrl ?? ""}
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="authorized"
          defaultChecked={initialValues?.authorized ?? false}
        />
        <span className="text-sm">
          El autor/a autorizó publicar su nombre y portada
        </span>
      </label>
      <p className="text-xs text-muted">
        Solo se muestra en /portafolio cuando esta casilla está marcada.
      </p>
      <button
        type="submit"
        className="w-fit rounded-md bg-coral px-5 py-3 font-semibold text-[var(--color-coral-ink)]"
      >
        Guardar
      </button>
    </form>
  );
}
