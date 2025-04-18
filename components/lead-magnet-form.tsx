'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Download, Check, Loader2 } from 'lucide-react';
import { submitLeadMagnetForm } from '@/actions/lead-magnet';
import { useFormState } from 'react-dom'; // Cambiado de useActionState a useFormState

interface LeadMagnetFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const initialState = {
  success: false,
  message: '',
};

export default function LeadMagnetForm({
  title = 'Obtén Tu Guía de IA Gratis',
  description = "Descarga '5 Aplicaciones de IA para Transformar tu Negocio' - nuestra guía completa para implementar IA en tu organización.",
  buttonText = 'Descargar Guía',
}: LeadMagnetFormProps) {
  const [state, formAction] = useFormState(submitLeadMagnetForm, initialState); // Cambiado a useFormState
  const [isPending, setIsPending] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  // Reset form after successful submission
  React.useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      setIsPending(false);
    }
  }, [state.success]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsPending(true);
  };

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="px-6 pt-6 pb-0">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pt-4">
        {state.success ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">¡Gracias!</h3>
            <p className="text-neutral-900 mb-4">{state.message}</p>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Descargar Ahora
            </Button>
          </div>
        ) : (
          <form
            ref={formRef}
            action={formAction}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input id="name" name="name" placeholder="Juan Pérez" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="juan@ejemplo.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industria</Label>
              <Select name="industry">
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Selecciona tu industria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="healthcare">Salud</SelectItem>
                  <SelectItem value="finance">Finanzas</SelectItem>
                  <SelectItem value="retail">Comercio</SelectItem>
                  <SelectItem value="manufacturing">Manufactura</SelectItem>
                  <SelectItem value="technology">Tecnología</SelectItem>
                  <SelectItem value="education">Educación</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  {buttonText}
                </>
              )}
            </Button>
            <p className="text-xs text-center text-neutral-900">
              Al enviar, aceptas nuestra{' '}
              <a
                href="/privacy-policy"
                className="underline hover:text-foreground"
              >
                Política de Privacidad
              </a>
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
