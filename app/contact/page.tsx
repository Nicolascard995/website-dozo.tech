import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral-900">
              Have a question or ready to start your data science journey?
              Contact us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-neutral-900">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          placeholder="First name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          placeholder="Last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service-interest">
                        Service of Interest
                      </Label>
                      <Select>
                        <SelectTrigger id="service-interest">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-development">
                            AI Development
                          </SelectItem>
                          <SelectItem value="data-analytics">
                            Data Analytics
                          </SelectItem>
                          <SelectItem value="data-architecture">
                            Data Architecture
                          </SelectItem>
                          <SelectItem value="business-intelligence">
                            Business Intelligence
                          </SelectItem>
                          <SelectItem value="process-automation">
                            Process Automation
                          </SelectItem>
                          <SelectItem value="ai-consultancy">
                            AI Consultancy
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your project or inquiry"
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-neutral-900">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-neutral-900">
                        hello@nicolascardozo.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-neutral-900">
                        123 AI Street
                        <br />
                        Data City, DC 10101
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-neutral-900">
                        Mon-Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat-Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">
                      What types of businesses do you work with?
                    </h3>
                    <p className="text-neutral-900">
                      We work with businesses of all sizes across various
                      industries, including healthcare, finance, retail,
                      manufacturing, and technology.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      What is the typical timeline for a data science project?
                    </h3>
                    <p className="text-neutral-900">
                      Project timelines vary depending on complexity and scope.
                      Small projects may take 4-6 weeks, while enterprise-level
                      implementations can take several months.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Do you offer ongoing support after project completion?
                    </h3>
                    <p className="text-neutral-900">
                      Yes, we offer various support and maintenance packages to
                      ensure your solutions continue to perform optimally and
                      evolve with your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-10">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="bg-zinc-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-neutral-900">Map Integration Would Go Here</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:font-heading text-4xl font-bold mb-4">
              Ready for Data-Driven Insights?
            </h2>
            <p className="text-xl text-neutral-900 mb-8">
              Schedule a free 30-minute consultation to discuss how our data
              science and AI solutions can transform your business.
            </p>
            <Button size="lg" asChild>
              <Link
                href="https://calendly.com/nicolascardozo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
