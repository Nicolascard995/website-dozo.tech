import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              NC
            </Link>
            <p className="mt-2 text-sm text-neutral-900">
              Transformando negocios a través de soluciones de ciencia de datos e IA.
            </p>
            <div className="flex mt-4 space-x-3">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/nicolascardozo" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/nicolascardozo" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/nicolascardozo" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ai-solutions" className="text-neutral-900 hover:text-foreground">
                  Soluciones de IA
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-neutral-900 hover:text-foreground">
                  Análisis de Datos
                </Link>
              </li>
              <li>
                <Link href="/services/consultancy" className="text-neutral-900 hover:text-foreground">
                  Consultoría de IA
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-neutral-900 hover:text-foreground">
                  Capacitación y Talleres
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-neutral-900 hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-neutral-900 hover:text-foreground">
                  Casos de Estudio
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-neutral-900 hover:text-foreground">
                  Guías
                </Link>
              </li>
              <li>
                <Link href="/resources/webinars" className="text-neutral-900 hover:text-foreground">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Suscríbete a nuestro boletín</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Correo electrónico" className="max-w-sm" />
              <Button type="submit" size="sm">
                Suscribirse
              </Button>
            </div>
            <p className="mt-2 text-xs text-neutral-900">
              Recibe los últimos insights sobre IA y ciencia de datos en tu bandeja de entrada.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-center text-sm text-neutral-900">
          <p>© {new Date().getFullYear()} Nicolás Cardozo. Todos los derechos reservados.</p>
          <div className="mt-1 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Política de Privacidad
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
