"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled ? "bg-background/90 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold text-xl sm:inline-block">NC</span>
            <span className="font-medium text-lg">Nicolás Cardozo</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Servicios</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Portafolio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zinc-800/80 to-zinc-950/50 p-6 no-underline outline-none focus:shadow-md"
                          href="/portfolio"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Proyectos Destacados</div>
                          <p className="text-sm leading-tight text-neutral-900">
                            Explora soluciones innovadoras que muestran la implementación de ciencia de datos e IA.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/portfolio/ai-solutions"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Soluciones de IA</div>
                          <p className="line-clamp-2 text-sm leading-snug text-neutral-900">
                            Implementaciones avanzadas de Machine Learning y Deep Learning
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/portfolio/data-analytics"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Análisis de Datos</div>
                          <p className="line-clamp-2 text-sm leading-snug text-neutral-900">
                            Inteligencia de negocios e insights basados en datos
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/portfolio/automation"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Automatización</div>
                          <p className="line-clamp-2 text-sm leading-snug text-neutral-900">
                            Optimización de flujos de trabajo y automatización de procesos
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          <Button asChild variant="default" size="sm" className="hidden md:inline-flex">
            <Link href="/contact">Contacto</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className={cn("px-2 py-1 text-lg", pathname === "/" ? "font-medium" : "")}>
                  Inicio
                </Link>
                <Link
                  href="/services"
                  className={cn("px-2 py-1 text-lg", pathname === "/services" ? "font-medium" : "")}
                >
                  Servicios
                </Link>
                <Link
                  href="/portfolio"
                  className={cn("px-2 py-1 text-lg", pathname === "/portfolio" ? "font-medium" : "")}
                >
                  Portafolio
                </Link>
                <Link href="/blog" className={cn("px-2 py-1 text-lg", pathname === "/blog" ? "font-medium" : "")}>
                  Blog
                </Link>
                <Link href="/contact" className={cn("px-2 py-1 text-lg", pathname === "/contact" ? "font-medium" : "")}>
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
