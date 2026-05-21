import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import { BookingPayload, BookingRecord } from './booking.service';

export const bookingKeys = {
  all: ['bookings'] as const,
  list: (userId?: string) => [...bookingKeys.all, 'list', userId ?? 'all'] as const,
  detail: (id: string) => [...bookingKeys.all, 'detail', id] as const,
};

export const fetchBookings = async (userId?: string): Promise<BookingRecord[]> => {
  const url = userId ? `/api/booking?userId=${encodeURIComponent(userId)}` : '/api/booking';
  const response = await api.get<{ bookings: BookingRecord[] }>(url);
  return response.bookings;
};

export const submitBooking = async (payload: BookingPayload) => {
  return api.post<{ booking: BookingRecord }>('/api/booking', payload);
};

export function useBookingsQuery(userId?: string) {
  return useQuery({
    queryKey: bookingKeys.list(userId),
    queryFn: () => fetchBookings(userId),
    staleTime: 1000 * 60 * 5,
    enabled: Boolean(userId),
  });
}

export function useSubmitBookingMutation() {
  return useMutation({ mutationFn: submitBooking });
}
