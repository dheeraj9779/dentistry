'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Card, Spin } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  console.log("Logged in user", user)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <p className="text-center mb-4">You are not authenticated</p>
          <Link href="/login">
            <Button type="primary" className="w-full">
              Go to Login
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-linear-to-br from-blue-400 to-blue-600 rounded-full p-3">
                  <UserOutlined className="text-white text-xl" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Welcome, {user?.name || user?.email}!</h1>
                  <p className="text-gray-600">You&apos;re successfully authenticated with NextAuth</p>
                </div>
              </div>
              <Button
                type="primary"
                danger
                icon={<LogoutOutlined />}
                onClick={logout}
                size="large"
              >
                Logout
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card title="User Information" className="mb-6">
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="text-lg font-semibold">{user?.email}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Name</p>
                <p className="text-lg font-semibold">{user?.name || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">User ID</p>
                <p className="text-lg font-semibold">{user?.id || 'N/A'}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card title="Quick Stats" className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Total Sessions</p>
                <p className="text-2xl font-bold text-blue-600">1</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Account Status</p>
                <p className="text-2xl font-bold text-green-600">Active</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Last Login</p>
                <p className="text-2xl font-bold text-purple-600">Just now</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
