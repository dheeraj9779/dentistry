import { z } from 'zod';

export const bookingSchema = z.object({
  userId: z.string().optional(),
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  serviceType: z.string().min(1),
  date: z.string().min(1),
  time: z.string().optional(),
  notes: z.string().optional(),
});

export type BookingFormInputs = z.infer<typeof bookingSchema>;
