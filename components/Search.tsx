"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tourPackages } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { blogPosts } from "@/data/blog";
import { trackEvent } from "@/lib/analytics";

interface SearchResult {
  title: string;
  category: string;
  href: string;
  excerpt: string;
}

const buildIndex = (): SearchResult[] => [
  ...tourPackages.map((t) => ({
    title: t.title,
    category: "Tour",
    href: `/tours/${t.slug}`,
    excerpt: t.description,
  })),
  ...destinations.map((d) => ({
    title: d.name,
    category: "Destination",
    href: `/destinations/${d.slug}`,
    excerpt: d.intro,
  })),
  ...blogPosts.map((b) => ({
    title: b.title,
    category: "Blog",
    href: `/blog/${b.slug}`,
    excerpt: b.excerpt,
  })),
];

const Search = () => {
  const [query, setQuery] = useState("");
  const index = useMemo(() => buildIndex(), []);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return index
      .filter((item) => item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, index]);

  const handleChange = (value: string) => {
    setQuery(value);
    if (value.trim().length >= 2) {
      trackEvent("search", { query: value });
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="search"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search tours, destinations, guides..."
        className="w-full bg-zinc-800 border border-zinc-700 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
        aria-label="Search"
      />

      {results.length > 0 && (
        <div className="absolute top-full left-0 w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl overflow-hidden z-50">
          {results.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => setQuery("")}
              className="block px-4 py-3 hover:bg-zinc-800 border-b border-zinc-800 last:border-0"
            >
              <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-1">{r.category}</p>
              <p className="text-sm text-white font-medium">{r.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
