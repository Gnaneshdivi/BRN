"use client"

import Link from "next/link"
import { Instagram, Facebook, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">BRN Jewels</h3>
            <p className="text-gray-600 text-sm">
              B2B precious metals company specializing in gold and silver jewellery metals, bullion bars, and coins.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <Phone className="h-4 w-4" />
              <span>+91 96762 47093</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/brnjewels/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0A9A9F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100068059653682"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0A9A9F] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BRN Jewels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

