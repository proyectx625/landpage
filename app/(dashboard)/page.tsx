import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Eye, Zap, Shield, Bell, Map, Activity, Users, Github, Linkedin, Twitter } from 'lucide-react';
import { NetworkMap } from './network-map';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/fade-in';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <FadeIn direction="left" className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl md:text-6xl">
                Monitorea tu Red <span className="text-blue-600">FTTH</span>
                <span className="block text-gray-700 dark:text-gray-300">con Precisión Láser</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
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
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="w-full">
                <NetworkMap />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Cómo Funciona</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Monitorea tu red en 2 pasos
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Conecta tu OLT</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Conecta tu equipo OLT a nuestra plataforma en minutos. Sin instalaciones complejas ni interrupciones.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. Monitorea todo</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Visualiza el estado de cada ONT, potencia óptica y recibe alertas instantáneas ante cualquier corte.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Mapa Interactivo</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Visualiza toda tu red en tiempo real
            </p>
          </FadeIn>

          <FadeIn>
            <img
              src="/mapa-interactivo.png"
              alt="Mapa interactivo de monitoreo FTTH"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">¿Por qué FTTH Monitor?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ventajas que marcan la diferencia
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <AdvantageCard
                icon={<Zap className="h-8 w-8 text-blue-600" />}
                title="Implementación rápida"
                description="Conecta tu OLT en minutos. Sin instalaciones complejas ni interrupciones en tu red."
              />
            </StaggerItem>
            <StaggerItem>
              <AdvantageCard
                icon={<Shield className="h-8 w-8 text-blue-600" />}
                title="100% en la nube"
                description="Sin servidores locales. Accede a tu panel desde cualquier lugar, en cualquier momento."
              />
            </StaggerItem>
            <StaggerItem>
              <AdvantageCard
                icon={<Bell className="h-8 w-8 text-blue-600" />}
                title="Alertas inteligentes"
                description="Notificaciones automáticas por email y Telegram. Anticípate a los problemas."
              />
            </StaggerItem>
            <StaggerItem>
              <AdvantageCard
                icon={<Map className="h-8 w-8 text-blue-600" />}
                title="Visualización geográfica"
                description="Ubica cada ONT y splitter en mapas reales. Encuentra fallos por zona."
              />
            </StaggerItem>
            <StaggerItem>
              <AdvantageCard
                icon={<Activity className="h-8 w-8 text-blue-600" />}
                title="Reportes automáticos"
                description="Genera informes de rendimiento de tu red. Comparte métricas con tu equipo."
              />
            </StaggerItem>
            <StaggerItem>
              <AdvantageCard
                icon={<Users className="h-8 w-8 text-blue-600" />}
                title="Soporte dedicado"
                description="Equipo de soporte especializado en redes FTTH. Te acompañamos en cada paso."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 text-left">
                <div className="lg:self-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">¿Listo para optimizar tu red?</span>
                    <span className="block text-blue-200">Comienza hoy con tu prueba gratuita.</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-blue-100">
                    Reduce el tiempo de inactividad y mejora la satisfacción de tus clientes.
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
          </FadeIn>
        </div>
      </section>

      <footer className="py-16 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <h3 className="text-white text-lg font-bold mb-4">FTTH Monitor</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plataforma de monitoreo en tiempo real para redes de fibra óptica FTTH.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">Quiénes Somos</Link></li>
                <li><Link href="/sign-up" className="hover:text-white transition-colors">Crear Cuenta</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:soporte@ftthmonitor.com" className="hover:text-white transition-colors">soporte@ftthmonitor.com</a></li>
                <li>
                  <a href="https://github.com/ftthmonitor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/ftthmonitor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ftthmonitor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <Twitter className="h-4 w-4" /> Twitter / X
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} FTTH Monitor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function AdvantageCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
