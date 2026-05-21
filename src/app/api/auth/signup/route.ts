import { NextRequest, NextResponse } from 'next/server';
import { signupSchema } from '@/validations/auth.schema';
import { createLocalUser, findUserByEmail } from '@/lib/user-store';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validatedData = signupSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: validatedData.error.issues },
        { status: 400 }
      );
    }

    const { fullName, email, password } = validatedData.data;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'A user with this email already exists' },
        { status: 409 }
      );
    }

    const user = await createLocalUser({
      name: fullName,
      email,
      password,
    });

    return NextResponse.json(
      {
        message: 'User registered successfully',
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: (error as Error)?.message || 'An error occurred during signup' },
      { status: 500 }
    );
  }
}
