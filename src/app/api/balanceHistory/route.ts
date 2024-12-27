import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "balanceHistory.json"
    );
    const data = await fs.readFile(filePath, "utf-8");
    return new Response(data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to load balance history" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
