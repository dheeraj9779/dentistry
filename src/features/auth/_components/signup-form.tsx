'use client';

import React from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button, message } from 'antd';
import { motion } from 'motion/react';
import { signupSchema, SignupFormInputs } from '@/validations/auth.schema';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const SignupForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = useWatch({ control, name: 'password' });

  const onSubmit = async (data: SignupFormInputs) => {
    setIsLoading(true);
    try {
      // Call signup API
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        message.error(error.error || 'Signup failed. Please try again.');
        return;
      }

      message.success('Account created successfully! Signing you in...');

      // Auto sign in after signup
      const signInResult = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!signInResult?.ok) {
        message.error('Please sign in with your credentials');
        router.push('/login');
        return;
      }

      router.push('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      message.error((error as Error)?.message || 'An error occurred during signup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-center text-gray-600">Join us today</p>
      </motion.div>

      <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Full Name
          </label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter your full name"
                size="large"
                status={errors.fullName ? 'error' : ''}
                className="rounded-lg"
                disabled={isLoading}
              />
            )}
          />
          {errors.fullName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.fullName.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Enter your email"
                size="large"
                status={errors.email ? 'error' : ''}
                className="rounded-lg"
                disabled={isLoading}
              />
            )}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.email.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Create a strong password"
                size="large"
                status={errors.password ? 'error' : ''}
                className="rounded-lg"
                disabled={isLoading}
              />
            )}
          />
          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.password.message}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: password ? 1 : 0 }}
            className="text-xs text-gray-600 mt-2 space-y-1"
          >
            <p>Password requirements:</p>
            <p className={password?.length >= 6 ? 'text-green-600' : ''}>
              ✓ At least 6 characters
            </p>
            <p className={/[A-Z]/.test(password || '') ? 'text-green-600' : ''}>
              ✓ One uppercase letter
            </p>
            <p className={/[0-9]/.test(password || '') ? 'text-green-600' : ''}>
              ✓ One number
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Confirm Password
          </label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Confirm your password"
                size="large"
                status={errors.confirmPassword ? 'error' : ''}
                className="rounded-lg"
                disabled={isLoading}
              />
            )}
          />
          {errors.confirmPassword && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.confirmPassword.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            className="w-full font-semibold"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};
