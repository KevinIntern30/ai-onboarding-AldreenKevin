"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let isValid = true;

    if (name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert("Form submitted successfully!");

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-6 text-black">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-3 border rounded-lg text-black placeholder-gray-500"
        />

        {errors.name && (
          <p className="text-red-500 mb-4">{errors.name}</p>
        )}

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-3 border rounded-lg text-black placeholder-gray-500"
        />

        {errors.email && (
          <p className="text-red-500 mb-4">{errors.email}</p>
        )}

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-2 p-3 border rounded-lg h-32 text-black placeholder-gray-500"
        />

        {errors.message && (
          <p className="text-red-500 mb-4">{errors.message}</p>
        )}

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Send Message
        </button>
      </form>

      <Link
        href="/"
        className="mt-6 text-blue-600 hover:underline"
      >
        Back to Home
      </Link>
    </main>
  );
}