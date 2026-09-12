import { whatsappHref } from "@/lib/site";

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
}: {
message: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "terracotta";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-coral text-[var(--color-coral-ink)] hover:brightness-95"
      : variant === "light"
        ? "bg-white text-teja hover:brightness-95"
        : variant === "terracotta"
          ? "bg-terracotta text-cream hover:brightness-95"
          : "border-2 border-anchor text-anchor hover:bg-anchor hover:text-cream";

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-4 w-4 shrink-0 fill-current"
      >
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.4 1.7 6.3L4 29l7.9-1.6c1.8.9 3.9 1.5 6.1 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.6c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.6.9.9-4.5-.3-.4C4.9 17.2 4.3 15.2 4.3 15c0-6.5 5.3-11.7 11.7-11.7S27.7 8.5 27.7 15 22.5 24.6 16 24.6zm6.4-8.8c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8 0 1.6 1.2 3.2 1.4 3.4.2.2 2.4 3.6 5.7 5.1.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z" />
      </svg>
      {children}
    </a>
  );
}
