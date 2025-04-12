import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, BrainCircuit, LineChart, Database, Gauge, GitBranch, Users } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Science & AI Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer a comprehensive range of data science and AI services to help businesses harness the power of
              their data and achieve their strategic objectives.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Development</CardTitle>
                <CardDescription>Custom AI solutions tailored to your specific business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Machine learning model development and training</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Natural language processing solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Computer vision applications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Predictive analytics and forecasting</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services/ai-development">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
            <Card>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription>Transform raw data into valuable business insights</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Exploratory data analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Statistical modeling and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Data visualization and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Pattern recognition and trend analysis</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services/data-analytics">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 3 */}
            <Card>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data Architecture</CardTitle>
                <CardDescription>Design and implement robust data infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Data warehouse design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>ETL process development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Database optimization and management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Big data solutions and cloud integration</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services/data-architecture">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 4 */}
            <Card>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Intelligence</CardTitle>
                <CardDescription>Monitor KPIs and drive business performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Interactive dashboards and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>KPI development and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Real-time analytics solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom BI tool implementation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services/business-intelligence">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 5 */}
            <Card>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Process Automation</CardTitle>
                <CardDescription>Streamline operations with intelligent automation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Workflow automation solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Robotic process automation (RPA)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Document processing and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Intelligent decision support systems</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services/process-automation">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 6 */}
            <Card>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Consultancy</CardTitle>
                <CardDescription>Strategic guidance on AI implementation and data strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI readiness assessments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Data strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI roadmap and implementation planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Team training and capability building</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services/ai-consultancy">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Methodology</h2>
            <p className="text-xl text-muted-foreground">
              We follow a proven methodology to ensure successful delivery of data science and AI projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-6">
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We begin by understanding your business objectives, data landscape, and technical requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-6">
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analysis</h3>
              <p className="text-muted-foreground">
                We analyze your data, identify patterns, and develop initial models and prototypes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-6">
                <span className="text-lg font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground">
                We develop and deploy the solution, integrating it with your existing systems and workflows.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-6">
                <span className="text-lg font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-muted-foreground">
                We continuously monitor, evaluate, and refine the solution to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground">
              We leverage cutting-edge technologies and frameworks to deliver powerful data science and AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Technology logos would go here */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-zinc-50 rounded-lg h-24 border">
                <div className="text-lg font-medium text-muted-foreground">Tech {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to discuss your data science and AI needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
