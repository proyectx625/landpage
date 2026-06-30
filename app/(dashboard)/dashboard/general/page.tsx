'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function GeneralPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 dark:text-white mb-6">
        Configuración General
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Configuración de la Cuenta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            La configuración de cuenta estará disponible próximamente.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
