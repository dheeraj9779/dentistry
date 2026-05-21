import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          throw new Error(result.error || 'Login failed');
        }

        router.push('/dashboard');
        return result;
      } catch (error) {
        throw error;
      }
    },
    [router]
  );

  const logout = useCallback(async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  }, []);

  return {
    session,
    isAuthenticated,
    isLoading,
    user: session?.user,
    login,
    logout,
  };
};

export { useSession, signIn, signOut };
