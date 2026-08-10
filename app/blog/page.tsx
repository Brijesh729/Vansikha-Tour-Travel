import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Travel Blog | Rajasthan & India Tour Guides - Vansikha",
    description:
      "Read latest travel tips, tour guides, and stories about Rajasthan and India. Expert advice for 2026 travelers.",
    keywords: "rajasthan travel blog, india travel guide, jaisalmer tips, golden triangle guide",
  },
  "/blog"
);

export default function BlogListPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Travel Stories</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3 font-serif">
            Travel <span className="text-amber-400">Blog</span>
          </h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
            Expert tips and destination guides to help you plan your perfect trip to Rajasthan and India.
          </p>
        </div>
      </section>

      <div className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wide">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2 uppercase font-medium">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h2 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-amber-600 transition">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h2>

                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2 flex-grow">{blog.excerpt}</p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-amber-600 font-semibold text-xs uppercase tracking-wide hover:text-amber-700 transition mt-auto border-t border-gray-100 pt-3"
                  >
                    Read Article
                    <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
