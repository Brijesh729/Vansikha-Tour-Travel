import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/metadata";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = buildBreadcrumbSchema(items);

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-zinc-400 mb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <span className="text-zinc-600">/</span>}
            {index === items.length - 1 ? (
              <span className="text-zinc-200 font-medium">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-amber-400 transition">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
