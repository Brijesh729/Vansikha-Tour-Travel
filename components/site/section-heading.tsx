import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.3em]",
          tone === "dark" ? "text-accent" : "text-primary",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-2.5 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight",
          tone === "dark" ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-3 text-sm sm:text-base leading-relaxed", tone === "dark" ? "text-white/70" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  )
}
