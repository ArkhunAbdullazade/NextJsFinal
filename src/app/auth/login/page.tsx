"use client";

import { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Login
      </button>
    </form>
  );
}
