import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function ActivityPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 dark:text-white mb-6">
        Registro de Actividad
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Actividad Reciente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center py-12">
            <AlertCircle className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Aún no hay actividad
            </h3>
            <p className="text-sm text-gray-500 max-w-sm">
              Cuando realices acciones como iniciar sesión o actualizar tu cuenta, aparecerán aquí.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
