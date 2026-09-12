"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, ClipboardEvent, DragEvent, KeyboardEvent } from "react";

type LogoEntry = {
  id: string;
  url?: string;
  file?: File;
  previewUrl?: string;
};

function parseCsv(value?: string | null): string[] {
  return (value ?? "")
    .split(/[,\n]/)
    .map((raw) => raw.trim())
    .filter(Boolean);
}

export function LogosPicker({ initialValue }: { initialValue?: string | null }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [entries, setEntries] = useState<LogoEntry[]>(() =>
    parseCsv(initialValue).map((url) => ({ id: `url-${url}`, url })),
  );
  const [dragActive, setDragActive] = useState(false);
  const [urlInput, setUrlInput] = useState("");

  useEffect(() => {
    const dataTransfer = new DataTransfer();
    for (const entry of entries) {
      if (entry.file) dataTransfer.items.add(entry.file);
    }
    if (fileInputRef.current) fileInputRef.current.files = dataTransfer.files;
  }, [entries]);

  function addFiles(files: File[]) {
    const images = files.filter((file) => file.type.startsWith("image/"));
    if (images.length === 0) return;
    setEntries((prev) => [
      ...prev,
      ...images.map((file) => ({
        id: `file-${file.name}-${crypto.randomUUID()}`,
        file,
        previewUrl: URL.createObjectURL(file),
      })),
    ]);
  }

  function addUrls(raw: string) {
    const parsed = parseCsv(raw);
    if (parsed.length === 0) return;
    setEntries((prev) => [
      ...prev,
      ...parsed.map((url) => ({ id: `url-${url}`, url })),
    ]);
    setUrlInput("");
  }

  function removeEntry(id: string) {
    setEntries((prev) => {
      const target = prev.find((entry) => entry.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((entry) => entry.id !== id);
    });
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragActive(false);
    addFiles(Array.from(event.dataTransfer.files));
  }

  function handlePaste(event: ClipboardEvent<HTMLDivElement>) {
    const items = event.clipboardData?.items;
    if (!items) return;
    const pasted: File[] = [];
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file) pasted.push(file);
      }
    }
    if (pasted.length > 0) {
      addFiles(pasted);
      event.preventDefault();
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    addFiles(Array.from(event.target.files ?? []));
    event.target.value = "";
  }

  function handleZoneKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      fileInputRef.current?.click();
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-semibold">
        Logos de Editorial (imágenes o URLs)
      </span>

      {entries.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {entries.map((entry) => (
            <div key={entry.id} className="group relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={entry.previewUrl ?? entry.url}
                alt="Sello editorial"
                className="h-16 w-24 rounded-md border border-ink/10 bg-white object-contain p-1 shadow-sm"
              />
              {entry.file && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-teal px-1.5 py-0.5 text-[10px] font-bold text-white">
                  a subir
                </span>
              )}
              <button
                type="button"
                onClick={() => removeEntry(entry.id)}
                aria-label="Quitar logo"
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-sm leading-none text-cream shadow transition-colors hover:bg-rose hover:text-ink"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <div
        role="button"
        tabIndex={0}
        onClick={() => fileInputRef.current?.click()}
        onKeyDown={handleZoneKeyDown}
        onDragOver={(event) => {
          event.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onPaste={handlePaste}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-5 text-center transition-colors focus:outline-none ${
          dragActive ? "border-teal bg-teal/10" : "border-ink/20 hover:border-ink/40"
        }`}
      >
        <p className="font-semibold text-muted">
          {entries.length > 0
            ? "Añadir más sellos: arrastra, pega o haz clic"
            : "Arrastra los sellos aquí, pégalos con Ctrl+V o haz clic para elegir archivos"}
        </p>
        <p className="text-xs text-muted">
          O escribe sus URLs en el campo de abajo.
        </p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={urlInput}
          onChange={(event) => setUrlInput(event.target.value)}
          placeholder="https://...logo.png (varias separadas por coma)"
          className="flex-1 rounded-md border border-ink/20 px-4 py-2"
        />
        <button
          type="button"
          onClick={() => addUrls(urlInput)}
          className="rounded-md border border-ink bg-ink px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-muted"
        >
          Añadir URL
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        name="publisherLogoFile"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />

      {entries
        .filter((entry) => entry.url)
        .map((entry) => (
          <input
            key={`${entry.id}-${entry.url}`}
            type="hidden"
            name="publisherLogoUrl"
            value={entry.url}
          />
        ))}

      <span className="text-xs text-muted">
        Consejo: clic derecho sobre un logo en otra página → &ldquo;Copiar
        imagen&rdquo; y pégalo aquí con Ctrl+V.
      </span>
    </div>
  );
}