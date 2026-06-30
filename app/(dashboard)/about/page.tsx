import { FadeIn } from '@/components/fade-in';
import { Activity, Shield, Zap, Target, Heart, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">
              Quiénes Somos
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Somos un equipo apasionado por la tecnología de fibra óptica.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                <strong className="text-gray-900 dark:text-white">FTTH Monitor</strong> nació de la necesidad real de los proveedores de internet (ISPs) de tener una herramienta simple, rápida y efectiva para monitorear sus redes de fibra óptica.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mt-6">
                Sabemos lo frustrante que es cuando un cliente llama reportando un corte y no sabes dónde está el problema. Por eso creamos una plataforma que te permite ver el estado de cada ONT, cada splitter y cada segmento de fibra en tiempo real, desde un solo lugar.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Nuestros Valores</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-950 mb-4">
                  <Target className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Simplicidad</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Creemos que la mejor herramienta es la que puedes usar sin manual. Interfaz intuitiva, sin curva de aprendizaje.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-950 mb-4">
                  <Zap className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Rapidez</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Información en tiempo real. Cada segundo cuenta cuando hay un corte afectando a tus clientes.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-950 mb-4">
                  <Heart className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Compromiso</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Estamos contigo en cada paso. Soporte real de personas que entienden redes FTTH.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Nuestra Misión</h2>
          </FadeIn>
          <FadeIn>
            <div className="bg-blue-600 rounded-3xl p-10 text-center">
              <Globe className="h-12 w-12 text-white mx-auto mb-6" />
              <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto">
                Democratizar el monitoreo de redes FTTH para que cualquier ISP, sin importar su tamaño, pueda ofrecer un servicio de calidad a sus clientes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
