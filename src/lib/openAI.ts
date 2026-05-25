import { generateText, Output } from "ai";
import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import z from "zod";
import { AIResponse } from "@/types/ai";
const model = google('gemini-2.5-flash');

export async function generateResponse(answers: string): Promise<AIResponse<unknown>>  {
  try{
  const result = generateText({
    model: model,
    prompt: `
      Analyze this dental questionnaire.

      Questionnaire:
      ${JSON.stringify(answers)}

      Return:
      - risk level
      - possible issue
      - recommendations
      - explanation
    `,

    output: Output.object({
      schema: z.object({
        riskLevel: z.string(),
        possibleIssue: z.string(),
        recommendations: z.array(z.string()),
        explanation: z.string()
      })
    })
  });

  const ai_result = (await result)?.output;
  console.log("AI Result:", ai_result);

  return { success: true, data: ai_result };
}


catch (error: any) {
    return {
      success: false,
      error: {
        message: error?.message ?? "Unknown AI error",
        code: error?.code ?? error?.statusCode ?? "AI_ERROR",
      },
    }
  }
}