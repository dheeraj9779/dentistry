"use client";

import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, App } from 'antd';
import { AppstoreOutlined, CalendarOutlined, ClockCircleOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { useRouter } from 'next/navigation';
import { useSubmitBookingMutation } from '@/features/booking/services/booking.query';
import { motion } from 'motion/react';import { useAuth } from '@/hooks/useAuth';
const { TextArea } = Input;

export default function BookingForm() {
  const { message } = App.useApp();
  const [form] = Form.useForm<FormValues>();
  const router = useRouter();
  const { user } = useAuth();
  const mutation = useSubmitBookingMutation();

  type FormValues = {
    fullName: string;
    email: string;
    phone?: string;
    serviceType: string;
    date: Dayjs;
    time?: Dayjs;
    notes?: string;
  };

  const onFinish = async (values: FormValues) => {
    try {
      const payload = {
        userId: user?.id,
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        serviceType: values.serviceType,
        date: values.date.toISOString(),
        time: values.time ? (values.time as Dayjs).format('HH:mm') : undefined,
        notes: values.notes,
      };

      await mutation.mutateAsync(payload);
      message.success('Booking created successfully');
      form.resetFields();
      router.push('/dashboard');
    } catch (err: unknown) {
      console.error(err);
      const msg = err instanceof Error ? err.message : 'Failed to create booking';
      message.error(msg);
    }
  };

  // Coerce mutation state safely to read loading status without using `any`
  const mutationState = mutation as unknown as { isLoading?: boolean; status?: string };
  const isSubmitting = Boolean(mutationState.isLoading) || mutationState.status === 'loading';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-2xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_40px_120px_rgba(15,23,42,0.08)] border border-slate-200 dark:border-slate-800"
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="mb-8">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}>
            <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-200">
              Premium appointment
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Quick booking</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Tell us a little about yourself and select a convenient day and time.</p>
          </motion.div>
        </div>

        <Form.Item name="fullName" label="Full name" rules={[{ required: true }]}> 
          <Input prefix={<UserOutlined  className="text-cyan-500! mr-1"/>} placeholder="Full name" size="large" className="input_cls" />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}> 
          <Input prefix={<MailOutlined className="text-cyan-500! mr-1" />} placeholder="Email" size="large" className="input_cls" />
        </Form.Item>

        <Form.Item name="phone" label="Phone">
          <Input prefix={<PhoneOutlined className="text-cyan-500! mr-1" />} placeholder="Phone" size="large" className="input_cls" />
        </Form.Item>

        <Form.Item name="serviceType" label="Service" rules={[{ required: true }]}> 
          <Select
            className="input_cls"
            size='large'
            prefix={<AppstoreOutlined className="text-cyan-500! mr-1"/>}
            options={[
              { label: 'Consultation', value: 'consultation' },
              { label: 'Cleaning', value: 'cleaning' },
              { label: 'Extraction', value: 'extraction' },
            ]}
          />
        </Form.Item>

        <div className="grid gap-4 lg:grid-cols-2">
          <Form.Item name="date" label="Date" rules={[{ required: true }]}> 
            <DatePicker
              className="w-full input_cls"
              disabledDate={(current) => current && current < dayjs().startOf('day')}
              placeholder="Select date"
              size='large'
              suffixIcon={<CalendarOutlined className='text-cyan-500!'/>}
            />
          </Form.Item>

          <Form.Item name="time" label="Time" > 
            <TimePicker className="w-full input_cls" size='large' format="HH:mm" suffixIcon={<ClockCircleOutlined className='text-cyan-500!' />} />
          </Form.Item>
        </div>

        <Form.Item name="notes" label="Notes">
          <TextArea rows={4} className="input_cls" placeholder="Any details we should know?" />
        </Form.Item>

        <Form.Item>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="btn_cls w-full rounded-full" size='large' htmlType="submit" loading={isSubmitting}>
              Book Appointment
            </Button>
          </motion.div>
        </Form.Item>
      </Form>
    </motion.div>
  );
}
