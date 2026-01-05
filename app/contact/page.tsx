"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions about our products? Contact us and our team will get back to you as soon as possible.
        </p>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="font-medium mb-2">About BRN Jewels</h3>
                  <p className="text-gray-500">
                    BRN Jewels is a B2B precious metals company specializing in gold and silver jewellery metals, bullion bars, and coins. We support jewellers, traders, and institutions with assured purity, transparent pricing, and reliable bulk supply.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-[#0A9A9F] mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-500">+91 96762 47093</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commented out form */}
          {/* <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#F78C2C] hover:bg-[#F78C2C]/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  )
}
