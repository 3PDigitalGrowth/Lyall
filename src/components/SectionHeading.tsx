type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  inverted?: boolean;
  centred?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  inverted = false,
  centred = false,
}: SectionHeadingProps) {
  return (
    <div className={centred ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="font-body text-xs font-medium uppercase tracking-editorial text-teal">
        {label}
      </p>
      <h2
        className={`mt-5 font-display text-4xl font-bold leading-tight md:text-5xl ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl font-body text-lg leading-8 ${
            inverted ? "text-white/80" : "text-charcoal/80"
          } ${centred ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
