interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subtext?: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
        {heading}
      </h2>
      {subtext && (
        <p className="text-neutral text-base md:text-lg leading-relaxed max-w-2xl">
          {subtext}
        </p>
      )}
    </div>
  )
}
