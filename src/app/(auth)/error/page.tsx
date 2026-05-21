'use client';

import React from 'react';
import { Button, Card, Result } from 'antd';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const errorMessages: Record<string, string> = {
    'CredentialsSignin': 'Invalid email or password',
    'EmailSignInError': 'Invalid email address',
    'SessionCallback': 'Session error occurred',
    'default': 'An authentication error occurred',
  };

  const message = errorMessages[error as string] || errorMessages['default'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-orange-50 px-4">
      <Card className="w-full max-w-md">
        <Result
          status="error"
          title="Authentication Error"
          subTitle={message}
          extra={
            <div className="space-y-2">
              <Link href="/login" className="block">
                <Button type="primary" className="w-full">
                  Try Again
                </Button>
              </Link>
              <Link href="/" className="block">
                <Button className="w-full">
                  Go Home
                </Button>
              </Link>
            </div>
          }
        />
      </Card>
    </div>
  );
}
