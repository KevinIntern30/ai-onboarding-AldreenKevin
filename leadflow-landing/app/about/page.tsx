import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
        Our company helps startups and businesses create modern websites,
        improve branding, and increase online visibility using the latest web
        technologies.
      </p>

      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Back to Home
      </Link>
    </main>
  );
}