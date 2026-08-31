import { MarkdownEditor } from "./md-editor";
import { CoverImagePicker } from "@/components/cover-image-picker";

type PostFormValues = {
  title: string;
  excerpt: string;
  body: string;
  coverImageUrl?: string | null;
  published: boolean;
  preferenceOrder?: number;
};

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
