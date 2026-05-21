import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IEnquiry extends Document {
  fullName: string;
  email: string;
  phone: string;
  problemType: string;
  painlevel: string;
  message: string;
  status: 'pending' | 'resolved';
}

const EnquirySchema = new Schema<IEnquiry>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  phone: { type: String, required: true },
  problemType: { type: String, required: true },
  painlevel: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' },
}, { timestamps: true });

// Prevent model overwrite in dev
const Enquiry: Model<IEnquiry> = (mongoose.models.Enquiry as Model<IEnquiry>) || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);

export default Enquiry;
