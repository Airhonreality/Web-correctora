import { CoverImagePicker } from "@/components/cover-image-picker";

type BookFormValues = {
  title: string;
  subtitle: string | null;
  editorialNote: string | null;
  description: string;
  coverImageUrl: string | null;
  purchaseLink: string | null;
  purchasePlatform: string | null;
  publisherLogos: string | null;
  preferenceOrder: number;
  published: boolean;
};

export function BookForm({
  action,
  initialValues,
}: {
  action: (formData: FormData) => void;
  initialValues?: BookFormValues;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Título del libro</span>
          <input
            type="text"
            name="title"
            required
            defaultValue={initialValues?.title}
            className="rounded-md border border-ink/20 px-4 py-2"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Subtítulo (ej. frase destacada)</span>
          <input
            type="text"
            name="subtitle"
            defaultValue={initialValues?.subtitle ?? ""}
            className="rounded-md border border-ink/20 px-4 py-2"
            placeholder="La sátira mística que la crítica editorial..."
          />
        </label>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Nota Editorial / Resumen breve (para la tarjeta)</span>
        <textarea
          name="editorialNote"
          rows={3}
          defaultValue={initialValues?.editorialNote ?? ""}
          className="rounded-md border border-ink/20 px-4 py-2"
          placeholder="En un mercado editorial donde la coedición es la norma..."
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Descripción (Sinopsis Completa)</span>
        <textarea
          name="description"
          required
          rows={5}
          defaultValue={initialValues?.description}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Link de Compra (URL)</span>
          <input
            type="url"
            name="purchaseLink"
            defaultValue={initialValues?.purchaseLink ?? ""}
            className="rounded-md border border-ink/20 px-4 py-2"
            placeholder="https://amazon.com/..."
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Plataforma (Texto del botón)</span>
          <input
            type="text"
            name="purchasePlatform"
            defaultValue={initialValues?.purchasePlatform ?? ""}
            className="rounded-md border border-ink/20 px-4 py-2"
            placeholder="Amazon o Editorial Ibáñez"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Logos de Editorial (URLs separados por comas)</span>
        <input
          type="text"
          name="publisherLogos"
          defaultValue={initialValues?.publisherLogos ?? ""}
          className="rounded-md border border-ink/20 px-4 py-2"
          placeholder="https://...logo1.png, https://...logo2.png"
        />
        <span className="text-xs text-muted">
          Pega los enlaces de las imágenes de los sellos editoriales separados por coma.
        </span>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Orden de Preferencia (número mayor = más arriba)</span>
        <input
          type="number"
          name="preferenceOrder"
          defaultValue={initialValues?.preferenceOrder ?? 0}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>

      <div className="mt-4">
        <span className="text-sm font-semibold mb-2 block">Portada del Libro</span>
        <CoverImagePicker name="cover" existingUrl={initialValues?.coverImageUrl} />
        <input
          type="hidden"
          name="existingCoverUrl"
          defaultValue={initialValues?.coverImageUrl ?? ""}
        />
      </div>

      <label className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          name="published"
          defaultChecked={initialValues?.published ?? true}
        />
        <span className="text-sm">Publicado (Visible en el sitio)</span>
      </label>

      <button
        type="submit"
        className="mt-4 w-fit rounded-md bg-coral px-5 py-3 font-semibold text-[var(--color-coral-ink)]"
      >
        Guardar
      </button>
    </form>
  );
}
