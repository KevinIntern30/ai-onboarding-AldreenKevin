import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Grow Your Business Faster
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
        We help businesses improve their online presence with modern marketing
        solutions powered by Next.js.
      </p>

      <div className="flex gap-4">
        <Link
          href="/about"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          About Us
        </Link>

        <Link
          href="/contact"
          className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}