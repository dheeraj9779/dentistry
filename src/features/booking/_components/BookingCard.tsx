import { Card, Tag } from 'antd';
import dayjs from 'dayjs';
import type { BookingRecord } from '@/features/booking/services/booking.service';

const statusColors: Record<BookingRecord['status'], string> = {
  pending: 'orange',
  confirmed: 'green',
  cancelled: 'red',
};

export default function BookingCard({ booking }: { booking: BookingRecord }) {
  return (
    <Card
      hoverable
      className="rounded-[1.75rem] border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950"
      bodyStyle={{ padding: '1.5rem' }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {booking.serviceType}
            </span>
            <Tag color={statusColors[booking.status]}>{booking.status}</Tag>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{booking.fullName}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{booking.email}</p>
          {booking.phone ? <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Phone: {booking.phone}</p> : null}
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500 dark:text-slate-400">Booked</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            {dayjs(booking.date).format('DD MMM YYYY')}
          </p>
          {booking.time ? <p className="text-sm text-slate-500 dark:text-slate-400">{booking.time}</p> : null}
        </div>
      </div>

      {booking.notes ? (
        <div className="mt-6 rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          <p className="font-medium text-slate-800 dark:text-slate-100">Notes</p>
          <p className="mt-2 leading-6">{booking.notes}</p>
        </div>
      ) : null}
    </Card>
  );
}
