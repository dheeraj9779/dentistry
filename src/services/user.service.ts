import connectToDatabase from '@/lib/db';
import User, { IUser } from '@/lib/models/user';
import bcrypt from 'bcryptjs';

export async function findUserByEmail(email: string): Promise<IUser | null> {
  await connectToDatabase();
  return User.findOne({ email: email.toLowerCase() }).exec();
}

export async function findUserById(id: string): Promise<IUser | null> {
  await connectToDatabase();
  return User.findById(id).exec();
}

export async function createLocalUser(data: { name: string; email: string; password: string; }): Promise<IUser> {
  await connectToDatabase();
  const existing = await User.findOne({ email: data.email.toLowerCase() }).exec();
  if (existing) throw new Error('User already exists');

  const passwordHash = await bcrypt.hash(data.password, 10);
  const created = await User.create({
    name: data.name,
    email: data.email.toLowerCase(),
    passwordHash,
  });

  return created as IUser;
}

export const verifyPassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export default {
  findUserByEmail,
  findUserById,
  createLocalUser,
  verifyPassword,
};
