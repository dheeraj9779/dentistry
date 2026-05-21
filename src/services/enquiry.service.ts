import connectToDatabase from "@/lib/db";
import Enquiry from "@/lib/models/enquiry";

export type EnquiryPayload = {
  fullName: string;
  email: string;
  phone: string;
  problemType: string;
  painlevel: string;
  message?: string;
};

export type EnquiryRecord = {
  fullName: string;
  email: string;
  phone: string;
  problemType: string;
  painlevel: string;
  message?: string;
  status: "pending" | "resolved";
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export async function createEnquiry(data: EnquiryPayload) {
  await connectToDatabase();
  console.log("Creating enquiry with data:", data);
  return await Enquiry.create(data);
}

export async function getEnquiries(): Promise<EnquiryRecord[]> {
  await connectToDatabase();
  return await Enquiry.find().sort({ createdAt: -1 }).lean();
}
