import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { EnquiryPayload, EnquiryRecord } from "@/features/enquiry/services/enquiry.service";

export const enquiryKeys = {
  all: ["enquiries"] as const,
  list: () => [...enquiryKeys.all, "list"] as const,
  detail: (id: string) => [...enquiryKeys.all, "detail", id] as const,
};

export const fetchEnquiries = async (): Promise<EnquiryRecord[]> => {
  const response = await api.get<{ enquiries: EnquiryRecord[] }>("/api/enquiry");
  return response.enquiries;
};

export const submitEnquiry = async (payload: EnquiryPayload) => {
  return api.post<{ message: boolean }>("/api/enquiry", payload);
};

export function useEnquiriesQuery() {
  return useQuery({
    queryKey: enquiryKeys.list(),
    queryFn: fetchEnquiries,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}

export function useSubmitEnquiryMutation() {
  return useMutation({
    mutationFn: submitEnquiry
  });
}
