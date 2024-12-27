import { addUser } from "@/data/users";

// Define the expected shape of the request body
interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { email, password }: RequestBody = await request.json();

    addUser(email, password);

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
