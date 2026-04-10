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
      <p className="font-body text-label uppercase text-teal">
        {label}
      </p>
      <h2
        className={`mt-5 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.01em] md:text-[44px] ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-prose font-body text-body-primary ${
            inverted ? "text-white/80" : "text-body"
          } ${centred ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
