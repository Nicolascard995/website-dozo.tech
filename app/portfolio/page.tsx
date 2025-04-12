import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Healthcare Predictive Analytics",
    description: "AI-powered system for predicting patient readmissions and optimizing care pathways",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["AI", "Healthcare", "Predictive Analytics"],
    slug: "healthcare-predictive-analytics",
  },
  {
    id: 2,
    title: "Retail Demand Forecasting",
    description: "Machine learning solution for accurate inventory management and demand prediction",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Machine Learning", "Retail", "Forecasting"],
    slug: "retail-demand-forecasting",
  },
  {
    id: 3,
    title: "Financial Fraud Detection",
    description: "Real-time anomaly detection system for identifying fraudulent transactions",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["AI", "Finance", "Security"],
    slug: "financial-fraud-detection",
  },
  {
    id: 4,
    title: "Manufacturing Optimization",
    description: "Production line optimization using computer vision and machine learning",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Computer Vision", "Manufacturing", "Optimization"],
    slug: "manufacturing-optimization",
  },
  {
    id: 5,
    title: "Customer Segmentation Engine",
    description: "Advanced clustering algorithms for precise customer segmentation and targeting",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Machine Learning", "Marketing", "Customer Analytics"],
    slug: "customer-segmentation-engine",
  },
  {
    id: 6,
    title: "Energy Consumption Forecasting",
    description: "Time-series forecasting for energy usage optimization and sustainability",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Time Series", "Energy", "Sustainability"],
    slug: "energy-consumption-forecasting",
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our successful data science and AI projects across various industries.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                All Projects
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                AI Solutions
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Data Analytics
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Computer Vision
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-10">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="bg-zinc-50 rounded-lg overflow-hidden shadow-sm border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Featured project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-10 flex flex-col justify-center">
                <Badge className="mb-4 w-fit">Featured Project</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">DeepSeek AI Integration for Enterprise Search</h2>
                <p className="text-muted-foreground mb-6">
                  An advanced enterprise search solution powered by DeepSeek AI that enables natural language querying
                  of vast corporate knowledge bases, improving information retrieval by 87% and reducing search time by
                  65%.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Natural Language Processing</Badge>
                  <Badge variant="secondary">Enterprise</Badge>
                </div>
                <Button asChild>
                  <Link href="/portfolio/deepseek-enterprise-search">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container px-4 sm:px-8 mx-auto">
          <h2 className="text-3xl font-bold mb-12">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border shadow-sm h-full hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.categories.map((category, index) => (
                      <Badge key={index} variant="outline">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/portfolio/${item.slug}`}>
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Project Process</h2>
            <p className="text-xl text-muted-foreground">
              We follow a structured approach to ensure successful delivery of all projects.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary/20 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 md:space-y-24 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm border inline-block">
                    <h3 className="text-xl font-semibold mb-2">1. Discovery</h3>
                    <p className="text-muted-foreground">
                      We work closely with you to understand your business challenges, goals, and data landscape.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm border inline-block">
                    <h3 className="text-xl font-semibold mb-2">2. Data Analysis</h3>
                    <p className="text-muted-foreground">
                      We analyze your data to identify patterns, opportunities, and the optimal approach for your
                      solution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm border inline-block">
                    <h3 className="text-xl font-semibold mb-2">3. Solution Development</h3>
                    <p className="text-muted-foreground">
                      We develop a custom solution using the most appropriate technologies and methodologies.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border inline-block">
                    <h3 className="text-xl font-semibold mb-2">4. Implementation & Training</h3>
                    <p className="text-muted-foreground">
                      We deploy the solution and provide comprehensive training to ensure successful adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">Hear what our clients have to say about working with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border relative">
              <div className="mb-6">
                <p className="italic text-muted-foreground">
                  "The predictive analytics solution developed by Nicolás and his team has transformed our healthcare
                  operations. We've seen a 35% reduction in readmission rates and significantly improved patient
                  outcomes."
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Dr. Emily Chen"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Dr. Emily Chen</h4>
                  <p className="text-sm text-muted-foreground">CIO, Metropolitan Health</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm border relative">
              <div className="mb-6">
                <p className="italic text-muted-foreground">
                  "The fraud detection system implemented by Nicolás's team has been a game-changer for our financial
                  institution. We've reduced fraudulent transactions by over 90% while maintaining an excellent customer
                  experience."
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-4">
                <Image 
                src="/placeholder.svg?height=600&width=800" 
                alt={item.title} 
                fill 
                className="object-cover" 
              />
                </div>
                <div>
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-sm text-muted-foreground">Head of Security, Global Finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our data science and AI expertise can help solve your business challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
