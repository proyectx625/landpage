import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Map, Bell, FileText, Zap, Shield, Search } from 'lucide-react';
import { NetworkMap } from './network-map';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Monitorea tu Red <span className="text-blue-600">FTTH</span>
                <span className="block text-gray-700">con Precisión Láser</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Control total sobre tu red de fibra óptica. Visualiza el estado de ONTs, 
                potencia óptica y cortes de fibra en tiempo real desde una única plataforma.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full px-8 py-6"
                  >
                    Empieza Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg rounded-full px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Ver Planes
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <NetworkMap />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Funcionalidades</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Todo lo que necesitas para tu red
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<Activity className="h-8 w-8 text-blue-600" />}
              title="Estado de ONTs en tiempo real"
              description="Monitorización constante de cada terminal óptico. Detecta desconexiones al instante."
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Potencia Óptica"
              description="Gráficas detalladas de los niveles de dBm. Identifica atenuaciones antes de que afecten al cliente."
            />
            <FeatureCard 
              icon={<Map className="h-8 w-8 text-blue-600" />}
              title="Mapas Georreferenciados"
              description="Visualiza tu topología de red sobre mapas reales. Ubica cajas, splitters y clientes."
            />
            <FeatureCard 
              icon={<Bell className="h-8 w-8 text-blue-600" />}
              title="Alertas por Cortes"
              description="Sistema de notificaciones inteligentes vía email o Telegram ante fallos críticos de fibra."
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-blue-600" />}
              title="Documentación de Red"
              description="Almacena planos, diagramas de empalme y registros técnicos en un solo lugar seguro."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Seguridad de Red"
              description="Detección de accesos no autorizados y monitorización de tráfico anómalo en la OLT."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 text-left">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">¿Listo para optimizar tu red?</span>
                  <span className="block text-blue-200">Únete a cientos de ISPs hoy mismo.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-100">
                  Reduce el tiempo de inactividad y mejora la satisfacción de tus clientes con la herramienta de monitorización más avanzada del mercado.
                </p>
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="mt-8 bg-white text-blue-600 hover:bg-blue-50 text-lg rounded-full px-8 py-6 font-semibold"
                  >
                    Crear cuenta gratuita
                  </Button>
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 flex items-center justify-center p-12">
              <div className="bg-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 w-full h-full flex flex-col justify-center">
                 <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                 </div>
                 <div className="space-y-3">
                    <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse delay-75"></div>
                    <div className="h-4 bg-white/20 rounded w-5/6 animate-pulse delay-150"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} FTTH Monitor. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
