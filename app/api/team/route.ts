import { getSessionUser } from '@/lib/auth/session';

export async function GET() {
  const user = await getSessionUser();
  // Sin base de datos: retorna datos mínimos del usuario de sesión
  if (!user) return Response.json(null);
  return Response.json({
    id: user.id,
    email: user.email,
    name: null,
    role: 'owner',
    planName: null,
    subscriptionStatus: null,
    teamMembers: [],
  });
}
