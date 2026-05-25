"use client";

import { motion } from 'motion/react';
import { Button, Card, Empty, Spin } from 'antd';
import Link from 'next/link';
import { useBookingsQuery } from '@/features/booking/services/booking.query';
import BookingCard from '@/features/booking/_components/BookingCard';
import { useAuth } from '@/hooks/useAuth';

export default function BookingsPage() {
    const { user } = useAuth();
  const { data: bookings, isLoading, isError } = useBookingsQuery(user?.email || '');

  const total = bookings?.length ?? 0;
  const confirmed = bookings?.filter((item) => item.status === 'confirmed').length ?? 0;
  const pending = bookings?.filter((item) => item.status === 'pending').length ?? 0;
  const cancelled = bookings?.filter((item) => item.status === 'cancelled').length ?? 0;

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 px-8 py-10 shadow-[0_40px_120px_rgba(15,23,42,0.55)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Appointment overview</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">Customer booking cards</h1>
              <p className="mt-4 max-w-xl text-slate-300 text-lg leading-8">
                Review all upcoming and recent appointment requests in one clean, professional dashboard. The cards below show the customer, service type, date, time, and notes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/booking">
                <Button type="default" className="rounded-full px-8 py-3 font-semibold text-slate-900">New booking</Button>
              </Link>
              <Link href="/dashboard">
                <Button type="primary" className="rounded-full px-8 py-3 font-semibold">Back to dashboard</Button>
              </Link>
            </div>
          </div>
        </motion.section>

        <section className="mt-10 grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            <Card className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Total bookings</p>
              <p className="mt-3 text-4xl font-semibold text-white">{total}</p>
            </Card>
            <Card className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Confirmed</p>
              <p className="mt-3 text-4xl font-semibold text-emerald-400">{confirmed}</p>
            </Card>
            <Card className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Pending</p>
              <p className="mt-3 text-4xl font-semibold text-amber-400">{pending}</p>
            </Card>
            <Card className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Cancelled</p>
              <p className="mt-3 text-4xl font-semibold text-rose-400">{cancelled}</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="overflow-hidden rounded-[2rem] bg-slate-900/95 border border-slate-800 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
          >
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Booking cards</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Appointment list</h2>
              </div>
              <p className="text-sm text-slate-400">Showing the latest booking requests from users.</p>
            </div>

            {isLoading ? (
              <div className="flex min-h-[240px] items-center justify-center">
                <Spin size="large" />
              </div>
            ) : isError ? (
              <div className="py-16 text-center text-slate-300">Unable to load bookings. Please try again later.</div>
            ) : !bookings?.length ? (
              <Empty description="No bookings yet" className="py-16" />
            ) : (
              <div className="grid gap-6 xl:grid-cols-2">
                {bookings.map((booking) => (
                  <BookingCard key={`${booking.email}-${booking.date}-${booking.serviceType}`} booking={booking} />
                ))}
              </div>
            )}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
