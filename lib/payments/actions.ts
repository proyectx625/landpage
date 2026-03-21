'use server';

import { redirect } from 'next/navigation';
import { createMPCheckoutSession, createMPCustomerPortalSession } from './mercadopago';
import { withTeam } from '@/lib/auth/middleware';

export const checkoutAction = withTeam(async (formData, team) => {
  const priceId = formData.get('priceId') as string;
  await createMPCheckoutSession({ team: team, priceId });
});

export const customerPortalAction = withTeam(async (_, team) => {
  await createMPCustomerPortalSession(team);
});
