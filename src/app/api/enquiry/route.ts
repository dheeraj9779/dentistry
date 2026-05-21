import { createEnquiry, getEnquiries } from "@/services/enquiry.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const enquiries = await getEnquiries();
    return NextResponse.json({ enquiries }, { status: 200 });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return NextResponse.json({ success: false, error: (error as Error)?.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, problemType, painlevel, message } = await request.json();
    console.log("Received enquiry data:", { fullName, email, phone, problemType, painlevel, message });
    await createEnquiry({ fullName, email, phone, problemType, painlevel, message });
    return NextResponse.json({ message: true }, { status: 200 });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json({ success: false, error: (error as Error)?.message }, { status: 500 });
  }
}
