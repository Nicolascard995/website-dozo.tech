import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="py-20 md:py-32">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-8 w-40 mb-2" />
                <Skeleton className="h-12 w-full mb-2" />
                <Skeleton className="h-12 w-3/4" />
              </div>
              <Skeleton className="h-6 w-full" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-48" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Skeleton className="aspect-[4/3] w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-20">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
