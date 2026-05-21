import { NextResponse } from 'next/server';
import { createBooking, getBookings } from '@/features/booking/services/booking.service';
import { bookingSchema } from '@/features/booking/validation/booking.schema';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId') || undefined;
    const bookings = await getBookings(userId);
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ success: false, error: (error as Error)?.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = bookingSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json({ error: 'Invalid booking data', details: validated.error.issues }, { status: 400 });
    }

    const booking = await createBooking(validated.data);
    return NextResponse.json({ booking, message: 'Booking created' }, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ success: false, error: (error as Error)?.message }, { status: 500 });
  }
}
