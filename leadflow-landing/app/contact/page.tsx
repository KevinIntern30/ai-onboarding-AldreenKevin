import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <div className="bg-gray-100 p-8 rounded-xl shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 border rounded-lg h-32"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Send Message
        </button>
      </div>

      <Link
        href="/"
        className="mt-6 text-blue-600 hover:underline"
      >
        Back to Home
      </Link>
    </main>
  );
}