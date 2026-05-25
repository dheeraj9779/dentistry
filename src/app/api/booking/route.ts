import { NextResponse } from 'next/server';
import { createBooking, getBookings } from '@/features/booking/services/booking.service';
import { bookingSchema } from '@/features/booking/validation/booking.schema';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get('email') || undefined;
    const bookings = await getBookings(email);
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ success: false, message: (error as Error)?.message || "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = bookingSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json({ success: false, message: 'Invalid booking data', details: validated.error.issues }, { status: 400 });
    }

    const booking = await createBooking(validated.data);
    return NextResponse.json({ success: true, booking, message: 'Booking created' }, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ success: false, message: (error as Error)?.message || "Internal server error" }, { status: 500 });
  }
}
