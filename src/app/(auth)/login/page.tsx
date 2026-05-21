import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth.config';
import { redirect } from 'next/navigation';
import { LoginForm } from '@/features/auth/_components/login-form';

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <LoginForm />
    </div>
  );
}
