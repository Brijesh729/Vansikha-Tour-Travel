import { Plus } from "lucide-react"

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group py-3.5 sm:py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm sm:text-base font-medium">
            {item.q}
            <span className="grid size-7 sm:size-8 shrink-0 place-items-center rounded-full border border-border transition group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground">
              <Plus className="size-3.5" aria-hidden />
            </span>
          </summary>
          <p className="mt-2.5 max-w-3xl text-xs sm:text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
