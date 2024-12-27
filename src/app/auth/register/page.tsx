"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Register</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        name="username"
        type="text"
        placeholder="Username"
        required
        className="border p-2 mb-4 w-full rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border p-2 mb-4 w-full rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="border p-2 mb-4 w-full rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded w-full"
      >
        Register
      </button>
    </form>
  );
}
