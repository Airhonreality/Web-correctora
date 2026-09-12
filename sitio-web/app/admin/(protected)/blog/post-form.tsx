import { MarkdownEditor } from "./md-editor";
import { CoverImagePicker } from "@/components/cover-image-picker";
import { BLOG_CATEGORIES } from "@/lib/blog";

type PostFormValues = {
  title: string;
  excerpt: string;
  body: string;
  coverImageUrl?: string | null;
  category?: string | null;
  featured?: boolean;
  publishedAt?: Date | string | null;
  published: boolean;
  preferenceOrder?: number;
};

function toDateInputValue(value?: Date | string | null) {
  if (!value) return "";
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function PostForm({
  action,
  initialValues,
}: {
  action: (formData: FormData) => void;
  initialValues?: PostFormValues;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Título</span>
        <input
          type="text"
          name="title"
          required
          defaultValue={initialValues?.title}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Resumen (para la lista del blog)</span>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={initialValues?.excerpt}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Categoría (para las etiquetas del blog)</span>
        <select
          name="category"
          defaultValue={initialValues?.category ?? ""}
          className="rounded-md border border-ink/20 px-4 py-2"
        >
          <option value="">Sin categoría</option>
          {BLOG_CATEGORIES.map((category) => (
            <option key={category.slug} value={category.label}>
              {category.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Orden de Preferencia (número mayor = más importante)</span>
        <input
          type="number"
          name="preferenceOrder"
          defaultValue={initialValues?.preferenceOrder ?? 0}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>

      <div className="mt-2">
        <span className="text-sm font-semibold mb-2 block">Imagen Destacada (Opcional)</span>
        <CoverImagePicker name="cover" existingUrl={initialValues?.coverImageUrl} />
        <input
          type="hidden"
          name="existingCoverUrl"
          defaultValue={initialValues?.coverImageUrl ?? ""}
        />
      </div>
      <label className="flex flex-col gap-1 w-full max-w-full">
        <span className="text-sm font-semibold">Cuerpo del artículo</span>
        <MarkdownEditor initialValue={initialValues?.body} />
        <span className="text-xs text-muted mt-1">
          Usa el editor para dar formato al contenido (Markdown).
        </span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={initialValues?.featured ?? false}
        />
        <span className="text-sm">
          Destacado (aparece en las primeras posiciones del blog)
        </span>
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Fecha de publicación</span>
        <input
          type="date"
          name="publishedAt"
          defaultValue={toDateInputValue(initialValues?.publishedAt)}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
        <span className="text-xs text-muted">
          Déjala vacía para usar la fecha de creación del post.
        </span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          defaultChecked={initialValues?.published ?? true}
        />
        <span className="text-sm">Publicado (visible en el sitio)</span>
      </label>
      <button
        type="submit"
        className="w-fit rounded-md bg-coral px-5 py-3 font-semibold text-[var(--color-coral-ink)]"
      >
        Guardar
      </button>
    </form>
  );
}
