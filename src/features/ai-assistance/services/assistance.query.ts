import { api } from "@/lib/api-client";
import { useMutation } from "@tanstack/react-query";
import { DentalAnalysisResponse } from "@/types/ai";

export const sendAnswer = async (payload: { answer: Record<string, string> }) => {
  return api.post<DentalAnalysisResponse>("/api/ai-assistance", payload);
};

export function useAssistanceQuery() {
    return useMutation({
        mutationFn: sendAnswer
    })
}