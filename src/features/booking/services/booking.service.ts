import connectToDatabase from '@/lib/db';
import Booking, { IBooking } from '@/features/booking/models/booking';

export type BookingPayload = {
  userId?: string;
  fullName: string;
  email: string;
  phone?: string;
  serviceType: string;
  date: string | Date;
  time?: string;
  notes?: string;
};

export type BookingRecord = {
  _id?: string;
  userId?: string;
  fullName: string;
  email: string;
  phone?: string;
  serviceType: string;
  date: string | Date;
  time?: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export async function createBooking(data: BookingPayload): Promise<IBooking> {
  await connectToDatabase();
  const payload = { ...data, date: new Date(data.date) };
  const created = await Booking.create(payload as unknown as Partial<IBooking>);
  return created as IBooking;
}

export async function getBookings(userId?: string): Promise<IBooking[]> {
  await connectToDatabase();
  const query = userId ? { userId } : {};
  return await Booking.find(query).sort({ createdAt: -1 }).lean();
}

const bookingService = { createBooking, getBookings };

export default bookingService;
