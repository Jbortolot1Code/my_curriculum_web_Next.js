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
    <div className="mb-10 max-w-3xl md:mb-12">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-500 md:mb-4 md:text-sm">
        {eyebrow}
      </p>

      <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:mb-5 md:text-5xl">
        {title}
      </h2>

      <p className="text-sm leading-7 text-slate-400 md:text-justify md:text-lg md:leading-8">
        {description}
      </p>
    </div>
  );
}
