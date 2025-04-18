import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-full mx-auto mb-8" />
            <div className="flex items-center max-w-md mx-auto">
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Skeleton */}
      <section className="py-10">
        <div className="container px-4 sm:px-8 mx-auto">
          <Skeleton className="w-full h-96 rounded-lg" />
        </div>
      </section>

      {/* Blog Posts Skeleton */}
      <section className="py-20">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <Skeleton className="h-10 w-48 mb-4 md:mb-0" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-20" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-8 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </section>
    </div>
  );
}
