'use server';

import { z } from 'zod';
import { setSession, getSessionUser } from '@/lib/auth/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { validatedAction } from '@/lib/auth/middleware';

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100),
});

export const signIn = validatedAction(signInSchema, async (data) => {
  const { email } = data;
  // Sin base de datos: sesión demo con id fijo
  await setSession({ id: 1, email });
  return redirect('/dashboard');
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  inviteId: z.string().optional(),
});

export const signUp = validatedAction(signUpSchema, async (data) => {
  const { email } = data;
  // Sin base de datos: sesión demo con id fijo
  await setSession({ id: 1, email });
  return redirect('/dashboard');
});

export async function signOut() {
  (await cookies()).delete('session');
  redirect('/sign-in');
}
