import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBooking extends Document {
  userId?: string;
  fullName: string;
  email: string;
  phone?: string;
  serviceType: string;
  date: Date;
  time?: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    userId: { type: String },
    fullName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, index: true },
    phone: { type: String },
    serviceType: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String },
    notes: { type: String },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  },
  { timestamps: true }
);

const Booking: Model<IBooking> = (mongoose.models.Booking as Model<IBooking>) || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
