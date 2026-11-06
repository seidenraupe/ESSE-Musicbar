export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="flex max-w-3xl flex-col gap-3">
      <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
      <h1 className="text-4xl leading-tight font-medium tracking-tight sm:text-5xl">{title}</h1>
      <div className="text-base leading-7 text-muted-foreground sm:text-lg">{children}</div>
    </header>
  );
}
