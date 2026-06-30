import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'FTTH Monitor - Monitoreo de Red FTTH en Tiempo Real',
  description: 'Plataforma de monitoreo en tiempo real para redes de fibra óptica FTTH. Visualiza ONTs, potencia óptica y cortes desde una única plataforma.',
  openGraph: {
    title: 'FTTH Monitor - Monitoreo de Red FTTH',
    description: 'Control total sobre tu red de fibra óptica. Monitoreo en tiempo real de ONTs, potencia óptica y alertas.',
    siteName: 'FTTH Monitor',
    locale: 'es_ES',
    type: 'website',
  }
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={manrope.className}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var saved = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (saved === 'dark' || (!saved && prefersDark)) {
              document.documentElement.classList.add('dark');
            }
          })();
        ` }} />
      </head>
      <body className="min-h-[100dvh] bg-background text-foreground">
          <ThemeProvider>
              {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
