import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI: Trends to Watch in 2024",
    excerpt: "Explore the emerging AI trends that will shape the technology landscape in 2024 and beyond.",
    category: "Artificial Intelligence",
    date: "June 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-ai-trends-2024",
  },
  {
    id: 2,
    title: "How to Implement Machine Learning in Your Business",
    excerpt: "A step-by-step guide to implementing machine learning solutions in your business operations.",
    category: "Machine Learning",
    date: "June 10, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "implement-machine-learning-business",
  },
  {
    id: 3,
    title: "Data Visualization Best Practices for 2024",
    excerpt:
      "Learn how to create effective data visualizations that communicate insights clearly and drive decision-making.",
    category: "Data Visualization",
    date: "June 5, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "data-visualization-best-practices-2024",
  },
  {
    id: 4,
    title: "The Role of Big Data in Modern Business",
    excerpt: "Discover how big data is transforming business operations and decision-making across industries.",
    category: "Big Data",
    date: "May 28, 2024",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "role-big-data-modern-business",
  },
  {
    id: 5,
    title: "Natural Language Processing: Applications and Challenges",
    excerpt: "An overview of NLP applications and the challenges faced when implementing these technologies.",
    category: "NLP",
    date: "May 20, 2024",
    readTime: "11 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "nlp-applications-challenges",
  },
  {
    id: 6,
    title: "Building a Data-Driven Culture in Your Organization",
    excerpt: "Steps to foster a data-driven culture that empowers employees to make better decisions.",
    category: "Data Strategy",
    date: "May 15, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-data-driven-culture",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The latest insights, tutorials, and trends in data science, AI, and machine learning.
            </p>
            <div className="flex items-center max-w-md mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-10 pr-4" type="search" placeholder="Search articles..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-96 md:h-[32rem]">
            <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Featured blog post"
            fill
            className="object-cover"
          />
            </div>
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 sm:p-10 max-w-3xl">
                <Badge className="mb-4">Featured</Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  DeepSeek AI: Transforming Industries with Advanced Language Models
                </h2>
                <p className="text-white/90 mb-6 text-lg hidden sm:block">
                  Explore how DeepSeek AI is revolutionizing businesses across different sectors with its cutting-edge
                  language models and innovative applications.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <Button size="lg" variant="default" className="sm:w-auto" asChild>
                    <Link href="/blog/deepseek-ai-transforming-industries">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="text-white text-sm flex items-center gap-2">
                    <span>June 20, 2024</span>
                    <span>•</span>
                    <span>15 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Latest Articles</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                All
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                AI
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Data Strategy
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Tutorials
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border shadow-sm h-full flex flex-col">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest insights and trends in data science and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
