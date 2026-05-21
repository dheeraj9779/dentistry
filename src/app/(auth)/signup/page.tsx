import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth.config';
import { redirect } from 'next/navigation';
import { SignupForm } from '@/features/auth/_components/signup-form';

export default async function SignupPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <SignupForm />
    </div>
  );
}
