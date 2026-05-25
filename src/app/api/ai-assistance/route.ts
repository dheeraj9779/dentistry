import { generateResponse } from "@/lib/openAI";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { answer } = await request.json();
  console.log("Received answer:", answer);

  try {
    const result = await generateResponse(answer);
    if (!result.success) {
      console.error("AI Assistance Error:", result.error);
      const { message, code } = result.error;
      return  NextResponse.json({
        success: false,
        message: message,
      }, { status: 500 });
      };

    console.log("AI Assistance Result:", result);
    return  NextResponse.json(result.data, { status: 200 });
  } catch (error: unknown) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ success: false, message: (error as Error)?.message || "Internal server error"}, { status: 500 });
  }
}
