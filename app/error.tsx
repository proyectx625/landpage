'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-4 mb-6">
        <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Algo salió mal
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        Ha ocurrido un error inesperado. Por favor intenta de nuevo o regresa al inicio.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset} variant="outline" className="rounded-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Reintentar
        </Button>
        <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Ir al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}
