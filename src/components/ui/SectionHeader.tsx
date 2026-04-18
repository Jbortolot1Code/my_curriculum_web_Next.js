type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">
        {eyebrow}
      </p>

      <h2 className="mb-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      <p className="text-base leading-8 text-slate-400 text-justify md:text-lg">
        {description}
      </p>
    </div>
  );
}
