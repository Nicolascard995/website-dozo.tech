import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart, LineChart, BrainCircuit, Database, GitBranch, Check } from "lucide-react"
import LeadMagnetForm from "@/components/lead-magnet-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm bg-zinc-100">
                  Ciencia de Datos & Soluciones de IA
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Transformando Datos <span className="text-primary">en Insights Estratégicos</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Convierte los datos de tu negocio en soluciones poderosas utilizando análisis avanzado e inteligencia
                artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/services">
                    Explorar Servicios <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Agendar Consulta</Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero-dashboard.jpg"
                  alt="Dashboard de visualización de datos"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Brand Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-2/5">
              <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
              <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Nicolás Cardozo"
              fill
              className="object-cover rounded-lg shadow-lg"
          />
              </div>
            </div>
            <div className="w-full lg:w-3/5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Perfil Técnico: Nicolás Cardozo | Data Science & Entrepreneurship
              </h2>
              <div className="prose prose-zinc max-w-none">
                <p className="text-lg">
                  Mi trayectoria profesional rompe los esquemas tradicionales: de chef ejecutivo a científico de datos,
                  transformo datos en decisiones estratégicas que impulsan el crecimiento empresarial. Con una formación
                  rigurosa en Platzi, he desarrollado la capacidad de convertir información compleja en insights
                  accionables, combinando mi experiencia en gestión con un enfoque técnico y matemático preciso.
                </p>
                <p className="text-lg">
                  La ciencia de datos no es solo mi profesión, es mi herramienta para resolver problemas empresariales
                  complejos. Cada modelo que desarrollo, cada análisis que construyo, está diseñado para generar valor
                  real: reducir costos, optimizar procesos y crear ventajas competitivas sostenibles. Mi metodología
                  integra machine learning, estadística avanzada y comprensión profunda del contexto empresarial.
                </p>
                <p className="text-lg">
                  Como emprendedor técnico, entiendo que los datos son el nuevo capital intelectual. Mi objetivo es
                  democratizar el análisis avanzado, permitiendo que pequeñas y medianas empresas accedan a herramientas
                  de inteligencia artificial que antes estaban reservadas solo para corporaciones con grandes
                  presupuestos. Cada proyecto es una oportunidad de transformación, cada dato una historia por contar.
                </p>

                <blockquote className="italic text-lg font-medium border-l-4 border-primary pl-4 my-6">
                  "Los datos no mienten, cuentan historias. Mi trabajo es ser el traductor que convierte esas historias
                  en estrategias de éxito."
                </blockquote>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-8 w-1 bg-primary mr-3 rounded-full"></div>
                    Programación & Análisis
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">
                        Python (scikit-learn, Pandas, NumPy)
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Machine Learning</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Redes Neuronales</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">SQL & PostgreSQL</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">MLOps</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-8 w-1 bg-primary mr-3 rounded-full"></div>
                    Herramientas de Análisis
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Power BI</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Tableau</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Google Analytics</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Docker</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Kubernetes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-8 w-1 bg-primary mr-3 rounded-full"></div>
                    Especialidades
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">
                        Predicción de patrones de negocio
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Optimización de procesos</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Modelos predictivos</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Inteligencia competitiva</span>
                    </li>
                    <li className="flex items-start group">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">Transformación digital</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Impulsados por IA</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestras soluciones de vanguardia ayudan a las empresas a tomar decisiones basadas en datos y mantenerse
              por delante de la competencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo de IA</h3>
              <p className="text-muted-foreground mb-4">
                Soluciones de IA personalizadas adaptadas a las necesidades de tu negocio, desde análisis predictivo
                hasta procesamiento de lenguaje natural.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/services/ai-development">
                  Saber más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Análisis de Datos</h3>
              <p className="text-muted-foreground mb-4">
                Transforma datos sin procesar en insights accionables con análisis completo y visualización.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/services/data-analytics">
                  Saber más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Arquitectura de Datos</h3>
              <p className="text-muted-foreground mb-4">
                Diseño e implementación de infraestructura de datos robusta para almacenamiento, procesamiento y
                análisis eficientes.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/services/data-architecture">
                  Saber más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Service Card 4 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inteligencia de Negocios</h3>
              <p className="text-muted-foreground mb-4">
                Dashboards en tiempo real y sistemas de reportes para monitorear KPIs e impulsar el rendimiento del
                negocio.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/services/business-intelligence">
                  Saber más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Service Card 5 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automatización de Procesos</h3>
              <p className="text-muted-foreground mb-4">
                Optimiza operaciones con automatización inteligente de tareas repetitivas y flujos de trabajo complejos.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/services/process-automation">
                  Saber más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* View All Services */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">Descubre Todos los Servicios</h3>
              <Button asChild>
                <Link href="/services">
                  Ver Todos los Servicios <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce cómo nuestras soluciones han ayudado a empresas de diversos sectores a lograr resultados
              extraordinarios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dashboard de análisis de salud"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-2">Salud</Badge>
                <h3 className="text-xl font-semibold mb-2">Sistema Predictivo de Atención al Paciente</h3>
                <p className="text-muted-foreground mb-4">
                  Desarrollamos un modelo de machine learning que mejoró los resultados de los pacientes en un 35% y
                  redujo las tasas de readmisión.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/case-studies/healthcare-analytics">
                    Leer caso de estudio <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dashboard de análisis de retail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-2">Retail</Badge>
                <h3 className="text-xl font-semibold mb-2">Plataforma de Optimización de Inventario</h3>
                <p className="text-muted-foreground mb-4">
                  Creamos un sistema de pronóstico de demanda que redujo los costos de inventario en un 28% mientras
                  mantenía la disponibilidad de productos.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/case-studies/retail-analytics">
                    Leer caso de estudio <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dashboard de análisis financiero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-2">Finanzas</Badge>
                <h3 className="text-xl font-semibold mb-2">Sistema de Detección de Fraude</h3>
                <p className="text-muted-foreground mb-4">
                  Implementamos un sistema de detección de fraude impulsado por IA que redujo las transacciones
                  fraudulentas en un 92%.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/case-studies/finance-analytics">
                    Leer caso de estudio <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/case-studies">
                Ver Todos los Casos de Estudio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonios de Clientes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce lo que nuestros clientes dicen sobre nuestras soluciones de ciencia de datos e IA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border relative">
              <div className="mb-6">
                <p className="italic text-muted-foreground">
                  "Nicolás y su equipo entregaron una solución de IA que transformó nuestras operaciones de servicio al
                  cliente. El modelo de análisis predictivo que construyeron ha mejorado significativamente nuestros
                  tiempos de respuesta y puntuaciones de satisfacción del cliente."
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sarah Johnson"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">CTO, TechCorp Inc.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border relative">
              <div className="mb-6">
                <p className="italic text-muted-foreground">
                  "La arquitectura de datos diseñada por el equipo de Nicolás ha sido un cambio radical para nuestra
                  organización. Ahora podemos procesar y analizar datos en tiempo real, permitiéndonos tomar decisiones
                  empresariales más rápidas e informadas."
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-4">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Dashboard de visualización de datos"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
                </div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">COO, Global Finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Obtén Tu Guía de IA Gratis</h2>
              <p className="text-xl">
                Descarga nuestra guía completa "5 Aplicaciones de IA para Transformar tu Negocio" y descubre cómo la IA
                puede revolucionar tus operaciones.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  <span>Casos de estudio y ejemplos del mundo real</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  <span>Estrategias de implementación y mejores prácticas</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  <span>Cálculos de ROI e impacto empresarial</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white text-foreground rounded-lg shadow-lg overflow-hidden">
                <LeadMagnetForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Transformar tus Datos?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agenda una consulta gratuita para discutir cómo nuestras soluciones de ciencia de datos e IA pueden ayudar
              a tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Agendar Consulta</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explorar Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
