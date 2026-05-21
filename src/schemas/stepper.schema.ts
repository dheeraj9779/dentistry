import { z } from "zod";

export const stepperFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Minimum 6 characters"),
  problemType: z.string().min(1, "Select Problem"),
  painlevel: z.string().min(1, "Select pain level"),
  message: z.string().max(500, "Message must be at most 500 characters").optional(),
});

export type StepperFormData = z.infer<typeof stepperFormSchema>;