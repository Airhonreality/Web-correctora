export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-4xl px-6 ${className}`}>{children}</div>;
}

export function Band({
  children,
  tone = "cream",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "cream" | "cream-soft" | "bg-alt" | "rose" | "rose-light";
  className?: string;
}) {
  const tones: Record<string, string> = {
    cream: "bg-cream",
    "cream-soft": "bg-cream-soft",
    "bg-alt": "bg-bg-alt",
    rose: "bg-rose text-ink",
    "rose-light": "bg-rose-light text-ink",
  };
  return <div className={`${tones[tone]} ${className}`}>{children}</div>;
}
