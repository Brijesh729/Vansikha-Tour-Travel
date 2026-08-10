import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogBySlug } from "@/data/blog";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return buildMetadata(
      { title: "Blog Post Not Found", description: "This blog post could not be found.", keywords: "" },
      `/blog/${slug}`
    );
  }

  return buildMetadata(
    {
      title: `${blog.title} | Vansikha Blog`,
      description: blog.description,
      keywords: "Rajasthan tour, travel guide, best places to visit, taxi service, car rental",
    },
    `/blog/${slug}`
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    image: blog.image,
    author: { "@type": "Person", name: blog.author },
    datePublished: blog.date,
    publisher: {
      "@type": "Organization",
      name: siteConfig.businessName,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12 mt-20">
        <nav className="text-sm mb-8 text-gray-500">
          <Link href="/" className="hover:text-amber-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-amber-600">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">{blog.title.substring(0, 20)}...</span>
        </nav>

        <header className="mb-10 text-center">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{blog.title}</h1>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image src={blog.authorImg} alt={blog.author} fill unoptimized className="object-cover" />
              </div>
              <span className="font-medium text-gray-800">{blog.author}</span>
            </div>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </header>

        <div className="relative w-full h-[400px] rounded-xl shadow-lg mb-12 overflow-hidden">
          <Image src={blog.image} alt={blog.title} fill unoptimized className="object-cover" />
        </div>

        <article className="prose prose-lg max-w-none mx-auto text-gray-700">
          {blog.content.map((block, index) =>
            block.type === "heading" ? (
              <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-500 pl-4">
                {block.text}
              </h2>
            ) : (
              <p key={index} className="leading-relaxed mb-6 text-justify">
                {block.text}
              </p>
            )
          )}
        </article>

        <div className="bg-gray-50 p-8 rounded-xl mt-12 text-center border">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Your Trip Now</h3>
          <p className="text-gray-600 mb-4">Get the best deals on Rajasthan Tour Packages & Car Rentals.</p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition shadow"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-10 border-t pt-8">
          <Link href="/blog" className="text-amber-600 font-semibold hover:underline">
            ← Back to Blog List
          </Link>
        </div>
      </div>
    </>
  );
}
