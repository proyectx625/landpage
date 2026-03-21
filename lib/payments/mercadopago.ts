// Mock of MercadoPago SDK for demonstration and integration
import { redirect } from 'next/navigation';
import { Team } from '@/lib/db/schema';
import { getUser } from '@/lib/db/queries';

// Normally you would do:
// import { MercadoPagoConfig, Preference } from 'mercadopago';
// const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });

import { mockPrices, mockProducts } from '@/lib/mock-data';

export async function getMPPrices() {
  // Normally fetch from MercadoPago or DB
  return mockPrices;
}

export async function getMPProducts() {
  // Normally fetch from MercadoPago or DB
  return mockProducts;
}

export async function createMPCheckoutSession({
  team,
  priceId
}: {
  team: Team | null;
  priceId: string;
}) {
  const user = await getUser();

  if (!team || !user) {
    redirect(`/sign-up?redirect=checkout&priceId=${priceId}`);
  }

  // If there's no real MP_ACCESS_TOKEN, we mock the redirection
  if (!process.env.MP_ACCESS_TOKEN) {
    console.log('MercadoPago is not configured. Mocking checkout preference.');
    // Simulated MP checkout URL
    redirect(`https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=mock_pref_${priceId}`);
  }

  // Implementation logic (Real)
  /*
  const preference = new Preference(client);
  const result = await preference.create({
    body: {
      items: [
        {
          id: priceId,
          title: 'FTTH Monitor Plan',
          quantity: 1,
          unit_price: 1000, // Example
        }
      ],
      back_urls: {
        success: `${process.env.BASE_URL}/api/payments/mercadopago/success`,
        failure: `${process.env.BASE_URL}/api/payments/mercadopago/failure`,
      },
      auto_return: 'approved',
    }
  });
  redirect(result.init_point!);
  */
}

export async function createMPCustomerPortalSession(team: Team) {
  // MercadoPago doesn't have a direct "Customer Portal" like Stripe.
  // Usually you would redirect to your own "Billing" page or MP's subscriptions dashboard.
  redirect('/dashboard/general');
}
