"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, ClipboardEvent, DragEvent } from "react";

export function CoverImagePicker({
  name,
  existingUrl,
}: {
  name: string;
  existingUrl?: string | null;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(existingUrl ?? null);
  const [dragActive, setDragActive] = useState(false);

  function setFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    if (inputRef.current) inputRef.current.files = dataTransfer.files;
    setPreview(URL.createObjectURL(file));
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files?.[0];
    if (file) setFile(file);
  }

  function handlePaste(event: ClipboardEvent<HTMLDivElement>) {
    const items = event.clipboardData?.items;
    if (!items) return;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file) {
          setFile(file);
          event.preventDefault();
        }
        break;
      }
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-semibold">Portada</span>
      <div
        role="button"
        tabIndex={0}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onPaste={handlePaste}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={`flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed p-6 text-center transition-colors focus:outline-none ${
          dragActive ? "border-teal bg-teal/10" : "border-ink/20 hover:border-ink/40"
        }`}
      >
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt="Vista previa de la portada"
            className="h-48 w-32 rounded object-cover shadow"
          />
        ) : (
          <div className="text-muted">
            <p className="font-semibold">Arrastra la imagen aquí</p>
            <p className="text-sm">
              o pégala con <kbd className="rounded bg-bg-alt px-1.5 py-0.5">Ctrl+V</kbd> después
              de copiarla de otra página, o haz clic para elegir un archivo.
            </p>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          name={name}
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </div>
      <span className="text-xs text-muted">
        Consejo: en la web anterior, clic derecho sobre la portada → &ldquo;Copiar
        imagen&rdquo;, y aquí Ctrl+V.
      </span>
    </div>
  );
}
