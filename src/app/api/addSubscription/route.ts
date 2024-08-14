import { NextResponse } from "next/server";

const API_KEY = process.env.MAILERLITE_API_KEY; // It's a good practice to store your API key in an environment variable
const BASE_URL = "https://api.mailerlite.com/api/v2";

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const response = await fetch(`${BASE_URL}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": API_KEY!,
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 400 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
