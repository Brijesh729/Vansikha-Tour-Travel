import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 text-center bg-zinc-900">
      <div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Looks like this journey took an unexpected turn.
        </h1>
        <p className="text-zinc-400 mb-10">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/tours"
            className="px-6 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition"
          >
            Explore Rajasthan Tours
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
