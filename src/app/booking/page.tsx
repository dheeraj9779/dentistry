"use client";
import BookingForm from '@/features/booking/_components/BookingForm';
import { motion } from 'motion/react';



export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/95 shadow-[0_40px_120px_rgba(15,23,42,0.65)]"
        >
          <div className="bg-linear-to-r from-cyan-600 via-sky-500 to-blue-500 px-8 py-12 text-white">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-100">Appointment booking</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight">Schedule your visit</h1>
            <p className="mt-4 max-w-3xl text-slate-100 text-lg leading-8">
              Use our streamlined booking form to reserve your appointment. We make the process quick and visually comfortable, just like the questionnaire experience.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.98fr] p-6 md:p-8 lg:p-10">
            <aside className="order-2 lg:order-1 rounded-[1.75rem] bg-slate-950/80 p-8 text-slate-100 shadow-lg border border-slate-800">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Healthy smile</span>
              <h2 className="mt-5 text-2xl font-semibold">What to expect</h2>
              <p className="mt-3 text-slate-300 leading-7">
                Book a consultation with our dental team and get tailored advice, follow-up planning, and friendly support.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>• Easy booking flow with smart form inputs.</p>
                <p>• Flexible appointment times and service options.</p>
                <p>• Secure patient details and reminders.</p>
                <p>• Personalized notes field for your request.</p>
              </div>
            </aside>

            <div className="order-1 lg:order-2">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:bg-slate-900 dark:border dark:border-slate-800">
                <BookingForm />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
