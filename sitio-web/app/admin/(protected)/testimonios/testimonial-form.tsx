type TestimonialFormValues = {
  clientName: string;
  bookTitle: string;
  quote: string;
  featuredOnHome: boolean;
  portfolioItemId: number | null;
};

export function TestimonialForm({
  action,
  initialValues,
  portfolioOptions,
}: {
  action: (formData: FormData) => void;
  initialValues?: TestimonialFormValues;
  portfolioOptions: Array<{ id: number; bookTitle: string }>;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Nombre del cliente</span>
        <input
          type="text"
          name="clientName"
          required
          defaultValue={initialValues?.clientName}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
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
        <span className="text-sm font-semibold">Cita del testimonio</span>
        <textarea
          name="quote"
          required
          rows={4}
          defaultValue={initialValues?.quote}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">
          Vincular a un libro del portafolio (opcional)
        </span>
        <select
          name="portfolioItemId"
          defaultValue={initialValues?.portfolioItemId ?? ""}
          className="rounded-md border border-ink/20 px-4 py-2"
        >
          <option value="">Sin vincular</option>
          {portfolioOptions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.bookTitle}
            </option>
          ))}
        </select>
        <span className="text-xs text-muted">
          No es obligatorio — solo si este testimonio corresponde a un libro que
          ya está en el portafolio.
        </span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="featuredOnHome"
          defaultChecked={initialValues?.featuredOnHome ?? false}
        />
        <span className="text-sm">Destacar en la página de Inicio</span>
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
