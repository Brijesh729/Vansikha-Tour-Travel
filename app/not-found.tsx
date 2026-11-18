import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ink px-5 pt-20 text-center text-white">
      <p className="font-serif text-6xl sm:text-7xl text-accent font-semibold">404</p>
      <h1 className="mt-3 text-2xl sm:text-3xl font-serif">This road leads nowhere</h1>
      <p className="mt-3 max-w-md text-xs sm:text-sm text-white/70">The page you&apos;re looking for has wandered off. Let&apos;s get you back on route.</p>
      <Link href="/" className="mt-6 rounded-full bg-accent px-6 py-2.5 text-xs sm:text-sm font-medium text-ink">
        Back to home
      </Link>
    </section>
  )
}
